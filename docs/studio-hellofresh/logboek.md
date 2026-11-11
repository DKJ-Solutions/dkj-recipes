# Logboek

Per sessie wat we samen hebben besloten. Het nieuwste staat bovenaan.

## Sessie 2 — 11 november 2026: de offerte getekend

- **De offerte is getekend** (taak #46), door Dave namens het bureau en door Thuiskok B.V., zoals
  hij stond: €72.250 vast voor de discovery en een plafond van €1.198.000 voor de rest. Zie de
  [offerte](05-offerte.md). Daarmee is fase 0 rond.
- **De kick-off is voorbereid** (taak #47): maandag 16 november met het hele kernteam, met de
  agenda, wie wat doet in de vier weken discovery, en de afspraken en tools. Er staan drie vragen
  open voor de klant: de vaste contactpersoon, hulp bij het werven voor de interviews, en de datum
  van de eerste stuurgroep. Zie de [kick-off](06-kick-off.md).
- **De teardown is gecontroleerd** (taak #49), tegen openbare bronnen; de app zelf nog niet. HelloFresh
  heeft 45 tot ruim 80 recepten per week, in NL alleen boxen voor 1 en 2 personen, en kost vanaf
  €4,30 per portie. De kookmodus blijkt geen verbetering: HelloFresh heeft er een. De premiumfuncties
  zijn nu Must, en de supermarktkoppelingen Won't. **Prijs als reden om op te zeggen is niet
  bewezen**, dus dat toetsen de interviews als eerste. Zie de [teardown](03-hellofresh-teardown.md).
- **Wie de deelnemers speelt, is besloten** (taak #50): Dave speelt alle 8 tot 10 deelnemers zelf.
- **De gespreksleidraad is klaar** (taak #50): zes hypotheses, met H2 (prijs als reden om op te
  zeggen) als eerste, vier afhakers, drie gezinnen en twee à drie starters, en 21 vragen in 45
  minuten. Over geld begint Bram pas in blok 5, zodat telt wat iemand uit zichzelf noemt. Zie de
  [interviews](07-interviews.md).
- **De interviews zijn afgenomen** (taak #50). Dave speelde deelnemer 1 zelf: een afhaker in spe die
  nog bij HelloFresh zit. Daarna liet hij Chris de andere acht schrijven, als **fictief** gemarkeerd.
  De echte stem noemt de prijs uit zichzelf als reden om op te zeggen (H2a voorlopig bevestigd), maar
  kijkt niet naar de prijs van een recept (H2b niet bevestigd). De belofte wordt daarom "het gemak van een box,
  voor het geld van gewone boodschappen". H3 en H4 blijven open. Zie de [interviews](07-interviews.md).
- **De persona's zijn uitgewerkt** (taak #51): **Noor, de boxmoeë** is primair, want zij is de enige
  met een echte stem eronder. Marieke (het krappe gezin) en Daan (de starter) zijn secundair en rusten
  alleen op fictie. Daarbij een voorstel voor de MoSCoW (taak #53): een weekmenu en de weekprijs op
  echt bewijs, de prijs per portie niet als uithangbord. Zie de [persona's](08-personas.md).
- **De technische verkenning is klaar** (taak #52). Een recept staat in de database met
  hoeveelheden **per portie**, en elk ingrediënt komt uit **één catalogus** met een afdeling, een
  verpakkingsgrootte en een geschatte prijs. Daaruit volgen twee getallen: de prijs per portie en de
  **weekprijs**, en die laatste draagt de belofte. De prijzen komen uit een **eigen tabel van ± 300
  ingrediënten**, die elk kwartaal wordt bijgewerkt, met Checkjebon als hulpmiddel. Er wordt niet
  gescrapet. Zie de [technische verkenning](09-technische-verkenning.md).
- **Het discovery-rapport ligt bij de klant** (taak #53). De belofte wordt "het gemak van een box, voor
  het geld van gewone boodschappen", met de weekprijs voorop. Restjesslim plannen gaat van Must naar
  Should, en de prijstabel in het beheerportaal komt erbij. Het plafond van deel B daalt naar
  **€ 1.159.000**, en de lancering blijft in week 26. Zie het [discovery-rapport](10-discovery-rapport.md).
- **Go/no-go 1: go, met deze scope** (taak #53). Dave koos als Thuiskok voor optie 1: restjesslim
  plannen wordt Should, het plafond van deel B is **€ 1.159.000**, en het design (fase 2) begint.
  Daarmee is fase 1 rond. Zie het [discovery-rapport](10-discovery-rapport.md), hoofdstuk 6.
- **De user flows staan** (taak #55): zeven routes, met de week als hoofdroute (menu kiezen,
  boodschappen doen, koken). Het account komt ná het eerste weekmenu, de app stelt een menu voor in
  plaats van te laten kiezen, en premium wordt aangeboden waar het iets oplost. Vier keuzes gaan als
  eerste naar de usertest (taak #58). Zie de [user flows](11-user-flows.md).
- **De wireframes staan** (taak #56): negen kernschermen voor de flows 1 tot en met 4, met het
  weekmenu als het belangrijkste scherm (de weekprijs bovenaan, één knop om ja te zeggen) en drie tabs
  onderin: Week, Lijst en Ik. De premiumschermen en het portaal volgen later. Zie de
  [wireframes](12-wireframes.md).
- **Thuiskok heeft geen eigen merk** (taak #57). Dave besloot als klant: het bureau stelt het merk voor
  (kleuren en typografie, zonder logo) als deel van het designsysteem, binnen het plafond van deel B.
- **Het designsysteem ligt als voorstel bij de klant** (taak #57). "Een keukentafel, geen restaurant":
  paprika, saffraan en basilicum op een crèmekleurige ondergrond, en bewust geen limoengroen. De letters
  zijn Fraunces voor de koppen en Inter voor de tekst, allebei gratis. Elke kleurcombinatie is
  nagerekend op WCAG AA. Er staan twee vragen open voor de klant: wie de foto's maakt, en of het
  merkvoorstel akkoord is. Zie het [designsysteem](13-designsysteem.md).
- **De drie vragen voor het prototype zijn beantwoord** (taak #58). Het merk volgt zoveel mogelijk het
  DKJ brand book: het thema Roest, de systeemletter en de onderdelen van het brand book, met vier eigen
  onderdelen en twee eigen lettermaten erbovenop. Fraunces, Inter en het eigen palet zijn vervallen, en
  de donkere modus komt er gratis bij. Thuiskok levert de gerechten zelf, nagekookt van bewaarde
  HelloFresh-gerechten, met eigen foto's. Chris speelt de vijf testers, als fictie. Zie het
  [designsysteem](13-designsysteem.md).
- **Het prototype is getest** (taak #58): twaalf schermen, zeven opdrachten, vijf **fictieve**
  deelnemers. Het account ná het menu en het voorstel in plaats van zelf kiezen zijn bevestigd, het
  aantal eters per week met een aanpassing. **De weekprijs zonder vergelijking is niet bevestigd**: drie
  van de vijf vroegen "is dat veel?". Het advies is de prijs per portie klein onder de weekprijs. Zie het
  [prototype en de usertest](14-prototype-en-usertest.md).
- **Go/no-go 2: go, met de prijs per portie** (taak #58). Dave koos als Thuiskok voor optie 1: onder
  de weekprijs komt klein "€ 5,23 per portie · indicatief", en de weekprijs blijft voorop. De bèta
  (taak #69) toetst de weekprijs opnieuw met echte mensen. Daarmee is fase 2 rond en begint de bouw met
  sprint 1 (taak #60). Zie het [prototype en de usertest](14-prototype-en-usertest.md), hoofdstuk
  "Go/no-go 2".
- **Sprint 1 is gebouwd** (taak #60): PostgreSQL in een Europese cloud in Amsterdam, drie omgevingen,
  Sentry, en een lopende band die bij elke wijziging test en een testversie bouwt. Wie de app opent, is
  meteen een gast; "Bewaar je menu" maakt van die gast een account, met Apple, Google of e-mail zonder
  wachtwoord. De testversie in TestFlight wacht op de accounts op naam van Thuiskok. **Twee vragen
  liggen bij de klant**: wie die accounts aanmaakt, en of de demo akkoord is. Zie
  [sprint 1](15-sprint-1-fundament.md).
- **Sprint 1 is akkoord** (taak #60). Dave antwoordde als Thuiskok: Thuiskok maakt het Apple
  Developer-account en het Google Play-account deze week op eigen naam aan, met hulp van het bureau
  bij het D-U-N-S-nummer, en de bèta (taak #69) blijft op schema. Het fundament is akkoord zoals
  gedemonstreerd, dus sprint 2 begint (taak #61). Zie [sprint 1](15-sprint-1-fundament.md), hoofdstuk
  "Het antwoord van de klant".
- **Sprint 2 is gebouwd** (taak #61): het beheerportaal, waarin een redacteur een recept invoert met
  de ingrediënten uit één catalogus, het voorbeeld ziet en publiceert. De catalogus heeft de prijs, de
  bron en de peildatum al; het rekenen komt in sprint 6. Bij elke foto vraagt het portaal of hij zelf
  gemaakt is. De app toont het recept zoals scherm 8, zonder prijs. **Drie vragen liggen bij de
  klant**: of de eerste 50 recepten erin staan (sprint 3 heeft er minstens 30 nodig, waarvan 12
  vegetarisch), of de store-accounts er zijn, en of de demo akkoord is. Zie
  [sprint 2](16-sprint-2-recepten-en-portaal.md).
- **Sprint 2 is akkoord** (taak #61). Dave antwoordde als Thuiskok: minstens 30 recepten staan live
  in het portaal, waarvan 12 vegetarisch, ingevoerd door de eigen redacteuren van Thuiskok. Het Apple
  Developer-account en het Google Play-account bestaan, het bureau krijgt een uitnodiging, en vanaf
  sprint 3 gaat de testversie via TestFlight en de Play Console. Het portaal en het recept zijn akkoord
  zoals gedemonstreerd, dus sprint 3 begint (taak #62). Zie
  [sprint 2](16-sprint-2-recepten-en-portaal.md), hoofdstuk "Het antwoord van de klant".
- **Sprint 3 is gebouwd** (taak #62): de onboarding in drie schermen, in ongeveer 35 seconden tot het
  eerste weekmenu. Het voorstel van de week volgt vijf vaste regels, een recept wisselen geeft drie
  alternatieven, en het aantal eters is per week te kiezen. De weekprijs-kaart staat er, nog zonder
  bedrag tot sprint 6. De catalogus kreeg de allergenen, die er nog niet in zaten; een recept met een
  ingrediënt dat niet is nagekeken, valt weg voor wie een allergie aanvinkt. De testversie gaat voor het
  eerst via TestFlight en de Play Console. **Twee vragen liggen bij de klant**: wie de allergenen
  nakijkt en wanneer, en of de demo akkoord is. Zie [sprint 3](17-sprint-3-onboarding-en-weekmenu.md).
- **Sprint 3 is akkoord** (taak #62). Dave antwoordde als Thuiskok: Thuiskok kijkt de allergenen per
  ingrediënt zelf na in het portaal, vóór de bèta (taak #69), en sprint 4 wacht daar niet op. De
  onboarding en het weekmenu zijn akkoord zoals gedemonstreerd, ook zonder weekprijs tot sprint 6, dus
  sprint 4 begint (taak #63). Zie [sprint 3](17-sprint-3-onboarding-en-weekmenu.md), hoofdstuk "Het
  antwoord van de klant".
- **Sprint 4 is gebouwd** (taak #63): de boodschappenlijst, samengevoegd over de week, afgerond op hele
  verpakkingen, per afdeling in één vaste volgorde en af te vinken, ook zonder bereik. "Heb je dit in
  huis?" staat bovenaan, zoals de usertest vroeg. De catalogus kreeg een omrekening per verpakking, die
  er nog niet in zat; waar die ontbreekt, toont de lijst de hoeveelheid zelf. **Drie vragen liggen bij
  de klant**: wie de verpakkingen invult en wanneer, of één afdelingsvolgorde genoeg is voor de
  lancering, en of de demo akkoord is. Zie [sprint 4](18-sprint-4-boodschappenlijst.md).
- **Sprint 4 is akkoord** (taak #63). Dave antwoordde als Thuiskok: Thuiskok vult de verpakkingen van
  de 31 ingrediënten zelf in, vóór sprint 6 (taak #65). Eén vaste afdelingsvolgorde is genoeg voor de
  lancering, en klachten erover worden gemeten in de bèta (taak #69). De lijst is akkoord zoals
  gedemonstreerd, ook zonder prijzen tot sprint 6, dus sprint 5 begint (taak #64). Zie
  [sprint 4](18-sprint-4-boodschappenlijst.md), hoofdstuk "Het antwoord van de klant".
- **Sprint 5 is gebouwd** (taak #64): het aantal eters per recept voor één avond, de kookmodus met één
  stap per scherm, een scherm dat aan blijft en de timer als volle knop, zoals de usertest vroeg, en de
  favorieten met ♡. Het portaal kreeg een verwijzing naar een ingrediënt in een stap, omdat een vast
  getal in de tekst niet meerekent met het aantal eters. **Drie vragen liggen bij de klant**: wie de 41
  stappen met een vast getal herschrijft en wanneer, of de favorieten het voorstel van de week mogen
  beïnvloeden, en of de demo akkoord is. Zie [sprint 5](19-sprint-5-kookmodus.md).
- **Sprint 5 is akkoord** (taak #64). Dave antwoordde als Thuiskok: het bureau herschrijft de 41
  stappen met een vast getal, vóór de bèta (taak #69). De favorieten tellen licht mee in het voorstel
  van de week: hooguit één per week, als zesde regel, en regel 2 blijft voorgaan. De kookmodus, het
  aantal eters per recept en de favorieten zijn akkoord zoals gedemonstreerd, ook zonder *Hoe was het?*
  tot sprint 7, dus sprint 6 begint (taak #65). Zie [sprint 5](19-sprint-5-kookmodus.md), hoofdstuk
  "Het antwoord van de klant".
- **Sprint 6 is gebouwd** (taak #65): de weekprijs op de kaart, met de prijs per portie en
  *indicatief*, wat een wissel scheelt, en de prijs per portie in het recept. Een weekprijs zonder prijs
  of verpakking zegt dat, en het portaal kreeg *Wat mist er nog?*. Premium gaat via de app stores en
  hoort bij het account, opzeggen kost drie tikken, en het weekbudget houdt het voorstel eronder. De
  favoriet is de zesde regel, zoals besloten in sprint 5. **Vier vragen liggen bij de klant**: of de
  catalogus in productie compleet is, wat de prijs per portie in het recept moet tonen (die verschilt van
  de kaart), de prijs van premium en wie de afspraken met de stores tekent, en of de demo akkoord is.
  Zie [sprint 6](20-sprint-6-prijzen-en-premium.md).
- **Sprint 6 is akkoord** (taak #65). Dave antwoordde als Thuiskok: de catalogus in productie is nog niet
  compleet, en Thuiskok vult de prijzen en verpakkingen aan vóór de bèta (taak #69). Het recept toont wat
  je opeet, met dat erbij. Premium kost € 2,49 per maand, zonder proefperiode en zonder jaarabonnement, en
  Dave regelt namens Thuiskok de afspraken met de stores vóór de inzending (taak #72). De prijzen, premium
  en het weekbudget zijn akkoord zoals gedemonstreerd, dus sprint 7 begint (taak #66). Zie
  [sprint 6](20-sprint-6-prijzen-en-premium.md), hoofdstuk "Het antwoord van de klant".
- **Sprint 7 is gebouwd** (taak #66): de boodschappenlijst delen met een link, voor wie premium heeft,
  en samen afvinken op twee telefoons; zonder bereik wint *afgevinkt*. De huisgenoot doet gratis mee en
  wisselt niets. Hooguit één herinnering per week als er nog geen menu is, standaard uit, omdat de
  toestemming bij de timer daar niet over ging. *Hoe was het?* met drie knoppen, en de beoordelingen per
  recept in het portaal. **Drie vragen liggen bij de klant**: of de herinnering standaard aan of uit
  staat, of *Niet weer* een recept uit het voorstel mag halen, en of de demo akkoord is. Zie
  [sprint 7](21-sprint-7-gedeelde-lijst.md).
- **Sprint 7 is akkoord** (taak #66). Dave antwoordde als Thuiskok: de herinnering blijft standaard uit,
  met één vraag na het tweede weekmenu. *Niet weer* wordt de zevende regel van het voorstel; je kunt zo'n
  recept nog wel zelf kiezen bij *Meer recepten*, en dat komt in sprint 8 (taak #67). De gedeelde lijst,
  de herinnering en *Hoe was het?* zijn akkoord zoals gedemonstreerd, ook de omweg voor de uitnodiging op
  een iPhone, dus sprint 8 begint. Zie [sprint 7](21-sprint-7-gedeelde-lijst.md), hoofdstuk "Het
  antwoord van de klant".
- **Sprint 8 is gebouwd** (taak #67), de laatste sprint van de bouw: *Niet weer* als zevende regel van
  het voorstel, en restjesslim plannen als stap na de regels, met hooguit twee wissels per week en *Over
  na deze week* op de lijst. Bij twee eters daalt wat je per portie betaalt van € 4,10 naar € 3,60
  (gemeten op de testgerechten). Geen blokkerende fouten meer, de app opent in onder de 2 seconden, en
  9 van de 31 ingrediënten staan nog open bij Thuiskok. **Drie vragen liggen bij de klant**: of *Over na
  deze week* voor iedereen is, of er tot de lancering niets meer bij komt, en of de demo akkoord is en
  de bèta mag beginnen. Zie [sprint 8](22-sprint-8-restjes-en-afronden.md).
- **Sprint 8 is akkoord, en daarmee de bouw** (taak #67). Dave antwoordde als Thuiskok: *Over na deze
  week* is voor iedereen en het plannen blijft premium (een halve dag om te zetten). Tot de lancering
  komt er geen nieuwe functie meer bij; wat de bèta oplevert, wordt opgelost of gaat naar na de
  lancering. De demo is akkoord en de bèta (taak #69) mag beginnen met deze testversie. Zie
  [sprint 8](22-sprint-8-restjes-en-afronden.md), hoofdstuk "Het antwoord van de klant".
- **De bèta is voorbereid** (taak #69): 150 testers uit 412 aanmeldingen, verdeeld over de persona's,
  twee weken vanaf 19 april 2027. Nadia legde het testplan en de lat vast vóór het testen: wat een
  blokkade is, de twaalf metingen die de sprints aan de bèta meegaven, en wanneer de bèta geslaagd is.
  De testers zijn fictie, gespeeld door Chris. **Drie vragen liggen bij de klant**: of de allergenen en de
  9 open ingrediënten af zijn, of het bureau mag meten met PostHog in de EU met een privacyverklaring
  die de jurist van Thuiskok toetst, en of de testers drie maanden premium krijgen. Zie
  [de bèta](23-beta.md).
- **De bèta mag beginnen** (taak #69). Dave antwoordde als Thuiskok: de allergenen zijn nagekeken en de 9
  open ingrediënten aangevuld, dus de bèta begint op 19 april 2027. Het bureau meet met PostHog in de EU,
  alleen de twaalf metingen, met een privacyverklaring die de jurist van Thuiskok vóór de start toetst. Wie
  in beide weken de app gebruikte, krijgt bij de lancering drie maanden premium. Zie [de bèta](23-beta.md),
  hoofdstuk "Het antwoord van de klant".
- **De bèta is gespeeld** (taak #69): 143 van de 150 testers installeerden de app en 109 gebruikten hem in
  beide weken. Vier blokkades zijn gevonden en in de bèta zelf opgelost. De weekprijs zat gemiddeld 14
  procent naast de kassabon. **Vijf van de zes latten zijn gehaald**; het aantal eters voor deze week
  aanpassen lukte bij 54 procent, en de knop gaat naar boven in taak #70. Restjesslim plannen scheelt op
  de echte catalogus 7 procent. De testers en de getallen zijn fictie. Zie [de bèta](23-beta.md).
- **Go/no-go 3 is voorbereid** (taak #70). Zes van de zeven hinderlijke meldingen zijn opgelost, en het
  aantal eters aanpassen lukt nu bij vier van de vijf mensen. De AVG-check vond twee vragen: allergieën
  zijn gegevens over de gezondheid, en de toestemming voor PostHog gold alleen voor de bèta. Van de 14
  bevindingen over de toegankelijkheid zijn er 11 opgelost. Testversie 1.0.4 is de release candidate, en
  het advies is go, onder twee voorwaarden: de jurist van Thuiskok keurt de privacyverklaring goed en de
  verwerkersovereenkomsten zijn getekend. **Drie vragen liggen bij de klant**: go/no-go 3, hoe de app
  met de allergieën omgaat, en of er na de lancering gemeten wordt. Zie
  [de afronding en go/no-go 3](24-afronding-en-go-no-go-3.md).
- **Go/no-go 3: go** (taak #70). Dave antwoordde als Thuiskok, telkens zoals het bureau adviseerde: de
  release candidate mag worden ingediend, op voorwaarde dat de jurist de privacyverklaring goedkeurt en de
  verwerkersovereenkomsten getekend zijn. Voor de allergieën komt er een uitdrukkelijke toestemmingsvraag
  in de onboarding (een halve dag; het oordeel van de jurist blijft beslissend), en PostHog stopt bij de
  lancering. Volgende stap: de inzending (taak #72). Zie
  [de afronding en go/no-go 3](24-afronding-en-go-no-go-3.md), hoofdstuk "Het antwoord van de klant".
- **De inzending is voorbereid** (taak #72). Versie 1.0.5 heeft de toestemmingsvraag voor de allergieën
  en geen PostHog meer, en Nadia vond er geen blokkade in. De store-pagina's zijn Nederlands en beloven
  geen besparing in euro's; de vragenlijsten over privacy zeggen *geen analyse en geen reclame*. Het
  bureau wil op 4 mei 2027 indienen en adviseert met de hand vrij te geven, in beide stores op de
  lanceringsdag. **Drie vragen liggen bij de klant**: of de jurist, de verwerkersovereenkomsten en de
  afspraken met de stores rond zijn, of de store-pagina's akkoord zijn, en hoe de app wordt vrijgegeven.
  Zie [de store-pagina's en de inzending](25-store-paginas-en-inzending.md).
- **De klant is akkoord met de inzending** (taak #72). Dave antwoordde als Thuiskok: de jurist keurde de
  privacyverklaring en de zin bij de toestemmingsvraag goed, de verwerkersovereenkomsten en de afspraken met
  de stores zijn rond, de store-pagina's zijn akkoord zoals geschreven, en de app wordt met de hand
  vrijgegeven, in beide stores op de lanceringsdag. Het bureau dient op 4 mei 2027 in. Volgende stap: de
  lanceringsdag (taak #73). Zie [de store-pagina's en de inzending](25-store-paginas-en-inzending.md),
  hoofdstuk "Het antwoord van de klant".
- **Thuiskok is gelanceerd** (taak #73, gespeeld). Apple en Google keurden versie 1.0.5 goed zonder
  afwijzing, en op dinsdag 11 mei 2027 gaf het bureau de app in beide stores tegelijk vrij: week 26, zoals
  gepland, binnen het plafond (€ 1.127.400 van € 1.159.000), met alle Musts en restjesslim plannen. Na twee
  weken 6.900 accounts, 410 betalend voor premium (6 procent, tegen 27 procent *ja* in de bèta) en een 4,4
  bij Apple. De les: vóór de lancering besluiten hoe er daarna gemeten wordt. **Drie vragen liggen bij de
  klant**: de ingehouden 5 procent (€ 56.370), een onderhoudscontract na de garantie, en een versie 1.1 met
  meten met toestemming. Zie [de lanceringsdag en de evaluatie](26-lancering-en-evaluatie.md).

## Sessie 1 — 10 november 2026: de aftrap

- **Het bureau** staat: 20 mensen, met een kernteam van 12 op dit project. Zie
  [Het bureau](01-het-bureau.md).
- **Het klantmodel** is besloten: Thuiskok bezorgt niets. De doelgroep wil bezuinigen en doet zelf
  de boodschappen, maar wil niet zelf bedenken wat ze eet. Zie de [intake](02-intake-klant.md).
- **De verbeterpunten** stellen we als hypotheses voor: geen abonnementsdwang, prijs per portie,
  een slimme boodschappenlijst en restjesslim plannen. Zie de [teardown](03-hellofresh-teardown.md).
- **Het plan van aanpak** (versie 0.1): 26 weken in vijf fases. Zie het
  [plan van aanpak](04-plan-van-aanpak.md).
- **De vastlegging:** deze map, plus doel **#43** met 6 mijlpalen en 24 taken op de Goals-pagina
  van Admin.
- **Verdienmodel besloten: goedkoop premium** (de basis gratis, premium voor €2 à €3 per maand).
  Zie de [intake](02-intake-klant.md). Gevolg: betalen via de app stores komt in de bouw.
- **De overige open vragen zijn beantwoord** (taak #45). Thuiskok heeft **eigen recepten** en een
  eigen keuken, dus wij bouwen alleen het beheerportaal. De **prijzen zijn geschat** en staan
  in de app als indicatief vermeld, zonder partnerschap met een supermarkt. **Zes maanden is een
  streefdatum**, geen harde: de scope gaat voor de datum. Zie de [intake](02-intake-klant.md).
- **De offerte is opgesteld** (taak #46): een vaste prijs van €72.250 voor de discovery, en voor
  de rest een begroting met een plafond van €1.198.000, die na go/no-go 1 definitief wordt. Zie de
  [offerte](05-offerte.md).
