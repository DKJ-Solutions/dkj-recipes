# Changelog

## [Unreleased]

**1 / 4 minor entries** <!-- pending-tally -->

### DEPLOY: feat/1-recepten-app · 20261001-101700Z

De eerste versie van de recepten-app. Er komt nog geen gebruiker bij, maar de app staat er nu: Astro,
GitHub Pages en een CI die bouwt.

**Score:** 5

#### What makes this deploy extra special

De recepten-app bestaat. Op de telefoon zoek je een recept, zie je de ingrediënten bovenaan en vink je ze
af terwijl je winkelt. De app werkt ook zonder bereik en kun je op het startscherm zetten. Live op
<https://dkj-solutions.github.io/dkj-recipes/>.

**Score:** 5

#### Pull Request

Mobile-first recepten-app als statische PWA op GitHub Pages

[PR #6](https://github.com/DKJ-Solutions/dkj-recipes/pull/6)

---

### DEPLOY: chore/release-audience-tier-2 · 20261001-095529Z

#### What does the change on this branch deploy to main?

##### Tier 0

Release notes worden voortaan geschreven voor de gebruikers van de app (tier 2). Nieuwe
branch-documenten vragen alleen nog naar Tier 0 en de gebruikers, niet meer naar management of
opdrachtgever.

**Score:** 2

##### Tier 1

Geen opdrachtgever of management bij deze repo.

**Score:** N/A

##### Tier 2

Gebruikers van de app merken hier zelf niets van; het bepaalt alleen voor wie de notes worden geschreven.

**Score:** N/A

#### Pull Request

Release notes schrijven voor de app-gebruikers (tier 2)

[PR #5](https://github.com/DKJ-Solutions/dkj-recipes/pull/5)

---

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

