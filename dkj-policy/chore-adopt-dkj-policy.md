## chore/adopt-dkj-policy

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

De `adopt-dkj-policy`-skill (dkj-policy 5.11.0) in alle vijf delen draaien, plus wat de session checks
daarna nog openlieten: de constitutie-import in `CLAUDE.md`, de repo-feiten in een ongescopete rule en
de lege prefix-tabel.

#### Wat bij de eigenaar ligt

`FOLD_PUSH_TOKEN` aanmaken (vóór de merge) en `ci` als required check zetten (ná de merge): #2.

### CREATE

- [x] Part 1: `dkj-policy/CHANGELOG.md`, `branch-entry.yml`, `always-on-budget.yml`, PR-template, `Get-ReleaseNoteRoot` en de constitutie-import
- [x] Part 2: 13 `copy`-functies in `scripts/repo-config.ps1`; de 20 `decide`-records staan in `config-adoption-proposal.md` (niet gecommit, wordt bij een re-run opnieuw gegenereerd)
- [x] Part 3: `fold-on-merge.yml`, `verify-resolved.yml`, `repo-settings.yml`, `merge-on-green.yml` en een minimale `ci.yml`
- [x] Part 4: label `minor` op de tracker, met de tier-2-omschrijving
- [x] Part 5: statusline-shim `.claude/statusline/dkj-progress.ps1` en de `statusLine`-key in `.claude/settings.json`
- [x] `CLAUDE.md` teruggebracht tot imports; repo-feiten naar `.claude/rules/this-repo.md`
- [x] Prefix-tabel in `scripts/lib/branch-info.ps1` gevuld met `feat`/`fix`/`docs`/`chore`
- [x] Minimale lint-gate `scripts/lint/lint.ps1` (PowerShell parse + ASCII, `settings.json` valide JSON) en `Get-LintScript` erop gezet

### TEST

- [x] Alle vier de scripts eerst als dry run gedraaid, daarna met `-Apply`: niets bestond al, niets overschreven
- [x] `check-script-contract.ps1` na de adoptie gedraaid

### DEPLOY: chore/adopt-dkj-policy

#### What does the change on this branch deploy to main?

##### Tier 0

De repo draait nu op de dkj-policy-workflow: branch-document en changelog per branch, CI-gates op elke
PR (branch-entry, always-on-budget), de fold- en resolves-runners na een merge, en een progress-bar in
de statusline. Pas na #2 staat de staleness-guard van `ship-pr` aan.

**Score:** 4

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

dkj-policy adopteren: workflowmap, config-seams, CI-vloer en statusline

