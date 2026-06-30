#!/usr/bin/env node
// Fetches cover images from RAWG and writes them into library.js as an `image` field.
// Usage: node enrich.mjs  (reads RAWG_API_KEY from .env)
// Re-run safely — skips games that already have an `image` key set.
// To retry a bad/missing match, delete that game's `image` key from library.js and re-run.

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import vm from 'vm';
import https from 'https';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env
const envPath = join(__dirname, '.env');
if (existsSync(envPath)) {
  readFileSync(envPath, 'utf8').split('\n').forEach(line => {
    const [k, ...rest] = line.split('=');
    if (k?.trim() && rest.length) process.env[k.trim()] = rest.join('=').trim();
  });
}

const RAWG_KEY = process.env.RAWG_API_KEY;
if (!RAWG_KEY) {
  console.error('Add RAWG_API_KEY to the-hoard/.env');
  process.exit(1);
}

const LIB = join(__dirname, 'library.js');
const CHECKPOINT = 20;

// Load GAMES array via vm sandbox (library.js is a browser global script, not a module).
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(readFileSync(LIB, 'utf8').replace(/^const /gm, 'var '), sandbox);
const GAMES = sandbox.GAMES;

if (!Array.isArray(GAMES)) {
  console.error('Could not parse GAMES from library.js');
  process.exit(1);
}

const todo = GAMES.filter(g => !('image' in g));
const already = GAMES.length - todo.length;
console.log(`${todo.length} to process, ${already} already done`);
console.log(`Estimated time: ~${Math.round(todo.length * 1.1 / 60)} minutes\n`);

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'the-hoard/1.0' } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => { try { resolve(JSON.parse(d)); } catch(e) { reject(e); } });
    }).on('error', reject);
  });
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function searchRAWG(title) {
  const q = encodeURIComponent(title);
  const url = `https://api.rawg.io/api/games?key=${RAWG_KEY}&search=${q}&page_size=5`;
  try {
    const data = await get(url);
    const results = data.results || [];
    // Prefer an exact (case-insensitive) name match, otherwise take the top result.
    const exact = results.find(r => r.name.toLowerCase() === title.toLowerCase());
    const pick = exact || results[0] || null;
    return pick?.background_image || null;
  } catch(e) {
    return null;
  }
}

function save() {
  writeFileSync(LIB, `const GAMES = ${JSON.stringify(GAMES, null, 2)};\n`, 'utf8');
}

async function main() {
  let done = 0, found = 0, missed = 0;

  for (const game of todo) {
    const image = await searchRAWG(game.title);
    game.image = image;

    if (image) {
      found++;
    } else {
      missed++;
      console.log(`  ✗ not found: ${game.title}`);
    }

    done++;
    if (done % CHECKPOINT === 0) {
      save();
      const pct = Math.round(done / todo.length * 100);
      console.log(`${pct}%  ${done}/${todo.length}  (${found} matched, ${missed} missed)`);
    }

    await sleep(1100); // ~1 req/s — well within RAWG free-tier limits
  }

  save();
  console.log(`\nDone. ${found} enriched, ${missed} not found in RAWG.`);
  console.log(`library.js updated — commit it and redeploy.`);
}

main().catch(err => { console.error(err); process.exit(1); });
