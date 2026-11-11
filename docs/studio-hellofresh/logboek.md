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
