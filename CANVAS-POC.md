# Canvas POC — coherence.digital fork

This repo is a **prototype fork** of the production `coherence.digital` head
(in [`Coherence-Digital/always-on-apex`](https://github.com/Coherence-Digital/always-on-apex)),
used to validate the Loki canvas page builder.

Tracking ticket: [`Coherence-Digital/loki-beluga#98`](https://github.com/Coherence-Digital/loki-beluga/issues/98).
Brief: `loki-34` in `loki-beluga/context/pipeline/loki-beluga/brief/`.

## What's different from the production head

Two new top-level directories:

| Path | Role |
|------|------|
| `patterns/` | Pattern library — read-only governed YAML defining design archetypes (hero, five-pillars, pillar-banner). Each declares slot schema + React component target. |
| `pages/` | Page implementations — YAML composing patterns + content. Written by the canvas builder. |

Schema reference: see the brief.

## Roadmap

- [x] Iteration 1 — patterns + page YAML hand-authored; canvas builder reads/writes via Loki.
- [ ] Iteration 2 — `src/lib/YamlPage.jsx` resolver consumes `pages/*.yaml` at build/runtime.
- [ ] Iteration 3 — refactor `HomeHero`, `FivePillars`, `PillarBanner` to be prop-driven.
- [ ] Iteration 4 — head deployed to `canvas.coherence.digital` for iframe preview.
- [ ] Graduation — schema locked; head-forge retrofit ticket; reverse-engineer remaining heads.

**Do not point production traffic at this repo.** This is a sandbox.
