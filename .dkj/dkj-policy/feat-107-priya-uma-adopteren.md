## feat/107-priya-uma-adopteren

> **How this file is read.** A step is `- [ ]` until it is resolved -- `- [x]` done, or
> `- [~]` dropped with the reason, which exists so nobody ticks a box for work they did not do.
> open-pr and ship-pr both refuse while one is still open, and there is no `-Force`.
>
> **FOUR `###` HEADINGS, AND NEVER A FIFTH** -- PLAN, CREATE, TEST, DEPLOY are the whole top
> level. A section needing its own heading goes in as a `####` UNDER whichever of the four owns
> it. No gate in YOUR repo reads a heading, so this half is on you -- only the repo that authors
> this workflow refuses a fifth (Dave, August 26, 2026).
>
> **AND NOTHING BRANCH-SPECIFIC ABOVE THE FIRST OF THOSE FOUR HEADINGS** -- everything between the
> title and it is this guidance, which is identical in every branch document. A status line, a note about
> THIS branch or an instruction to a session belongs under one of the four, normally as a `####`
> in PLAN. THIS half open-pr refuses, in every repo, before the push -- it reads the shape, so a
> guidance block in your own language passes and your own paragraph here does not (Dave,
> August 26, 2026; refused since #1650).
>
> **DEPLOY takes no steps of its own, and it is WRITTEN LAST** -- it is what the branch DID, once
> TEST says so. Written while steps above it are still open it states an INTENTION, and no gate
> holds it against what landed: the step gate splits this file at that heading and counts only
> above it. The PR title is the one exception -- new-branch -Title writes it at creation, because
> open-pr composes the PR title from it. It is the one part of this file that travels verbatim
> into `CHANGELOG.md` at the merge. In each tier, write the reason
> ABOVE the Score line -- anything below it is discarded.
>
> Relative links in that text resolve FROM THIS DIRECTORY -- `CHANGELOG.md` sits here too, so
> write each path exactly as it reads in this file.
>
> For tier 2 audiences: the user who relies on what this repo ships, and decides whether to take the next version -- a subscriber of a service, or the user of a tool, its own maintainer included. That reader and nobody else -- what matters only
> inside this repo belongs under the first `**Score:**`. If the change reaches that reader
> not at all, N/A is a complete answer and the common one. **One hop and no further:** where that
> reader is itself a business, ITS own customers sit one hop past this repo and are never the reader
> here -- they take nothing this repo ships. Name the party that runs the upgrade, and score
> against them.
>
> The phase arc, the marks and the whole form: `DEVELOPMENT-portable.md`, which ships
> with this workflow.

### PLAN

- [x] Read #107 and its parking comment: the plugins are on v6.14.0; the lenses for 02-31 and 04-32 are missing
- [x] Verify the parking reason: `disable-model-invocation` on `sync-roster` decides who types the skill, not whether its script may run (the orchestrator body names this case), and the owner asked for #107 directly

### CREATE

- [x] Run `sync-roster.ps1`: lens scaffolds for Priya (02-31) and Uma (04-32)
- [x] Fill the Priya and Uma lenses, each pointing at its role-play counterpart in `01-het-bureau.md`
- [x] Add the tech-lead (Cody 04-13), QA-lead (Tycho 04-18) and privacy (Sebastian 06-23) halves to their lenses
- [x] Write the full roster in `.claude/specialists/SPECIALISTS.md` (21 specialists) with the role-play routing
- [x] Remove the three orphan lens scaffolds 04-20, 05-21 and 05-22 (unfilled, no backing specialist in v6.14.0)

### TEST

- [x] `check-roster-sync.ps1`: 0 errors, all 21 specialists present in roster and lens, no orphans
- [x] Every claim in the lenses checked against the tree (CI runs `lint.ps1` and `npm run build`; `recipes/_SJABLOON.md`, the role-play chapters linked)

### DEPLOY: feat/107-priya-uma-adopteren

De specialisten van plugin v6.14.0 zijn geadopteerd: Priya (Product Owner) en Uma (UX) hebben een
lens, Cody, Tycho en Sebastian kregen hun tech-lead-, QA-lead- en privacyhelft, en
`.claude/specialists/SPECIALISTS.md` heeft nu een volledige roster met de routering voor het
rollenspel. De drie lege lenzen van verdwenen specialisten zijn weg; de roster-check is groen.

**Score:** 1

#### What makes this deploy extra special

N/A: alleen de werkwijze van de specialisten in deze repo; de recepten-app zelf verandert niet.

**Score:** N/A

#### Pull Request

Adopt Priya and Uma from plugin v6.14.0
