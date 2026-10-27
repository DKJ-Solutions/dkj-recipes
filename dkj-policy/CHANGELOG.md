# Changelog

## [Unreleased]

**10 / 19 minor entries** <!-- pending-tally -->

### DEPLOY: fix/33-recept-tag-class · 20261027-222003Z

The tag filters on the home page now carry their own class `.recept-tag` instead of the house class
`.tag`, so the house style's tag look no longer bleeds into them and the `house-style` check is clean.

**Score:** 1 -- prevents the house `.tag` rule from repainting the filter buttons at a later house-style update.

#### What makes this deploy extra special

Nothing reaches a reader of this app beyond the unchanged look of the filter row.

**Score:** N/A

#### Pull Request

Home page tag filters get a domain class instead of the house .tag

[PR #34](https://github.com/DKJ-Solutions/dkj-recipes/pull/34)

---

### DEPLOY: feat/house-style-v0-2-0 · 20261027-221419Z

The app now renders from the house style the `house-style` skill pins at `v5.35.0` instead of `house-style-v3`, and opens in its own default theme, Roest (`rust`), until the user picks another (#28). The repo's own layer reads the current token names (#31): pages, cards and lines take `--paper-*`, text `--fg-*`, the highlight `--primary` and greys `--muted`, so the `house-style` check is green again. Visible: every colour follows the new palette, headings follow the house's smaller scale (`h1` 32px), and the portions stepper and the chip's remove glyph sit at 18px.

**Score:** 2

#### What makes this deploy extra special

N/A -- the same app in the house's current look and its own colour; nothing new to learn or decide.

**Score:** N/A

#### Pull Request

Take the house style at v5.35.0, with the default theme rust

[PR #32](https://github.com/DKJ-Solutions/dkj-recipes/pull/32)

---

### DEPLOY: feat/29-hub-routes · 20261027-190224Z

The dev preview follows the plugin's hub contract: the hub's ports 4890-4899 open in VS Code's Simple
Browser, the hub opens in the product's own theme (`teal`), and the ignored `Name` is gone, so the
session-start config-drift line no longer fires.

**Score:** 2

#### What makes this deploy extra special

N/A -- the recipes app itself is unchanged; this only touches the local development hub.

**Score:** N/A

#### Pull Request

Bring the dev preview up to the plugin's hub

[PR #30](https://github.com/DKJ-Solutions/dkj-recipes/pull/30)

---

### DEPLOY: fix/24-feature-label · 20261015-152051Z

`feat/` pull requests are now labelled `feature`, as in every DKJ-Solutions repo; the earlier ones were
moved over from `enhancement`.

**Score:** 1

#### What makes this deploy extra special

Nothing a user of the recipe app sees.

**Score:** N/A

#### Pull Request

Label feat/ pull requests 'feature', not 'enhancement'

[PR #27](https://github.com/DKJ-Solutions/dkj-recipes/pull/27)

---

### DEPLOY: feat/23-dev-preview · 20261015-151756Z

A session in this repo now starts or reuses the local `astro dev` server and opens
`http://localhost:4321/dkj-recipes/` in VS Code's Simple Browser, through the `dkj-solutions` dev-preview
hook (`Get-DevPreview` in `scripts/repo-config.ps1`, routing in `.vscode/settings.json`).

**Score:** 3

#### What makes this deploy extra special

Nothing a user of the recipe app sees: it changes only how the repo is worked on.

**Score:** N/A

#### Pull Request

Opt in to the dev-preview hook for a Simple Browser link at session start

[PR #26](https://github.com/DKJ-Solutions/dkj-recipes/pull/26)

---

### DEPLOY: feat/22-house-style-v3 · 20261015-151458Z

The app now renders from the DKJ-Solutions house style (`house-style-v3`, vendored unchanged in
`src/styles/`), with its own layer in `src/styles/recepten.css` on house tokens, and a
`House style` CI check that holds both.

**Score:** 3

#### What makes this deploy extra special

The recipe app looks like the other DKJ-Solutions apps, and a round settings button lets you pick one of
twelve colour themes, remembered on your phone. It opens in Petrol (light) or Cyaan (dark).

**Score:** 3

#### Pull Request

Adopt the DKJ-Solutions house style (house-style-v3) and its settings button

[PR #25](https://github.com/DKJ-Solutions/dkj-recipes/pull/25)

---

### DEPLOY: feat/enable-dkj-solutions · 20261013-084852Z

This repo enables the `dkj-solutions` extension. Every session here now reads the DKJ-Solutions house style rules: visual work starts from the stylesheet in [DKJ-Solutions/dkj-brandbook](https://github.com/DKJ-Solutions/dkj-brandbook), and a change to the house style itself is filed as an issue there instead of being made in this repo. Nothing renders differently yet.

**Score:** 2

#### What makes this deploy extra special

This app now follows the same look as every other DKJ-Solutions app, and a styling fix to the shared house style lands once, in the brand book, instead of drifting into a local variant.

**Score:** 2

#### Pull Request

Enable dkj-solutions: the house style comes from dkj-brandbook

[PR #21](https://github.com/DKJ-Solutions/dkj-recipes/pull/21)

---

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

