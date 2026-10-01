# Changelog

## [Unreleased]

**2 patch entries** <!-- pending-tally -->

### DEPLOY: chore/ci-workflow · 20261001-094226Z

#### What does the change on this branch deploy to main?

##### Tier 0

Er is nu een CI-check `ci` die de lint-gate op elke PR en elke push naar `main` draait. Dat is de check
die als required check op `main` kan dienen, zodat de staleness-guard van `ship-pr` aangaat.

**Score:** 3

##### Tier 1

Interne werkwijze; niets wat opdrachtgever of management merkt.

**Score:** N/A

##### Tier 2

Gebruikers van de app merken hier niets van.

**Score:** N/A

#### Pull Request

Een CI-workflow die de lint-gate draait, als required check

[PR #4](https://github.com/DKJ-Solutions/dkj-recipes/pull/4)

---

### DEPLOY: chore/adopt-dkj-policy · 20261001-093941Z

#### What does the change on this branch deploy to main?

##### Tier 0

De repo draait nu op de dkj-policy-workflow: branch-document en changelog per branch, CI-gates op elke
PR (branch-entry, always-on-budget), de fold- en resolves-runners na een merge, en een progress-bar in
de statusline. Pas na #2 staat de staleness-guard van `ship-pr` aan.

**Score:** 4

##### Tier 1

Interne werkwijze; niets wat opdrachtgever of management merkt.

**Score:** N/A

##### Tier 2

Gebruikers van de app merken hier niets van.

**Score:** N/A

#### Pull Request

dkj-policy adopteren: workflowmap, config-seams, CI-vloer en statusline

[PR #3](https://github.com/DKJ-Solutions/dkj-recipes/pull/3)

---

