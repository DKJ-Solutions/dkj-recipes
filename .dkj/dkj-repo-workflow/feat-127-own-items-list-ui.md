## feat/127-own-items-list-ui

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

The UI half of #119, on the storage helpers from #126: add, tick and remove own items on the list
page. A visible result, so the branch is parked for Dave's look before any PR.

### CREATE

- [x] A form under the `h1` of `src/pages/lijst.astro`, always visible (also on an empty list): a text
  field (`enterkeyhint="enter"`, 16px through `--text-recept-input`, so iOS does not zoom) and a
  "Toevoegen" pill. Enter or the button adds; empty or whitespace-only input adds nothing; the field
  clears and keeps focus for the next item.
- [x] Own items join the merged ingredients as rows without an aisle, so `groupByAfdeling` puts them
  under **Overig**, or in the single untitled group when no recipe has aisles. Same tickable line,
  ticks stored under their `eigen:` key, so they survive a reload.
- [x] A `×` remove control per own item, `--tap` (44px) square, `aria-label` "<item> van de lijst halen".
- [x] A list with only own items shows the list (the recipe chips are hidden), not "Je lijst is leeg".
- [x] "Lijst leegmaken" also clears own items; "Alles weer aan" un-ticks them (it un-ticks every box in
  the list). The index link still counts recipes only (`loadList`, unchanged).
- [ ] Owner's look: Dave checks the list page on his phone.

### TEST

- [x] `npm test`: 8 of 8 pass (the helpers from #126, unchanged).
- [x] The dev server serves the page with the form and compiles the page script and `lijst.ts`.
- [~] Clicking through in a browser was not possible here: the Chrome extension was not connected.
  The owner's look covers it.

### DEPLOY: feat/127-own-items-list-ui

You can now type your own items onto the shopping list ("wc-papier"): they appear under Overig, tick
like any other line, survive a reload, and each has a × to remove it. "Lijst leegmaken" clears them too.

**Score:** 3

#### What makes this deploy extra special

N/A

**Score:** N/A

#### Pull Request

Own items on the list page: add, tick, remove

