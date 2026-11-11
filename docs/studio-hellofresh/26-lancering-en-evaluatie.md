# 26. De lanceringsdag en de evaluatie achteraf

**Eigenaar:** Fatima (Delivery Manager), met Jesse (DevOps, de monitoring), Joris (Product Owner, wat er
na de lancering komt) en Sanne (Product Lead, de evaluatie) · **Week 25–28:** 3 – 25 mei 2027 · **Status:**
**gespeeld** op 11 november 2026 (taak #73): gelanceerd op 11 mei 2027; **de klant heeft geantwoord**
(11 november 2026), en daarmee is het project rond

> **Wat deze stap oplevert.** Thuiskok in de App Store en de Play Store, en een eerlijke terugblik: wat
> de lanceringsdag en de eerste twee weken lieten zien, hoe het project liep tegen het plan, en wat het
> bureau de volgende keer anders doet.
>
> **Wat er na de garantie gebeurt**, besliste Thuiskok op de drie vragen hieronder: een onderhoudscontract
> en een versie 1.1 die begint met meten met toestemming.

**Wat hieronder staat, is gespeeld**, zoals [de bèta](23-beta.md): de review, de lanceringsdag en de
cijfers zijn fictie, bedacht door Chris. Ze tellen in dit spel, maar ze bewijzen niet wat echte mensen
zouden doen. **Wat over de regels van Apple en Google staat, is afgeleid, niet nagelopen.**

## De review

Jesse diende versie 1.0.5 in op **dinsdag 4 mei 2027**, met premium erbij en in beide stores *met de hand
vrijgeven* aan, zoals [de klant besloot](25-store-paginas-en-inzending.md).

| Store | Wat er gebeurde | Goedgekeurd |
|---|---|---|
| **Google** | Geen vragen | **woensdag 5 mei** |
| **Apple** | Eén vraag: bij een abonnement dat zichzelf verlengt, wil Apple in de beschrijving een link naar de gebruiksvoorwaarden zien, naast die naar de privacyverklaring. Joris zette de regel er dezelfde middag bij; de app zelf veranderde niet | **vrijdag 7 mei**, na Hemelvaart |

Geen afwijzing, dus de buffer van week 25 en 26 bleef onaangeroerd.

## De lanceringsdag: dinsdag 11 mei 2027

**Het draaiboek in vier regels.** Om 9.00 uur geeft Jesse de app in beide stores tegelijk vrij. Jesse en
Ruben houden de hele dag de servers en Sentry in de gaten, Ayla staat klaar voor de app, en Joris leest de
eerste beoordelingen en de mail aan de ondersteuning. Om 17.00 uur zegt Fatima in het gedeelde kanaal met
Thuiskok hoe de dag ging. **Niemand zet die dag een wijziging live**, tenzij iets blokkeert.

| Tijd | Wat |
|---|---|
| 9.00 | Vrijgegeven. Bij Apple stond Thuiskok er na 40 minuten, bij Google na een uur en een kwartier |
| 9.30 | De 112 testers die in beide weken van de bèta meededen, krijgen hun code voor drie maanden premium, zoals [de klant besloot](23-beta.md) |
| 12.00 | Thuiskok zet de eigen kanalen aan: de nieuwsbrief en de socials. De lanceringscampagne zelf zat niet in de [offerte](05-offerte.md) |
| 17.00 | Fatima's bericht aan Thuiskok: vrijgegeven, geen blokkade, de eerste cijfers |
| 18.10 | **Het enige incident.** Rond etenstijd plannen veel mensen tegelijk hun eerste week, en het voorstel deed er 6 seconden over in plaats van 1. Jesse gaf de database meer rekenkracht; om 18.35 uur was het weer normaal. Geen fout, geen verloren gegevens |
| 21.00 | Fatima's tweede bericht: wat er om 18.10 uur gebeurde en dat het verholpen is |

**Aan het eind van de dag:** 2.140 keer gedownload, 1.510 accounts, 0 blokkerende meldingen, en de app
liep 99,8 procent van de keren dat hij geopend werd zonder vast te lopen.

## De eerste twee weken

Sinds go/no-go 3 meet de app niet meer wat mensen doen (PostHog is eruit). Wat het team ziet, komt dus uit
drie andere bronnen: de cijfers van Apple en Google zelf, Sentry, en wat mensen schrijven.

| Wat | Na twee weken | Waar het vandaan komt |
|---|---|---|
| Downloads | 9.800, waarvan 58 procent op een iPhone | De stores |
| Accounts | 6.900 | De eigen database |
| Premium, betaald | **410**, dat is **6 procent** van de accounts | De stores |
| Premium van de testers | 112, gratis tot augustus | De eigen database |
| Zonder vastlopen | 99,7 procent van de keren openen | Sentry |
| Beoordeling | **4,4** bij Apple (63 beoordelingen), **4,3** bij Google (88) | De stores |
| Mail aan de ondersteuning | 74, waarvan 21 over de volgorde van de afdelingen | Joris |

**Wat mensen het vaakst schrijven:** dat de weekprijs klopt met de kassa (*"eindelijk weet ik vooraf wat het
kost"*), dat het brood in hun winkel bij de ingang ligt en niet achteraan, en dat ze meer recepten willen.
**Wat opvalt:** in de bèta zei 27 procent *ja* op € 2,49 per maand ([meting 7](23-beta.md)); in de echte
stores betaalt 6 procent. Wie zegt dat hij wil betalen, betaalt nog niet.

## Het project tegen het plan

| | Het plan | Wat het werd | |
|---|---|---|---|
| **De datum** | Lancering in week 26 ([plan van aanpak](04-plan-van-aanpak.md)) | Dinsdag 11 mei 2027, week 26 | **gehaald** |
| **De scope** | De MoSCoW na go/no-go 1 ([discovery-rapport](10-discovery-rapport.md)) | Alle Musts, en restjesslim plannen (Should) ook, in [sprint 8](22-sprint-8-restjes-en-afronden.md) | **gehaald** |
| **Het geld** | Plafond deel B € 1.159.000 | € 1.127.400 besteed, € 31.600 eronder | **gehaald** |
| **De belofte** | Een weekprijs waar je op kunt rekenen | 14 procent naast de kassabon in de bèta, en de beoordelingen noemen het als eerste | **gehaald** |
| **De kwaliteit** | Geen blokkade bij de lancering | 0 blokkades, 99,7 procent zonder vastlopen | **gehaald** |
| **Premium** | Genoeg mensen die betalen (een risico uit het plan) | 6 procent in twee weken; te vroeg voor een oordeel | **open** |

**Het geld in één zin:** het bureau factureerde de gewerkte dagen, steeds binnen het plafond, en de 5
procent van deel B die Thuiskok sinds go/no-go 3 inhoudt, is **€ 56.370** (5 procent van € 1.127.400).
Volgens de [offerte](05-offerte.md) komt die vrij nu de app in beide stores staat.

## Wat het team leerde

Sanne leidde de terugblik met het kernteam op **dinsdag 25 mei 2027**, en presenteerde hem dezelfde middag
aan de stuurgroep met Thuiskok.

**Wat werkte:**

- **Elke twee weken een demo.** De klant zag het aantal eters, de gedeelde lijst en de weekprijs groeien,
  en greep in toen het nodig was: het weekbudget in [sprint 6](20-sprint-6-prijzen-en-premium.md).
- **MoSCoW als budgetgesprek.** Restjesslim plannen ging na de discovery naar Should en kwam er toch in,
  omdat de rest op tijd af was. Niets erbij zonder dat er iets af ging.
- **De lat vóór de bèta.** Omdat vooraf vaststond wat *goed genoeg* was, was go/no-go 3 een gesprek over
  cijfers, niet over gevoel.

**Wat het team de volgende keer anders doet:**

- **Eerder testen met de echte catalogus.** Dat het aantal eters moeilijk te vinden was, en dat restjesslim
  plannen 7 procent scheelt en geen 12, bleek pas in de bèta. Een usertest op echte recepten in sprint 4
  had het eerder laten zien.
- **Vóór de lancering besluiten hoe er na de lancering gemeten wordt.** PostHog ging eruit om de
  vragenlijsten van de stores eenvoudig te houden, en dat was verdedigbaar. Maar nu weet niemand hoeveel
  mensen restjesslim plannen gebruiken of waar ze afhaken, en dat is precies wat de volgende versie nodig
  heeft.
- **Een ja is geen betaling.** De vraag *"zou je ervoor betalen?"* in de bèta overschatte premium vier keer.
  De volgende keer test het bureau een prijs met een echte (proef)aankoop.

## Wat er na de lancering komt

**De garantie loopt tot woensdag 11 augustus 2027**: drie maanden waarin het bureau fouten in wat het
bouwde kosteloos herstelt ([offerte](05-offerte.md)). Nieuwe wensen vallen daar niet onder. Joris hield de
lijst bij van alles wat sinds sprint 4 *voor na de lancering* is gezet:

| Wens | Waar hij vandaan komt |
|---|---|
| De volgorde van de afdelingen per winkel | [Sprint 4](18-sprint-4-boodschappenlijst.md), de bèta, en nu 21 mails |
| De uitnodiging voor de gedeelde lijst vanaf een iPhone | [De bèta](23-beta.md), meting 10 |
| *Niet weer* van de huisgenoot | De bèta, meting 11 |
| Meer recepten per week | De beoordelingen. Dat is werk voor de keuken van Thuiskok, niet voor het bureau |

## Wat de klant nog moet zeggen

1. **De ingehouden 5 procent.** Thuiskok staat in beide stores, en daarmee is de voorwaarde uit de offerte
   vervuld. Gaat Thuiskok akkoord dat het bureau de **€ 56.370** factureert?
2. **Na de garantie.** Het advies van het bureau: **een onderhoudscontract** vanaf 12 augustus 2027, voor
   minstens een jaar: de servers en Sentry in de gaten houden, de app bijwerken voor elke nieuwe versie van
   iOS en Android, en fouten herstellen, voor **vier dagen per maand, € 3.400**, plus de hosting tegen
   kostprijs. Zonder zo'n contract houdt de app het een tijd uit, maar valt hij na een grote update van iOS
   of Android vroeg of laat om. Het alternatief is dat Thuiskok het onderhoud zelf of bij een ander
   onderbrengt; dan draagt het bureau alles over in de laatste twee weken van de garantie.
3. **Een vervolg.** Wil Thuiskok een **versie 1.1** met de lijst hierboven? Het advies van het bureau:
   begin met **meten met toestemming**: wie wil, deelt anoniem hoe hij de app gebruikt, na een nieuwe toets
   door de jurist. Dan beslist de stuurgroep over 1.1 op cijfers, zoals bij go/no-go 3. Het alternatief is
   1.1 bouwen op de mail en de beoordelingen alleen.

### Het antwoord van de klant

Dave gaf op 11 november 2026 als Thuiskok antwoord op alle drie de vragen:

1. **De ingehouden 5 procent: akkoord.** Thuiskok staat in beide stores, dus het bureau factureert de
   **€ 56.370** van deel B nu.
2. **Een onderhoudscontract**, zoals het bureau adviseerde: vanaf donderdag 12 augustus 2027, voor minstens
   een jaar, vier dagen per maand voor € 3.400, plus de hosting tegen kostprijs. Er komt dus geen
   overdracht in de laatste twee weken van de garantie.
3. **Versie 1.1 begint met meten met toestemming**, zoals het bureau adviseerde: eerst toetst de jurist het
   opnieuw, dan deelt wie wil anoniem hoe hij de app gebruikt, en op die cijfers beslist de stuurgroep over
   1.1.

## Volgende stap

Fase 5 is rond, en daarmee het hele project: Thuiskok staat in de App Store en de Play Store, het bureau
factureert de laatste 5 procent, en na de garantie loopt het onderhoudscontract. Versie 1.1 is een nieuw
traject, dat begint met de toets door de jurist en het meten met toestemming.
