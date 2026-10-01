## feat/1-recepten-app

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

Issue #1, fase 1 t/m 4 uit `PLAN.md`. Dave koos op 2026-10-01 voor Astro als PWA op GitHub Pages en
voor fase 1 t/m 4 in één branch. `@vite-pwa/astro` ondersteunt Astro 7 nog niet (peer tot en met ^5),
dus de service worker wordt na de build los gemaakt met `workbox-build`.

### CREATE

- [x] Astro-project (`package.json`, `astro.config.mjs` met base `/dkj-recipes`)
- [x] Receptformaat: het schema in `src/content.config.ts`, `recipes/_SJABLOON.md` en een voorbeeldrecept
- [x] Receptenlijst met zoeken tijdens het typen (accentongevoelig, op titel, tag en ingrediënt)
- [x] Receptpagina met de ingrediënten bovenaan, grote tikvlakken en afvinken dat per toestel wordt onthouden
- [x] PWA: manifest, iconen (`scripts/make-icons.mjs`), service worker (`scripts/build-sw.mjs`)
- [x] `.github/workflows/deploy.yml` naar GitHub Pages; de CI bouwt de app nu ook
- [x] README en PLAN bijgewerkt

### TEST

- [x] `npm run build` is groen: 2 pagina's, 8 bestanden vooraf in de cache, het sjabloon wordt overgeslagen
- [x] In Chrome op de preview: zoeken filtert (ook "geen recept gevonden"), afvinken blijft staan na herladen, de service worker is geactiveerd
- [x] Offline: met de server gestopt laden de lijst en de receptpagina uit de cache
- [~] Safari/iOS en Dave's eigen telefoon: kon ik hier niet testen; dat gebeurt bij Dave's blik op de live-URL

### DEPLOY: feat/1-recepten-app

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

