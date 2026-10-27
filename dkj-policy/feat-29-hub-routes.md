## feat/29-hub-routes

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

Issue #29, this repo's row of DKJ-Solutions/dkj-claude-plugins#3464: bring `Get-DevPreview` and the
Simple Browser routes up to the plugin's hub contract (`hub/README.md`).

### CREATE

- [x] Plugins in this checkout updated to v5.34.0 (`update-plugins`; per machine, nothing to commit)
- [x] `Get-DevPreview`: drop `Name` (ignored since the plugin hub), state `DefaultTheme = 'teal'` (the product opens in teal)
- [x] `.vscode/settings.json`: route the hub's ports 4890-4899 to the Simple Browser, beside the product's

### TEST

- [x] `ConvertTo-DevPreviewConfig` (the plugin's own validator) accepts the config: Ok, no problem, theme `teal`
- [x] `Get-DevPreviewDriftClauses` names both drifts on `main` and nothing on this branch

### DEPLOY: feat/29-hub-routes

The dev preview follows the plugin's hub contract: the hub's ports 4890-4899 open in VS Code's Simple
Browser, the hub opens in the product's own theme (`teal`), and the ignored `Name` is gone, so the
session-start config-drift line no longer fires.

**Score:** 2

#### What makes this deploy extra special

N/A -- the recipes app itself is unchanged; this only touches the local development hub.

**Score:** N/A

#### Pull Request

Bring the dev preview up to the plugin's hub

