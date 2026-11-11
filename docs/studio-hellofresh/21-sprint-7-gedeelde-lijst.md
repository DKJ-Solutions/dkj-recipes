# 21. Sprint 7: de gedeelde lijst, de herinnering en *Hoe was het?*

**Eigenaar:** Wouter (Tech Lead), met Fatima (Delivery Manager) · **Week 19–20:** 22 maart – 2 april
2027 · **Status:** **gebouwd** op 11 november 2026 (taak #66); **de demo ligt bij de klant**

> **Wat deze sprint oplevert.** Samen boodschappen doen. Wie premium heeft, deelt de boodschappenlijst met
> een huisgenoot, en dan vinken ze samen af, elk op hun eigen telefoon ([user flow](11-user-flows.md) 5).
> Wie gekookt heeft, zegt in één tik hoe het was (flow 4). En wie een week geen menu kiest, krijgt hooguit
> één vriendelijke herinnering (flow 2 en 6).
>
> **Waarom het nu kan.** De klant keurde de prijzen, premium en het weekbudget goed
> ([sprint 6](20-sprint-6-prijzen-en-premium.md), "Het antwoord van de klant"). De gedeelde lijst is
> premium, en premium bestaat sinds sprint 6. De lijst werkt zonder bereik sinds
> [sprint 4](18-sprint-4-boodschappenlijst.md), en die sprint liet één vraag liggen voor nu: wat er gebeurt
> als twee telefoons dezelfde lijst veranderen.

## De sprint in het kort

**Het sprintdoel:** *"Wie samen boodschappen doet, werkt één lijst af op twee telefoons, ook zonder
bereik; wie gekookt heeft, zegt hoe het was; en wie een week niets kiest, krijgt hooguit één seintje."*

- **Wie:** Wouter, Ayla, Daan en Koen (de app), Ruben, Mila en Sem (het delen en de meldingen, in de
  API), Noor (de beoordelingen in het portaal), Jesse (de meldingsdiensten van Apple en Google), Iris (de
  schermen voor delen en uitnodigen), Nadia en Tim (testen).
- **Negen werkdagen, niet tien.** Maandag 29 maart 2027 is Tweede Paasdag. Fatima haalde daarom niets
  uit de sprint, maar legde de volgorde vast: **week 19 de gedeelde lijst, week 20 de herinnering en
  *Hoe was het?*.** De gedeelde lijst is Must en premium; de andere twee zijn Should
  ([discovery](10-discovery-rapport.md)). Moest er iets schuiven, dan schoof een Should naar sprint 8.
- **Er schoof niets.** Beide Shoulds zijn klein, omdat hun plek er al was: *Hoe was het?* heeft sinds
  sprint 5 een lege plek op het scherm *Klaar*, en de toestemming voor meldingen vraagt de app sinds de
  timer.
- **Premium zegt niet meer *komt eraan*.** Het scherm uit sprint 6 noemde de gedeelde lijst met
  *"komt eraan"*. Die woorden zijn weg.

## De gedeelde lijst

De route uit flow 5, zoals hij nu gebouwd is:

```text
Boodschappenlijst → "Deel met je huisgenoot"
  → (geen premium? eerst het premiumscherm uit sprint 6)
  → Een link, via WhatsApp, sms of mail → de huisgenoot tikt erop
  → (geen app? eerst de store) → "Sanne wil de boodschappenlijst met je delen" → [ Meedoen ]
  → Samen afvinken
```

- **Eén van beiden betaalt.** Premium hoort bij wie deelt. De huisgenoot doet gratis mee: één
  huishouden, één abonnement. Twee keer € 2,49 voor één lijst zou voelen als de abonnementsdwang die
  Thuiskok juist niet wil ([teardown](03-hellofresh-teardown.md)).
- **Meedoen vraagt een account.** Een lijst die tussen twee mensen synchroniseert, moet weten wie wie is.
  Wie nog gast is ([sprint 1](15-sprint-1-fundament.md)), krijgt de vraag uit sprint 3 met een andere
  reden: *"Zodat Sanne ziet wat jij al in je mandje hebt."*
- **De link is zeven dagen geldig en werkt één keer.** Een link die rondgaat in een groepsapp, geeft zo
  niet de hele groep toegang. Een lijst kan met **hooguit vijf** huisgenoten gedeeld worden; meer eters
  dan zes kent de app niet.
- **De huisgenoot ziet de lijst en het weekmenu, en wisselt niets.** Hij kan afvinken, zelf iets
  toevoegen (*"wc-papier"*) en de recepten openen om te koken. Het menu wisselen en het aantal eters
  aanpassen blijft bij wie deelt: twee mensen die tegelijk een recept wisselen, maken van één lijst
  twee halve.
- **Wie afvinkte, staat erbij**, klein en grijs: *"Sanne"*. Alleen de voornaam uit het account, en
  verder niets van de ander.

### Twee telefoons, één lijst

Sprint 4 schreef: *"Met één toestel per lijst is er niets om tegen elkaar af te wegen; dat verandert met
de gedeelde lijst."* Ruben en Mila legden de regels vast, per product op de lijst:

1. **Met bereik ziet de ander het meteen.** Een vink staat binnen een seconde op de andere telefoon
   (gemeten in de testomgeving, op wifi en op 4G).
2. **Zonder bereik werkt alles zoals in sprint 4**: de vink staat op het toestel, en gaat naar de server
   zodra het kan.
3. **Hebben beiden hetzelfde product veranderd terwijl ze geen bereik hadden, dan wint *afgevinkt*.** Ook
   als de één het afvinkte en de ander het terug in de lijst zette. Een product dat ten onrechte
   afgevinkt staat, zie je in je mandje; een product dat ten onrechte openstaat, koop je twee keer.
4. **Iets wat de één toevoegt en de ander niet kent, gaat nooit verloren.** Toevoegen botst niet: twee
   keer *"wc-papier"* staat er dan twee keer, en dat is aan de mensen om weg te halen.

De klok van de telefoon speelt geen rol. Telefoons lopen niet gelijk, en een regel die op tijdstippen
vertrouwt, kiest dan willekeurig.

### Stoppen met delen

- **Wie deelt, haalt een huisgenoot eruit** onder *Lijst → Gedeeld met*. **Een huisgenoot stapt er zelf
  uit** op dezelfde plek. Geen bevestigingsscherm, wel één zin: *"Je ziet deze lijst niet meer."*
- **Zegt wie deelt premium op, dan stopt het delen** aan het eind van de betaalde maand, zoals de rest van
  premium. De huisgenoot ziet dan één keer: *"Sanne deelt de lijst niet meer."* Zijn eigen gratis lijst
  werkt gewoon, zoals na opzeggen in sprint 6.

## De herinnering

Flow 2 en 6 beloofden **hooguit één herinnering per week**, en die is gebouwd als pushmelding:

*"Je menu voor deze week staat klaar."*

- **Alleen als er deze week nog geen menu is.** Wie al gekozen heeft, of de app die dag al opende, krijgt
  niets.
- **Op de dag dat iemand vorige week zijn menu bevestigde**, om vijf uur 's middags. Daan rekende het uit
  de testgegevens: de meeste mensen kiezen op dezelfde dag van de week. Een vast moment voor iedereen zou
  voor de helft te vroeg of te laat zijn.
- **Nooit twee.** Ook niet als de herinnering niet werkt: geen tweede poging, geen mail erachteraan. *De
  app laten liggen kost niets* ([user flows](11-user-flows.md), flow 6).
- **Uitzetten kan onder *Ik → Meldingen***, met één schakelaar.
- **Geen melding bij elke vink.** Wie de lijst deelt, krijgt alleen bericht als de huisgenoot meedoet:
  *"Thomas doet mee met je lijst."* Een telefoon die in de winkel bij elk product trilt, is een telefoon
  die uit gaat.

Jesse zette de meldingsdiensten van Apple en Google aan in de accounts van Thuiskok, die er sinds sprint 3
zijn. De sleutels staan in de kluis op de server, niet in de app.

### Het gat in de toestemming

Bij het testen vond Nadia het gat van deze sprint. **De app vraagt de toestemming voor meldingen bij de
eerste timer** ([sprint 5](19-sprint-5-kookmodus.md)): *"Mogen we je een seintje geven als de timer klaar
is, ook als je even iets anders doet?"* Op de telefoon is dat één toestemming, voor elke melding van de
app. Wie ja zei tegen de timer, zou dus ook de herinnering krijgen, terwijl de vraag daar niet over ging.

- **Juridisch is het geen probleem**, zei Wouter na overleg: een herinnering over je eigen weekmenu is
  geen reclame. Maar het breekt de toon van het [designsysteem](13-designsysteem.md): eerlijk zeggen wat
  we doen.
- **Gebouwd is daarom: de herinnering staat standaard uit.** Na het tweede bevestigde weekmenu vraagt
  de app één keer: *"Zullen we je volgende week een seintje geven als je menu klaarstaat?"* Ja zet de
  schakelaar aan; nee laat hem uit, en de vraag komt niet terug.
- **De prijs daarvan**: minder mensen krijgen de herinnering, en de herinnering is wat een week zonder
  menu voorkomt. Hoeveel minder, weten we pas in de bèta (taak #69). Wat de klant hier wil, is een vraag
  (hieronder).

## *Hoe was het?*

**De plek op het scherm *Klaar* uit sprint 5 is gevuld**, onder *"Klaar. Eet smakelijk."* en het ♡:

*Hoe was het?* · **Lekker** · **Gaat wel** · **Niet weer**

- **Drie knoppen, geen sterren.** Vijf sterren vragen om een oordeel; drie woorden vragen om een gevoel,
  en dat is wat Thuiskok wil weten. Het is ook wat iemand met vieze handen nog kan aantikken.
- **Overslaan is niets doen.** Er is geen knop *Overslaan*, en de vraag komt bij dit recept niet terug.
  Wie het recept opnieuw kookt, krijgt hem opnieuw.
- **Wie twijfelt, kan het later nog zeggen**: in het recept, onder de ingrediënten, staat wat je de
  vorige keer zei, en daar verander je het.
- **Een beoordeling is van jou.** Andere mensen zien hem niet, en de app toont nergens een gemiddelde.
  Met vijftig recepten en een paar honderd testers in de bèta zegt een gemiddelde nog niets, en een recept
  met *2,1 sterren* kookt niemand meer, ook als het aan drie mensen lag.

**In het portaal ziet de redactie van Thuiskok per recept wat mensen zeiden**: *"Lekker 14 · Gaat wel 3 ·
Niet weer 1"*. Noor bouwde het als een kolom in de receptenlijst, die je kunt sorteren. Zo ziet Thuiskok
welk recept beter moet, en welk recept eruit kan.

**Wat *Niet weer* nu doet, en wat niet.** De beoordeling wordt bewaard, en verder niets: het voorstel van
de week kent hem nog niet. Een recept dat iemand *niet weer* wil, kan dus volgende week gewoon in zijn
voorstel staan. Of dat mag, is een vraag aan de klant (hieronder), zoals de favorieten dat in sprint 5
waren: het verandert de regels van het voorstel.

## Wat er af is

| Verhaal | Klaar |
|---|---|
| De lijst delen met een link, voor wie premium heeft | **ja** |
| Meedoen met een account, gratis voor de huisgenoot | **ja** |
| Samen afvinken, met bereik binnen een seconde | **ja** |
| Samen afvinken zonder bereik: *afgevinkt* wint | **ja** |
| De huisgenoot ziet het weekmenu en voegt toe, maar wisselt niet | **ja** |
| Stoppen met delen, en het delen stopt na opzeggen | **ja** |
| De herinnering als het menu er nog niet is, hooguit één per week | **ja**, standaard uit: zie het gat hierboven |
| *Hoe was het?* met drie knoppen, en de kolom in het portaal | **ja** |
| *Niet weer* in het voorstel | **nee**: een vraag aan de klant |

**Waarmee het team testte.** Nadia en Tim deelden lijsten tussen tien testtoestellen, iPhones en
Android door elkaar. Tim zette delen, meedoen, samen afvinken en stoppen met delen als geautomatiseerde
test op de lopende band, ook met het netwerk uit op één toestel of op allebei. De herinnering testte Tim
door de klok van de testserver een week vooruit te zetten.

**Wat ze vonden:**

- **Twee winkels, één pak kookroom te veel.** Nadia en Tim deden de lijst van één weekmenu tegelijk, elk
  in een andere supermarkt, allebei in een kelder zonder bereik. Allebei kochten ze de kookroom: de regels
  hierboven kunnen niet weten wat de ander zonder bereik doet. **Dat is geen fout die op te lossen is
  met een regel**, alleen met afspraken tussen mensen, of met een knop *Ik pak dit* die ook pas werkt als
  er bereik is. Wouter zette het als meetpunt voor de bèta (taak #69): hoe vaak delen mensen een lijst en
  staan ze tegelijk in twee winkels?
- **De uitnodiging op een iPhone zonder de app.** Op Android onthoudt de Play Store de link: na de
  installatie opent de app meteen met *Meedoen*. Op een iPhone niet; daar opent de app na de installatie
  bij het begin, en is de uitnodiging weg (gemeten, vijf keer op beide). Daan zette op het eerste scherm
  één regel: *"Kreeg je een uitnodiging? Tik nog een keer op de link."* Het werkt, maar het is een
  omweg, en de bèta moet laten zien of mensen hem vinden.
- **De herinnering kwam op tijd**, elke keer, op beide toestellen, en nooit twee keer in een week
  (gemeten, in de testomgeving met de verzette klok).

## De demo bij de klant

**Vrijdag 2 april 2027**, drie kwartier. Joris leidt, Iris laat het scherm zien op twee telefoons naast
elkaar, Wouter beantwoordt de technische vragen.

1. Op de iPhone de lijst delen met *Deel met je huisgenoot*, en de link naar de Android-telefoon sturen.
2. Op de Android-telefoon meedoen, en de lijst met het weekmenu zien.
3. Samen afvinken: een vink op de ene telefoon staat meteen op de andere, met de naam erbij.
4. Eén telefoon in vliegtuigstand, op allebei hetzelfde product veranderen, het netwerk weer aan: het
   product staat afgevinkt.
5. Een recept koken tot *Klaar*, en *Lekker* tikken. In het portaal de kolom met de beoordelingen.
6. Onder *Ik → Meldingen* de herinnering aanzetten, en de melding op de testserver laten komen.

**Wat er nog niet te zien is:** restjesslim plannen, en *Niet weer* in het voorstel.

## Wat de klant nog moet zeggen

1. **De herinnering: standaard aan of uit?** Gebouwd is **uit**, met één vraag na het tweede weekmenu.
   Dat is het advies van het bureau: de toestemming bij de timer ging over de timer, en een seintje waar
   niemand om vroeg, is precies wat Thuiskok anders wil doen dan HelloFresh. Het alternatief is **aan**
   voor wie ja zei bij de timer, met de schakelaar onder *Ik* om hem uit te zetten: meer mensen krijgen
   hem, en dus minder weken zonder menu. Omzetten kost een halve dag.
2. **Mag *Niet weer* een recept uit het voorstel halen?** Het advies van het bureau: **ja, als zevende
   regel**: een recept waar je *Niet weer* bij zei, komt niet meer in je voorstel, en je kunt het nog wel
   zelf kiezen bij *Meer recepten*. Wie zegt dat hij iets niet weer wil, en het volgende week
   voorgesteld krijgt, voelt zich niet gehoord. Het kost ongeveer een dag, in sprint 8 (taak #67). Het
   alternatief is **nee**: de beoordelingen zijn dan alleen voor de redactie van Thuiskok.
3. **De demo.** Zijn de gedeelde lijst, de herinnering en *Hoe was het?* zoals hierboven akkoord, ook met
   de omweg voor de uitnodiging op een iPhone, of mist Thuiskok iets voordat sprint 8 (restjesslim
   plannen en afronden, taak #67) begint?

## Volgende stap

Sprint 8: restjesslim plannen, afronden en de prestaties (taak #67), zodra de klant de demo heeft gezien.
