# 18. Sprint 4: de boodschappenlijst

**Eigenaar:** Wouter (Tech Lead), met Fatima (Delivery Manager) · **Week 13–14:** 8 – 19 februari
2027 · **Status:** **gebouwd** op 11 november 2026 (taak #63); **de demo ligt bij de klant**

> **Wat deze sprint oplevert.** De winkel, [user flow](11-user-flows.md) 3. Wie zijn weekmenu
> bevestigt, krijgt één lijst voor de hele week: samengevoegd over de recepten, in hele verpakkingen,
> per afdeling gesorteerd en af te vinken, ook zonder bereik. Na deze sprint doet de app wat de
> recepten-app van Dave al deed, maar dan voor een week in plaats van één recept: in de supermarkt snel
> zien wat je moet kopen.
>
> **Waarom het nu kan.** De klant keurde de onboarding en het weekmenu goed
> ([sprint 3](17-sprint-3-onboarding-en-weekmenu.md), "Het antwoord van de klant"), en het weekmenu is
> de bron van de lijst. Het nakijken van de allergenen door Thuiskok loopt ernaast; de lijst wacht er
> niet op.

## De sprint in het kort

**Het sprintdoel:** *"Wie zijn weekmenu bevestigt, staat in de supermarkt met één lijst die per afdeling
loopt, telt wat hij al heeft, en blijft werken als het netwerk wegvalt."*

- **Wie:** Wouter, Ayla, Daan en Koen (de app en de opslag op het toestel), Ruben en Mila (het
  samenvoegen, in de API), Noor (de verpakkingen in het portaal), Iris (het scherm, met de aanpassing
  uit de [usertest](14-prototype-en-usertest.md)), Nadia en Tim (testen).
- **De volgorde.** Fatima legde vast: **week 13 het samenvoegen en de lijst op het scherm, week 14
  afvinken zonder bereik, zelf iets toevoegen en wat er gebeurt als het menu verandert.** Werken zonder
  bereik ging bewust in de tweede week: het moest op een lijst gebouwd worden die al klopte.
- **Het scherm ligt er al.** Iris tekende het in het [wireframe](12-wireframes.md) (scherm 7) en het
  [prototype](14-prototype-en-usertest.md). Daan bouwde de **lijstrij** uit het
  [designsysteem](13-designsysteem.md), het onderdeel dat sprint 2 voor deze sprint liet liggen.

## Van weekmenu naar lijst

**De knop krijgt zijn belofte terug.** In sprint 3 heette hij *"Dit wordt het"*, omdat er nog geen lijst
was. Nu heet hij weer zoals in het prototype: *"Dit wordt het: maak mijn boodschappenlijst"*, en hij
opent de tab Lijst.

### Hoe de lijst samenvoegt

Ruben en Mila schreven het samenvoegen in de API, in vier stappen per week:

1. **Per recept de hoeveelheid voor het aantal eters van deze week.** De hoeveelheid staat per portie
   in de catalogus ([sprint 2](16-sprint-2-recepten-en-portaal.md)); bij vier eters is het vier keer.
2. **Optellen per ingrediënt uit de catalogus**, over alle recepten. Dat kan alleen omdat elk
   ingrediënt uit één gedeelde catalogus komt en geen vrije tekst is: *ui* in het ene recept is
   dezelfde *ui* in het andere ([technische verkenning](09-technische-verkenning.md)).
3. **Naar boven afronden op hele verpakkingen.** Wie 450 ml kookroom nodig heeft en die zit in pakken
   van 250 ml, koopt er twee. Dat is hetzelfde getal waaruit de weekprijs in sprint 6 komt.
4. **De basisvoorraad apart zetten.** Olie, zout, peper en wat Thuiskok verder als basisvoorraad
   markeerde, gaan niet in de lijst maar in het blok *"Heb je dit in huis?"* (hieronder).

**Optionele ingrediënten staan erop, met *optioneel* erachter.** Weglaten zou het recept armer maken voor
wie ze wel wil; meetellen zonder het te zeggen zou geld kosten voor wie ze niet wil.

**Tik op een product, en je ziet waarvoor het is:** *"Kookroom: 200 ml voor de pasta, 250 ml voor de
curry."* Zo kan iemand in de winkel kiezen om iets over te slaan, en weet hij welk recept dat raakt.

### Het grootste gat: de verpakkingen

Bij stap 3 vond het team het gat van deze sprint. De catalogus kent per ingrediënt **een eenheid en een
verpakking**, maar die twee zijn niet altijd in dezelfde maat. Een recept zegt *"1 ui"*, en de uien
liggen in een net van 1 kg. Een recept zegt *"2 tenen knoflook"*, en knoflook koop je per bol. Daar valt
niet uit te rekenen hoeveel netten of bollen er nodig zijn.

**Wat het team deed:**

- **Noor zette een veld in de catalogus: *"Hoeveel zit er in één verpakking?"*** In de eenheid van het
  recept: een net uien is ongeveer 7 uien, een bol knoflook ongeveer 10 tenen. Het portaal vraagt het
  alleen bij een ingrediënt waarvan de eenheid en de verpakking niet in dezelfde maat staan.
- **Waar het nog niet is ingevuld, toont de lijst de hoeveelheid zelf**: *"Uien: 3 stuks"* in plaats
  van *"1 net"*. Dat klopt altijd, en de klant ziet nog steeds wat hij moet kopen. Het is alleen niet
  in hele verpakkingen.
- **Het telt voor sprint 6.** De weekprijs rekent in hele verpakkingen. Zonder dit getal kan de app voor
  zo'n ingrediënt geen weekprijs geven, en een weekprijs die stilletjes een paar producten overslaat,
  breekt de regel "eerlijk over wat we niet weten" ([designsysteem](13-designsysteem.md), de toon).

**Wat daar nu uit volgt:** van de ingrediënten in de live recepten hebben er **31** een eenheid die niet
in de maat van hun verpakking staat (geteld in de catalogus van de testomgeving). Wie dat getal invult,
is een vraag aan de klant (hieronder).

## De lijst in de winkel

De route uit flow 3, zoals hij nu gebouwd is:

```text
Lijst openen → "Heb je dit in huis?" bovenaan, ingeklapt
  → Per afdeling: groente en fruit, brood, vlees en vis, zuivel, ...
  → Afvinken; afgevinkt zakt naar onderen, de teller loopt op
  → + Zelf iets toevoegen
  → Alles afgevinkt → "Alles in je mandje."
```

- **"Heb je dit in huis?" staat bovenaan, ingeklapt**, met het aantal erachter. Dat is aanpassing 3 uit
  de [usertest](14-prototype-en-usertest.md): T3 zag het blok onderaan niet en kocht zout. Tik je bij
  een product op *Nee*, dan gaat het naar zijn afdeling in de lijst.
- **De afdelingen staan in één vaste volgorde**, die van een gemiddelde Nederlandse supermarkt: groente
  en fruit, brood, vlees en vis, zuivel en eieren, kaas, pasta, rijst en wereldkeuken, conserven, kruiden
  en sauzen, diepvries, en als laatste *Overig*. Iris liep de volgorde na in drie supermarkten van
  verschillende ketens; in alle drie klopte hij op hooguit twee afdelingen na (afgeleid uit drie
  bezoeken, niet gemeten bij gebruikers). Een volgorde per winkel is een vraag aan de klant
  (hieronder).
- **Afgevinkt zakt naar onderen**, onder de hele lijst, zodat bovenaan altijd staat wat nog moet. Per
  ongeluk afgevinkt? Tik nog een keer.
- **De teller rechtsboven**: *"12 van 18"*. De basisvoorraad telt niet mee, want die koop je niet.
- **Geen prijs op de lijst.** Die komt in sprint 6, met de rest van de prijzen.
- **Alles afgevinkt** geeft één zin en geen feest: *"Alles in je mandje."* De lijst blijft staan tot de
  nieuwe week.

### Zelf iets toevoegen

- **Eén regel onderaan, alleen tekst**: *"wc-papier"*. Het komt onder *Overig*, want de app weet niet
  in welke afdeling het ligt.
- **Het hoort bij deze week.** Een nieuwe week begint met een lege *Overig*. Een vaste lijst voor elke
  week ("altijd melk") is een nieuwe wens, en gaat via Joris naar de backlog.

### Als het menu verandert

Wie na het bevestigen nog een recept wisselt of het aantal eters verandert, krijgt een lijst die
meeverandert. Het team legde vast wat er dan met de vinkjes gebeurt:

- **Wat je al afgevinkt hebt, blijft afgevinkt.** Je hebt het al in je mandje.
- **Is er van een afgevinkt product méér nodig**, dan komt het terug in de lijst met alleen wat erbij
  moet: *"Kookroom: nog 1 pak"*.
- **Is een product niet meer nodig**, dan verdwijnt het. Had je het al afgevinkt, dan blijft het staan
  met een streep erdoor en *"niet meer nodig"*, zodat je het kunt terugleggen.

## Zonder bereik

**Dit was de eis uit flow 3 voor de bouw, niet alleen voor het ontwerp.** In een supermarkt is het
netwerk vaak slecht, en een lijst die op laden wacht, is in de winkel onbruikbaar.

- **De lijst staat op het toestel.** Zodra hij gemaakt is, bewaart de app hem in dezelfde opslag als de
  recepten uit sprint 2. Openen kost geen netwerk.
- **Afvinken gebeurt op het toestel**, en gaat naar de server zodra er weer bereik is. Wie geen bereik
  heeft, ziet één keer de melding uit het designsysteem: *"Geen bereik: de lijst werkt gewoon."*
- **Wat de server niet heeft, gaat niet verloren.** De app bewaart elke vink met het tijdstip, en stuurt
  ze in volgorde zodra het kan. Met één toestel per lijst is er niets om tegen elkaar af te wegen; dat
  verandert met de gedeelde lijst in sprint 7 (taak #66), en daar ontwerpt het team het dan voor.
- **Een menu wisselen kan niet zonder bereik.** Het samenvoegen gebeurt in de API. De knop zegt dat
  eerlijk: *"Wisselen kan weer als je bereik hebt."*

**Hoe Nadia het testte:** de hele lijst afwerken met de telefoon in vliegtuigstand, de app halverwege
afsluiten en opnieuw openen, en daarna het netwerk weer aanzetten. Op iOS en Android kwamen alle vinkjes
op de server aan, in de goede volgorde (gemeten in de testomgeving, met het team als testers). Tim zette
dezelfde route als geautomatiseerde test op de lopende band.

## Wat er af is

| Verhaal | Klaar |
|---|---|
| "Dit wordt het: maak mijn boodschappenlijst" maakt de lijst van de week | **ja** |
| Samenvoegen over de recepten, voor het aantal eters van deze week | **ja** |
| Afronden op hele verpakkingen | **ja**, behalve voor ingrediënten zonder omrekening: zie hierboven |
| Per afdeling, in één vaste volgorde | **ja** |
| "Heb je dit in huis?" bovenaan, ingeklapt, en *Nee* zet het in de lijst | **ja** |
| Afvinken, afgevinkt naar onderen, de teller | **ja** |
| Tikken op een product toont waarvoor het is | **ja** |
| Zelf iets toevoegen, onder *Overig* | **ja** |
| De lijst verandert mee met het menu, en de vinkjes blijven kloppen | **ja** |
| De lijst werkt zonder bereik, en synchroniseert later | **ja** |
| De omrekening per verpakking in het portaal | **ja**, maar nog niet ingevuld: zie hieronder |

**Waarmee het team testte.** Nadia nam drie weken van het voorstel uit sprint 3 als bron: een gewone week
voor 2, een week voor 4 met twee recepten die allebei ui en kookroom vragen, en een veggie week van vijf
avonden. Ze legde elke lijst naast een lijst die ze met de hand had uitgerekend. **Op de verpakkingen na
waren ze gelijk**; daar rekende de app naar boven af waar zij met de hand de rest van vorige week had
meegeteld, en dat is precies wat restjesslim plannen in sprint 8 moet oplossen.

**Een echte winkel.** Iris, Nadia en Joris deden met de testapp de boodschappen voor de week voor 4, elk
in een andere supermarkt. Alle drie werkten de lijst af; de mediaan was 19 minuten voor 21 producten
(drie keer, met het team als testers, geen gebruikers). Joris liep in zijn winkel twee keer terug, omdat
de kaas daar bij de zuivel ligt en niet erna.

## De demo bij de klant

**Vrijdag 19 februari 2027**, drie kwartier. Joris leidt, Iris laat het scherm zien, Wouter beantwoordt
de technische vragen.

1. Het weekmenu uit sprint 3 bevestigen met *"Dit wordt het: maak mijn boodschappenlijst"*.
2. De lijst doorlopen: de afdelingen, *"Heb je dit in huis?"*, en de kookroom die uit twee recepten komt.
3. De telefoon in vliegtuigstand zetten en de helft afvinken. Daarna het netwerk weer aan.
4. *"wc-papier"* toevoegen.
5. Terug naar het weekmenu, één recept wisselen, en zien wat er met de lijst gebeurt.
6. In het portaal bij de uien invullen hoeveel er in een net zitten, en zien dat de lijst *"1 net"*
   zegt in plaats van *"3 stuks"*.

**Wat er nog niet te zien is:** de kookmodus, het aantal eters in het recept zelf, de favorieten en elke
prijs.

## Wat de klant nog moet zeggen

1. **De verpakkingen.** Wie bij Thuiskok vult voor de 31 ingrediënten in hoeveel er in één verpakking
   zit, en wanneer? Tot dan toont de lijst daar de hoeveelheid in plaats van hele verpakkingen. Het moet
   af zijn vóór sprint 6 (de prijs per portie en het weekbudget, taak #65), want de weekprijs rekent
   ermee. Het team schat het op **een uur**, met de verpakkingen uit de winkel als bron (afgeleid, niet
   gemeten).
2. **De volgorde van de afdelingen.** Is één vaste volgorde voor alle supermarkten goed genoeg voor de
   lancering? Een volgorde per keten (of per winkel) is een nieuwe wens, en kost naar schatting een
   halve sprint. Het advies van het bureau: **één volgorde voor de lancering**, en in de bèta (taak #69)
   meten of mensen erover klagen.
3. **De demo.** Is de lijst zoals hierboven akkoord, ook zonder prijzen tot sprint 6, of mist Thuiskok
   iets voordat sprint 5 (de kookmodus, de porties en de favorieten, taak #64) begint?

## Volgende stap

Sprint 5: de kookmodus, het aantal eters per recept en de favorieten (taak #64), zodra de klant de demo
heeft gezien.
