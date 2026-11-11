# dkj-recipes

Een mobile-first recepten-app: in de supermarkt snel bij je recepten, zodat je makkelijk de
ingrediënten kunt kopen. De eisen en besluiten staan in
[issue #1](https://github.com/DKJ-Solutions/dkj-recipes/issues/1); wensen staan als issues in de tracker.

Live: <https://dkj-solutions.github.io/dkj-recipes/>. De app werkt offline en is op het startscherm te
zetten.

## Een recept toevoegen

Kopieer [`recipes/_SJABLOON.md`](recipes/_SJABLOON.md) naar `recipes/<naam-van-het-recept>.md` en vul
het in. Na een merge naar `main` staat het recept vanzelf in de app.

## Lokaal draaien

Vereist Node 22.12 of nieuwer.

```sh
npm install
npm run dev       # ontwikkelserver op http://localhost:4321/dkj-recipes/
npm run build     # bouwt naar dist/, inclusief de service worker
npm run preview   # bekijkt de build
```

De service worker registreert zich niet op `localhost`, zodat je tijdens het ontwikkelen geen oude
versie uit de cache ziet. Om offline te testen gebruik je `npm run preview -- --host 127.0.0.1` en open
je `http://127.0.0.1:4321/dkj-recipes/`.

## Offline testen

Draai deze test opnieuw na elke wijziging aan `scripts/build-sw.mjs`, `src/layouts/Base.astro` of
`public/manifest.webmanifest`. Op een telefoon, tegen de live site:

1. Open met netwerk de index, één recept en de boodschappenlijst. Zet de app op het startscherm.
2. Zet de vliegtuigmodus aan, sluit de app helemaal en open hem opnieuw vanaf het startscherm. Hij
   opent zonder adresbalk.
3. Open de index, **elk** recept en de lijst. Alles moet laden.
4. Vink iets af, verander de porties, zet een recept op de lijst en haal er een af. Herlaad: alles
   moet blijven staan.
5. Zet het netwerk weer aan nadat er een recept is bijgekomen. Binnen enkele seconden verschijnt
   "Nieuwe versie beschikbaar". Na één keer verversen staat het nieuwe recept erin.

Op de desktop doe je dezelfde stappen tegen `npm run build` en de preview hierboven. Stappen 2 en 3
doe je dan met de preview-server gestopt. Leg de uitkomst per pagina vast op het issue dat de test
vroeg. Elke fout krijgt een eigen bug-issue. De eerste run staat op
[#118](https://github.com/DKJ-Solutions/dkj-recipes/issues/118).

De PWA-iconen maak je opnieuw met `node scripts/make-icons.mjs` nadat `public/icons/icon.svg` is
gewijzigd.
