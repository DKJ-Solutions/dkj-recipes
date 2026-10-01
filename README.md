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

De PWA-iconen maak je opnieuw met `node scripts/make-icons.mjs` nadat `public/icons/icon.svg` is
gewijzigd.
