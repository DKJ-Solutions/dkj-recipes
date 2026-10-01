## feat/9-porties

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

Het aantal porties op de receptpagina aanpassen, waarbij de hoeveelheden meeschalen (#9). Alleen voor
recepten met `porties` in de frontmatter. Een recept zonder porties heeft niets om vanuit te rekenen.

Afronden op wat je in de winkel kunt pakken: vanaf 10 op hele getallen (188 g, niet 187,5 g), daaronder
op kwarten (0,75 potje), nooit naar 0. Het gekozen aantal wordt per recept op het toestel onthouden.

Los gebouwd vanaf `main`. De boodschappenlijst (#7, nog niet gemerged) rekent nog met het aantal porties
uit het recept; die twee koppelen kan pas als beide gemerged zijn.

### CREATE

- [x] `scaleAmount` en een `factor` voor `formatIngredient` in `src/lib/format.ts`
- [x] Receptpagina: keuzeknop "− 4 porties +" (1 tot 99) in plaats van "4 porties" in de kop; de
  hoeveelheden schalen mee, het aantal blijft per recept bewaard en gaat terug naar het origineel
  zonder dat er iets opgeslagen blijft

### TEST

- [x] `npm run build` groen
- [x] Headless Chrome (390 px, mobiel) tegen `astro preview`: 13 van 13 checks geslaagd. Begint op 4;
  3 porties geeft 300 g penne, 0,75 potje pesto en 188 g tomaten; zout en peper blijft gelijk; niet
  onder 1 (knop grijs); 8 porties geeft 800 g en 2 potjes; het aantal blijft bewaard na herladen;
  afvinken werkt nog; terug naar 4 wist de opslag
- [ ] Dave bekijkt de keuzeknop op zijn telefoon (zichtbaar resultaat, wacht op zijn oog vóór de merge)

### DEPLOY: feat/9-porties

`formatIngredient` kan nu schalen (`scaleAmount`). De receptpagina zet porties niet meer in de kop, maar
in een eigen keuzeknop.

**Score:** 1

#### What makes this deploy extra special

Op een recept met porties kies je met − en + voor hoeveel mensen je kookt, en de hoeveelheden rekenen
mee, afgerond op wat je in de winkel kunt pakken. Het aantal blijft staan als je later terugkomt.

**Score:** 3

#### Pull Request

Porties aanpassen met meeschalende hoeveelheden

