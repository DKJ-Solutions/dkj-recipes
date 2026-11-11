## docs/63-sprint-4-boodschappenlijst

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

- [x] Play sprint 4 (the shopping list, flow 3, wireframe 7) up to the demo, the way sprint 3 was
  played for #62: what was built, the gap found, the demo, and the client's open questions. The
  client's answers are not invented; #63 stays open and is parked for them.

#### Notes

- Sprint 4 = week 13–14 (8 – 19 February 2027), from the plan van aanpak.

### CREATE

- [x] `docs/studio-hellofresh/18-sprint-4-boodschappenlijst.md`: the sprint document.
- [x] `docs/studio-hellofresh/README.md`: row 18 in the reading order.
- [x] `docs/studio-hellofresh/logboek.md`: one line under session 2.

### TEST

- [x] Docs only; the gates in `ship-pr` cover it.

### DEPLOY: docs/63-sprint-4-boodschappenlijst

Sprint 4 van het rollenspel is gespeeld tot de demo: de boodschappenlijst, samengevoegd in hele
verpakkingen, per afdeling, af te vinken en werkend zonder bereik. Vastgelegd in
`docs/studio-hellofresh/18-sprint-4-boodschappenlijst.md` en het logboek; drie vragen liggen bij de
klant (#63).

**Score:** 1

#### What makes this deploy extra special

N/A: alleen documentatie voor het rollenspel; de recepten-app zelf verandert niet.

**Score:** N/A

#### Pull Request

Play sprint 4 of the role-play up to the demo

