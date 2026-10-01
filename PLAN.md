# Plan — dkj-recipes

> Het werkplan voor de app. Bron van de eisen en besluiten: [issue #1](https://github.com/DKJ-Solutions/dkj-recipes/issues/1).
> Opgesteld op 2026-10-01. Een nieuwe sessie in deze repo begint hier.

## Wat het is

Een recepten-app van Dave die **vooral op de telefoon** gebruikt wordt. Het kernscenario: Dave staat
in de supermarkt en wil snel bij al zijn recepten om makkelijk en vlot de ingrediënten te kopen.

## Eisen (vastgesteld)

1. **Mobile-first.** De app werkt het best op een telefoon; desktop komt op de tweede plaats, maar
   moet wel werken.
2. **Openbaar.** De repo en de app zijn voor iedereen zichtbaar. Er komt dus **niets vertrouwelijks**
   in deze repo: geen persoonsgegevens, credentials of secrets.
3. **Op elk apparaat bereikbaar** via een publieke URL, niet alleen lokaal.

## Besluiten

| Datum | Besluit |
|---|---|
| 2026-10-01 | De repo is publiek. |
| 2026-10-01 | **Recepten komen via Claude in de repo.** Dave levert een recept aan (tekst, link of foto), Claude zet het als bestand in de repo. Er is geen database, geen login en geen invoerscherm in de app. |
| 2026-10-01 | **Stack: Astro**, een statische site als PWA, gehost op **GitHub Pages**. |

## Hoe het is opgezet

- **Een statische site als PWA:** hij werkt offline (in de supermarkt is het bereik vaak slecht) en
  is op het startscherm te zetten. Na de build zet `scripts/build-sw.mjs` (Workbox) de hele site in de
  cache van een service worker.
- **Eén Markdown-bestand per recept** in `recipes/`, met frontmatter (titel, porties, tijd, tags, bron,
  ingrediënten) en de bereiding als tekst. Het sjabloon is `recipes/_SJABLOON.md`; het schema staat in
  `src/content.config.ts`, dus een recept dat er niet aan voldoet, laat de build falen.
- **Hosting op GitHub Pages** via `.github/workflows/deploy.yml`, bij elke push naar `main`:
  <https://dkj-solutions.github.io/dkj-recipes/>.

## Functies

**Moet (eerste versie):**

- een lijst van alle recepten, met **zoeken** dat bij het typen al filtert;
- een receptpagina met **ingrediënten bovenaan**, in grote tekst en met grote tikvlakken;
- **ingrediënten afvinken** tijdens het winkelen; wat is afgevinkt wordt per toestel onthouden;
- **offline beschikbaar**: alle recepten in de cache.

**Later (wens):**

- meerdere recepten kiezen en de ingrediënten **samenvoegen tot één boodschappenlijst**;
- ingrediënten **groeperen per supermarktafdeling** (groente, zuivel, ...);
- het aantal porties aanpassen, waarbij de hoeveelheden meeschalen;
- tags en filters (bijvoorbeeld "vegetarisch" of "snel").

## Fasen

1. **Fundament:** de stack kiezen, het project opzetten, het receptformaat en sjabloon vastleggen
   en een eerste voorbeeldrecept toevoegen.
2. **Kern:** de receptenlijst met zoeken, de receptpagina en het afvinken, mobile-first.
3. **Offline en installeerbaar:** het PWA-manifest en een service worker.
4. **Live:** deployen naar GitHub Pages en testen op Dave's telefoon. *Een zichtbaar resultaat wacht
   telkens op Dave's eigen blik.*
5. **Recepten vullen:** Dave levert recepten aan, Claude zet ze erin.
6. **Wensen** uit de lijst hierboven, op volgorde van Dave.

Fase 1 tot en met 3 en de deploy-workflow van fase 4 zijn gebouwd voor
[issue #1](https://github.com/DKJ-Solutions/dkj-recipes/issues/1). De werkwijze is die van de andere
DKJ-repo's: dkj-policy met de specialisten.
