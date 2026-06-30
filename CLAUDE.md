# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The Hoard — a single-page video game library browser. Browse/filter/search a personal game collection, mark games played/beat, jot notes. No build step, no dependencies, no package.json. Three files total:

- `index.html` — markup + all CSS (inline `<style>` block)
- `library.js` — data: `const GAMES = [...]`, one object per game
- `app.js` — all application logic (filtering, rendering, modal, persistence)

## Running it

Open `index.html` directly in a browser. No server, no build, no install step.

## Deployment

This directory is part of the `punkrockprogramming` monorepo but deploys as a standalone static site via git subtree to its own GitHub repo (`the-hoard` remote → `punkrockprogramming.github.io/the-hoard/`):

```bash
git subtree push --prefix=the-hoard the-hoard main
```

Develop here in the monorepo; push to the `the-hoard` remote to publish. See the monorepo root `CLAUDE.md` for the full static-site deployment pattern shared with `the-vault/` and `toronto-ptg-2026/`.

## Data model (`library.js`)

`GAMES` is a flat array of plain objects, no nesting beyond arrays of strings:

```js
{
  title: string,
  platform: string,        // specific SKU, e.g. "Xbox Series X/S", "PS4/PS5"
  type: "video game",
  source: "digital" | "physical" | "physical/digital",
  console_family: "Xbox" | "PlayStation" | "Nintendo",
  metacritic_score: number | null,
  metacritic_url: string,
  played: boolean,         // static seed data, see note below
  beat: boolean,           // static seed data, see note below
  genres: string[],
  description: string,
  riyl: string[]           // "recommended if you like" — other titles
}
```

To add a game, append an object matching this shape to the `GAMES` array. `title` is the de facto primary key — it's used to look up status overrides and notes (see below), so it must be unique and stable.

## State model — two layers

Played/beat status has two layers that `getStatus(game)` (app.js) reconciles:

1. **Seed data** — `game.played` / `game.beat` booleans baked into `library.js`.
2. **User overrides** — `localStorage['hoard_status']`, keyed by game title, set when the user clicks MARK BEAT / MARK PLAYING / RESET in the modal. An override always wins over seed data; RESET deletes the override and falls back to seed data, not to "unplayed."

Personal notes live separately in `localStorage['hoard_meta']`, also keyed by game title.

Because both persistence keys are keyed by `title` string (not an id), renaming a title in `library.js` silently orphans any saved status/notes for that game in users' browsers.

## Render architecture (`app.js`)

Derived lookup tables (`PLATFORMS`, `SOURCES`, `TOP_GENRES`, `PLATFORM_COUNTS`) are computed once from `GAMES` at script load, not recomputed per render. `TOP_GENRES` is capped at the top 16 most frequent genres — the sidebar genre filter only ever shows these, not the full genre set.

Everything funnels through one filter pipeline, `filtered()`: platform → source → genre → status tab → search query → sort. `render()` calls `filtered()` fresh on every state change and re-renders the full grid/list (no virtual DOM, no diffing) — fine at ~120 games, would need rethinking at much larger scale.

Grid and list views are two separate `innerHTML` templates built from the same `filtered()` output, switched by `viewMode`.
