## feat/8-afdelingen

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

Ingrediënten groeperen per supermarktafdeling (#8), op de receptpagina én op de boodschappenlijst.

**Gestapeld op `feat/7-boodschappenlijst`** (#7): de lijst is waar je in de supermarkt mee rondloopt, dus
daar hoort het groeperen het meest. Deze branch wordt pas na #7 gemerged. Wordt #7 afgekeurd, dan gaat
het lijstdeel eruit en blijft het deel op de receptpagina over.

Het veld `afdeling` stond al in het schema en het sjabloon. De volgorde van de afdelingen staat vast
(winkelvolgorde, in `src/lib/afdeling.ts`). Een onbekende afdeling komt daarna, een ingrediënt zonder
afdeling onder "Overig". Een recept zonder enige afdeling blijft één lijst zonder koppen.

### CREATE

- [x] `src/lib/afdeling.ts`: `groupByAfdeling` met de vaste winkelvolgorde
- [x] Receptpagina: kopjes per afdeling; de afgevinkte ingrediënten blijven op hun oorspronkelijke
  nummer bewaard, dus eerder afgevinkt blijft afgevinkt
- [x] Boodschappenlijst: de samengevoegde ingrediënten per afdeling; bij het samenvoegen neemt een
  regel zonder afdeling die van een later recept over
- [x] Sjabloon: de afdelingen en hun volgorde beschreven

### TEST

- [x] `npm run build` groen
- [x] Headless Chrome (390 px, mobiel) tegen `astro preview`, met twee tijdelijke testrecepten die
  daarna weer zijn verwijderd: 9 van 9 checks geslaagd. Winkelvolgorde Groente, Vlees, Zuivel, Houdbaar,
  Overig op de receptpagina; afvinken blijft bewaard; recept zonder afdelingen heeft geen koppen; op de
  lijst gaan "Groente" en "groente" samen, krijgt zout de afdeling van het tweede recept en komt de
  onbekende afdeling "bakker" achteraan
- [ ] Dave bekijkt de groepen op zijn telefoon (zichtbaar resultaat, wacht op zijn oog vóór de merge)

### DEPLOY: feat/8-afdelingen

Nieuwe `src/lib/afdeling.ts`; de ingrediënten op de receptpagina en de lijst staan nu in een container
met een lijst per afdeling.

**Score:** 1

#### What makes this deploy extra special

Ingrediënten staan nu onder kopjes per afdeling (groente, vlees, zuivel, houdbaar, ...) in de volgorde
waarin je door de supermarkt loopt, op elk recept en op de boodschappenlijst.

**Score:** 3

#### Pull Request

Ingrediënten groeperen per supermarktafdeling

