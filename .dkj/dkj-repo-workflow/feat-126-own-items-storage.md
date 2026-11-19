## feat/126-own-items-storage

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

The storage half of #119, no UI (that is #127): helpers for own list items in `src/lib/lijst.ts`,
and the repo's first test runner (`node:test`, no new dependency).

### CREATE

- [x] `src/lib/lijst.ts`: `EigenItem`, `loadEigen`, `saveEigen`, `addEigen` (trims, refuses empty or
  whitespace-only input), `removeEigen`, `clearEigen`. Keys start with `eigen:` and never contain `|`,
  so a tick for an own item cannot land on a recipe ingredient (whose key always holds `|`). Without
  storage the items live in memory until the page closes; corrupt stored data reads as an empty list
  without disabling storage.
- [x] The `./format` import now names `./format.ts`, so Node loads the module without a bundler
  (the Astro tsconfig allows `.ts` extensions).
- [x] `src/lib/lijst.test.ts`: 8 tests with a fake `localStorage` (working and refusing).
- [x] `npm test` (`node --experimental-strip-types --test`) and a "Unit tests" step in `ci.yml`.

### TEST

- [x] `npm test` locally on Node 22.15.1: 8 of 8 pass.
- [x] CI runs the same script before the build, so the required `ci` check now covers the helpers.

### DEPLOY: feat/126-own-items-storage

Own shopping-list items can now be stored on the device, ready for the list page to use in #127.
Nothing changes on screen yet. The repo also has its first unit tests: `npm test`, run in CI.

Nothing visible yet; it prevents the list UI in #127 from shipping storage bugs (lost items, ticks
landing on the wrong line) that no test would catch.

**Score:** 1

#### What makes this deploy extra special

N/A

**Score:** N/A

#### Pull Request

Storage helpers for own list items, with unit tests

