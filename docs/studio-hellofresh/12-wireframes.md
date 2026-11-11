# 12. De wireframes van de kernschermen

**Eigenaar:** Iris en Mehmet (UX/UI-designers) · **Bewaakt door:** Lotte (Design Lead) · **Week 6:**
21–23 december 2026 · **Status:** **uitgewerkt** op 11 november 2026 (taak #56)

> **Wat een wireframe is.** Een schets van een scherm in grijs en blokjes: wat er staat en waar, nog
> zonder kleur, lettertype of foto's. Dat komt pas in het designsysteem (taak #57). Een wireframe laat
> de klant en het team praten over de **inhoud en de volgorde** voordat iemand over smaak begint.
>
> Elk scherm hieronder hoort bij een stap uit de [user flows](11-user-flows.md). In het echte project
> staan ze in Figma; hier staan ze als tekst. `[ Knop ]` is een knop, `( )` een keuze, `▸` een tik naar
> een volgend scherm, en `░` een plek voor een foto.

## De schermen in één oogopslag

| # | Scherm | Flow | Wat het moet doen |
|---|---|---|---|
| 1 | Welkom | 1 | De belofte in één zin, en één knop |
| 2 | Voor hoeveel mensen | 1 | Het aantal eters, in één tik |
| 3 | Wat eet je niet | 1 | Voorkeuren en allergieën; overslaan mag |
| 4 | Het weekmenu | 1, 2 | **Het belangrijkste scherm**: het voorstel, de weekprijs, bevestigen |
| 5 | Een recept wisselen | 2 | Twee of drie alternatieven, met het verschil in weekprijs |
| 6 | Bewaar je menu | 1 | Het account, ná het eerste menu |
| 7 | De boodschappenlijst | 3 | Per afdeling, afvinken, de basisvoorraad apart |
| 8 | Het recept | 4 | Kooktijd en basisvoorraad bovenaan, dan de ingrediënten |
| 9 | De kookmodus | 4 | Eén stap per scherm, grote letters, een timer |

**De navigatie** is een balk onderin met drie tabs: **Week** (scherm 4), **Lijst** (scherm 7) en **Ik**
(account, premium, opzeggen). Drie tabs, omdat de hoofdroute uit drie stappen bestaat en de derde,
koken, vanuit de week begint.

## 1. Welkom

```text
┌──────────────────────────────────┐
│                                  │
│            THUISKOK              │
│                                  │
│   Het gemak van een box,         │
│   voor het geld van gewone       │
│   boodschappen.                  │
│                                  │
│   Elke week een menu en een      │
│   boodschappenlijst. Zonder      │
│   abonnement.                    │
│                                  │
│      [   Maak mijn weekmenu  ]   │
│                                  │
│         Ik heb al een account ▸  │
└──────────────────────────────────┘
```

- **De belofte uit het discovery-rapport, letterlijk.** "Zonder abonnement" staat er meteen bij: dat
  is wat Noor bij de box mist.
- **Inloggen is de tweede, kleine route.** De eerste keer begint niemand met een account (flow 1).

## 2. Voor hoeveel mensen kook je?

```text
┌──────────────────────────────────┐
│ ‹                         1 van 3│
│                                  │
│  Voor hoeveel mensen kook je     │
│  meestal?                        │
│                                  │
│   ( 1 )  ( 2 )  ( 3 )            │
│   ( 4 )  ( 5 )  ( 6 )            │
│                                  │
│  Je kunt dit elke week anders    │
│  kiezen.                         │
│                                  │
│  Hoeveel avonden wil je koken?   │
│   ( 2 )  (•3 )  ( 4 )  ( 5 )     │
│                                  │
│      [      Volgende       ]     │
└──────────────────────────────────┘
```

- **Twee vragen op één scherm**, omdat ze bij elkaar horen: samen bepalen ze hoe groot de week is.
- **"Je kunt dit elke week anders kiezen"** neemt Mariekes zorg weg voordat ze haar heeft.

## 3. Wat eet je niet?

```text
┌──────────────────────────────────┐
│ ‹                         2 van 3│
│                                  │
│  Wat eet je niet?                │
│                                  │
│  [ ] Vlees      [ ] Vis          │
│  [ ] Gluten     [ ] Lactose      │
│  [ ] Noten      [ ] Pinda        │
│  [ ] Ei         [ ] Selderij     │
│                                  │
│  Iets anders ▸                   │
│                                  │
│      [      Volgende       ]     │
│            Overslaan             │
└──────────────────────────────────┘
```

- **Allergenen moeten kloppen** zodra we ze tonen ([teardown](03-hellofresh-teardown.md)). Dit scherm
  filtert alleen; de lijst komt uit de allergenen die Thuiskok per ingrediënt in het portaal invoert.
- **Overslaan mag**, zodat iemand zonder beperkingen niet hoeft na te denken.

## 4. Het weekmenu (het belangrijkste scherm)

```text
┌──────────────────────────────────┐
│ Week 51              2 eters  ✎  │
│ ┌──────────────────────────────┐ │
│ │ Deze week     € 31,40        │ │
│ │ indicatief · 3 avonden       │ │
│ └──────────────────────────────┘ │
│ ┌────┐ Romige pasta met spinazie │
│ │░░░░│ 25 min · veggie         ⇄ │
│ └────┘                           │
│ ┌────┐ Kip-curry met rijst       │
│ │░░░░│ 35 min                  ⇄ │
│ └────┘                           │
│ ┌────┐ Shakshuka                 │
│ │░░░░│ 20 min · veggie         ⇄ │
│ └────┘                           │
│   [  Dit wordt het: maak mijn  ] │
│   [       boodschappenlijst    ] │
├──────────────────────────────────┤
│   Week   ·   Lijst   ·   Ik      │
└──────────────────────────────────┘
```

- **De weekprijs staat bovenaan, groot**, met *indicatief* eronder (zoals met de klant afgesproken).
  Een prijs per recept staat hier niet: die staat in het recept zelf (scherm 8).
- **Eén knop om ja te zeggen.** Dat is flow 2 voor Noor: openen, kijken, bevestigen.
- **⇄ wisselt één recept** (scherm 5). Het potlood bij *2 eters* verandert het aantal voor deze week.
- **Het bedrag hierboven is een voorbeeld**, geen berekening. De echte weekprijs komt uit de prijstabel
  ([technische verkenning](09-technische-verkenning.md)).

## 5. Een recept wisselen

```text
┌──────────────────────────────────┐
│ ✕  Wissel: Kip-curry met rijst   │
│                                  │
│ ┌────┐ Kip-teriyaki met noedels  │
│ │░░░░│ 30 min                    │
│ └────┘ week € 0,80 goedkoper     │
│                                  │
│ ┌────┐ Linzencurry               │
│ │░░░░│ 30 min · veggie           │
│ └────┘ week € 2,10 goedkoper     │
│                                  │
│ ┌────┐ Kip-saté met friet        │
│ │░░░░│ 40 min                    │
│ └────┘ week € 1,20 duurder       │
│                                  │
│        Meer recepten ▸           │
└──────────────────────────────────┘
```

- **Het verschil in weekprijs, niet de prijs van het recept.** Dat volgt uit H2b: een prijskaartje per
  recept overtuigt niemand, de week wel.
- **Drie alternatieven, en pas daarna de hele lijst.** Kiezen uit tientallen is wat Noor niet wil.

## 6. Bewaar je menu

```text
┌──────────────────────────────────┐
│ (het weekmenu, gedimd)           │
├──────────────────────────────────┤
│  Bewaar je menu                  │
│                                  │
│  Dan staat het ook op je andere  │
│  telefoon, en volgende week      │
│  staat er een nieuw voorstel.    │
│                                  │
│  [   Doorgaan met Apple      ]   │
│  [   Doorgaan met Google     ]   │
│  [   Doorgaan met e-mail     ]   │
│                                  │
│            Later                 │
└──────────────────────────────────┘
```

- **Een paneel over het menu heen**, zodat het menu zichtbaar blijft: dat is waarom je een account
  maakt.
- **"Later" mag.** De lijst werkt ook zonder account, op dit ene toestel. Of men dan nog terugkomt, is
  vraag 1 voor de usertest ([user flows](11-user-flows.md)).

## 7. De boodschappenlijst

```text
┌──────────────────────────────────┐
│ Boodschappen week 51    12 van 18 │
│                                  │
│ GROENTE EN FRUIT                 │
│  [ ] Spinazie         1 zak 400 g│
│  [ ] Uien             1 net 1 kg │
│  [ ] Paprika rood     2 stuks    │
│ ZUIVEL                           │
│  [ ] Crème fraîche    1 bakje    │
│  [ ] Eieren           1 doos (6) │
│ ...                              │
│  [✓] Rijst            1 pak 500 g│
│  [✓] Kipfilet         1 bak 300 g│
│                                  │
│ ▸ Heb je al (5): olie, zout, ... │
│ + Zelf iets toevoegen            │
├──────────────────────────────────┤
│   Week   ·   Lijst   ·   Ik      │
└──────────────────────────────────┘
```

- **Per afdeling, in hele verpakkingen**, opgeteld over de week. Afgevinkt zakt naar onderen, zodat
  bovenaan altijd staat wat nog moet.
- **De teller rechtsboven** zegt hoe ver je bent, ook als de lijst langer is dan het scherm.
- **"Heb je al" is ingeklapt**: olie en zout staan er wel, maar zitten niet in de weg.
- **Dit scherm moet zonder bereik werken** (flow 3). Het ontwerp toont daarom geen laadmomenten.

## 8. Het recept

```text
┌──────────────────────────────────┐
│ ‹                              ♡ │
│ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ░░░░░░░░░░░ (foto) ░░░░░░░░░░░░░ │
│ Kip-curry met rijst              │
│ 35 min · 2 eters · € 2,95 p.p.   │
│                                  │
│ Uit je voorraad: olie, zout,     │
│ kerriepoeder                     │
│                                  │
│ INGREDIËNTEN (2 eters)           │
│  300 g  kipfilet                 │
│  150 g  rijst                    │
│  1      ui                       │
│  ...                             │
│                                  │
│      [     Start koken     ]     │
└──────────────────────────────────┘
```

- **Kooktijd en basisvoorraad staan bovenaan**, voor iemand begint. Dat is klacht 5 over HelloFresh.
- **Hier staat de prijs per portie**, klein. Wie het wil weten, vindt het; het is geen uithangbord.
- **♡ is favoriet maken** (Should). Het neemt geen ruimte in.

## 9. De kookmodus

```text
┌──────────────────────────────────┐
│ ✕                     Stap 3 / 6 │
│                                  │
│                                  │
│  Bak de kip in 5 minuten         │
│  bruin in een hapjespan.         │
│                                  │
│                                  │
│        [   ⏱  5:00 start   ]     │
│                                  │
│                                  │
│   ‹ Vorige          Volgende ›   │
└──────────────────────────────────┘
```

- **Eén stap per scherm, in grote letters**, te lezen op een armlengte van het aanrecht. Het scherm
  blijft aan zolang de kookmodus open is.
- **De timer hoort bij de stap**, met de tijd die Thuiskok in het portaal invoert.
- **Vegen of tikken naar de volgende stap**, ook met natte handen: de knoppen zijn groot en onderin.

## Wat hier bewust nog niet staat

- **De premiumschermen** (het weekbudget, de gedeelde lijst, afrekenen) en **opzeggen** (flows 5 en 6).
  Ze volgen hetzelfde patroon: premium verschijnt bij de weekprijs en bij de lijst, niet als eigen
  scherm in de onboarding. Iris tekent ze in het prototype (taak #58).
- **Het beheerportaal** (flow 7). Dat is een webpagina met formulieren; Wouter en Iris tekenen het met
  sprint 2, wanneer het gebouwd wordt.
- **Kleur, lettertype, iconen en de foto's.** Dat is het designsysteem (taak #57).

## Volgende stap

Het designsysteem (taak #57): de kleuren, de typografie en de knoppen waarmee deze wireframes het
klikbare prototype worden.
