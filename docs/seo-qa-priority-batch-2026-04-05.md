# SEO QA Brief: Priority Batch

Date: 2026-04-05

## Scope

This brief covers the current SEO implementation queue tied to `CMP-26` and `CMP-31`:

- First batch from `CMP-26`: `/mbti-pokemon-quiz/`, `/harry-potter-house-quiz/`, `/saju-quiz/`, `/love-style-quiz/`
- Second batch from `CMP-31`: `/`, `/travel-destination-quiz/`, `/lunch-roulette/`, `/2048-game/`, `/beer-recommendation-quiz/`, `/lol-position-quiz/`

Source context:

- SEO prioritization: `CMP-8`
- First-batch copy brief: `CMP-17`
- Second-batch queue: `CMP-27`
- Local repo worktree inspected on 2026-04-05
- Live site inspected at `https://hdh7485.github.io/` on 2026-04-05

## Executive Summary

- `CMP-31` appears implemented in the local worktree, but those second-batch changes are not live yet.
- `CMP-26` is not complete in the local worktree. `mbti-pokemon-quiz` and `love-style-quiz` show some changes, but `harry-potter-house-quiz` and `saju-quiz` do not.
- No reviewed page in the current queue has a canonical tag yet.
- None of the inspected live pages show the new shared bootstrap/internal-link pattern, which means post-deploy SEO validation is still blocked on deployment.
- Active dependency tracking after the CTO follow-up:
  - `CMP-26` for first-batch implementation completion
  - `CMP-48` for GitHub Pages publish/live rollout
  - `CMP-49` for canonical coverage across the 10-page queue

## Ready-To-Run QA Checklist

Run this after the current worktree is deployed.

1. Confirm the live URL resolves with `200` and matches the intended path.
2. Verify the `<title>` matches the approved SEO brief exactly or intentionally deviates with a recorded reason.
3. Verify the meta description matches the approved brief and is not blank.
4. Confirm a single visible `<h1>` exists and aligns with the page title intent.
5. Confirm the planned supporting `<h2>` sections exist and remain visible without interaction.
6. Verify related-page internal links exist and point to live, indexable URLs.
7. Check for a canonical tag on every page. This is currently missing across the inspected queue and should be added before calling the batch SEO-complete.
8. Check robots/indexability signals for accidental `noindex`, broken canonicals, or JS-only content gaps.
9. Validate Open Graph basics where the page relies on social sharing.
10. Spot-check mobile layout after the new support sections and related-link blocks are added.

## Status Matrix

| URL | Planned Batch | Local Worktree | Live Site | Main QA Notes |
| --- | --- | --- | --- | --- |
| `/mbti-pokemon-quiz/` | `CMP-26` | Partial | Old page still live | Shared shell/bootstrap added locally, but approved title/meta from `CMP-17` were not fully applied; canonical still missing. |
| `/harry-potter-house-quiz/` | `CMP-26` | Not implemented | Old page live | No local diff, no meta description, no support copy, no internal links, no canonical. |
| `/saju-quiz/` | `CMP-26` | Not implemented | Same as local | No local diff, generic title/H1 remain, no meta description, no internal links, no canonical. |
| `/love-style-quiz/` | `CMP-26` | Partial | Mostly old page live | Local change is mainly bootstrap/analytics support; approved `CMP-17` content structure is not present, H2 support content is still missing, canonical missing. |
| `/` | `CMP-31` | Implemented locally | Old homepage live | New title/meta and hub structure exist locally, but live page is still the pre-batch version. Canonical missing locally. |
| `/travel-destination-quiz/` | `CMP-31` | Implemented locally | Old page live | Local page has approved title/meta, support H2s, and related links. Live page still thin. Canonical missing locally. |
| `/lunch-roulette/` | `CMP-31` | Implemented locally | Old page live | Local page has title/meta/H2s and related links. Live page still lacks meta description and support content. Canonical missing locally. |
| `/2048-game/` | `CMP-31` | Implemented locally | Old page live | Local page has updated title/meta/H2s, related links, and a touch-behavior fix. Live page is still the older thin version. Canonical missing locally. |
| `/beer-recommendation-quiz/` | `CMP-31` | Implemented locally | Old page live | Local page has title/meta/H2s and shared bootstrap pattern. Live page still lacks meta description depth and related links. Canonical missing locally. |
| `/lol-position-quiz/` | `CMP-31` | Implemented locally | Old page live | Local page has updated `롤`-aligned title/meta, support sections, and related links. Live page still uses the older `LOL` framing. Canonical missing locally. |

## Highest-Priority Follow-Ups

1. Deploy the already-completed `CMP-31` pages so live QA can start on the second batch.
2. Finish `CMP-26` implementation for `/harry-potter-house-quiz/` and `/saju-quiz/`, then align `/mbti-pokemon-quiz/` and `/love-style-quiz/` with the approved `CMP-17` title/meta/content brief.
3. Add canonical tags across all 10 queued pages before considering the SEO rollout validated.
4. After deployment, run a live-page pass focused on title/meta/H1/H2/internal links first, because those are the largest deltas between local and live state.
5. Add or normalize Open Graph metadata on the pages that are intended to be shared, especially the personality-test pages.

## Immediate Blockers

- Live deployment has not caught up with the local `CMP-31` worktree.
- First-batch implementation under `CMP-26` is incomplete in the current repo state.
- Canonical coverage is still missing across the inspected queue, so even the locally improved pages are not fully SEO-ready yet.
- These blockers now have active owners in `CMP-26`, `CMP-48`, and `CMP-49`. Resume SEO QA after those tickets land.
