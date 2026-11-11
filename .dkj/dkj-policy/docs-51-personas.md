## docs/51-personas

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

Bram and Lotte turn the interview outcomes of #50 (`docs/studio-hellofresh/07-interviews.md`) into personas. No client answer is needed: personas are agency work built on the recorded interviews. Every trait cites its participant, the one real voice set apart, so fiction never reads as evidence.

### CREATE

- [x] Write `docs/studio-hellofresh/08-personas.md`: three personas (one primary, two secondary), each trait cited, a certainty line per persona
- [x] Add a MoSCoW proposal for #53, marked as a proposal, not a decision
- [x] Add the document to the README reading order and a line to the logbook

### TEST

- [x] Every trait cites a participant; the real voice (participant 1) is marked bold and the personas resting only on fiction say so

### DEPLOY: docs/51-personas

De persona's voor het rollenspel zijn uitgewerkt in `docs/studio-hellofresh/08-personas.md`: Noor (de boxmoeë, primair, op de echte stem), Marieke (het krappe gezin) en Daan (de starter), de laatste twee alleen op fictie. Met een voorstel voor de MoSCoW van taak #53.

**Score:** 1

#### What makes this deploy extra special

N/A: alleen documentatie voor het rollenspel; de recepten-app zelf verandert niet.

**Score:** N/A

#### Pull Request

Rollenspel: de persona's uitgewerkt

