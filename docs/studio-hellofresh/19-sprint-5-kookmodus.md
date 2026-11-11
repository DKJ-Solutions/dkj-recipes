# 19. Sprint 5: de kookmodus, het aantal eters per recept en de favorieten

**Eigenaar:** Wouter (Tech Lead), met Fatima (Delivery Manager) · **Week 15–16:** 22 februari – 5 maart
2027 · **Status:** **gebouwd** op 11 november 2026 (taak #64); **de demo is akkoord** (11 november 2026)

> **Wat deze sprint oplevert.** De keuken, [user flow](11-user-flows.md) 4. Wie een recept uit zijn
> weekmenu opent, kan het aantal eters voor die ene avond aanpassen en kookt het daarna stap voor stap:
> één stap per scherm, in grote letters, met een timer die bij de stap hoort en een scherm dat aan blijft.
> Een recept dat je goed vond, bewaar je met ♡. Na deze sprint loopt de hele week door de app: kiezen,
> kopen en koken.
>
> **Waarom het nu kan.** De klant keurde de boodschappenlijst goed
> ([sprint 4](18-sprint-4-boodschappenlijst.md), "Het antwoord van de klant"). Het invullen van de
> verpakkingen door Thuiskok loopt ernaast; het moet af zijn vóór sprint 6, en deze sprint wacht er
> niet op.

## De sprint in het kort

**Het sprintdoel:** *"Wie een recept uit zijn weekmenu kookt, hoeft de telefoon alleen aan te raken om
naar de volgende stap te gaan of een timer te starten, en kookt voor het aantal mensen dat vanavond aan
tafel zit."*

- **Wie:** Wouter, Ayla, Daan en Koen (de app), Ruben en Mila (het aantal eters per recept en de
  favorieten, in de API), Noor (de stappen in het portaal), Iris (de schermen, met de aanpassing uit de
  [usertest](14-prototype-en-usertest.md)), Nadia en Tim (testen).
- **De volgorde.** Fatima legde vast: **week 15 de kookmodus en de timer, week 16 het aantal eters per
  recept en de favorieten.** De kookmodus ging voor omdat hij Must is en de favorieten Should
  ([teardown](03-hellofresh-teardown.md)). Moest er iets schuiven, dan schoven de favorieten.
- **De schermen liggen er al.** Iris tekende het recept en de kookmodus in het
  [wireframe](12-wireframes.md) (schermen 8 en 9) en het [prototype](14-prototype-en-usertest.md). Daan
  bouwde de **timer** en de **kookstap** uit het [designsysteem](13-designsysteem.md), de twee onderdelen
  die sprint 2 voor deze sprint liet liggen.

## Het recept, voor vanavond

**Het aantal eters staat nu in het recept zelf.** Onder de titel staat *"Voor 2 · vanavond anders?"*,
dezelfde vorm als de knop bovenaan het weekmenu uit sprint 3, zodat niemand een tweede manier hoeft te
leren. Tik je erop, dan kies je 1 tot 6.

- **Het geldt voor dit recept, in deze week.** De rest van het weekmenu houdt het aantal van de week, en
  de standaard onder Ik verandert niet. Zo staan er drie lagen, van breed naar smal: *Meestal kook ik
  voor* (elke week), *deze week anders* (alle recepten van deze week) en *vanavond anders* (één recept).
- **De boodschappenlijst verandert mee**, volgens de regels uit sprint 4: wat al afgevinkt is, blijft
  afgevinkt, en wat er méér nodig is, komt terug als *"nog 1 pak"*. Wie al gekocht heeft en vanavond met
  één minder eet, ziet dus niets verdwijnen uit zijn mandje.
- **Zonder bereik kan het niet.** Net als het wisselen van een recept gaat het via de API, omdat de lijst
  meeverandert. De knop zegt dat eerlijk, met dezelfde zin als bij het wisselen.

### Hoe de hoeveelheden afronden

De catalogus kent elke hoeveelheid **per portie** ([sprint 2](16-sprint-2-recepten-en-portaal.md)). Voor
drie eters is dat drie keer, en dan komen er getallen uit die niemand in een keuken gebruikt: *"1,5 ui"*,
*"337,5 g kipfilet"*. Ruben en Mila legden vast hoe het recept ze toont:

| Eenheid | Afronden op | Voorbeeld voor 3 eters |
|---|---|---|
| Stuks (ui, ei, teen knoflook) | Halven: ½, 1, 1½ | *1½ ui* |
| Gram en milliliter | 5, en boven de 100 op 25 | *325 g kipfilet* |
| Lepels (el, tl) | Halven | *1½ el kerriepoeder* |
| Snufje, naar smaak | Niet: het blijft staan zoals het er staat | *snufje zout* |

**Dit is alleen hoe het recept het toont.** De boodschappenlijst rekent met de echte getallen en rondt
daarna af op hele verpakkingen, zoals in sprint 4. Twee keer afronden zou per week een paar procent te
veel opleveren.

### Het grootste gat: getallen in de stappen

Bij het testen vond Nadia het gat van deze sprint. In het portaal is een stap **vrije tekst**. Veel
redacteuren schreven daarin een hoeveelheid: *"Bak de 300 g kip bruin"*. Die 300 gram is voor twee
eters, en verandert niet mee. Wie voor vier kookt, ziet bij de ingrediënten 600 gram en in de stap 300,
en weet niet meer welke klopt.

**Wat het team deed:**

- **Noor zette in het portaal een verwijzing in de stap.** De redacteur typt geen getal meer, maar kiest
  het ingrediënt uit de lijst van het recept: *"Bak de [kipfilet] bruin"*. In de app staat er dan *"Bak
  de 600 g kipfilet bruin"*, voor het aantal eters van vanavond.
- **Het portaal waarschuwt** bij een getal met een eenheid erachter in een stap (*g*, *ml*, *el*, *stuks*):
  *"Staat hier een hoeveelheid? Kies dan het ingrediënt, dan rekent het mee."* Het is een waarschuwing en
  geen verbod. *"Laat 10 minuten sudderen"* is ook een getal, en dat hoort niet mee te rekenen.
- **Een stap met een vast getal krijgt in de app een regel eronder**: *"De hoeveelheid in deze stap is
  voor 2 eters."* Dat klopt altijd, en de klant weet waar hij op moet letten. Het is alleen niet zo
  makkelijk als een getal dat meerekent.

**Wat daar nu uit volgt:** van de **50 live recepten** hebben er **23** minstens één stap met een vast
getal erin, samen **41 stappen** (geteld in de catalogus van de testomgeving, met de waarschuwing van het
portaal als zoekfilter). Wie die stappen herschrijft, is een vraag aan de klant (hieronder).

## De kookmodus

De route uit flow 4, zoals hij nu gebouwd is:

```text
Recept → Start koken
  → Stap 1 / 6: één stap per scherm, grote letters, het scherm blijft aan
  → Bij een stap met een timer: [ ⏱ Start 5:00 ]
  → Volgende › (vegen of tikken), en een lopende timer blijft bovenin staan
  → De laatste stap → "Klaar. Eet smakelijk."
```

- **Eén stap per scherm, in `--text-cook`** (28 punten), te lezen op een armlengte van het aanrecht.
  Vorige en Volgende staan onderin, op `--tap-cook` (64 punten), en vegen werkt ook. Natte handen raken
  een knop van 64 punten ook met een knokkel.
- **Het scherm blijft aan** zolang de kookmodus open is. Ga je naar een andere app of sluit je de
  kookmodus, dan geeft de app dat weer vrij, zodat de telefoon niet de hele avond brandt in je zak.
- **De ingrediënten zijn één tik weg.** Rechtsboven staat *Ingrediënten*; dat opent de lijst van het
  recept voor het aantal eters van vanavond, over de stap heen. Sluiten brengt je terug naar dezelfde
  stap.
- **De kookmodus werkt zonder bereik.** Het recept staat al op het toestel, in de opslag uit sprint 2.
  Een keuken heeft vaker bereik dan een supermarkt, maar niet altijd, en koken mag niet wachten op laden.

### De timer, met de aanpassing uit de usertest

In de [usertest](14-prototype-en-usertest.md) tikten 2 van de 5 op de tekst van de stap in plaats van op
de timer. **Aanpassing 4 is gebouwd: de timer is een volle knop met een stopwatch en het woord Start**,
los van de tekst, in `--primary`. De tijd komt uit het portaal, waar Thuiskok hem per stap invult.

- **Tikken start de timer, nog een keer tikken zet hem op pauze.** Lang drukken zet hem terug.
- **Een lopende timer loopt door als je verder gaat.** Bovenin staat hij dan klein, met de naam van zijn
  stap: *"Rijst · 8:42"*. Zo kan de rijst koken terwijl je de kip bakt. Er kunnen er meer tegelijk lopen;
  in de 50 live recepten zijn het er nooit meer dan drie.
- **Is de tijd om, dan trilt en piept de telefoon**, zoals het designsysteem zegt, en de stap van die
  timer licht op.
- **Staat de app op de achtergrond, dan komt er een melding van het toestel zelf.** Dat is geen
  pushmelding van de server (die komen in sprint 7, taak #66), maar een wekker die de app op het toestel
  zet. Hij werkt dus ook zonder bereik.
- **De toestemming wordt gevraagd bij de eerste timer**, niet in de onboarding. Op dat moment snapt
  iemand waarom: *"Mogen we je een seintje geven als de timer klaar is, ook als je even iets anders
  doet?"* Wie nee zegt, hoort de timer nog steeds zolang de app openstaat.

### Klaar

**De laatste stap eindigt met één zin en geen feest**: *"Klaar. Eet smakelijk."* Daaronder staat ♡ voor
wie het recept wil bewaren. *Hoe was het?* uit flow 4 (het beoordelen) staat er nog niet: dat is sprint 7
(taak #66). De plek is er al, zodat het scherm dan niet verschuift.

## De favorieten

- **♡ staat rechtsboven in het recept**, zoals in het wireframe, en op het scherm *Klaar*. Het icoon staat
  zonder woord, een van de vier uitzonderingen in het [designsysteem](13-designsysteem.md). Tikken vult
  het hart, en de melding uit het designsysteem zegt één keer *"Bewaard bij je favorieten"*.
- **Je vindt ze op twee plekken**: onder Ik bij *Je favorieten*, en bovenaan *Meer recepten* als
  filter *♡ Favorieten* wanneer je een recept wisselt. Zo kies je een favoriet precies waar je hem nodig
  hebt: als je iets anders wilt.
- **Favorieten zijn gratis.** Ze zijn Should en geen premiumfunctie ([teardown](03-hellofresh-teardown.md)).
- **Ze staan op het account, en zonder account op het toestel.** Wie nog geen account heeft (dat komt pas
  na het eerste weekmenu, sprint 3), raakt ze niet kwijt: ze verhuizen mee als het account er komt.
- **Een recept dat Thuiskok offline haalt, blijft in de favorieten staan**, grijs en met *"Niet meer
  beschikbaar"*. Stilletjes verdwijnen zou voelen als iets kwijtraken.

**Wat de favorieten nog niet doen: het voorstel van de week beïnvloeden.** De vijf regels uit sprint 3
weten niet wat iemand lekker vond. Of ze dat moeten weten, is een vraag aan de klant (hieronder), omdat
het verandert wat Thuiskok elke maandag voorstelt.

**Het receptenarchief** (wat je eerder kookte), dat in de teardown naast de favorieten stond, is niet
gebouwd. Het stond niet in het plan voor deze sprint. Joris zette het als nieuwe wens op de backlog.

## Wat er af is

| Verhaal | Klaar |
|---|---|
| Het aantal eters in het recept, voor één avond, en de lijst verandert mee | **ja** |
| De hoeveelheden afronden op getallen voor de keuken | **ja** |
| De kookmodus: één stap per scherm, grote letters, vegen en grote knoppen | **ja** |
| Het scherm blijft aan in de kookmodus | **ja** |
| De timer als volle knop, meer timers tegelijk, en een melding op de achtergrond | **ja** |
| De ingrediënten vanuit de kookmodus | **ja** |
| De kookmodus werkt zonder bereik | **ja** |
| ♡ in het recept en op *Klaar*, de favorieten onder Ik en als filter bij wisselen | **ja** |
| De verwijzing naar een ingrediënt in een stap, in het portaal | **ja**, maar 41 stappen hebben nog een vast getal: zie hierboven |
| *Hoe was het?* na het koken | **nee**, dat is sprint 7 (taak #66) |

**Waarmee het team testte.** Nadia en Tim kookten elk drie recepten uit de live catalogus, met de testapp
op het aanrecht: een gewoon recept voor 2, hetzelfde recept voor 5, en een recept met drie timers die
tegelijk lopen. Tim zette de route door de kookmodus als geautomatiseerde test op de lopende band, op een
iPhone en een Android-toestel.

**Wat ze vonden:**

- **Het scherm bleef aan** op alle toestellen in de testkast, ook na een half uur zonder aanraken
  (gemeten op 5 toestellen, 2 iOS en 3 Android).
- **De melding op de achtergrond kwam op 3 van de 5 toestellen op tijd.** Op 2 Android-toestellen met de
  batterijbesparing aan kwam hij tot een minuut te laat (gemeten, vijf keer per toestel). De app kan dat
  niet zelf oplossen: het toestel stelt de wekker uit. Wouter zette het als bekend punt voor de bèta
  (taak #69), om te meten hoe vaak het bij echte gebruikers gebeurt.
- **De getallen in de stappen.** Bij het recept voor 5 stond in twee stappen een hoeveelheid voor 2. Dat
  is het gat hierboven, en zo vond Nadia het.

## De demo bij de klant

**Vrijdag 5 maart 2027**, drie kwartier. Joris leidt, Iris laat het scherm zien, Wouter beantwoordt de
technische vragen.

1. Een recept uit het weekmenu openen en *"Voor 2 · vanavond anders?"* op vier zetten: de ingrediënten
   verdubbelen, en de boodschappenlijst laat zien wat er nog bij moet.
2. *Start koken*, en de stappen doorlopen met vegen.
3. De timer van de rijst starten, verder gaan naar de kip, en zien dat de rijst bovenin blijft lopen.
4. De app naar de achtergrond, en de melding als de rijst klaar is.
5. Op *Klaar* het recept met ♡ bewaren, en het terugvinden onder Ik en bij *Meer recepten*.
6. In het portaal een stap met *"300 g kip"* herschrijven met de verwijzing, en zien dat de app voor vier
   eters *"600 g kipfilet"* zegt.

**Wat er nog niet te zien is:** elke prijs, het weekbudget, *Hoe was het?*, de gedeelde lijst en de
pushmeldingen.

## Wat de klant nog moet zeggen

1. **De stappen met een vast getal.** Wie bij Thuiskok herschrijft de 41 stappen in 23 recepten met de
   verwijzing naar het ingrediënt, en wanneer? Tot dan staat bij zo'n stap *"De hoeveelheid in deze stap
   is voor 2 eters"*. Het moet af zijn vóór de bèta (taak #69), want daar kookt iedereen voor zijn eigen
   aantal. Het team schat het op **twee uur**, met de waarschuwing van het portaal als lijst (afgeleid,
   niet gemeten).
2. **De favorieten in het voorstel.** Moet het voorstel van de week rekening houden met wat iemand als
   favoriet bewaarde? Het kost naar schatting **twee dagen**, als zesde regel. Het advies van het bureau:
   **ja, maar licht**: hooguit één favoriet per week, en regel 2 (wat je de laatste twee weken kreeg,
   schuift achteraan) blijft voorgaan, zodat een favoriet niet elke week terugkomt. Zonder die regel blijven
   de favorieten een lijst die je zelf opzoekt.
3. **De demo.** Zijn de kookmodus, het aantal eters per recept en de favorieten zoals hierboven akkoord,
   ook zonder *Hoe was het?* tot sprint 7, of mist Thuiskok iets voordat sprint 6 (de prijs per portie en
   het weekbudget, taak #65) begint?

### Het antwoord van de klant

Dave gaf op 11 november 2026 als Thuiskok antwoord op alle drie de vragen:

1. **Het bureau herschrijft de 41 stappen** in 23 recepten met de verwijzing naar het ingrediënt, als
   taak vóór de bèta (taak #69). Tot dan staat bij zo'n stap *"De hoeveelheid in deze stap is voor 2
   eters"*.
2. **De favorieten tellen mee in het voorstel, licht**, zoals het bureau adviseerde: hooguit één
   favoriet per week, als zesde regel, en regel 2 (wat je de laatste twee weken kreeg, schuift achteraan)
   blijft voorgaan.
3. **De kookmodus, het aantal eters per recept en de favorieten zijn akkoord** zoals ze in de demo te
   zien waren, ook zonder *Hoe was het?* tot sprint 7. Sprint 6 begint.

Daarmee is sprint 5 rond.

## Volgende stap

Sprint 6: de prijs per portie, de weekprijs en het weekbudget, en premium afrekenen via de app stores
(taak #65).
