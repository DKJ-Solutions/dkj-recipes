# 13. Het designsysteem

**Eigenaar:** Iris en Mehmet (UX/UI-designers) · **Bewaakt door:** Lotte (Design Lead) · **Week 7:**
28–31 december 2026 · **Status:** **voorstel** op 11 november 2026 (taak #57), voor de klant

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
B** (€ 1.159.000, zie het [discovery-rapport](10-discovery-rapport.md)). Dat merk is: de kleuren, de
typografie en de toon. **Een logo hoort er niet bij.** Tot er een is, staat de naam als woordmerk in de
koptekstletter (hieronder). Een logo kan later apart worden besteld; het designsysteem hoeft daarvoor
niet te veranderen.

## Het merk in één zin

**Een keukentafel, geen restaurant.** Thuiskok belooft "het gemak van een box, voor het geld van gewone
boodschappen". Het merk moet dus warm en gewoon voelen, niet luxe. Drie keuzes volgen daaruit:

- **Warme kleuren uit de keuken** (paprika, saffraan, basilicum) op een lichte, crèmekleurige
  ondergrond, als bloem op het aanrecht.
- **Geen limoengroen.** Dat is de kleur van HelloFresh, en Noor wil juist weg bij de box
  ([persona's](08-personas.md)). Thuiskok mag niet lijken op wat ze opzegt.
- **Rustig en ruim.** De lijst wordt gelezen in de winkel, met een mandje in de andere hand, en het
  recept in de keuken op een armlengte ([user flows](11-user-flows.md), flows 3 en 4). Weinig tegelijk
  op een scherm, en grote vlakken om op te tikken.

## 1. Kleuren

Elke kleur heeft een naam uit de keuken en een vaste rol. Een scherm gebruikt **de rol**, niet de
kleur: "primaire knop", niet "paprika". Zo kan een kleur later wijzigen zonder dat elk scherm opnieuw
moet.

| Naam | Hex | Rol |
|---|---|---|
| **Paprika** | `#B8461B` | De hoofdkleur: de primaire knop, de actieve tab, links |
| **Inkt** | `#1F2A2E` | Alle tekst en iconen |
| **Peper** | `#5B6770` | Tekst die minder belangrijk is: kooktijd, *indicatief*, uitleg |
| **Bloem** | `#FBF7F0` | De achtergrond van elk scherm |
| **Wit** | `#FFFFFF` | Kaarten en panelen, boven op Bloem |
| **Saffraan** | `#F6C453` | Het accent: de teller op de lijst, een nieuw voorstel |
| **Saffraan licht** | `#FCE7C8` | De weekprijs-kaart (scherm 4) |
| **Basilicum** | `#2F6B4F` | Veggie, en "gelukt" (afgevinkt, opgeslagen) |
| **Basilicum licht** | `#E8F1EC` | Het label *veggie* |
| **Tomaat** | `#B42318` | Fouten en allergenen |
| **Lijn** | `#D9D2C5` | Scheidingslijnen tussen rijen |
| **Rand** | `#8C8579` | De rand van een vakje, een keuze of een invoerveld |

### Contrast: gemeten, niet geschat

De app moet voldoen aan **WCAG 2.1 niveau AA** (de toegankelijkheidscheck in fase 4, taak #70). Dat
eist een contrast van **4,5 : 1** voor gewone tekst en **3 : 1** voor grote tekst en voor de rand van
een bedieningselement. Elke combinatie die de app gebruikt, is nagerekend:

| Voorgrond | Achtergrond | Contrast | Genoeg voor |
|---|---|---|---|
| Inkt | Bloem | 13,8 : 1 | Alle tekst |
| Inkt | Wit | 14,7 : 1 | Alle tekst |
| Inkt | Saffraan licht | 12,2 : 1 | De weekprijs |
| Inkt | Saffraan | 9,1 : 1 | De teller |
| Inkt | Basilicum licht | 12,8 : 1 | Het label *veggie* |
| Peper | Bloem | 5,4 : 1 | Gewone tekst |
| Peper | Wit | 5,8 : 1 | Gewone tekst |
| Paprika | Bloem | 5,0 : 1 | Gewone tekst (links) |
| Wit | Paprika | 5,3 : 1 | De tekst op de primaire knop |
| Wit | Basilicum | 6,3 : 1 | Tekst op een groen vlak |
| Basilicum | Bloem | 5,9 : 1 | Gewone tekst |
| Tomaat | Bloem | 6,2 : 1 | Foutmeldingen |
| Rand | Bloem | 3,4 : 1 | De rand van een vakje (eis 3 : 1) |
| Lijn | Bloem | 1,4 : 1 | **Alleen versiering**: een scheidingslijn, nooit de enige grens van iets aanklikbaars |

**Kleur draagt nooit alleen de betekenis.** Paprika en Tomaat liggen dicht bij elkaar, en wie
kleurenblind is, ziet het verschil tussen rood en groen niet. Een fout heeft daarom altijd een icoon en
een zin, een allergeen altijd het woord, en *veggie* altijd het label.

**Een donkere modus** staat niet in deze versie. Hij is een Could: de kookmodus is al groot en rustig,
en een tweede set kleuren kost een eigen contrastcheck.

## 2. Typografie

Twee lettertypes, allebei gratis en met een open licentie (SIL Open Font License), zodat ze in de app
mogen worden meegeleverd zonder licentiekosten:

- **Fraunces** voor de koppen en het woordmerk. Een warme letter met een zachte schreef: een
  kookboek, geen spreadsheet.
- **Inter** voor alle andere tekst. Goed leesbaar op kleine schermen, en met **cijfers van gelijke
  breedte**, zodat bedragen en hoeveelheden netjes onder elkaar staan (scherm 7 en 8).

| Stijl | Letter | Maat / regelhoogte | Waar |
|---|---|---|---|
| Woordmerk | Fraunces, vet | 32 / 40 | Welkom (scherm 1) |
| Kop 1 | Fraunces, halfvet | 28 / 34 | De titel van een scherm, de naam van een recept |
| Weekprijs | Inter, vet, gelijke cijfers | 32 / 38 | Het bedrag op de weekprijs-kaart |
| Kop 2 | Inter, halfvet | 20 / 26 | Een vraag in de onboarding |
| Afdeling | Inter, halfvet, hoofdletters | 13 / 18 | GROENTE EN FRUIT op de lijst |
| Tekst | Inter, normaal | 17 / 24 | Alles wat gelezen wordt |
| Klein | Inter, normaal | 15 / 20 | Kooktijd, *indicatief*, uitleg (in Peper) |
| Kookstap | Inter, normaal | 28 / 36 | De stap in de kookmodus (scherm 9) |

- **De tekst is 17 punten, niet 14.** De lijst wordt gelezen terwijl je door de winkel loopt.
- **De app volgt de lettergrootte van de telefoon.** Wie de letters groter zet, krijgt ze groter; de
  schermen zijn getekend met ruimte voor 200 %.
- **Nooit tekst kleiner dan 13 punten**, ook niet in een label.

## 3. Maten en ruimte

- **Een raster van 4 punten.** Elke afstand is een veelvoud van 4: 4, 8, 12, 16, 24, 32, 48.
- **De zijmarge van elk scherm is 16 punten.**
- **Alles wat je aantikt is minstens 48 × 48 punten**, ook als het eruitziet als een klein icoon (⇄,
  ♡). In de kookmodus is dat **64 punten**, voor natte handen.
- **Hoeken:** 12 punten voor kaarten en panelen, 999 (helemaal rond) voor knoppen en keuzes.
- **Schaduw** alleen voor een paneel dat over iets heen ligt (scherm 6). Kaarten liggen plat op Bloem,
  met Wit als verschil.

## 4. De onderdelen

Dit zijn de onderdelen waaruit de negen [wireframes](12-wireframes.md) bestaan. Elk onderdeel heeft
een vaste vorm en een vast aantal toestanden.

| Onderdeel | Hoe het eruitziet | Toestanden | Op scherm |
|---|---|---|---|
| **Primaire knop** | Paprika, witte tekst, helemaal rond, over de hele breedte, 56 hoog | gewoon, ingedrukt (iets donkerder), uit (Lijn, tekst in Peper) | 1, 2, 3, 4, 8 |
| **Secundaire knop** | Wit, rand in Inkt, tekst in Inkt | gewoon, ingedrukt | 6 (Apple, Google, e-mail) |
| **Tekstknop** | Alleen tekst, in Paprika | gewoon, ingedrukt | Overslaan, Later, Meer recepten |
| **Keuze** | Een rondje met het getal, rand in Rand; gekozen: Paprika, wit getal | leeg, gekozen | 2 |
| **Vinkvakje** | Vierkant met rand in Rand; aangevinkt: Basilicum met wit vinkje | leeg, aangevinkt | 3, 7 |
| **Weekprijs-kaart** | Saffraan licht, het bedrag in de stijl Weekprijs, *indicatief* in Klein | — | 4 |
| **Receptkaart** | Wit, foto links (vierkant, hoeken 8), naam, kooktijd, label, ⇄ rechts | gewoon, ingedrukt | 4, 5 |
| **Label** | Klein, in een rond vlakje: *veggie* op Basilicum licht | — | 4, 5 |
| **Lijstrij** | Vinkvakje, product, hoeveelheid rechts in gelijke cijfers, Lijn eronder | open, afgevinkt (tekst in Peper, doorgestreept, zakt naar onderen) | 7 |
| **Afdelingskop** | De stijl Afdeling, in Peper | — | 7 |
| **Tabbalk** | Wit, drie tabs met icoon en woord; actief in Paprika, de rest in Peper | — | 4, 7 |
| **Paneel** | Wit, hoeken 12 boven, schaduw, het scherm erachter gedimd | open, dicht | 6 |
| **Timer** | Een grote knop in Paprika met de tijd in Inter vet; loopt: de tijd telt af | klaar, loopt, afgelopen (trilt en piept) | 9 |
| **Melding** | Een balk onderin, Inkt met witte tekst, verdwijnt na 4 seconden | — | "Opgeslagen", "Geen bereik: de lijst werkt gewoon" |

**Elke toestand staat in Figma**, zodat een developer nooit hoeft te raden hoe iets eruitziet als het
is ingedrukt of uit staat.

## 5. Iconen

**Eén set: Phosphor Icons**, gratis en met een open licentie (MIT), in de stijl *regular* (lijnen van
1,5). Een set kopen of tekenen is niet nodig, en één set houdt alle iconen gelijk. De vaste iconen:

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

## 6. Foto's

De foto's van de recepten maken het meeste verschil in hoe de app voelt. De richtlijn:

- **Daglicht, van bovenaf of schuin, op een gewone tafel.** Een bord zoals het thuis wordt opgeschept,
  niet zoals in een restaurant.
- **Het gerecht vult het vierkant**, zodat het op de kleine foto van de receptkaart (scherm 4) nog te
  herkennen is.
- **Geen tekst in de foto.** De naam en de kooktijd staan ernaast, zodat ze leesbaar en vertaalbaar
  blijven.

**Wie de foto's maakt, is nog niet besloten.** Thuiskok heeft een eigen keuken en eigen recepten
([intake](02-intake-klant.md)), maar de foto's staan niet in de offerte. Dat is een vraag voor de
klant (hieronder).

## 7. De toon

De woorden horen bij het merk. Vier regels, uit de wireframes en de interviews:

- **Je, niet u.** Thuiskok praat als iemand aan de keukentafel.
- **Kort en concreet.** "Maak mijn weekmenu", niet "Start met het samenstellen van je menu".
- **Geld zonder schreeuwen.** "€ 2,10 goedkoper", nooit "bespaar nu!". De weekprijs is het bewijs dat
  je bespaart, geen reclame ([persona's](08-personas.md)).
- **Eerlijk over wat we niet weten.** Een prijs is *indicatief*, en dat staat er altijd bij.

## Wat hier bewust nog niet staat

- **Een logo.** Buiten de scope, zoals de klant besloot. Het woordmerk houdt de plek vrij.
- **De premiumschermen en het beheerportaal.** Die gebruiken dezelfde onderdelen; Iris tekent de
  premiumschermen in het prototype (taak #58), het portaal volgt met sprint 2.
- **Een donkere modus en animaties.** Een Could; eerst moet het prototype bewijzen dat de basis werkt.

## Vragen aan de klant

1. **Wie maakt de foto's van de recepten?** Thuiskok in de eigen keuken, met deze richtlijn, of een
   fotograaf die het bureau regelt (dat is extra scope tegen het plafond)?
2. **Akkoord met het merkvoorstel?** De kleuren, de twee lettertypes en de toon hierboven. Een
   wijziging nu kost een middag; na het prototype kost hij een week.

## Volgende stap

Het klikbare prototype en de usertest met 5 mensen (taak #58): de wireframes in deze kleuren, letters
en onderdelen, en de vier keuzes uit de [user flows](11-user-flows.md) getoetst. Daarna volgt go/no-go 2.
