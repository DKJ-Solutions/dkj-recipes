## docs/70-go-no-go-3-voorbereid

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

### CREATE

- [x] Write `docs/studio-hellofresh/24-afronding-en-go-no-go-3.md`: what the beta left behind and what the
  team did with it, the GDPR check (not legal advice), the accessibility check against WCAG 2.1 AA, the
  release candidate, the agency's advice for go/no-go 3 and the client's three open questions, marked as
  fiction
- [x] Add the chapter to the reading order in `docs/studio-hellofresh/README.md`
- [x] Add the line to `docs/studio-hellofresh/logboek.md`

### TEST

### DEPLOY: docs/70-go-no-go-3-voorbereid

Go/no-go 3 van het rollenspel is voorbereid, in `docs/studio-hellofresh/24-afronding-en-go-no-go-3.md`:
wat de bèta achterliet en wat het team ermee deed, de AVG-check, de toegankelijkheid tegen WCAG 2.1 AA en
de release candidate. Het advies is go, onder twee voorwaarden. Drie vragen liggen bij de klant: go/no-go
3, hoe de app met de allergieën omgaat, en of er na de lancering gemeten wordt. Taak #70 blijft open voor
het besluit.

**Score:** 1

#### What makes this deploy extra special

N/A: alleen documentatie voor het rollenspel; de recepten-app zelf verandert niet.

**Score:** N/A

#### Pull Request

Prepare the role-play's go/no-go 3: beta fixes, GDPR and accessibility

