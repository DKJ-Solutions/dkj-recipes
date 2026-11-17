## fix/migrate-dkj-repo-workflow-v7

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
> Relative links in that text resolve FROM `.dkj/dkj-repo-workflow/`, where `CHANGELOG.md` sits --
> not from this directory.
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

Migrate this repo to dkj-marketplace v7.0.0, as the pilot for the other consumers: the steps of the
release note's "You must" sections (DKJ-Solutions/dkj-marketplace `.dkj/dkj-repo-workflow/releases/audience/7.x/7.0.0.md`),
plus whatever the pilot finds the note leaves out. Findings in the steps themselves go to the source
repo as inbound issues.

### CREATE

- [x] `.claude/settings.json`: `dkj-policy` -> `dkj-repo-workflow`, `dkj-solutions` -> `dkj-repo-workflow-dkj`, enable `dkj-subagents-developers`; install each at project scope, update `dkj-subagents-alpha` to 7.0.0
- [x] `.claude/settings.json`: the `*dkj-policy*` allow patterns for new-branch/open-pr/ship-pr now read `*dkj-repo-workflow*`
- [x] Part 1 (`adopt-workflow-folder -Apply`): `.dkj/dkj-policy/` moved to `.dkj/dkj-repo-workflow/`, seams in `scripts/repo-config.ps1`, PR template and `CLAUDE.md` imports repointed (needed a workaround: DKJ-Solutions/dkj-marketplace#4251)
- [x] `Get-MojibakePaths` scans `.dkj/dkj-repo-workflow` first, as the blueprint does
- [x] CI floor: `fold-on-merge`, `merge-on-green`, `verify-resolved`, `repo-settings` re-placed from the v7.0.0 templates (pinned to `6db5751 # v7.0.0`, `plugins/dkj-repo-workflow/...`); `close-parked-recurrences.yml` added
- [x] `branch-entry`, `always-on-budget`, `house-style` call `DKJ-Solutions/dkj-marketplace/...@v7.0.0` with `scripts-ref: v7.0.0`
- [x] Statusline shim re-placed so it finds `dkj-repo-workflow@*` (DKJ-Solutions/dkj-marketplace#4252)
- [x] Derek and Rendall lenses point at their bodies in `dkj-subagents-developers`; lens and CSS prose name the new plugin

### TEST

- [x] Every plugin path named in `CLAUDE.md` and `.claude/specialists/` exists in the marketplace clone
- [x] `plugin-versions`: all four plugins at 7.0.0 at project scope
- [x] Session checks (script-contract, consumer, consumer-prose, always-on) report no `[ERROR]`; always-on path 37,539 B of 100,000 B
- [x] Statusline shim runs and resolves the payload
- [x] Old vs new CI runners diffed outside comments: nothing repo-specific lost

### DEPLOY: fix/migrate-dkj-repo-workflow-v7

Migrated to dkj-marketplace v7.0.0: the workflow plugin is now `dkj-repo-workflow` (with `dkj-repo-workflow-dkj`
and the new `dkj-subagents-developers` team), the workflow folder moved to `.dkj/dkj-repo-workflow/`, and
every CI runner and gate caller is pinned to v7.0.0. The pilot's findings on the release note are
DKJ-Solutions/dkj-marketplace#4251, #4252 and #4253.

For whoever works in this repo: sessions load the v7 plugins and their twenty-one specialists again,
and the slash commands are now `/dkj-repo-workflow:*` and `/dkj-subagents-developers:*`.

**Score:** 4

#### What makes this deploy extra special

Nothing changes in the recipe app itself; its users take nothing from this.

**Score:** N/A

#### Pull Request

Migrate to dkj-marketplace v7.0.0 (dkj-repo-workflow)
