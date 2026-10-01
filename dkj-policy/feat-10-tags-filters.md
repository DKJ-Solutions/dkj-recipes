## feat/10-tags-filters

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

Tags als filters in de receptenlijst (#10). De tags stonden al in de frontmatter en waren al
doorzoekbaar. Nu staan ze ook als knoppen onder het zoekveld. Met meerdere tags aan moet een recept ze
allemaal hebben, en het filter werkt samen met het zoekveld. Er is geen afgeleide tag zoals "snel" op
basis van `tijd`: een tag is wat in het recept staat.

### CREATE

- [x] Startpagina: een rij tag-knoppen (op alfabet, scrolt horizontaal bij veel tags) die aan en uit
  gaan; alleen zichtbaar als er tags zijn
- [x] Meegenomen: "1 ingrediënten" wordt "1 ingrediënt"

### TEST

- [x] `npm run build` groen
- [x] Headless Chrome (390 px, mobiel) tegen `astro preview`, met twee tijdelijke testrecepten die
  daarna weer zijn verwijderd: 6 van 6 checks geslaagd. Tags op alfabet; "snel" toont twee recepten;
  "snel" en "vegetarisch" samen toont er één; met een zoekwoord erbij geen resultaat en de lege melding;
  alles uit toont alles weer
- [ ] Dave bekijkt de tagknoppen op zijn telefoon (zichtbaar resultaat, wacht op zijn oog vóór de merge)

### DEPLOY: feat/10-tags-filters

Alleen de startpagina verandert.

**Score:** 1

#### What makes this deploy extra special

Onder het zoekveld staan nu de tags als knoppen (bijvoorbeeld "pasta" of "snel"). Tik er een aan en je
ziet alleen de recepten met die tag.

**Score:** 3

#### Pull Request

Tags en filters in de receptenlijst

