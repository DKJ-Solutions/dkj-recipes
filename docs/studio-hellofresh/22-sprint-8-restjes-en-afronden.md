# 22. Sprint 8: restjesslim plannen, *Niet weer*, afronden en de prestaties

**Eigenaar:** Wouter (Tech Lead), met Fatima (Delivery Manager) · **Week 21–22:** 5 – 16 april 2027 ·
**Status:** **gebouwd** op 11 november 2026 (taak #67); **de demo is akkoord** (11 november 2026)

> **Wat deze sprint oplevert.** De laatste sprint van de bouw. Het weekmenu plant nu zo dat er minder
> overblijft van wat je koopt, en de lijst zegt eerlijk wat er na de week nog over is. Wie *Niet weer*
> zei, krijgt dat recept niet meer voorgesteld. En de app is af genoeg voor vreemden: sneller, zonder
> blokkerende fouten, en klaar voor de bèta.
>
> **Waarom het nu kan.** De klant keurde sprint 7 goed en besloot dat *Niet weer* de zevende regel van
> het voorstel wordt ([sprint 7](21-sprint-7-gedeelde-lijst.md), "Het antwoord van de klant").
> Restjesslim plannen is sinds go/no-go 1 een Should voor premium
> ([discovery](10-discovery-rapport.md), hoofdstuk 6), en sinds [sprint 6](20-sprint-6-prijzen-en-premium.md)
> weten we hoeveel er te halen valt: bij twee eters betaal je **€ 4,10** per portie en eet je er
> **€ 2,90** van op. Het verschil is wat er overblijft.

## De sprint in het kort

**Het sprintdoel:** *"Het weekmenu laat minder over, wie Niet weer zei wordt gehoord, en de app is snel
en stabiel genoeg om aan honderd vreemden te geven."*

- **Wie:** Wouter, Ayla, Daan en Koen (de app en de prestaties), Ruben, Mila en Sem (het voorstel en de
  restjes, in de API), Noor (de controle op de catalogus in het portaal), Jesse (de servers en de
  foutmeldingen voor de bèta), Iris (de schermen voor de restjes), Nadia en Tim (testen, en de bèta
  voorbereiden).
- **Tien werkdagen**, zonder feestdag.
- **De volgorde lag vast: eerst wat erbij komt, dan afronden.** Week 21 *Niet weer* en restjesslim
  plannen; vanaf woensdag 14 april **komt er niets meer bij**. Wat daarna nog binnenkwam, ging op de lijst
  voor na de lancering. De rest van week 22 was voor de fouten en de snelheid.
- **Restjesslim plannen is kleiner dan de discovery rekende.** Die zette er 60 dagen voor, voor een
  slim weekmenu, en haalde ze eruit toen de functie een Should werd. Het werden er **negen**, binnen het
  plafond van € 1.159.000, omdat het voorstel sinds het weekbudget al recepten kan wisselen volgens
  dezelfde regels. Restjesslim plannen is daar een tweede reden voor.
- **De bèta begint na deze demo.** Het [plan van aanpak](04-plan-van-aanpak.md) laat fase 4 in week 21
  beginnen, naast deze sprint. Nadia gebruikte die twee weken voor de werving, met Thuiskok; de testers
  krijgen de testversie van deze sprint (taak #69).

## *Niet weer*: de zevende regel

Het besluit uit sprint 7, zoals het nu gebouwd is:

7. **Wat je *Niet weer* noemde, komt niet meer in je voorstel.** Ook niet bij de drie alternatieven als
   je wisselt, want die volgen dezelfde regels. Bij *Meer recepten* staat het er wel, gewoon tussen de
   andere, met klein *"Je zei: niet weer"* eronder. Wie het toch kiest, kookt het.

- **Het geldt niet met terugwerkende kracht voor deze week.** Wie *Niet weer* tikt bij een recept dat
  later deze week nog op het menu staat, houdt dat menu. Een menu dat verandert terwijl de boodschappen
  al in huis zijn, is erger dan één avond iets wat je minder lekker vond.
- **Je haalt het terug in het recept**, op de plek uit sprint 7 waar staat wat je de vorige keer zei.
  Wie *Niet weer* verandert in *Gaat wel*, krijgt het recept weer in het voorstel.
- **Het telt alleen voor wie het menu maakt.** De huisgenoot met wie de lijst gedeeld is
  ([sprint 7](21-sprint-7-gedeelde-lijst.md)), kan na het koken ook *Niet weer* tikken, maar die
  beoordeling is van hem. Het menu is van wie deelt, en een beoordeling is van jou: dat waren de regels
  van sprint 7. Of dat in een huishouden goed voelt, meet de bèta (taak #69).
- **Kan het voorstel niet meer gevuld worden**, omdat iemand bijna alles *Niet weer* noemde, dan geldt
  hetzelfde als bij het budget: de app zegt het, in één zin, en laat zien wat er nog wel past. In de test
  gebeurde dat pas toen Tim twee derde van de recepten *Niet weer* had genoemd.

Het kostte één dag, zoals geschat.

## Restjesslim plannen

**Wat het oplost.** Een recept vraagt 150 ml kookroom; de winkel verkoopt 250 ml. De lijst rondt af op
het hele pak ([sprint 4](18-sprint-4-boodschappenlijst.md)), en 100 ml gaat na een paar dagen weg. Over
een week voor twee is dat het verschil tussen € 4,10 en € 2,90 per portie.

### In het voorstel

Ruben en Mila bouwden het als een **stap na de regels**, zoals het weekbudget:

1. Eerst het voorstel met de zeven regels.
2. **Dan de restjes.** Blijft er van een verpakking meer dan een kwart over, dan zoekt het voorstel een
   alternatief voor een ander recept dat aan dezelfde regels voldoet en die rest opmaakt. Wordt de week
   daardoor goedkoper, dan wisselt het. **Hooguit twee wissels per week**, zodat het voorstel herkenbaar
   blijft.
3. Dan het budget, zoals in sprint 6.

Een recept dat erin kwam om een rest op te maken, zegt dat op de kaart: *"Maakt je kookroom op."* Wie
het wisselt, mag dat: de drie alternatieven tonen dan eerst wat ook iets opmaakt, met hetzelfde zinnetje.

### Op de lijst

Onder de producten staat ingeklapt **Over na deze week**, met wat er van elke verpakking overblijft als
je de recepten volgt: *"Kookroom: 100 ml · Spinazie: ongeveer de helft van de zak"*. Alleen wat meer dan
een kwart is, en niets uit de basisvoorraad: dat er zout overblijft, weet iedereen.

### Wat het bewust niet doet

**De restjes van vorige week tellen niet mee.** Nadia vond in sprint 4 dat ze met de hand de rest van
vorige week meetelde. De app doet dat niet: ze weet niet wat je ermee deed, of wat nog goed is. Houdbaarheid
staat niet in de catalogus ([technische verkenning](09-technische-verkenning.md)), en een lijst die gokt
dat er nog kookroom staat, stuurt je zonder kookroom naar huis. Wie nog iets heeft, gebruikt *Heb je dit
in huis?* uit sprint 4.

### Wat het oplevert

Nadia mat het op dezelfde manier als in sprint 6: alle weekmenu's van drie avonden die de twaalf
testgerechten toelaten, met de testprijzen uit Checkjebon.

| Op de twaalf testgerechten | Betaald, sprint 6 | Betaald, nu | Opgegeten |
|---|---|---|---|
| 3 avonden voor 2 eters | € 4,10 per portie | **€ 3,60** per portie | € 2,90 per portie |
| 3 avonden voor 4 eters | € 3,20 per portie | **€ 3,05** per portie | € 2,90 per portie |

(Gemeten in de testomgeving, niet op de live catalogus van Thuiskok.)

- **Het verschil wordt ruim een derde kleiner bij twee eters**, en bij vier eters de helft.
- **Het doel van onder € 3 per portie haalt *wat je betaalt* nog steeds niet**, ook bij vier eters net
  niet. *Wat je opeet* haalt het wel, en dat is wat het recept toont (het besluit van sprint 6).
- **Met de recepten van Thuiskok kan het meer zijn.** Twaalf gerechten geven het voorstel weinig om uit
  te kiezen; met 50 zijn er meer recepten die dezelfde rest opmaken. Dat is afgeleid, niet gemeten. De
  bèta meet het op de echte catalogus (taak #69).

## Afronden

**De lijst van Nadia.** Over zeven sprints stonden er **43 bevindingen** open: fouten, teksten die niet
klopten, schermen die op een kleine telefoon verschoven. Fatima hield één regel aan: **alles wat een
tester tegenhoudt, is er voor de bèta uit.**

| | Bevindingen |
|---|---|
| Blokkerend (een tester komt niet verder) | 4, alle 4 opgelost |
| Hinderlijk (het werkt, maar je struikelt) | 17, waarvan 15 opgelost |
| Klein (een tekst, een marge) | 22, waarvan 9 opgelost |
| **Over naar de bèta** | **15**, geen enkele blokkerend |

De vier blokkerende:

- **De gedeelde lijst raakte een product kwijt** als de huisgenoot het toevoegde op het moment dat wie
  deelde het menu wisselde. Regel 4 uit sprint 7 zegt dat toevoegen nooit verloren gaat; nu klopt dat
  ook dan.
- **Aankoop herstellen op Android** zette premium niet terug als het abonnement op een ander toestel was
  afgesloten.
- **De timer uit sprint 5 ging niet af** als de telefoon in de energiebesparende stand stond, op twee
  Android-toestellen.
- **Een recept zonder foto liet het weekmenu leeg.** Op de live catalogus heeft één recept nog geen foto.

**Jesse zette de foutmeldingen aan**: een app die vastloopt, stuurt zonder iets persoonlijks een
melding naar het team, en de server waarschuwt Jesse als het voorstel op maandag niet op tijd klaar is.
Zonder dat hoort het team in de bèta alleen wat testers de moeite waard vinden om te melden.

**Noor bouwde in het portaal *Wat mist er nog?*** uit sprint 6 om tot een controle voor de bèta: per
ingrediënt of de prijs, de verpakking en de afdeling er zijn. Op 16 april stonden er op de live catalogus
**nog 9 van de 31** open. Thuiskok vult ze aan vóór de bèta, zoals besloten in sprint 6.

## De prestaties

Wouter legde vóór de sprint drie doelen vast, en mat ze op een Android-telefoon van drie jaar oud en
een iPhone van vier jaar oud. Een nieuwe telefoon zegt niets: die is altijd snel.

| | Doel | Vóór | Na |
|---|---|---|---|
| De app openen tot het weekmenu (koud, Android) | onder 2 s | 3,4 s | **1,6 s** |
| De app openen tot het weekmenu (koud, iPhone) | onder 2 s | 1,9 s | **1,1 s** |
| Het weekmenu na een wissel | onder 1 s | 2,3 s | **0,6 s** |
| De grootte van de app | onder 40 MB | 48 MB | **31 MB** |

(Gemeten in de testomgeving, tien keer per meting, de mediaan.)

- **Het voorstel werd te traag van de restjes.** Met de zeven regels, de restjes en het budget kostte één
  voorstel voor wie premium heeft 2,3 seconden op de server. Mila maakt het voorstel daarom maandag om
  vier uur 's nachts voor iedereen klaar, want het komt toch op maandag (sprint 3). Openen leest het
  alleen nog. Wisselen rekent wel opnieuw, maar alleen voor die ene week: 0,6 seconden.
- **De foto's zaten in de app.** Ayla haalde ze eruit: ze komen van de server, in de maat van het scherm.
  Dat scheelt 17 MB, en Thuiskok kan een foto vervangen zonder nieuwe versie van de app.
- **De app opende eerst alles.** Koen liet hem alleen het weekmenu laden; de lijst, de kookmodus en *Ik*
  laden pas als je erheen gaat.

## Wat er af is

| Verhaal | Klaar |
|---|---|
| *Niet weer* als zevende regel, ook bij de alternatieven | **ja** |
| *Niet weer* terugdraaien in het recept | **ja** |
| Restjesslim plannen als stap in het voorstel, hooguit twee wissels | **ja** |
| *"Maakt je kookroom op"* op de kaart en bij de alternatieven | **ja** |
| *Over na deze week* op de lijst | **ja** |
| De restjes van vorige week | **nee**, bewust: zie hierboven |
| Geen blokkerende bevindingen meer | **ja**, 15 kleine en hinderlijke gaan mee naar de bèta |
| De foutmeldingen en de waarschuwing voor het voorstel | **ja** |
| De controle op de catalogus in het portaal | **ja**, 9 ingrediënten nog open bij Thuiskok |
| De drie doelen voor de snelheid | **ja** |

**Waarmee het team testte.** Tim zette de zeven regels, de restjes en het budget samen als
geautomatiseerde test op de lopende band: 200 voorstellen per keer, met willekeurige antwoorden uit de
onboarding, en voor elk de controle dat geen regel gebroken is. Nadia deed de vier blokkerende fouten
opnieuw na op de toestellen waar ze gevonden waren.

**Wat ze vonden:**

- **Twee wissels kunnen het menu eentonig maken.** Een week met drie recepten met spinazie maakt de zak
  op, maar regel 4 (niet drie keer hetzelfde) gaat over het hoofdingrediënt, niet over de groente. Mila
  liet de restjes daarom alleen wisselen als het nieuwe recept een **ander hoofdingrediënt** heeft dan de
  andere twee. Het scheelt in de meting een paar cent.
- **Premium zegt nu wat het geeft, en niets meer *straks*.** Het premiumscherm noemt het weekbudget, de
  gedeelde lijst en restjesslim plannen. Wie geen premium heeft, ziet *Over na deze week* niet, en ook
  niet dat het er is. Dat is een keuze, en de klant mag er iets anders van vinden (hieronder).

## De demo bij de klant

**Vrijdag 16 april 2027**, een uur: de laatste demo van de bouw. Joris leidt, Iris laat het scherm zien,
Wouter beantwoordt de technische vragen, en Nadia vertelt hoe de bèta begint.

1. *Niet weer* tikken na het koken, de week verder zetten op de testserver, en zien dat het recept niet
   in het voorstel staat, wel bij *Meer recepten*.
2. Een voorstel voor twee eters met premium: *"Maakt je kookroom op"* op een kaart, en de weekprijs naast
   die van hetzelfde menu zonder restjes.
3. De lijst, en *Over na deze week* openklappen.
4. De app koud openen op de oude Android-telefoon, naast de testversie van sprint 7.
5. In het portaal *Wat mist er nog?*, met de negen ingrediënten die nog openstaan.

**Wat er nog niet te zien is:** niets meer uit het plan voor de bouw. Wat nu nog komt, komt uit de bèta.

## Wat de klant nog moet zeggen

1. ***Over na deze week*: alleen voor premium, of voor iedereen?** Gebouwd is **alleen premium**, zoals
   restjesslim plannen in de MoSCoW staat. Het advies van het bureau: **het overzicht voor iedereen, het
   plannen voor premium.** Eerlijk zeggen wat er overblijft, past bij de toon van Thuiskok, en wie ziet
   dat er 100 ml kookroom overblijft, ziet ook waarom premium het oplost. Omzetten kost een halve dag.
2. **Niets meer erbij tot de lancering?** Het advies van het bureau: **ja**. Wat de bèta oplevert, wordt
   opgelost of komt op de lijst voor na de lancering, maar er komt geen nieuwe functie bij in week 23 tot
   en met 26. Elke nieuwe functie nu is een nieuwe kans op een fout die de review van Apple of Google
   tegenhoudt (taak #72). Het alternatief is per functie beslissen, in de stuurgroep.
3. **De demo.** Zijn *Niet weer*, restjesslim plannen en de afronding zoals hierboven akkoord, en mag de
   bèta (taak #69) beginnen met deze testversie?

### Het antwoord van de klant

Dave gaf op 11 november 2026 als Thuiskok antwoord op alle drie de vragen:

1. ***Over na deze week* is voor iedereen, het plannen blijft premium**, zoals het bureau adviseerde.
   Wie geen premium heeft, ziet dus wel wat er na de week overblijft, maar het weekmenu plant daar niet
   omheen. Omzetten kost ongeveer een halve dag.
2. **Er komt niets meer bij tot de lancering.** Wat de bèta oplevert, wordt opgelost of komt op de lijst
   voor na de lancering; in week 23 tot en met 26 komt er geen nieuwe functie bij.
3. **De demo is akkoord**: *Niet weer*, restjesslim plannen en de afronding zoals hierboven. De bèta
   (taak #69) mag beginnen met deze testversie.

Daarmee is sprint 8 rond, en de bouw (fase 3) ook.

## Volgende stap

De bèta met 100 tot 200 testgebruikers (taak #69), met deze testversie en *Over na deze week* voor
iedereen. Vanaf nu komt er geen nieuwe functie meer bij tot de lancering.
