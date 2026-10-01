## chore/ci-workflow

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
> The phase arc, the marks and the whole form: `DEVELOPMENT-portable.md`, which ships
> with this workflow.

### PLAN

`adopt-ci-floor` beloofde in de dry run een `ci.yml`, maar plaatste hem bij `-Apply` niet: Part 1's
PR-gates onderdrukken de skeleton (inbound DKJ-Solutions/dkj-claude-plugins#2677). Zonder die workflow
bestaat er geen check die als required check op `main` kan dienen (#2).

### CREATE

- [x] `.github/workflows/ci.yml`: workflow `CI`, job `ci`, draait `scripts/lint/lint.ps1` op `pull_request` en op push naar `main`
- [x] `merge-on-green.yml`: `CI` toegevoegd aan de `workflow_run`-trigger

### TEST

- [x] `scripts/lint/lint.ps1` lokaal onder Windows PowerShell 5.1 gedraaid: groen (`pwsh` staat niet op deze machine; de `pwsh`-run is de `ci`-job op de PR, en die is `ship-pr`'s gate)

### DEPLOY: chore/ci-workflow

#### What does the change on this branch deploy to main?

##### Tier 0

Er is nu een CI-check `ci` die de lint-gate op elke PR en elke push naar `main` draait. Dat is de check
die als required check op `main` kan dienen, zodat de staleness-guard van `ship-pr` aangaat.

**Score:** 3

<!--
     Is this change also relevant to management and the employer/commissioner? Then continue to Tier 1.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 1

Interne werkwijze; niets wat opdrachtgever of management merkt.

**Score:** N/A

<!--
     Is this change also relevant to a subscriber of the service? Then continue to Tier 2.
     If not, say so there in one line and put N/A in its Score.
-->

##### Tier 2

Gebruikers van de app merken hier niets van.

**Score:** N/A

#### Pull Request

Een CI-workflow die de lint-gate draait, als required check

