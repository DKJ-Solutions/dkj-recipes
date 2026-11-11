# 13. Het designsysteem

**Eigenaar:** Iris en Mehmet (UX/UI-designers) · **Bewaakt door:** Lotte (Design Lead) · **Week 7:**
28–31 december 2026 · **Status:** **voorstel** op 11 november 2026 (taak #57), op dezelfde dag
**afgestemd op het DKJ brand book** na het besluit van de klant (taak #58)

> **Wat een designsysteem is.** De bouwstenen waarmee elk scherm wordt gemaakt: de kleuren, de
> letters, de maten en de onderdelen (knoppen, kaarten, de tabbalk). Wie een nieuw scherm tekent of
> bouwt, kiest uit deze set en verzint niets nieuws. Zo ziet de app er overal hetzelfde uit, en bouwen
> de developers elk onderdeel één keer.
>
> In het echte project staat het in Figma als een bibliotheek met variabelen, en in sprint 1 (taak #60)
> komen dezelfde waarden als *design tokens* in de code. Hier staat het als tekst.

## Wat de klant besloot, en wat dat betekent

**Thuiskok heeft nog geen eigen merk** (besluit van de klant, 11 november 2026, op taak #57). Het
bureau stelt daarom het merk voor, **als onderdeel van het designsysteem en binnen het plafond van deel
B** (€ 1.159.000, zie het [discovery-rapport](10-discovery-rapport.md)). **Een logo hoort er niet bij.**
Tot er een is, staat de naam als woordmerk in de koptekstletter (hieronder).

**Het merk volgt zoveel mogelijk het DKJ brand book** (besluit van de klant, 11 november 2026, op taak
#58: *"ik wil wel zoveel mogelijk van het design gebruiken dat al vastgelegd is in de dkj-brandbook"*).
Het eerste voorstel had een eigen palet (Paprika, Saffraan, Basilicum) en twee eigen letters (Fraunces en
Inter). Die zijn vervallen. Wat het brand book al vastlegt, nemen we over; Thuiskok voegt alleen toe wat
het brand book niet heeft, als **eigen laag** erbovenop, zonder iets van het brand book te overschrijven.
Dat scheelt de developers werk: de stylesheet, de thema's en de meeste onderdelen bestaan al.

## Het merk in één zin

**Een keukentafel, geen restaurant.** Thuiskok belooft "het gemak van een box, voor het geld van gewone
boodschappen". Het merk moet dus warm en gewoon voelen, niet luxe. Drie keuzes volgen daaruit:

- **Een warme kleur uit de keuken.** Het standaardthema is **Roest**, het warme oranjebruin dat het
  brand book al aan deze app toewijst. Het komt dicht bij de paprika van het eerste voorstel.
- **Geen limoengroen.** Dat is de kleur van HelloFresh, en Noor wil juist weg bij de box
  ([persona's](08-personas.md)). Het brand book heeft bovendien geen groen thema: groen betekent daar
  "goed".
- **Rustig en ruim.** De lijst wordt gelezen in de winkel, met een mandje in de andere hand, en het
  recept in de keuken op een armlengte ([user flows](11-user-flows.md), flows 3 en 4). Weinig tegelijk
  op een scherm, en grote vlakken om op te tikken.

## 1. Kleuren

**Elke kleur is een token uit het brand book**, met een vaste rol. Een scherm gebruikt **de rol**, niet
de kleur: "primaire knop", niet "roest". Het brand book deelt de kleuren van een thema in drie groepen,
volgens de **60-30-10-regel**: 60 % papier (de ondergrond), 30 % de themakleur, 10 % tekst. **Een vierde
groep bestaat niet**, dus het saffraangele accent van het eerste voorstel is vervallen.

| Rol in Thuiskok | Token | Roest (licht) | Was in het eerste voorstel |
|---|---|---|---|
| De achtergrond van elk scherm | `--bg-1` | `#FFFDFC` | Bloem |
| Kaarten en panelen | `--bg-2` | `#FCF1EB` | Wit |
| Scheidingslijnen, de weekprijs-kaart | `--bg-3` | `#FCE6DB` | Lijn, Saffraan licht |
| Een sterkere rand, een gekozen kaart | `--bg-4` | `#F9D8C5` | Rand |
| De primaire knop, de actieve tab, links, de weekprijs | `--primary` | `#9C4B00` | Paprika |
| Minder belangrijke tekst: kooktijd, *indicatief*, uitleg | `--primary-muted` | `#665449` | Peper |
| Alle tekst en iconen | `--fg-1` | `#0E0300` | Inkt |
| "Gelukt": afgevinkt, opgeslagen | `--positive-3`, `--positive-1` | | Basilicum |
| Allergenen | `--warning-3`, `--warning-1` | | Tomaat |
| Fouten | `--negative-5`, `--negative-1` | | Tomaat |

- **Veggie is geen statuskleur.** In het brand book betekent groen "goed" of "omhoog", nooit een
  soort. Het label *veggie* is daarom een gewoon label in de themakleur, met het woord erop.
- **Kleur draagt nooit alleen de betekenis.** Een fout heeft altijd een icoon en een zin, een allergeen
  altijd het woord, en *veggie* altijd het label.

### Contrast: geregeld door het brand book

De app moet voldoen aan **WCAG 2.1 niveau AA** (de toegankelijkheidscheck in fase 4, taak #70). Het
brand book **rekent de kleuren van elk thema uit** in plaats van ze te typen, en weigert een thema dat
een drempel mist: de themakleur haalt **4,5 : 1** op alle vier de papierstappen, en de tekst
(`--fg-1`) haalt dat ruim. Het eerste voorstel rekende elke combinatie met de hand na; dat werk valt nu
weg. **Wat Bram wel zelf meet**, in taak #70, zijn de randen van een vakje en een invoerveld (de eis is
3 : 1). De lichte papierstappen zijn als enige rand te zwak, dus een vakje is het vinkvakje van het
brand book: het vakje van de telefoon zelf, in de themakleur. Of die rand de eis haalt, meet Bram.

### Twaalf thema's, en daarmee een donkere modus

**Het brand book laat de gebruiker de kleur kiezen**: twaalf thema's, zes licht en zes donker, onder de
knop met het tandwiel. In Thuiskok staat die knop onder de tab **Ik**. **Roest is de standaard**; wie
iets anders kiest, houdt dat op die telefoon. Daarmee is **de donkere modus er gratis bij**: in het
eerste voorstel was dat een Could met een eigen contrastcheck, nu zijn het zes kant-en-klare thema's.

## 2. Typografie

**De letter van het brand book: de systeemletter van de telefoon** (San Francisco op een iPhone,
Roboto op Android). Geen letter om te laden of te licenseren, en hij leest op elk scherm zoals de
gebruiker gewend is. Fraunces en Inter uit het eerste voorstel zijn vervallen; het brand book heeft
geen schreefletter meer sinds oktober 2026. Bedragen en hoeveelheden staan in **cijfers van gelijke
breedte**, zodat ze netjes onder elkaar staan (scherm 7 en 8).

**Twee gewichten**: normaal (`--font-weight-regular`) en vet (`--font-weight-bold`). Een halfvet kent
het brand book niet.

| Stijl | Token | Maat | Waar |
|---|---|---|---|
| Woordmerk | `--text-h1`, vet, in `--primary` | 36 | Welkom (scherm 1) |
| Kop 1 | `--text-h1` | 36 | De titel van een scherm, de naam van een recept |
| Weekprijs | `--text-h1`, vet, gelijke cijfers | 36 | Het bedrag op de weekprijs-kaart |
| Kop 2 | `--text-h2` | 20 | Een vraag in de onboarding |
| Kop 3 | `--text-h3` | 16 | De afdeling op de lijst (GROENTE EN FRUIT) |
| Tekst | `--text-base` | 14 | Uitleg, knoppen, de tabbalk |
| **Leestekst** | `--text-read` (**eigen**) | 17 | Wat gelezen wordt in de winkel en de keuken: de lijst, de ingrediënten |
| **Kookstap** | `--text-cook` (**eigen**) | 28 | De stap in de kookmodus (scherm 9) |

- **Twee eigen maten, en alleen die twee.** Het brand book is gemaakt voor een scherm op een bureau, met
  14 punten als tekst. Thuiskok wordt gelezen terwijl je door de winkel loopt en op een armlengte van het
  aanrecht. Daarom krijgen de lijst en het recept 17 punten en de kookstap 28. Het brand book staat dat
  toe als eigen token van de app; een maat van het brand book zelf passen we niet aan.
- **De app volgt de lettergrootte van de telefoon.** Wie de letters groter zet, krijgt ze groter; de
  schermen zijn getekend met ruimte voor 200 %.
- **Nooit tekst kleiner dan 12 punten** (`--text-sm`, de kleinste maat die Thuiskok gebruikt), en die
  alleen voor *indicatief*, de prijs per portie onder de weekprijs en een label.

## 3. Maten en ruimte

Alles uit het brand book:

- **Een raster van 4 punten**: `--spacing-1` is 4, `--spacing-2` is 8, enzovoort.
- **De zijmarge van elk scherm is 16 punten** (`--spacing-4`).
- **Alles wat je aantikt is minstens 44 × 44 punten** (`--tap`), ook als het eruitziet als een klein
  icoon (⇄, ♡). Het eerste voorstel zei 48; het brand book en de richtlijnen van Apple houden 44 aan.
  **In de kookmodus is het 64 punten** (`--tap-cook`, **eigen**), voor natte handen.
- **Hoeken:** `--radius-3` (12) voor kaarten en panelen, `--radius-pill` (helemaal rond) voor knoppen
  en keuzes.
- **Schaduw** alleen voor wat over iets heen ligt (scherm 6). Kaarten liggen plat op de achtergrond, met
  `--bg-2` als verschil.

## 4. De onderdelen

**Waar het brand book een onderdeel heeft, gebruikt Thuiskok dat.** Alleen vier onderdelen zijn
eigen, omdat het brand book ze niet kent.

| Onderdeel | Uit het brand book | Hoe het eruitziet in Thuiskok | Op scherm |
|---|---|---|---|
| **Primaire knop** | `.btn--primary`, `.btn--touch`, `.btn--block` | Roest, over de hele breedte | 1, 2, 3, 4, 8 |
| **Secundaire knop** | `.btn` | Rand, tekst in `--fg-1` | 6 (Apple, Google, e-mail) |
| **Tekstknop** | een link | Alleen tekst, in `--primary` | Overslaan, Later, Meer recepten |
| **Keuze** | `.seg` | Een rij rondjes met het getal; gekozen in de themakleur | 2 |
| **Vinkvakje** | `.check` | Het vakje van de telefoon, in de themakleur | 3, 7 |
| **Weekprijs-kaart** | `.hero` op `--bg-3` | Het bedrag groot; eronder klein (`--text-sm`) de prijs per portie en *indicatief*: "€ 5,23 per portie · indicatief" (go/no-go 2, [prototype](14-prototype-en-usertest.md)) | 4 |
| **Receptkaart** | `.card` | Foto links, naam, kooktijd, label, ⇄ rechts | 4, 5 |
| **Label** | `.tag` | *veggie*, *30 min* | 4, 5 |
| **Paneel** | `<dialog>` | Schuift van onderen in, het scherm erachter gedimd | 6 |
| **Melding** | `.flash` | Verdwijnt vanzelf | "Opgeslagen", "Geen bereik: de lijst werkt gewoon" |
| **Instellingen** | de knop met het tandwiel | Het thema en de breedte | Ik |
| **Lijstrij** | **eigen** | Vinkvakje, product, hoeveelheid rechts; afgevinkt zakt hij naar onderen | 7 |
| **Tabbalk** | **eigen** | Onderin, drie tabs met icoon en woord; actief in `--primary` | 4, 7 |
| **Timer** | **eigen** | Een grote knop in `--primary` met de tijd; loopt af, trilt en piept | 9 |
| **Kookstap** | **eigen** | Eén stap per scherm in `--text-cook`, Vorige en Volgende onderin | 9 |

**Elke toestand staat in Figma** (gewoon, ingedrukt, uit, gekozen), zodat een developer nooit hoeft te
raden. Voor de onderdelen uit het brand book bestaan die toestanden al.

## 5. Iconen

**Eén set: Phosphor Icons**, gratis en met een open licentie (MIT), in de stijl *regular*. Het brand
book schrijft geen set voor, dus dit is een eigen keuze. De vaste iconen:

| Betekenis | Icoon | Waar |
|---|---|---|
| Week | kalender | Tabbalk |
| Lijst | lijstje met vinkjes | Tabbalk |
| Ik | persoon | Tabbalk |
| Wisselen | twee pijlen (⇄) | Receptkaart |
| Favoriet | hartje (♡) | Recept |
| Timer | stopwatch | Kookmodus |
| Terug en sluiten | pijl naar links, kruisje | Bovenaan elk scherm |

Een icoon staat **altijd naast een woord**, behalve terug, sluiten, wisselen en favoriet. Die vier
krijgen een naam voor de schermlezer ("Wissel dit recept").

## 6. Foto's en gerechten

**Thuiskok levert de gerechten** (besluit van de klant, 11 november 2026, op taak #58: *"ik ga zoveel
mogelijk kopieren van bestaande hellofresh gerechten die ik bewaard heb"*). Een fotograaf is daarmee
niet nodig, en de foto's kosten niets tegen het plafond. Het advies van het bureau daarbij:

- **Het gerecht nakoken mag, de foto overnemen niet.** Een recept als idee is vrij, maar de foto's en
  de teksten van HelloFresh zijn van HelloFresh. Thuiskok kookt het gerecht in de eigen keuken, schrijft
  de stappen in eigen woorden en maakt een eigen foto.
- **Daglicht, van bovenaf of schuin, op een gewone tafel.** Een bord zoals het thuis wordt opgeschept,
  niet zoals in een restaurant.
- **Het gerecht vult het vierkant**, zodat het op de kleine foto van de receptkaart (scherm 4) nog te
  herkennen is.
- **Geen tekst in de foto.** De naam en de kooktijd staan ernaast.

## 7. De toon

De woorden horen bij het merk. Vijf regels, uit de wireframes, de interviews en het brand book:

- **Je, niet u.** Thuiskok praat als iemand aan de keukentafel.
- **Kort en concreet.** "Maak mijn weekmenu", niet "Start met het samenstellen van je menu".
- **Geld zonder schreeuwen.** "€ 2,10 goedkoper", nooit "bespaar nu!". De weekprijs is het bewijs dat
  je bespaart, geen reclame ([persona's](08-personas.md)).
- **Eerlijk over wat we niet weten.** Een prijs is *indicatief*, en dat staat er altijd bij.
- **Geen gedachtestreepje** in de app. Het brand book verbiedt het; een dubbele punt of een nieuwe zin
  doet hetzelfde.

## Wat hier bewust nog niet staat

- **Een logo.** Buiten de scope, zoals de klant besloot. Het woordmerk houdt de plek vrij.
- **Het beheerportaal.** Dat gebruikt het brand book zoals het is; het volgt met sprint 2.
- **Animaties.** Een Could; eerst moet de basis werken.

## Volgende stap

Het klikbare prototype en de usertest (taak #58): zie [het prototype en de usertest](14-prototype-en-usertest.md).
