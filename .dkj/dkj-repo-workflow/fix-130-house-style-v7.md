## fix/130-house-style-v7

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

Make the house-style gate hold at v7.0.0 (#130). It is a visible result, so it waits for the owner's look.

### CREATE

- [x] `src/styles/house-style.css` and `house-theme.js` replaced with the copies served at v7.0.0, unchanged
- [x] Retired tokens renamed: `--paper-N` to `--bg-N`, `--muted` to `--primary-muted`, `--text-lg` to `--text-h3` (the gate misses the last one: DKJ-Solutions/dkj-marketplace#4254)
- [x] Font weights read the house weights: 600 and 700 become `--font-weight-bold`, 400 becomes `--font-weight-regular`
- [x] The search input's 16px (iOS zooms below it) is a domain step `--text-recept-input` in `recepten.css`
- [x] `scripts/make-icons.mjs`'s PNG background answered in `Get-HouseStyleAllowlist`

### TEST

- [x] `check-house-style` against the v7.0.0 skill page: `[OK] the brand book holds at v7.0.0`
- [x] `npm run build` and `scripts/lint/lint.ps1` clean; the home, list and recipe pages serve 200
- [x] Every `var(--...)` in `src/` resolves to a token the house CSS or the app defines

### DEPLOY: fix/130-house-style-v7

The app follows the brand book at v7.0.0 again. The house style files are the current ones, retired
colour and size names have their successors, and type weights come from the house scale. The app looks
slightly different: regular text is weight 500 instead of 400, emphasis goes from 600 to 700, and the
headings that read the retired 18px step now take the 16px `h3`.

**Score:** 2

#### What makes this deploy extra special

People using the app see the small weight and size changes above, but nothing works differently.

**Score:** 2

#### Pull Request

Bring the house style up to the brand book at v7.0.0
