## fix/38-source-branch-prefixes

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

Adopt the source's branch-prefix table (DKJ-Solutions/dkj-marketplace#3886): `feat/` -> `feature`,
`fix/` -> `bug`, `docs/` -> no label, `chore/` refused. Resolves #38.

#### Entry retype mapping

None needed. Every pending entry under `## [Unreleased]` is typed by its branch prefix, and all of them
are `feat/`, `fix/` or `chore/` -- Feat, Fix and Chore are all still valid types (Chore stays a type for
existing entries; only the `chore/` branch prefix is refused). No entry carries a retired type, so none
is stranded.

### CREATE

- [x] Replace the prefix table, `Get-BranchTypes`, `Get-BranchPrefix`, `Get-BranchInfo` and `Test-BranchName` in `scripts/lib/branch-info.ps1` with the source's, header noting it follows the source table (#3886)
- [x] Check pending changelog entries for types outside Feat/Fix/Docs/Chore (none found)
- [x] Search docs and rules for the old prefixes and `enhancement` (no live mention found)
- [x] Confirm the `feature` label exists on the tracker (it does)

### TEST

- [x] `scripts/lint/lint.ps1` -- all scripts parse and are pure ASCII
- [x] Dot-sourced the lib: `Get-BranchTypes` returns Feat, Fix, Docs, Chore; `docs/x` has no label; `feat/x` labels `feature`; `chore/x` is refused by `Test-BranchName`
- [~] Repo test suites touching branch-info -- the repo has no `scripts/tests`, so there is nothing to run

### DEPLOY: fix/38-source-branch-prefixes

`scripts/lib/branch-info.ps1` now carries the source's branch-prefix table and functions (DKJ-Solutions/dkj-marketplace#3886): a `docs/` branch gets no label instead of the retired `documentation`, and `new-branch` refuses a `chore/` branch, so this repo reads its branches the same way every DKJ repo does.

**Score:** 2

#### What makes this deploy extra special

N/A -- the recipes app itself is unchanged; this only touches the branch workflow.

**Score:** N/A

#### Pull Request

Use the source's branch prefixes

