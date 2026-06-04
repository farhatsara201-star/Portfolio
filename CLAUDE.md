# Sara Farhat — Portfolio + PM Rounds

This project has two parts: Sara's PM portfolio site (this directory) and PM Rounds newsletter development.

## Portfolio

Live at https://portfolio-taupe-sigma-86.vercel.app/
Auto-deploys from GitHub main via Vercel — `git push origin main` = live in ~60 seconds.
Source: `index.html`, `styles.css`, `script.js`.

## PM Rounds Skills

All PM Rounds skills live as plain-text files in `~/.claude/pm-rounds/`. When Sara invokes any of these workflows, read the file before responding.

| When Sara says… | Read this file |
|---|---|
| "fragment capture" / "capture this" / "bank this" | `~/.claude/pm-rounds/fragment-capture.md` |
| "memory pull" / "develop this fragment" | `~/.claude/pm-rounds/memory-pull.md` |
| "short round" / "quick draft" / "ship something this week" | `~/.claude/pm-rounds/short-round-express.md` |
| "long round" / "draft this" / "gawande mode" | `~/.claude/pm-rounds/draft-gawande-mode.md` |
| "decoder ring" / "diagram" / "visualize" / "make a flow" | `~/.claude/pm-rounds/pm-rounds-diagram.md` |
| "mechanics draft" / "write the mechanics post" / "mode c" | `~/.claude/pm-rounds/mechanics-draft.md` |
| "linkedin" / "linkedin post" / "cross-post" | `~/.claude/pm-rounds/linkedin-express.md` |
| "publish prep" / "ready to publish" / "package this" | `~/.claude/pm-rounds/publish-prep.md` |
| Any PM Rounds writing or voice check | `~/.claude/pm-rounds/pm-rounds-voice.md` |
| Any content/audience/pillar decision | `~/.claude/pm-rounds/pm-rounds-audience.md` |
| Any technical/clinical fact-check | `~/.claude/pm-rounds/pm-rounds-expertise.md` |

For drafting, always load both `pm-rounds-voice.md` and `pm-rounds-audience.md`. Add `pm-rounds-expertise.md` for any technical or clinical content.

## About Sara

Healthtech PM. Clinical dietitian → acute care specialist → data/product analyst → PM. 6+ years across clinical practice, health data analytics, and product. Laid off during maternity leave April 2026, currently job searching.

Specializations: health data interoperability (C-CDA, DSM, HL7, FHIR), IDP, AI-powered clinical applications, EHR integration, VBC analytics.

Not technical — does not code. Explain clearly.

## PM Rounds

Substack at https://pmrounds.substack.com. Every other Sunday. Audience: Jordan — a 2-5 year healthtech PM who came from another vertical and is intermittently humiliated by the gap between how they think healthcare works and how it actually works.

Four content pillars (by frequency):
1. Long Rounds (40%) — 1,200-2,000 words, Gawande mode, real cases
2. The Mechanics (30%) — operator-explainer, Mode C, named entities and real numbers
3. From the Bedside (20%) — clinician-to-PM crossover, highest monetization fit
4. Field Notes (10%) — reactive, topical

Fragment bank and developed fragments live in the Fragment Bank document in `PM Rounds Operating System/`.
