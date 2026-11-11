## docs/58-prototype-usertest

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

- [x] Taak #58 van het rollenspel (doel #43): het klikbare prototype en de usertest, met de drie
  besluiten van Dave van 11 november 2026 (merk op het DKJ brand book, Thuiskok levert de gerechten,
  Chris speelt de vijf deelnemers als fictie). Go/no-go 2 blijft de keuze van de klant, dus het issue
  blijft open en wordt daarna geparkeerd als `awaiting-decision-dev`.

### CREATE

- [x] `docs/studio-hellofresh/13-designsysteem.md` afgestemd op het brand book: het thema Roest, de
  tokens per rol, de systeemletter, de type- en ruimteschaal, de onderdelen van het brand book plus vier
  eigen, de foto's en de gerechten.
- [x] `docs/studio-hellofresh/14-prototype-en-usertest.md`: het prototype, de opzet, de vijf fictieve
  deelnemers, de uitkomsten per keuze, de aanpassingen en de drie opties voor go/no-go 2.
- [x] De leesvolgorde in `README.md` en de regels in het `logboek.md`.

### TEST

- [x] De tokens en hun waarden in hoofdstuk 1 tot 4 nagelezen tegen `house-style.css` en de README's
  van het brand book op v6.13.0 (thema Roest, type- en ruimteschaal, gewichten, `--tap`, de klassen).
- [x] De voorbeeldprijs (€ 31,40 voor 3 avonden en 2 eters, dus € 5,23 per portie) en de € 4,30 per
  portie nagelezen tegen `12-wireframes.md` en `03-hellofresh-teardown.md`.

### DEPLOY: docs/58-prototype-usertest

Het rollenspel heeft een getest prototype: `docs/studio-hellofresh/14-prototype-en-usertest.md`
beschrijft twaalf klikbare schermen, de usertest met vijf fictieve deelnemers en de drie opties voor
go/no-go 2. Het designsysteem in `13-designsysteem.md` volgt nu het DKJ brand book.

**Score:** 1

#### What makes this deploy extra special

N/A: alleen documentatie voor het rollenspel; de recepten-app zelf verandert niet.

**Score:** N/A

#### Pull Request

Rollenspel: klikbaar prototype en usertest met 5 mensen (go/no-go 2)

