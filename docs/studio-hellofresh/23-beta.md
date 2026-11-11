# 23. De bèta: 150 testers, het testplan en de lat vooraf

**Eigenaar:** Nadia (QA Lead), met Tim (Test automation) en Fatima (Delivery Manager) · **Week 23–24:**
19 – 30 april 2027 · **Status:** **voorbereid** op 11 november 2026 (taak #69); **de start wacht op de
klant**

> **Wat deze stap oplevert.** De eerste keer dat mensen buiten het team Thuiskok gebruiken: 150 testers,
> twee weken, op hun eigen telefoon en in hun eigen supermarkt. Wat zij vinden, wordt opgelost of gaat
> naar na de lancering. Iets nieuws komt er niet bij.
>
> **Waarom het nu kan.** De klant keurde sprint 8 goed en daarmee de bouw. De bèta mag beginnen met
> de testversie van sprint 8, met *Over na deze week* voor iedereen, en tot de lancering komt er geen
> nieuwe functie bij ([sprint 8](22-sprint-8-restjes-en-afronden.md), "Het antwoord van de klant").
>
> **Wat hier nog niet staat: de uitkomsten.** Nadia schrijft het testplan en de lat **vóór** het testen,
> zodat de bèta beoordeeld wordt op wat vooraf is afgesproken, en niet op een lat die achteraf om de
> uitkomsten heen is getrokken. De start hangt aan drie dingen die alleen de klant kan zeggen
> (hieronder). Daarna volgen de twee weken zelf.

## De bèta in het kort

**Het doel:** *"Honderdvijftig mensen die we niet kennen, plannen, kopen en koken twee weken met
Thuiskok, en we weten daarna wat hen tegenhoudt en wat ze niet zien."*

- **Wie:** Nadia (het testplan, de testers, elke dag de meldingen sorteren), Tim (de metingen en de
  geautomatiseerde tests), Jesse (de foutmeldingen, de servers en de testversie in de stores), Ayla,
  Daan en Koen (de app), Ruben en Mila (de API), Bram (de korte gesprekken met testers), Joris (wat er
  na de lancering komt).
- **Negen werkdagen**: dinsdag 27 april is Koningsdag.
- **Ernaast loopt fase 4 door.** Wat de testers vinden, verwerkt het team in dezelfde weken, samen met de
  AVG-check en de toegankelijkheid (taak #70). Die taak eindigt met go/no-go 3. De bèta levert daar het
  bewijs voor; het besluit zelf valt daar.
- **De testers zijn fictie.** Chris speelt ze, zoals de vijf deelnemers van de
  [usertest](14-prototype-en-usertest.md). Wat ze doen en zeggen telt in dit spel, maar het bewijst niet
  wat echte mensen zouden doen.

## Wat er klaarligt

Wat het bureau vóór de bèta beloofde, en wat het in week 22 en 23 deed:

| Wat | Waar beloofd | Klaar |
|---|---|---|
| *Over na deze week* voor iedereen, het plannen premium | [sprint 8](22-sprint-8-restjes-en-afronden.md) | **ja**, Ayla, een halve dag |
| De 41 stappen met een vast getal herschreven, in 23 recepten | [sprint 5](19-sprint-5-kookmodus.md) | **ja**, Joris, met Nadia als controle |
| De foutmeldingen, en de waarschuwing als het voorstel op maandag niet klaar is | [sprint 8](22-sprint-8-restjes-en-afronden.md) | **ja**, Jesse |
| De testversie gekeurd voor externe testers | [sprint 3](17-sprint-3-onboarding-en-weekmenu.md) | **ja**: Apple deed er een dag over; het team had een week gepland |
| De werving, met Thuiskok | [sprint 8](22-sprint-8-restjes-en-afronden.md) | **ja**, zie hieronder |

**Wat bij Thuiskok ligt, en wat het bureau niet zelf kan afvinken:**

- **De allergenen per ingrediënt nagekeken** in het portaal, toegezegd in
  [sprint 3](17-sprint-3-onboarding-en-weekmenu.md). In de bèta doen echte mensen met echte allergieën
  mee.
- **De 9 ingrediënten die op 16 april nog openstonden** in *Wat mist er nog?*, toegezegd in
  [sprint 6](20-sprint-6-prijzen-en-premium.md). Zolang ze open zijn, zegt de weekprijs *zonder N
  producten*, en de weekprijs is het eerste wat een tester ziet.

Het portaal laat zien welke ingrediënten een vinkje hebben, maar een vinkje zegt niet dat iemand het
etiket gelezen heeft. Daarom vraagt het bureau het aan de klant, in plaats van het af te lezen (hieronder).

## De testers

**Aanmeldingen:** 412, via de kanalen van Thuiskok en een formulier van het bureau, in week 21 en 22.
Nadia koos er **150**, verdeeld zoals de [persona's](08-personas.md) het vragen, en niet wie zich het
eerst meldde:

| | Testers | Waarom |
|---|---|---|
| Zoals Noor: gestopt met een maaltijdbox | 50 | Zij vergelijken met HelloFresh, en de weekprijs moet het voor hen winnen |
| Zoals Marieke: een gezin, krap budget | 60 | Vier of meer eters, het budget en de gedeelde lijst |
| Zoals Daan: alleen, wil niets betalen | 40 | Eén of twee eters, gratis, en snel weg als het tegenvalt |
| **Daarvan met een allergie of dieet** | 22 | Het filter uit sprint 3, met echte allergieën |
| **Daarvan op een iPhone** | 68 | De rest Android, waarvan 31 op een toestel van drie jaar of ouder |

(De aantallen zijn fictie, gekozen door het bureau.)

- **Ze krijgen een uitnodiging per e-mail**, met de link naar TestFlight of de Play Console. Wie zich
  aanmeldde maar niet gekozen is, hoort dat ook, en komt op de lijst voor de lancering.
- **Premium zit in de testversie voor iedereen open**, in de testomgeving van de stores: niemand betaalt
  echt ([sprint 6](20-sprint-6-prijzen-en-premium.md)). Wat Nadia meet, is wie *premium nemen* tikt, en
  wat ze zeggen als de app vraagt of ze er geld voor over zouden hebben.
- **De testers krijgen geen opdrachten, op één na.** Ze gebruiken de app zoals ze willen. Alleen op dag
  één vraagt de app of ze een paar minuten hebben voor zeven korte opdrachten: die uit de usertest.

## Het testplan

### Wat er getest wordt

Alles wat in de acht sprints gebouwd is. Er komt niets bij. Per deel staat er wie het bewijst:

| Deel | Wat de geautomatiseerde tests al bewijzen (Tim) | Wat alleen mensen kunnen laten zien |
|---|---|---|
| Onboarding en het weekmenu | De zeven regels, de restjes en het budget: 200 voorstellen per keer | Of de eerste keer in drie schermen lukt zonder uitleg |
| De boodschappenlijst | Het samenvoegen in hele verpakkingen, de basisvoorraad | Of de volgorde van de afdelingen in een echte winkel klopt |
| De kookmodus | De porties, de getallen in de stappen | Of de timer afgaat op een echte telefoon in een echte keuken |
| De prijzen en premium | De weekprijs en de prijs per portie, uit de prijstabel | Of de weekprijs klopt aan de kassa |
| De gedeelde lijst | Afvinken en toevoegen, ook zonder bereik | Of twee mensen in twee winkels elkaar in de weg zitten |
| *Niet weer* en restjesslim | Dat geen regel gebroken wordt | Of het in een huishouden goed voelt |

### Wat een blokkade is

Fatima's regel uit sprint 8 blijft staan, nu voor de lancering: **alles wat een tester tegenhoudt, is er
uit vóór go/no-go 3.**

- **Blokkerend:** een tester komt niet verder, raakt iets kwijt (een menu, een lijst, een aankoop), of
  krijgt een recept met een allergeen dat de tester uitsloot. **Eén zo'n melding is genoeg**, en het team lost
  hem op in de bèta zelf, met een nieuwe testversie.
- **Hinderlijk:** het werkt, maar meer dan één tester struikelt over hetzelfde. Opgelost vóór go/no-go 3,
  of met een reden naar na de lancering.
- **Klein:** een tekst, een marge, één tester. Naar na de lancering, tenzij het minder dan een uur kost.
- **Een wens:** iets wat er niet is. Joris zet het op de lijst voor na de lancering. Het besluit van
  sprint 8 is dat er nu niets bijkomt.

**Hoe een melding binnenkomt.** In de app onder *Ik*, met *Iets melden*: een zin, en op wens een
schermafdruk. Nadia sorteert elke ochtend wat er is binnengekomen: een fout gaat met de stappen om hem na
te doen in de backlog, een wens naar Joris, en ruis (*"ik houd niet van linzen"*) blijft liggen.

### Wat de bèta meet

Elke sprint liet een vraag achter die alleen echte gebruikers kunnen beantwoorden. Dit zijn ze allemaal:

| # | Wat | Uit | Hoe |
|---|---|---|---|
| 1 | De zeven opdrachten uit de usertest, nu met echte mensen, apart geteld | [usertest](14-prototype-en-usertest.md) | De opdrachten op dag één |
| 2 | Of mensen de weekprijs met de prijs per portie begrijpen (keuze 3 van go/no-go 2) | [usertest](14-prototype-en-usertest.md) | Eén vraag na de eerste week |
| 3 | Of *Voor 2 · deze week anders?* gevonden wordt | [sprint 3](17-sprint-3-onboarding-en-weekmenu.md) | Hoe vaak het getikt wordt, en of mensen het aantal eters elders zoeken |
| 4 | Klachten over de volgorde van de afdelingen | [sprint 4](18-sprint-4-boodschappenlijst.md) | De meldingen |
| 5 | Hoe vaak de timer te laat afgaat op Android | [sprint 5](19-sprint-5-kookmodus.md) | De foutmeldingen: de app weet wanneer hij had moeten afgaan |
| 6 | Hoeveel de weekprijs naast de kassabon zit | [sprint 6](20-sprint-6-prijzen-en-premium.md) | Wie wil, stuurt een foto van de bon; het doel is 30 bonnen |
| 7 | Hoeveel testers premium willen | [plan van aanpak](04-plan-van-aanpak.md), risico's | *Premium nemen* getikt, en de vraag erna |
| 8 | Hoeveel weken zonder menu blijven, nu de herinnering standaard uit staat | [sprint 7](21-sprint-7-gedeelde-lijst.md) | Weken zonder menu, bij wie de herinnering aan of uit heeft |
| 9 | Hoe vaak mensen een lijst delen, en tegelijk in twee winkels staan | [sprint 7](21-sprint-7-gedeelde-lijst.md) | Gedeelde lijsten, en twee keer afvinken binnen een uur op twee plekken |
| 10 | Of de omweg voor de uitnodiging op een iPhone gevonden wordt | [sprint 7](21-sprint-7-gedeelde-lijst.md) | Uitnodigingen verstuurd tegen huisgenoten die meedoen, per toestel |
| 11 | Of *Niet weer* van de huisgenoot goed voelt | [sprint 8](22-sprint-8-restjes-en-afronden.md) | Bram belt tien testers met een gedeelde lijst |
| 12 | Hoeveel restjesslim plannen scheelt op de echte catalogus | [sprint 8](22-sprint-8-restjes-en-afronden.md) | De weekprijs met en zonder de wissels, per voorstel |

**Meten kan pas als de klant het goedvindt.** De gebruiksstatistieken zijn in
[sprint 1](15-sprint-1-fundament.md) bewust niet gekozen, omdat elke meting in de privacyverklaring moet.
Nu ligt er een vraag om te meten. **Het voorstel van Wouter en Jesse: PostHog, op een server in de EU**,
met alleen de gebeurtenissen voor de twaalf metingen hierboven: geen namen, geen e-mailadressen en geen
locatie, en een tester-nummer in plaats van het account. Daarbij hoort een korte privacyverklaring voor
de bèta, die de jurist van Thuiskok toetst, zoals de [offerte](05-offerte.md) afspreekt. De volledige
AVG-check is voor de lancering (taak #70).

### De lat, vooraf

Nadia legt vast wanneer de bèta **geslaagd** is. Dat is nog geen go/no-go 3: die gaat ook over de
toegankelijkheid en de AVG (taak #70). Wel is het wat het bureau daar zal laten zien.

| | De lat |
|---|---|
| Blokkerende meldingen aan het eind | **0 open** |
| Testers die de app vaker dan op dag één openen | **minstens 60 procent** |
| Testers die in de eerste week een menu kozen én een lijst afvinkten | **minstens de helft** |
| De zeven opdrachten | elk gelukt bij **minstens 60 procent**, de lat van de usertest (3 van de 5) |
| De app vastgelopen | in **minder dan 1 op de 200** keer openen |
| De weekprijs naast de kassabon | gemiddeld **binnen 25 procent**, de bovenkant van de 15 tot 25 procent die de [technische verkenning](09-technische-verkenning.md) verwachtte |

Haalt de bèta een lat niet, dan zegt Nadia dat bij go/no-go 3, met wat het team eraan deed. Een go met een
open blokkade is niet aan het bureau. Dat besluit is van de klant.

## Wat de klant nog moet zeggen

1. **De twee toezeggingen van Thuiskok.** Zijn de allergenen van alle ingrediënten nagekeken, en zijn de
   9 open ingrediënten in *Wat mist er nog?* aangevuld? Het advies van het bureau: **de bèta begint pas
   als beide af zijn.** Een tester met een allergie die een verkeerd recept krijgt, is een blokkade
   op dag één. Een week later beginnen kost een week van de buffer voor de lancering.
2. **Meten.** Mag het bureau meten met PostHog op een server in de EU, alleen de twaalf metingen
   hierboven, en toetst de jurist van Thuiskok de privacyverklaring voor de bèta vóór de start? Het
   alternatief is zonder statistieken: dan blijven alleen de meldingen, de foutmeldingen en de gesprekken
   van Bram over, en zijn metingen 3, 7, 8, 9, 10 en 12 er niet.
3. **Een bedankje voor de testers.** Het advies van het bureau: **drie maanden premium gratis bij de
   lancering**, voor elke tester die in beide weken de app gebruikte. Het kost Thuiskok hooguit 150 keer
   drie maanden premium, en het geeft het eerste groepje mensen die op de lanceringsdag al weten hoe
   het werkt. Het alternatief is niets geven; dan haken er naar verwachting meer testers af in week 24
   (afgeleid, niet gemeten).

## Volgende stap

De bèta zelf, maandag 19 april 2027, zodra de klant op de drie vragen heeft geantwoord. Daarna verwerkt het
team wat de testers vinden, samen met de AVG-check en de toegankelijkheid (taak #70), en eindigt fase 4
met go/no-go 3.
