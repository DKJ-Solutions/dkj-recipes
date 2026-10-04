# Changelog

## [Unreleased]

**8 / 12 minor entries** <!-- pending-tally -->

### DEPLOY: feat/recept-boerenkool · 20261004-155158Z

Nieuw recept: boerenkoolstamppot met rookworst voor twee personen, met kooktijden per stap.

**Score:** 1

#### What makes this deploy extra special

Een nieuw recept in de app, met de kooktijd in de stappen.

**Score:** 2

#### Pull Request

Recept boerenkoolstamppot met rookworst

[PR #20](https://github.com/DKJ-Solutions/dkj-recipes/pull/20)

---

### DEPLOY: feat/14-lijst-porties · 20261001-151449Z

`roundAmount` is los van `scaleAmount`; de opslag van het gekozen aantal porties zit nu in
`src/lib/lijst.ts`.

**Score:** 1

#### What makes this deploy extra special

Kies je op een recept een ander aantal porties, dan rekent de boodschappenlijst daar nu ook mee. Op de
lijst zie je bij elk recept voor hoeveel porties het meetelt.

**Score:** 3

#### Pull Request

Boodschappenlijst rekent met het gekozen aantal porties

[PR #19](https://github.com/DKJ-Solutions/dkj-recipes/pull/19)

---

### DEPLOY: feat/10-tags-filters · 20261001-144657Z

Alleen de startpagina verandert.

**Score:** 1

#### What makes this deploy extra special

Onder het zoekveld staan nu de tags als knoppen (bijvoorbeeld "pasta" of "snel"). Tik er een aan en je
ziet alleen de recepten met die tag.

**Score:** 3

#### Pull Request

Tags en filters in de receptenlijst

[PR #18](https://github.com/DKJ-Solutions/dkj-recipes/pull/18)

---

### DEPLOY: feat/9-porties · 20261001-144453Z

`formatIngredient` kan nu schalen (`scaleAmount`). De receptpagina zet porties niet meer in de kop, maar
in een eigen keuzeknop.

**Score:** 1

#### What makes this deploy extra special

Op een recept met porties kies je met − en + voor hoeveel mensen je kookt, en de hoeveelheden rekenen
mee, afgerond op wat je in de winkel kunt pakken. Het aantal blijft staan als je later terugkomt.

**Score:** 3

#### Pull Request

Porties aanpassen met meeschalende hoeveelheden

[PR #17](https://github.com/DKJ-Solutions/dkj-recipes/pull/17)

---

### DEPLOY: feat/8-afdelingen · 20261001-144152Z

Nieuwe `src/lib/afdeling.ts`; de ingrediënten op de receptpagina en de lijst staan nu in een container
met een lijst per afdeling.

**Score:** 1

#### What makes this deploy extra special

Ingrediënten staan nu onder kopjes per afdeling (groente, vlees, zuivel, houdbaar, ...) in de volgorde
waarin je door de supermarkt loopt, op elk recept en op de boodschappenlijst.

**Score:** 3

#### Pull Request

Ingrediënten groeperen per supermarktafdeling

[PR #16](https://github.com/DKJ-Solutions/dkj-recipes/pull/16)

---

### DEPLOY: feat/7-boodschappenlijst · 20261001-143937Z

Nieuwe pagina `/lijst/` en een gedeelde `src/lib/lijst.ts`. De stijlen voor de ingrediëntenlijst
staan nu in `Base.astro` in plaats van op de receptpagina.

**Score:** 2

#### What makes this deploy extra special

Zet je meerdere recepten op de boodschappenlijst, dan krijg je hun ingrediënten in één lijst om af te
vinken, met de hoeveelheden opgeteld. Op elk recept staat de knop "Op de boodschappenlijst", en op de
startpagina zie je hoeveel recepten erop staan.

**Score:** 4

#### Pull Request

Meerdere recepten samenvoegen tot één boodschappenlijst

[PR #15](https://github.com/DKJ-Solutions/dkj-recipes/pull/15)

---

### DEPLOY: feat/12-update-melding · 20261001-141231Z

De service worker van de app meldt een nieuwe versie nu in de pagina zelf, en controleert bij elke
terugkeer naar de app of er een update is.

**Score:** 2

#### What makes this deploy extra special

Na een nieuwe versie verschijnt onderin "Nieuwe versie beschikbaar — Verversen"; één tik en je ziet de
wijziging, zonder de app eerst af te sluiten.

**Score:** 3

#### Pull Request

Melding bij een nieuwe versie van de app

[PR #13](https://github.com/DKJ-Solutions/dkj-recipes/pull/13)

---

### DEPLOY: chore/remove-plan-md · 20261001-102716Z

`PLAN.md` is verwijderd: fase 1 tot en met 3 en de deploy zijn gebouwd, de eisen en besluiten staan in
issue #1, en de wensen staan nu als losse issues in de tracker (#7, #8, #9, #10). Het besluit dat
recepten via Claude in de repo komen, staat in de repo-regels.

**Score:** 1

#### What makes this deploy extra special

Alleen documentatie in de repo; wie de app gebruikt merkt er niets van.

**Score:** N/A

#### Pull Request

PLAN.md verwijderd; wensen naar issues

[PR #11](https://github.com/DKJ-Solutions/dkj-recipes/pull/11)

---

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

