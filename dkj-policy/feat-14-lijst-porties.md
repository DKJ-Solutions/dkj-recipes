## feat/14-lijst-porties

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

De boodschappenlijst rekent met het aantal porties dat op de receptpagina is gekozen (#14), nu #7 en #9
allebei gemerged zijn. Elk recept wordt met zijn eigen factor geschaald (gekozen gedeeld door het aantal
in het recept). Er wordt pas na het optellen afgerond, zodat afrondingen zich niet opstapelen. Een recept
zonder `porties` telt mee zoals het staat.

### CREATE

- [x] `src/lib/format.ts`: de afronding als eigen `roundAmount`, zodat de lijst na het optellen kan
  afronden
- [x] `src/lib/lijst.ts`: `loadPorties`/`savePorties` (de sleutel `porties:<id>` op één plek) en een
  `factor` per recept in `mergeIngredients`
- [x] Receptpagina: gebruikt `loadPorties`/`savePorties`, gedrag ongewijzigd
- [x] Boodschappenlijst: schaalt per recept, toont het aantal porties op de chip, en rekent opnieuw als
  je met de terugknop terugkomt van een recept

### TEST

- [x] `npm run build` groen
- [x] Headless Chrome (390 px, mobiel) tegen `astro preview`, met twee tijdelijke testrecepten die
  daarna weer zijn verwijderd: 9 van 9 checks geslaagd. Zonder keuze rekent de lijst als in het recept;
  pasta op 2 en soep (2) op 4 porties geeft 125 + 1000 = 1.125 g tomaten en 0,5 + 2 = 2,5 potje pesto;
  37,5 g rucola wordt 38 g; een recept zonder porties blijft ongeschaald; de chips tonen het gekozen aantal
- [x] Regressie op de receptpagina (de 13 checks van #9): 13 van 13 geslaagd
- [x] Dave bekijkt de lijst met aangepaste porties: gezien en goedgekeurd op 2026-10-01 (preview van deze
  branch)

### DEPLOY: feat/14-lijst-porties

`roundAmount` is los van `scaleAmount`; de opslag van het gekozen aantal porties zit nu in
`src/lib/lijst.ts`.

**Score:** 1

#### What makes this deploy extra special

Kies je op een recept een ander aantal porties, dan rekent de boodschappenlijst daar nu ook mee. Op de
lijst zie je bij elk recept voor hoeveel porties het meetelt.

**Score:** 3

#### Pull Request

Boodschappenlijst rekent met het gekozen aantal porties

