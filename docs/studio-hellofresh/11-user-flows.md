# 11. De user flows

**Eigenaar:** Mehmet en Iris (UX/UI-designers) · **Bewaakt door:** Lotte (Design Lead) · **Week 5:**
14–18 december 2026 · **Status:** **uitgewerkt** op 11 november 2026 (taak #55)

> **Wat een user flow is.** De route die iemand door de app loopt om één ding gedaan te krijgen: van
> het moment dat ze de app opent tot het moment dat het klaar is. Nog zonder schermontwerp; dat zijn de
> wireframes (taak #56). Deze flows volgen de scope die Thuiskok bij go/no-go 1 goedkeurde
> ([discovery-rapport](10-discovery-rapport.md), hoofdstuk 6). Ze zijn het voorstel van het
> designteam. De klant keurt ze goed met het prototype, bij go/no-go 2 (taak #58).

## In één oogopslag

| # | Flow | Voor wie | MoSCoW | Gratis of premium |
|---|---|---|---|---|
| 1 | De eerste keer: van downloaden tot het eerste weekmenu | Noor, Marieke, Daan | M | Gratis |
| 2 | Elke week: het weekmenu kiezen | Noor (primair) | M | Gratis |
| 3 | In de winkel: de boodschappenlijst afwerken | Marieke, Noor | M | Gratis |
| 4 | In de keuken: een recept koken | Iedereen | M | Gratis |
| 5 | Premium: het weekbudget en de gedeelde lijst | Marieke, Noor | M | Premium |
| 6 | Stoppen: premium opzeggen of de app laten liggen | Iedereen | M (als principe) | — |
| 7 | Het beheerportaal: een recept en de prijstabel bijhouden | Thuiskok | M | — |

**De hoofdroute is flow 2 → 3 → 4**, één keer per week. Die moet voor Noor sneller zijn dan het
weekmenu van haar box: openen, ja zeggen, boodschappen doen. Alles daarbuiten mag een tik verder weg.

## 1. De eerste keer

```text
Downloaden → Welkom (de belofte in één zin)
  → Voor hoeveel mensen kook je meestal? (1 tot 6)
  → Wat eet je niet? (vegetarisch, allergieën; overslaan mag)
  → Hoeveel avonden per week wil je koken? (standaard 3)
  → Het eerste weekmenu, met de weekprijs bovenaan
  → Bewaren? Maak een account (e-mail, Apple of Google)
```

- **Het account komt ná het eerste weekmenu.** Wie eerst moet inloggen, ziet nog niets van wat de app
  belooft. Het account is pas nodig om het menu te bewaren en op een tweede apparaat te zien.
- **Geen vraag naar een budget.** Het weekbudget is premium (flow 5). De onboarding vraagt alleen wat
  nodig is voor een menu, en blijft daarmee onder de minuut.
- **De weekprijs staat er vanaf het eerste scherm**, met het woord *indicatief*, zoals met de klant
  afgesproken ([intake](02-intake-klant.md)).

## 2. Elke week: het weekmenu kiezen

```text
App openen → Het voorstel voor deze week staat klaar (weekprijs bovenaan)
  ├─ Goed zo → Bevestigen → De boodschappenlijst is gemaakt (flow 3)
  ├─ Een recept wisselen → Twee of drie alternatieven, met wat de weekprijs dan wordt → terug
  └─ Deze week met meer of minder mensen → 1 tot 6 → de hoeveelheden en de weekprijs rekenen mee
```

- **De app stelt voor, de gebruiker zegt ja.** Dat is Noors kern: "nooit meer hoeven nadenken wat ik
  die week moest maken" ([persona's](08-personas.md)). Kiezen uit een lege lijst van tientallen
  recepten is de omgekeerde route, en die bieden we alleen via *wisselen*.
- **De weekprijs voorop, de prijs per portie in het recept.** Zo besloten in de MoSCoW: de prijs per
  portie trekt niemand over de streep (H2b), de weekprijs wel (H2a). Bij het wisselen tonen we het
  verschil in weekprijs, niet de prijs van het recept.
- **Het aantal eters is per week te kiezen** (M, uit de discovery). Wie niets wijzigt, houdt het getal
  uit de onboarding.
- **Geen deadline.** Een weekmenu kan elk moment, ook op de dag zelf. Er wordt niets bezorgd, dus er
  is niets om te missen.

## 3. In de winkel: de boodschappenlijst afwerken

```text
Lijst openen → Per afdeling gesorteerd (groente, zuivel, ...), samengevoegd over de week
  → Afvinken; afgevinkt zakt naar onderen
  → "Heb je al" (de basisvoorraad) staat apart onderaan, ingeklapt
  → Alles afgevinkt → Klaar
```

- **Eén regel per ingrediënt**, opgeteld over alle recepten van de week, in hele verpakkingen. Dat is
  hetzelfde getal waaruit de weekprijs komt ([technische verkenning](09-technische-verkenning.md)).
- **De lijst moet werken zonder bereik.** In een supermarkt is het netwerk vaak slecht, dus afvinken
  gebeurt op het toestel en synchroniseert later. Dit is een eis voor de bouw (sprint 4), niet alleen
  voor het ontwerp.
- **Zelf iets toevoegen** ("wc-papier") kan met één regel onderaan. Dat is geen recept, alleen tekst.

## 4. In de keuken: een recept koken

```text
Weekmenu → Recept → Ingrediënten (voor het aantal eters van deze week) → Start koken
  → Kookmodus: één stap per scherm, grote letters, het scherm blijft aan, timers per stap
  → Klaar → Hoe was het? (beoordelen; overslaan mag)
```

- **De kookmodus is wat de markt al gewend is**, geen verbetering ([teardown](03-hellofresh-teardown.md)).
  Hij moet dus minstens zo goed zijn als die van HelloFresh.
- **De kooktijd en de basisvoorraad staan bovenaan het recept**, voordat iemand begint. Dat is klacht 5
  over HelloFresh: recepten die langer duren dan er staat.
- **Beoordelen en favorieten zijn Should.** In de flow nemen ze één optionele tik aan het eind in.

## 5. Premium: het weekbudget en de gedeelde lijst

```text
Weekprijs aantikken → "Stel een weekbudget in" → Wat Premium geeft, en de prijs per maand
  → Afrekenen via de App Store of de Play Store → Budget invullen
  → Vanaf nu: het weekmenu blijft onder het budget, en wisselen toont wat erbinnen past

Boodschappenlijst → "Deel met je huisgenoot" → Uitnodiging (een link) → Samen afvinken
```

- **Premium wordt aangeboden waar het iets oplost**, niet in de onboarding: bij de weekprijs (het
  budget) en bij de lijst (het delen). Wie het niet wil, heeft er geen last van.
- **Afrekenen gaat via de app stores**, zoals besloten in de intake. Wij bouwen geen eigen betaling.
- **Restjesslim plannen staat hier niet in.** Het is Should geworden bij go/no-go 1. Wordt het toch
  gebouwd, dan komt het als een schakelaar bij het weekmenu (flow 2).

## 6. Stoppen

```text
Instellingen → Premium → "Opzeggen" → Uitleg dat dit via de App Store of de Play Store gaat
  → Rechtstreeks naar die pagina → Het gratis deel blijft gewoon werken
```

- **Geen abonnementsdwang** is ons eerste verbeterpunt, en de klacht waar de ACM HelloFresh op aansprak
  ([teardown](03-hellofresh-teardown.md)). Opzeggen kost dus hooguit drie tikken, zonder "weet je het
  zeker?"-schermen en zonder korting om te blijven.
- **De app laten liggen kost niets.** Wie een week geen menu kiest, krijgt hooguit één herinnering
  (Should, flow 2), en geen rekening.

## 7. Het beheerportaal (Thuiskok)

```text
Inloggen (beheerder) → Recepten → Nieuw recept
  → Titel, foto, kooktijd, stappen
  → Ingrediënten: kiezen uit de catalogus, met een hoeveelheid per portie
  → Ontbreekt een ingrediënt? → Toevoegen aan de catalogus (afdeling, verpakking, geschatte prijs)
  → Voorbeeld zoals de app het toont → Publiceren

Inloggen → Prijstabel → Per ingrediënt de geschatte prijs en de peildatum → Bijwerken (elk kwartaal)
```

- **Een ingrediënt bestaat maar één keer**, in de catalogus. Daardoor kan de lijst samenvoegen en kan de
  weekprijs rekenen ([technische verkenning](09-technische-verkenning.md)).
- **De prijstabel is nieuw in de MoSCoW** (M, uit de discovery). Thuiskok houdt haar zelf bij; het
  portaal laat zien welke prijzen ouder zijn dan een kwartaal.
- **Het portaal is een webpagina, geen app**, en wordt alleen door Thuiskok gebruikt. Het hoeft niet
  mooi, wel snel: de klant voert in week 10 de eerste 50 recepten in.

## Wat de usertest moet uitwijzen (taak #58)

De flows rusten op één echte stem en acht fictieve. Deze keuzes zijn daarom de eerste die de usertest
met vijf mensen toetst:

1. **Het account ná het eerste weekmenu** (flow 1): haakt niemand af als het dan toch gevraagd wordt?
2. **Een voorstel in plaats van zelf kiezen** (flow 2): zegt men ja, of wisselt iedereen alles?
3. **De weekprijs zonder vergelijking** (flow 2): begrijpt Noor dat ze bespaart, of moet de app de
   weekprijs naast een box of een gewone boodschappenweek zetten? Dat laatste is nu geen functie.
4. **Het aantal eters per week** (flow 2): gebruikt Marieke het, of is één getal per account genoeg?

## Volgende stap

De wireframes van de kernschermen (taak #56): één wireframe per stap in de flows 1 tot en met 4,
daarna de premium- en portaalschermen.
