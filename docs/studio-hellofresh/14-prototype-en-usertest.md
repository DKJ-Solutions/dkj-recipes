# 14. Het klikbare prototype en de usertest

**Eigenaar:** Iris en Mehmet (het prototype), Bram (de usertest) · **Bewaakt door:** Lotte (Design
Lead) · **Week 8:** 4–8 januari 2027 · **Status:** **getest** op 11 november 2026 (taak #58);
**go/no-go 2: go, met de prijs per portie** (11 november 2026)

> **Wat een klikbaar prototype is.** De wireframes in de echte kleuren, letters en onderdelen, met
> knoppen die echt naar het volgende scherm gaan. Er zit nog geen code achter: de recepten, de prijzen
> en het account zijn nep. Het is goed genoeg om iemand een telefoon te geven en te zeggen "maak je
> weekmenu", en te kijken waar het misgaat. In het echte project staat het in Figma; hier staat het als
> tekst.
>
> **Wat een usertest is.** Vijf mensen doen elk alleen een paar opdrachten met het prototype, en zeggen
> hardop wat ze denken. Bram kijkt en vraagt niets voor. Vijf is genoeg: na vijf mensen komen dezelfde
> problemen steeds terug.

## Wat de klant vooraf besloot

Drie vragen stonden open voor het prototype getekend kon worden. Dave beantwoordde ze op 11 november
2026, als klant en als CEO:

1. **Het merk volgt zoveel mogelijk het DKJ brand book.** Het [designsysteem](13-designsysteem.md) is
   daarop aangepast: het thema Roest, de systeemletter, de onderdelen van het brand book, en vier eigen
   onderdelen erbovenop.
2. **Thuiskok levert de gerechten zelf**, zoveel mogelijk nagekookt van bewaarde HelloFresh-gerechten.
   Het prototype gebruikt daarom twaalf van zulke gerechten, met een eigen foto (zie het designsysteem,
   hoofdstuk 6, over wat wel en niet mag).
3. **Chris speelt de vijf deelnemers, als fictie gemarkeerd**, zoals bij de interviews ([interviews](07-interviews.md)).
   **Alle uitkomsten hieronder zijn dus fictief.** Ze laten zien wat het team verwacht en waar het ontwerp
   kan haperen, niet wat echte mensen doen. Hoofdstuk "Wat dit bewijst, en wat niet" zegt wat daaruit volgt.

## Het prototype

**Twaalf schermen**: de negen [wireframes](12-wireframes.md) en drie premiumschermen, die Iris er nu bij
tekende. Alle schermen gebruiken het [designsysteem](13-designsysteem.md).

| Route | Schermen | Wat er klikt |
|---|---|---|
| **De eerste keer** (flow 1) | Welkom, aantal eters, wat eet je niet, het weekmenu, bewaar je menu | Alles; het account is nep, elke knop "gaat goed" |
| **De week** (flow 2) | Het weekmenu, een recept wisselen | Wisselen tussen twaalf recepten; de weekprijs rekent mee |
| **De winkel** (flow 3) | De boodschappenlijst | Afvinken; een afgevinkte rij zakt naar onderen |
| **De keuken** (flow 4) | Het recept, de kookmodus | Drie stappen van één recept, met een timer die echt loopt |
| **Premium** (flow 5) | Het weekbudget, de gedeelde lijst, premium nemen | Een budget instellen; delen en betalen zijn nep |

- **De premiumschermen volgen het patroon uit de wireframes**: premium verschijnt waar het iets oplost.
  Het weekbudget staat onder de weekprijs ("Stel een budget in"), de gedeelde lijst bovenaan de lijst
  ("Deel met je huisgenoot"). Beide openen hetzelfde scherm: wat premium kost (€ 2,49 per maand in het
  prototype) en één knop.
- **De prijzen in het prototype zijn verzonnen.** De echte komen uit de prijstabel van Thuiskok
  ([technische verkenning](09-technische-verkenning.md)) en staan er pas vanaf sprint 6.
- **Opzeggen** (flow 6) zit er niet in: dat is één knop onder Ik en hoeft niet getest te worden.

## De usertest: de opzet

**Vijf deelnemers, elk 30 minuten, één voor één.** Bram leidt, Iris kijkt mee en noteert. De
deelnemers krijgen een telefoon met het prototype en zeven opdrachten, op een kaartje:

| # | Opdracht | Toetst |
|---|---|---|
| 1 | "Je hebt de app net gedownload. Zorg dat je weet wat je deze week eet." | Keuze 1: het account ná het weekmenu |
| 2 | "Is dit een menu dat je zou koken? Maak het zo dat je het wilt." | Keuze 2: een voorstel in plaats van zelf kiezen |
| 3 | "Wat kost deze week jou? Is dat goedkoop?" | Keuze 3: de weekprijs zonder vergelijking |
| 4 | "Volgende week eet je schoonmoeder twee avonden mee. Regel dat." | Keuze 4: het aantal eters per week |
| 5 | "Je staat in de supermarkt. Doe de boodschappen." (in een gang op kantoor, met kratjes per afdeling) | De lijst in de winkel |
| 6 | "Kook de eerste drie stappen van de pasta." | De kookmodus en de timer |
| 7 | "Je wilt niet meer dan € 35 per week uitgeven. Kan de app daarbij helpen?" | Premium: het weekbudget |

**Wat Bram meet, per opdracht:** gelukt zonder hulp, gelukt met een hint, of niet gelukt. En wat de
deelnemer hardop zegt.

## De deelnemers (fictief)

**Alle vijf zijn geschreven door Chris en gemarkeerd als fictie.** Ze volgen de drie
[persona's](08-personas.md), met twee keer Noor omdat zij de primaire persona is.

| # | Lijkt op | Wie | Fictief |
|---|---|---|---|
| T1 | Noor | 34, twee kinderen, zegde HelloFresh vorig jaar op om de prijs | ja |
| T2 | Noor | 41, zit nog bij een maaltijdbox, twijfelt al maanden | ja |
| T3 | Marieke | 38, alleenstaande moeder, drie kinderen, kookt elke avond | ja |
| T4 | Marieke | 45, gezin van vijf, doet elke zaterdag één grote boodschap | ja |
| T5 | Daan | 24, woont net op zichzelf, kookt nu vooral pasta | ja |

## De uitkomsten per keuze

| Keuze uit de [user flows](11-user-flows.md) | Uitkomst (fictief) | Oordeel |
|---|---|---|
| 1. **Het account ná het eerste weekmenu** | 5 van 5 bewaarden het menu. T2 aarzelde bij "Bewaar je menu": "waarom wil je nu mijn mail?" | **Bevestigd**, met een betere zin |
| 2. **Een voorstel in plaats van zelf kiezen** | 4 van 5 zeiden ja na één of twee wissels. T5 wilde alle recepten zien en vond "Meer recepten" zelf | **Bevestigd** |
| 3. **De weekprijs zonder vergelijking** | 2 van 5 zeiden uit zichzelf dat het goedkoop was. 3 vroegen "is dat veel?"; T1 en T2 rekenden het om naar een prijs per portie, omdat ze die van hun box kennen | **Niet bevestigd** |
| 4. **Het aantal eters per week** | 1 van 5 vond het potlood bij *2 eters* zelf (T4). 2 vonden het na een hint. 2 veranderden het aantal onder Ik, en dus voor elke week | **Bevestigd, met aanpassing** |

**Wat de andere opdrachten lieten zien:**

- **De lijst werkt in de winkel.** 5 van 5 werkten hem af; de leestekst van 17 punten las goed met een
  mandje in de hand. T3 miste de basisvoorraad onderaan en kocht dus zout.
- **De timer is niet duidelijk genoeg een knop.** 2 van 5 tikten op de tekst van de stap in plaats van
  op de timer.
- **Het weekbudget wordt begrepen.** 4 van 5 vonden het onder de weekprijs. 2 zeiden dat ze er
  € 2,49 per maand voor zouden betalen. **Dat bewijst niets over betaalbereidheid**: het is fictie, en
  zeggen is geen betalen. H3 en H4 uit de [interviews](07-interviews.md) blijven dus open.

## Wat het team zelf aanpast

Dit zijn wijzigingen binnen het ontwerp; de klant hoeft er niets voor te besluiten:

1. **"Bewaar je menu" krijgt een reden**: "Zodat je menu en je lijst op je telefoon blijven staan."
2. **Het aantal eters staat bovenaan het weekmenu als knop**: "Voor 2 · deze week anders?". Onder Ik
   heet het voortaan "Meestal kook ik voor", zodat het duidelijk de standaard is.
3. **De basisvoorraad staat bovenaan de lijst**, ingeklapt, met "Heb je dit in huis?" als kop.
4. **De timer wordt een volle knop met een stopwatch en het woord Start**, los van de tekst van de stap.

## Wat dit bewijst, en wat niet

- **Het bewijst dat het ontwerp te volgen is** voor wie het bedenkt zoals het team het bedacht. Elke
  opdracht lukte bij minstens 3 van de 5, en de haperingen hebben een concrete oplossing.
- **Het bewijst niet dat echte mensen het zo doen.** Alle vijf de deelnemers zijn fictie. Bij de
  interviews was er nog één echte stem; hier is er geen. **Het advies van het bureau**: toets dezelfde
  zeven opdrachten met echte mensen in de bèta (taak #69), en tel die uitkomsten apart.
- **Keuze 3 is het enige echte risico**: de weekprijs draagt de belofte, en als mensen niet zien dat
  hij laag is, valt de belofte weg. Daarover beslist de klant hieronder.

## Go/no-go 2: de keuze van de klant

Volgens het [plan van aanpak](04-plan-van-aanpak.md) keurt de klant hier het prototype goed. Pas dan
begint de bouw (sprint 1, taak #60). **Het team stelt drie mogelijkheden voor:**

1. **Go, met de prijs per portie onder de weekprijs** (het advies van het bureau). Klein, onder het
   bedrag: "€ 31,40 · € 5,23 per portie · indicatief". Wie een box gewend is, kent die maat en
   vergelijkt zelf. Het kost Iris en een developer samen ongeveer twee dagen, binnen het plafond van
   € 1.159.000. Het blijft geen uithangbord ([persona's](08-personas.md)): de weekprijs blijft voorop.
2. **Go, zonder aanpassing.** De weekprijs blijft zoals hij is, en de bèta (taak #69) toetst opnieuw of
   mensen hem begrijpen. Geen extra werk nu, wel het risico dat de belofte pas in de bèta blijkt te
   haperen.
3. **Nog een ronde eerst.** De vier aanpassingen en optie 1 doorvoeren, en opnieuw testen met vijf
   **echte** mensen, door Thuiskok geworven. De bouw begint dan een week later.

**Bewust niet voorgesteld:** de weekprijs naast die van een maaltijdbox zetten ("een box kost vanaf
€ 4,30 per portie"). Dat noemt een concurrent, vraagt elk kwartaal een nieuwe bron, en het voorbeeldmenu
in het prototype is per portie juist duurder dan dat vanaf-bedrag. Een vergelijking die niet altijd
klopt, breekt de regel "eerlijk over wat we niet weten" uit de [toon](13-designsysteem.md).

### Het besluit

**Go, met de prijs per portie onder de weekprijs (optie 1).** Dave koos dat op 11 november 2026 als
Thuiskok, op advies van het bureau. Wat dat vastlegt:

- **Onder de weekprijs staat klein de prijs per portie**: "€ 31,40 · € 5,23 per portie · indicatief".
  De weekprijs blijft voorop en blijft het grootste getal op het weekmenu. De prijs per portie is een
  hulp om te vergelijken en wordt nergens anders een uithangbord ([persona's](08-personas.md)).
- **De weekprijs-kaart in het [designsysteem](13-designsysteem.md) heeft die regel al.** Het prototype
  neemt hem over, samen met de vier aanpassingen hierboven. Iris en een developer doen dat in ongeveer
  twee dagen, binnen het plafond van € 1.159.000.
- **De bèta (taak #69) toetst keuze 3 opnieuw**, nu met echte mensen. Hun uitkomsten tellen apart van
  de fictieve uitkomsten hier.

Daarmee is fase 2 rond.

## Volgende stap

De bouw begint met sprint 1, het fundament (taak #60).
