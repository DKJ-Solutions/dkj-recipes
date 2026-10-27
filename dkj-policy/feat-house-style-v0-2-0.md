## feat/house-style-v0-2-0

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

Bring this repo's vendored house style from `house-style-v3` to the copy the `house-style` skill pins at `v5.35.0` (in `dkj-policy`'s `assets/house-style/` since dkj-claude-plugins#3130 and #3531), and take what that copy requires in the repo's own layer: the retired token names (#31) and the default theme `rust` (#28). The branch started on `v0.2.0`; that pin has since been superseded twice, so it now lands the current one instead.

#### Token mapping

The layer was on the nine-step `--primary-*` scale, so the README's tables are chained 9 -> 12 -> paper/fg: `-1`, `-2`, `-3` -> `--paper-1`, `-2`, `-3`; `-5`, `-6` -> `--muted`; `-7` -> `--primary`; `-8` -> `--fg-3`; `-9` -> `--fg-1`. One deliberate departure: `-4` (the light grey of a ticked ingredient and a disabled stepper button) maps to `--paper-4` by the tables, a border tint that would not read as text, so `--recept-done` takes `--muted` and keeps the strike-through. Sizes: `--text-h4` (the chip's remove glyph) and `--text-h3` (the portions stepper, 14px now) move to `--text-lg`, as the README's heading cut prescribes for a large figure.

### CREATE

- [x] Replace `src/styles/house-style.css` and `src/styles/house-theme.js` with the files served at `v5.35.0`, unchanged (sha256 `0a2664f6...` and `24ed94dd...`, matching the skill's table; the theme script makes no network call, no `eval`, touches no cookie and stores only `dkj-theme`/`dkj-width`; the stylesheet has no `@import` or remote `url()`)
- [x] Rename every retired token in `src/styles/recepten.css`, `src/pages/index.astro`, `src/pages/lijst.astro` and `src/pages/recept/[id].astro` per the mapping above (#31)
- [x] Declare `<html data-theme-default="rust">` in `src/layouts/Base.astro`, replacing the `data-theme-light`/`data-theme-dark` pair (#28)

### TEST

- [x] No `--primary-<n>`, `--text-h4`..`-h6` or `data-theme-light`/`-dark` left in the repo's own layer (`git grep`)
- [x] An owner has looked at the app in Roest (and one other theme) and approved it (Dave, October 27, 2026)
### DEPLOY: feat/house-style-v0-2-0

The app now renders from the house style the `house-style` skill pins at `v5.35.0` instead of `house-style-v3`, and opens in its own default theme, Roest (`rust`), until the user picks another (#28). The repo's own layer reads the current token names (#31): pages, cards and lines take `--paper-*`, text `--fg-*`, the highlight `--primary` and greys `--muted`, so the `house-style` check is green again. Visible: every colour follows the new palette, headings follow the house's smaller scale (`h1` 32px), and the portions stepper and the chip's remove glyph sit at 18px.

**Score:** 2

#### What makes this deploy extra special

N/A -- the same app in the house's current look and its own colour; nothing new to learn or decide.

**Score:** N/A

#### Pull Request

Take the house style at v5.35.0, with the default theme rust
