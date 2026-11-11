# 20. Sprint 6: de prijzen, het weekbudget en premium

**Eigenaar:** Wouter (Tech Lead), met Fatima (Delivery Manager) · **Week 17–18:** 8 – 19 maart 2027 ·
**Status:** **gebouwd** op 11 november 2026 (taak #65); **de demo ligt bij de klant**

> **Wat deze sprint oplevert.** De belofte. Bovenaan het weekmenu staat nu wat de week kost, en in het
> recept wat een portie kost. Wie wisselt, ziet wat dat scheelt. En wie wil dat de week onder een bedrag
> blijft, neemt premium in de app store en stelt een weekbudget in ([user flow](11-user-flows.md) 5).
> Opzeggen kan in drie tikken (flow 6). Na deze sprint verdient Thuiskok voor het eerst iets.
>
> **Waarom het nu kan.** De klant keurde de kookmodus goed
> ([sprint 5](19-sprint-5-kookmodus.md), "Het antwoord van de klant"). De weekprijs rekent in hele
> verpakkingen, en die rekent de boodschappenlijst al uit sinds [sprint 4](18-sprint-4-boodschappenlijst.md).
> De prijstabel staat in het portaal sinds [sprint 2](16-sprint-2-recepten-en-portaal.md).

## De sprint in het kort

**Het sprintdoel:** *"Wie zijn weekmenu opent, ziet wat de week ongeveer kost en wat een wissel scheelt,
en wie een grens wil, stelt een weekbudget in en betaalt daarvoor via de app store."*

- **Wie:** Wouter, Ayla, Daan en Koen (de app, en Koen het afrekenen), Ruben en Mila (het rekenen, het
  budget en de favorietenregel, in de API), Noor (de prijstabel in het portaal), Jesse (de abonnementen
  in de stores en de controle op de server), Iris (de premiumschermen uit het
  [prototype](14-prototype-en-usertest.md)), Nadia en Tim (testen).
- **De volgorde.** Fatima legde vast: **week 17 de prijzen, week 18 premium, het budget en de
  favorietenregel.** Premium verkoopt het budget, en het budget kan niets zonder een weekprijs die klopt.
  Moest er iets schuiven, dan schoof de favorietenregel naar sprint 7.
- **De favorietenregel zit in deze sprint**, als het besluit uit sprint 5 (antwoord 2). Ruben en Mila
  bouwden hem in week 18, omdat het budget dezelfde code van het voorstel raakt. Twee keer in die code
  zitten, in twee sprints, kost meer dan één keer.
- **De schermen liggen er al.** De weekprijs-kaart bouwde Daan in sprint 3, met lege regels voor de
  bedragen. De premiumschermen tekende Iris voor het prototype. Mollie, dat in de gereedschapskist van
  het [bureau](01-het-bureau.md) staat, gebruiken we niet: een abonnement in een app gaat via de stores,
  zoals besloten in de [intake](02-intake-klant.md).

## De weekprijs

**De kaart bovenaan het weekmenu krijgt zijn bedrag**, zoals in het [designsysteem](13-designsysteem.md)
en het besluit van go/no-go 2: *"€ 31,40 · € 5,23 per portie · indicatief"*. Er verschuift niets, want
de regels stonden er sinds sprint 3 al, leeg.

Ruben en Mila rekenen de weekprijs uit de lijst van sprint 4, in drie stappen:

1. **De lijst van de week, in hele verpakkingen**, zonder de basisvoorraad. Het is precies wat de
   boodschappenlijst zegt dat je moet kopen ([technische verkenning](09-technische-verkenning.md), "Twee
   prijzen, niet één").
2. **Maal de prijs van één verpakking** uit de prijstabel van Thuiskok.
3. **Opgeteld.** Optionele ingrediënten tellen mee, omdat ze op de lijst staan. Wat iemand bij *"Heb je
   dit in huis?"* op *Nee* zet, gaat naar de lijst en telt dan ook mee. Wat iemand zelf toevoegt
   (*"wc-papier"*), heeft geen prijs en telt niet mee.

**De prijs per portie op de kaart is de weekprijs gedeeld door het aantal porties**: 3 avonden voor 2
eters is 6 porties, en € 31,40 gedeeld door 6 is € 5,23. Dat is wat je per portie *betaalt*, en dat is
de maat die iemand met een box kent.

**Met centen, niet afgerond.** De technische verkenning stelde een afgerond bedrag voor, met *ongeveer*
ervoor. De klant koos bij go/no-go 2 voor het bedrag met centen en *indicatief* erachter, en dat is
gebouwd. *Indicatief* draagt de onzekerheid; een afgerond bedrag zou dat dubbel doen.

### Wat er gebeurt als een prijs ontbreekt

**Een weekprijs die stilletjes een paar producten overslaat, breekt de regel "eerlijk over wat we niet
weten"** ([designsysteem](13-designsysteem.md), de toon). Dat zei sprint 4 al over de verpakkingen. Ontbreekt
bij een product op de lijst de prijs, of de verpakking uit sprint 4, dan staat er:

*"€ 28,90 · zonder 2 producten · indicatief"*

Tik je erop, dan zie je welke twee. Het bedrag is dan lager dan de week echt kost, en de kaart zegt dat.

**Noor maakte daarvoor in het portaal het scherm *Wat mist er nog?***: elk ingrediënt uit een live recept
zonder prijs, zonder verpakking, of met een prijs die ouder is dan een kwartaal. Zo ziet de redactie van
Thuiskok in één lijst wat de weekprijs onvolledig maakt.

### Wisselen, met wat het scheelt

Het wireframe zette bij elk alternatief het verschil in weekprijs; sprint 3 liet dat liggen tot er
gerekend werd. **Nu staat het er**: *"€ 2,10 goedkoper"* of *"€ 1,80 duurder"*, onder de kooktijd. Geld
zonder schreeuwen, zoals de toon zegt: geen groen of rood, geen uitroepteken.

**Het verschil is van de hele week, niet van het recept.** Wie de pasta wisselt voor een risotto die ook
kookroom gebruikt, koopt misschien geen extra pak. Dan scheelt de wissel minder dan de recepten apart doen
denken, en dat is precies wat de weekprijs eerlijker maakt dan een prijs per recept.

## De prijs per portie in het recept

**Het recept krijgt de prijs per portie onder de kooktijd**, op de plek die sinds sprint 2 leeg bleef.
Hier is het een ander getal dan op de kaart: wat je *opeet*. De hoeveelheid per portie maal de prijs per
gram of per stuk ([technische verkenning](09-technische-verkenning.md)). Twee eetlepels crème fraîche
kosten een paar cent, ook al koop je een heel bakje.

**Ontbreekt de prijs of de verpakking van een ingrediënt, dan staat er geen prijs in het recept.** Een
prijs per portie zonder de kip zou veel te laag zijn, en hier is geen ruimte om te zeggen wat er mist.

### Het grootste gat: twee prijzen per portie

Bij het testen vond Nadia het gat van deze sprint. Op de kaart staat wat je per portie *betaalt*, in het
recept wat je per portie *opeet*. Bij twee eters liggen die ver uit elkaar, omdat er van bijna elke
verpakking iets overblijft.

| Gemeten op de twaalf testgerechten | Op de kaart (betaald) | In het recept (opgegeten) |
|---|---|---|
| 3 avonden voor 2 eters | **€ 4,10** per portie | **€ 2,90** per portie |
| 3 avonden voor 4 eters | **€ 3,20** per portie | **€ 2,90** per portie |

(Gemeten met de testprijzen die Nadia uit Checkjebon invulde, alleen in de testomgeving, op alle
weekmenu's van drie avonden die de twaalf gerechten toelaten. Niet gemeten op de live catalogus van
Thuiskok.)

**Wat daaruit volgt:**

- **Wie het recept leest en daarna de kaart, ziet twee bedragen voor hetzelfde**, en weet niet welke
  klopt. Beide kloppen, maar dat moet je weten.
- **Het doel uit de [intake](02-intake-klant.md) was een prijs per portie onder € 3.** Wat je opeet, haalt
  dat. Wat je betaalt, haalt het bij twee eters niet, en bij vier net niet.
- **Het verschil is de restjes.** Dat is wat restjesslim plannen in sprint 8 (taak #67) kleiner moet
  maken, en dit is het eerste getal dat laat zien hoeveel daar te halen valt.

Wat het recept moet laten zien, is een vraag aan de klant (hieronder).

## Premium

De route uit flow 5, zoals hij nu gebouwd is:

```text
Weekprijs aantikken → "Stel een weekbudget in"
  → Wat premium geeft: het weekbudget, en straks de gedeelde lijst · € 2,49 per maand
  → [ Premium nemen ] → het scherm van de App Store of de Play Store
  → Je budget: € 35 per week → het weekmenu rekent opnieuw
```

- **Premium wordt aangeboden waar het iets oplost**: bij de weekprijs, en nergens in de onboarding. Wie
  het niet wil, ziet onder de weekprijs één regel, *Stel een weekbudget in*, en verder niets.
- **Het scherm zegt wat premium nu geeft, en wat later.** De gedeelde lijst komt in sprint 7 (taak #66).
  Tot dan staat hij erop met *"komt eraan"*, zodat niemand betaalt voor iets wat er nog niet is zonder
  dat te weten.
- **Afrekenen gaat helemaal via de stores.** Koen bouwde het met de abonnementen van Apple en Google, en
  Jesse zette in beide accounts van Thuiskok het abonnement klaar met de prijs uit het prototype. De
  server vraagt bij elke aankoop aan de store zelf of hij echt is, en zet dan premium op het account.
- **Premium hoort bij het account, niet bij de telefoon.** Wie op een iPhone betaalt, heeft premium ook
  op een Android-tablet met hetzelfde account. Wie nog geen account heeft (dat komt pas na het eerste
  weekmenu, sprint 3), krijgt eerst die vraag: *"Zodat je premium niet kwijtraakt als je een nieuwe
  telefoon neemt."*
- **Onder Ik staat *Aankoop herstellen***, voor wie een nieuwe telefoon heeft. Apple eist die knop.
- **In de testversie betaalt niemand echt.** Beide stores rekenen daar af in een testomgeving, ook in de
  bèta (taak #69).

### Opzeggen

Flow 6, zoals hij nu gebouwd is: *Ik → Premium → Opzeggen*. Eén zin uitleg, *"Opzeggen gaat via de App
Store. We brengen je erheen."*, en één knop die rechtstreeks naar de pagina met abonnementen van de
store gaat. Geen *"weet je het zeker?"*, geen korting om te blijven. **Drie tikken**, gemeten op beide
toestellen.

**Na het opzeggen blijft het gratis deel gewoon werken.** Het budget blijft bewaard maar rekent niet
meer mee, en onder de weekprijs staat weer *Stel een weekbudget in*. Geen melding, geen herinnering.

## Het weekbudget

- **Een bedrag per week, in hele euro's.** Het geldt voor de weekprijs, dus voor de recepten en niet voor
  wat iemand zelf aan de lijst toevoegt.
- **De kaart toont het budget erbij**: *"€ 31,40 van je € 35 · indicatief"*.
- **Het voorstel blijft eronder.** Ruben en Mila maken eerst het voorstel met de regels uit
  [sprint 3](17-sprint-3-onboarding-en-weekmenu.md), en daarna, als het boven het budget uitkomt,
  wisselen ze het duurste recept voor het goedkoopste alternatief dat aan dezelfde regels voldoet, tot de
  week eronder zit. Het budget is dus geen regel tussen de andere, maar een stap erna.
- **Past het niet, dan zegt de app dat**: *"Onder € 20 past deze week geen menu van 3 avonden voor 4.
  Het goedkoopste is € 23,60."* Met twee knoppen: dat menu nemen, of het budget aanpassen. Een voorstel
  dat stilletjes over het budget gaat, of een leeg weekmenu, zou erger zijn.
- **Wisselen toont eerst wat erbinnen past.** Daaronder staan de alternatieven die erboven uitkomen, met
  *"boven je budget"*. Kiezen mag. Dan staat er *"€ 36,20 van je € 35"*, in de gewone kleur.
- **Meer of minder eters rekent ook mee.** Gaat de week daardoor boven het budget, dan krijg je dezelfde
  zin als hierboven.

## De favorieten in het voorstel

Het besluit uit [sprint 5](19-sprint-5-kookmodus.md): **hooguit één favoriet per week, als zesde regel,
en regel 2 blijft voorgaan.** Zo is hij gebouwd:

6. **Eén favoriet per week gaat voor.** Staat er een favoriet tussen wat na regels 1 tot en met 4 nog
   kan, dan komt er één in het voorstel. Wat je de laatste twee weken kreeg, schuift nog steeds
   achteraan (regel 2), dus dezelfde favoriet komt niet elke week terug zolang er iets anders kan.

**Het toeval beslist nog steeds als laatste**, bij gelijkspel en tussen meer favorieten. **Het budget komt
na alle regels**: kost de favoriet te veel voor het budget, dan kan hij gewisseld worden zoals elk ander
recept.

## Wat er af is

| Verhaal | Klaar |
|---|---|
| De weekprijs op de kaart, met de prijs per portie en *indicatief* | **ja** |
| Een weekprijs zonder prijs of verpakking zegt *zonder 2 producten*, en welke | **ja** |
| *Wat mist er nog?* in het portaal | **ja** |
| Het verschil in weekprijs bij wisselen | **ja** |
| De prijs per portie in het recept | **ja**, maar wat hij moet tonen is een vraag aan de klant: zie hierboven |
| Premium nemen via de App Store en de Play Store, gecontroleerd op de server | **ja** |
| Premium op het account, en *Aankoop herstellen* | **ja** |
| Opzeggen in drie tikken, en het gratis deel blijft werken | **ja** |
| Het weekbudget: het voorstel blijft eronder, en wisselen toont wat erbinnen past | **ja** |
| De favoriet als zesde regel in het voorstel | **ja** |
| De gedeelde lijst | **nee**, dat is sprint 7 (taak #66) |

**Waarmee het team testte.** Nadia vulde in de testomgeving de prijzen in voor de twaalf
testgerechten uit het [prototype](14-prototype-en-usertest.md), met Checkjebon als spiekbriefje en het
midden van de ketens, zoals de technische verkenning adviseert. Ze staan niet in productie. Tim zette
premium nemen, opzeggen en het budget als geautomatiseerde test op de lopende band, op een iPhone en een
Android-toestel, met de testomgeving van de stores.

**Wat ze vonden:**

- **De weekprijs tegen een echte kassabon.** Nadia en Tim kochten twee weekmenu's echt, elk bij een
  andere keten, en legden de bon naast de app. De app zat er **8 en 19 procent naast**, allebei te laag
  (gemeten, twee bonnen). Dat valt binnen de 15 tot 25 procent die de technische verkenning verwachtte,
  maar twee bonnen zeggen weinig. Wouter zette het als meetpunt voor de bèta (taak #69).
- **De twee prijzen per portie.** Dat is het gat hierboven, en zo vond Nadia het: in het recept stond
  € 2,60, op de kaart € 4,40 voor dezelfde week.
- **Premium nemen, herstellen en opzeggen werkten op beide toestellen**, elk vijf keer in de testomgeving
  van de stores (gemeten). Echt afrekenen is niet getest: dat kan pas als de app in de stores staat.

## De demo bij de klant

**Vrijdag 19 maart 2027**, drie kwartier. Joris leidt, Iris laat het scherm zien, Wouter beantwoordt de
technische vragen.

1. Het weekmenu openen: de weekprijs staat bovenaan, met de prijs per portie en *indicatief*.
2. Een recept wisselen, en bij de alternatieven zien wat het scheelt.
3. Een recept openen: de prijs per portie aan wat je opeet, en het verschil met de kaart.
4. Op de weekprijs tikken, *Stel een weekbudget in*, premium nemen in de testomgeving van de App Store,
   en € 35 invullen: het voorstel rekent opnieuw en blijft eronder.
5. Het budget op € 20 zetten voor vier eters, en de zin zien dat het niet past.
6. Opzeggen in drie tikken, en zien dat het weekmenu gewoon blijft werken.
7. In het portaal het scherm *Wat mist er nog?*.

**Wat er nog niet te zien is:** de gedeelde lijst, de pushmeldingen, *Hoe was het?* en restjesslim
plannen.

## Wat de klant nog moet zeggen

1. **De catalogus in productie.** Staan in de prijstabel de prijzen van alle ingrediënten uit de live
   recepten, en zijn de verpakkingen van de 31 ingrediënten uit sprint 4 ingevuld? *Wat mist er nog?*
   laat zien wat er nog openstaat. Tot het leeg is, zegt de weekprijs *zonder 2 producten*. Het moet af
   zijn vóór de bèta (taak #69), want daar is de weekprijs het eerste wat iemand ziet.
2. **De prijs per portie in het recept.** Wat moet het recept tonen? Het advies van het bureau: **wat je
   opeet, met dat erbij**: *"€ 2,90 per portie aan wat je opeet"*. Het verschil met de kaart is dan uit te
   leggen, en het wordt in sprint 8 kleiner. Het alternatief is **geen prijs in het recept**, alleen de
   kaart: één getal, maar de klant ziet niet wat een recept kost. Wat je betaalt in het recept zetten kan
   niet: dat hangt af van de rest van de week.
3. **Premium in de stores.** Twee dingen. **De prijs**: het advies is **€ 2,49 per maand**, binnen de € 2 à
   € 3 uit de intake, zonder proefperiode en zonder jaarabonnement bij de lancering. Een proefmaand die
   vanzelf overgaat in betalen is precies wat de ACM HelloFresh verweet
   ([teardown](03-hellofresh-teardown.md)), en een jaarprijs kan na de bèta, als bekend is hoeveel mensen
   premium nemen. **De afspraken met de stores**: de accounts zijn van Thuiskok, dus alleen Thuiskok kan
   de voorwaarden voor betaalde apps tekenen, de bank- en belastinggegevens invullen en zich bij Apple
   aanmelden voor het tarief van 15 procent voor kleine ontwikkelaars (afgeleid, niet nagelopen in de
   accounts). Wie doet dat, en wanneer? Het moet af zijn vóór de inzending bij de stores (taak #72).
4. **De demo.** Zijn de prijzen, premium en het weekbudget zoals hierboven akkoord, of mist Thuiskok iets
   voordat sprint 7 (de gedeelde lijst, de pushmeldingen en de beoordelingen, taak #66) begint?

## Volgende stap

Sprint 7: de gedeelde lijst, de pushmeldingen en de beoordelingen (taak #66), zodra de klant de demo
heeft gezien.
