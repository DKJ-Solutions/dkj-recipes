# 3. HelloFresh ontleed (de teardown)

**Eigenaar:** Bram (UX Researcher) · **Status:** gecontroleerd op 11 november 2026 (taak #49),
tegen openbare bronnen: de website van HelloFresh NL, de App Store-pagina, Trustpilot en recente
reviews. **De app zelf is nog niet gebruikt.** Wat de bronnen niet bevestigen, staat hieronder als
*niet bevestigd*. Bram controleert dat met een proefabonnement voordat de interviews beginnen.

Een **teardown** is het stap voor stap uit elkaar halen van een concurrent: welke functies
heeft hij, hoe werkt elk scherm, en wat vinden gebruikers ervan (app-reviews, Reddit, Trustpilot).
Zo weet je wat de markt al gewend is, en waar de gaten zitten.

## Prioriteren met MoSCoW

- **M — Must have:** zonder dit is er geen product. Komt in de eerste versie (MVP).
- **S — Should have:** belangrijk, en komt erin als de tijd het toelaat.
- **C — Could have:** leuk, maar pas na de lancering.
- **W — Won't have (this time):** bewust niet, en dat is ook een besluit.

**Waarom dit nodig is:** "alles wat HelloFresh heeft" past niet in zes maanden. HelloFresh heeft
honderden mensen en tien jaar ontwikkeling achter zich. MoSCoW maakt de keuze zichtbaar, zodat de
klant hem bewust maakt. De definitieve lijst stellen we vast in taak #53.

## Functies van HelloFresh en onze keuze

De kolom **Gecontroleerd** zegt wat de bronnen over HelloFresh vertellen: *ja*, *anders* (met wat
er echt klopt) of *niet bevestigd*.

| Functie bij HelloFresh | Gecontroleerd | Thuiskok | Keuze | Toelichting |
|---|---|---|---|---|
| **Onboarding**: huishouden, voorkeuren | Deels: huishouden en voorkeuren ja, de precieze vragen niet bevestigd | Ja, met **weekbudget** erbij | **M** | Het eerste wat iemand ziet; bepaalt het weekmenu |
| **Weekmenu** | Anders: **45 tot ruim 80 recepten per week** (de site noemt beide getallen) | Ja, met **prijs per portie** | **M** | De kern van "niet zelf hoeven bedenken". Wij beginnen met minder: de klant levert 50 recepten in week 10 |
| **Filters en labels**: veggie, snel, calorie-arm, familie | Ja (veggie, snel, caloriebewust; "familie" alleen in één bron) | Ja | **M** | |
| **Allergenen en voedingswaarden** per recept | Niet bevestigd (calorieën wel) | Ja | **M** | Wettelijk relevant als je het toont: moet kloppen |
| **Recept met stap-voor-stap-instructies** en een **kookmodus** | Ja, met timers. Of het scherm aan blijft, is niet bevestigd | Ja, kookmodus met scherm aan en grote letters | **M** | De kookmodus is dus **geen verbetering**, maar wat de markt al gewend is |
| **Porties** | Anders: in NL alleen boxen voor **1 en 2 personen** te zien | Van 1 tot 6 personen; ingrediënten rekenen mee | **M** | Verbetering: zonder box kunnen we elke portiegrootte aan |
| **Box met ingrediënten** | Ja | Nee: een **boodschappenlijst** | **M** | Ons belangrijkste verschil |
| — | — | Boodschappenlijst **samengevoegd en per afdeling** gesorteerd, afvinkbaar in de winkel | **M** | Verbetering: HelloFresh heeft dit niet nodig, wij wel |
| **Ingrediënten wisselen**, dubbel eiwit | Ja (nieuw gevonden) | Een ingrediënt vervangen in een recept | **C** | Handig, maar elk alternatief moet de klant in het portaal invoeren |
| **Premium-recepten** (meer betalen per gerecht) | Ja (nieuw gevonden) | Nee: bij ons is premium een **abonnement op functies**, niet op gerechten | **W** | Ons premium is besloten in de intake |
| **Favorieten en receptenarchief** | Deels: beoordelen en delen ja, favorieten in NL niet bevestigd | Ja | **S** | |
| **Recepten beoordelen** | Ja | Ja | **S** | Voedt later de aanbevelingen |
| **Weken overslaan, pauzeren** | Ja, tot **vijf dagen voor de bezorging**; wie de deadline mist, krijgt en betaalt de box | Niet nodig: **geen abonnementsdwang** | **M** (als principe) | Verbetering: geen deadline en geen opzegdrempel |
| **Pushmeldingen** ("kies je menu") | Niet bevestigd | Alleen een vriendelijke herinnering om het weekmenu te kiezen | **S** | |
| **Account en inloggen** | Niet bevestigd welke manieren | Ja (e-mail, Apple, Google) | **M** | Nodig om het menu op meerdere apparaten te zien |
| **Gedeelde lijst met huisgenoten** | Niet gevonden: alleen recepten delen | Ja | **M** (premium) | Verbetering. Was S; de intake maakte de premiumfuncties Must |
| **Weekbudget** | Niet gevonden | Ja | **M** (premium) | Verbetering. Hoort bij premium (besloten in de intake) |
| — | — | **Restjesslim plannen**: recepten in één week delen ingrediënten | **M** (premium) | Verbetering. Was S; hoort bij premium |
| **Extra's en Markt** (desserts, ontbijt, bijgerechten) | Ja | Nee | **W** | Hoort bij het boxmodel |
| **Bezorgdag, tijdvak, track & trace** | Ja (wijzigen kan; volgen met updates) | Nee | **W** | Geen bezorging |
| **Kortingscodes** voor nieuwe klanten | Ja ("tot €90 korting"), een vriend uitnodigen niet gevonden | Uitnodigen zonder korting | **C** | Groeimiddel, na de lancering |
| **Cadeaubonnen** | Ja | Nee | **W** | |
| **Aanbiedingen van de supermarkt** in het menu verwerken | — | Nee | **W** | Was C. Kan alleen met een partnerschap, en de klant koos voor geschatte prijzen zonder partnerschap |
| **Bestellen bij een online supermarkt** (lijst doorsturen) | Niet gevonden bij HelloFresh | Nee | **W** | Was C, om dezelfde reden |
| **Beheer van recepten** (intern bij HelloFresh) | — | Een **beheerportaal** voor de klant | **M** | Zonder dit kan de klant geen recepten toevoegen |

## Wat HelloFresh kost

- **Vanaf €4,30 per portie**, bij de grootste box. Bij minder porties wordt het duurder: een box
  voor één persoon is bijna net zo duur als een voor twee
  ([Radar](https://radar.avrotros.nl/artikel/maaltijdbox-voor-een-persoon-bijna-net-zo-duur-als-voor-twee-personen-hoe-kan-dat-60165),
  [Marleen Kookt](https://marleenkookt.nl/en/best-meal-delivery-service), september 2026).
- Daarbovenop **bezorgkosten** na de eerste box (het bedrag is niet bevestigd).
- **Wat dit voor ons betekent:** ons doel van **onder €3 per portie** blijft een duidelijk verschil,
  zeker voor de student en de alleenstaande, die bij HelloFresh het meest betalen.

## Waar gebruikers over klagen

Op Trustpilot NL staat HelloFresh op een **3,7 uit ongeveer 21.000 reviews**
([Trustpilot](https://ca.trustpilot.com/review/hellofresh.nl), november 2026). De vijf
klachten die het vaakst terugkomen:

1. **De klantenservice** is slecht bereikbaar en traag (juli–oktober 2026).
2. **De bezorging**: geen box, te laat, bij de buren bedorven, of een verkeerde status in de app.
3. **Ingrediënten** die ontbreken, verkeerd zijn of te klein afgemeten.
4. **Opzeggen of wijzigen is lastig**, en mensen zitten ongemerkt vast aan een abonnement via een
   actie. De ACM sprak HelloFresh hier eerder al op aan
   ([ACM](https://www.acm.nl/nl/publicaties/hellofresh-informeert-voortaan-duidelijker-over-inhoud-en-voorwaarden-abonnement)).
5. **Recepten duren langer** dan er staat, vragen om basisvoorraad, en de stappen zijn soms
   onduidelijk ([DutchReview](https://dutchreview.com/reviews/hellofresh-netherlands-review/),
   november 2026).

**Wat dit voor ons betekent:** klachten 2 en 3 bestaan bij ons niet, omdat we niets bezorgen.
Klacht 4 is precies ons verbeterpunt *geen abonnementsdwang*. Klacht 5 geldt voor ons net zo goed:
de recepten van Thuiskok moeten eerlijke kooktijden hebben en de basisvoorraad noemen.

## Onze verbeterpunten in één oogopslag

1. **Geen abonnementsdwang**: geen deadline, geen opzegdrempel. *Bevestigd als pijnpunt.*
2. **Prijs per portie en weekbudget**: je ziet vooraf wat de week kost. *Niet bewezen als reden om
   op te zeggen*: prijs staat niet in de top van de klachten op Trustpilot, en cijfers over waarom
   mensen opzeggen zijn er niet.
3. **Slimme boodschappenlijst**: samengevoegd, per afdeling gesorteerd, gedeeld met huisgenoten.
4. **Restjesslim plannen**: minder weggooien, dus goedkoper.
5. **Nieuw: elke portiegrootte**, van 1 tot 6, terwijl HelloFresh in NL alleen boxen voor 1 en 2
   laat zien.

Dit zijn **hypotheses**. In de interviews (taak #50) toetst Bram ze bij mensen uit de doelgroep.
**Verbeterpunt 2 krijgt daar de meeste aandacht**, omdat de hele positionering erop rust en de
bronnen het nog niet bevestigen.
