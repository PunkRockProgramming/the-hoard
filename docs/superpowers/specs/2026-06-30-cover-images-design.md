# The Hoard — Cover Images Design

Date: 2026-06-30

## Goal

Add box art / cover images to The Hoard's game library, sourced from the RAWG API, displayed across the grid, list, and modal views.

## Data model

Each object in the `GAMES` array (`library.js`) gains one new field:

```js
image: string | null
```

A full image URL (RAWG's `background_image`), or `null` when no match was found. No new top-level data structures — this keeps `library.js`'s existing shape, where every game is a single self-contained object.

## Enrich script (`enrich.mjs`)

A one-time, re-runnable Node script at `the-hoard/enrich.mjs`, styled directly after `the-vault/enrich.mjs`:

- No npm dependencies — uses Node's built-in `https` module, run as `node enrich.mjs` (no `package.json`/install step needed, consistent with the rest of this directory).
- Loads `RAWG_API_KEY` from `the-hoard/.env` (simple manual `.env` parse, same as `the-vault/enrich.mjs`).
- Parses the current `library.js` via a `vm` sandbox (replacing `const` → `var` so the script can read `GAMES` without it being a module).
- For each game without an `image` field already set, queries RAWG's `https://api.rawg.io/api/games?search=<title>&key=<key>` endpoint, takes the top result's `background_image` field.
- Writes the result back into that game's object as `image: <url>`. Games with no RAWG match get `image: null`.
- **Resumable**: games that already have an `image` key (including `null`) are skipped on re-run. To retry a missed/wrong match, delete that game's `image` key entirely and re-run.
- Checkpoints progress to disk periodically (every N games, matching the-vault's `CHECKPOINT` pattern) so an interrupted run doesn't lose completed work.
- Rate-limits requests with a small delay between calls to stay well under RAWG's free-tier limits.
- On completion, rewrites `library.js` in full: `const GAMES = ${JSON.stringify(GAMES, null, 2)};`, preserving the array as valid, readable committed JS.
- Logs a summary at the end (matched / not found counts), same style as the-vault's enrich script.

### Secrets

- `the-hoard/.env` holds `RAWG_API_KEY=...`. Not committed.
- New `the-hoard/.gitignore` added, ignoring `.env` (mirrors `the-vault/.gitignore`).
- Obtaining the RAWG key (free signup at rawg.io/apidocs) is a manual, out-of-band step — not something the script or this implementation does for you.

## UI changes (`app.js` / `index.html` inline CSS)

**Grid cards** — image becomes a full-width poster strip at the top of each `.card`, above the title. Card height grows to accommodate it. When `image` is `null`, render a muted placeholder block of the same dimensions (no broken-image icon, no layout shift relative to cards that do have art).

**List rows** — a small fixed-size thumbnail added as a new first column in `.list-row` (extending its `grid-template-columns`), before the title column. Null `image` renders a blank/placeholder swatch of the same size. Row height stays compact — this is a small thumbnail, not a poster.

**Modal** — cover image rendered as a banner across the top of the modal, above the existing title/meta block. When `image` is `null`, no banner is rendered and the modal looks exactly as it does today (single-view context, no grid-consistency need for a placeholder here).

## Out of scope

- No lazy-loading or other perf work — 121 images is trivial at this scale.
- No image caching or self-hosting — images are hotlinked from RAWG's CDN, same trust model as the-vault hotlinking TMDB poster paths.
- No UI for manually overriding a wrong/bad match — if RAWG's top result is the wrong game, fix it by hand-editing that game's `image` URL directly in `library.js`.
- No retry-all-missing automation beyond "delete the key and re-run" — no `--retry-missing` flag or similar.
