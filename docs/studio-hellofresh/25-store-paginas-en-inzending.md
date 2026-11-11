# 25. De store-pagina's en de inzending bij Apple en Google

**Eigenaar:** Joris (Product Owner, de teksten), met Iris (de schermafbeeldingen), Jesse (DevOps, de
inzending) en Fatima (Delivery Manager) · **Week 25:** 3 – 7 mei 2027 · **Status:** **voorbereid** op
11 november 2026 (taak #72); **de inzending wacht op de klant**

> **Wat deze stap oplevert.** Alles wat klaar moet zijn voordat Thuiskok in de App Store en de Play Store
> kan staan: de versie die wordt ingediend, de store-pagina's, de antwoorden op de vragenlijsten van Apple
> en Google, en wat de reviewers nodig hebben om de app te testen.
>
> **Wat hier nog niet staat: de inzending zelf.** Die mag pas als de voorwaarden van
> [go/no-go 3](24-afronding-en-go-no-go-3.md) af zijn, en die liggen bij Thuiskok (hieronder).

**Wat hieronder staat, is gespeeld**, zoals [de afronding](24-afronding-en-go-no-go-3.md): de teksten en
de planning zijn fictie, bedacht door Chris. **Wat over de regels van Apple en Google staat, is
afgeleid, niet nagelopen** in de accounts van Thuiskok; Jesse loopt het na op de dag van de inzending.

## De versie die wordt ingediend: 1.0.5

Go/no-go 3 vroeg twee wijzigingen ten opzichte van de release candidate (testversie 1.0.4). Beide zijn
geen nieuwe functie, maar wat de AVG-check vroeg, dus ze passen binnen *niets meer erbij tot de
lancering* ([sprint 8](22-sprint-8-restjes-en-afronden.md)).

| Wat | Wie | Klaar |
|---|---|---|
| **De toestemmingsvraag voor de allergieën** in de onboarding: één zin en een vinkje in de stap waar je je allergie aanvinkt. Wie niet aanvinkt, kan het allergiefilter niet gebruiken, en de app zegt dat ook. Wie al een allergie had ingesteld (de testers), krijgt de vraag één keer bij het openen | Ayla, de zin van Joris | **ja**, testversie 1.0.5 |
| **PostHog uit** in de versie voor de stores. De code die meet, is eruit, niet alleen uitgezet, zodat de vragenlijsten van de stores eerlijk *geen analyse* kunnen zeggen | Daan, Jesse | **ja**, 1.0.5 |

Nadia testte 1.0.5 op dezelfde vier telefoons als de release candidate, met VoiceOver en TalkBack voor de
nieuwe vraag: **0 blokkerende bevindingen**. De zin bij het vinkje moet nog langs de jurist van Thuiskok,
samen met de privacyverklaring.

## De store-pagina's

Eén Nederlandse pagina per store, in de toon van Thuiskok ([designsysteem](13-designsysteem.md)): eerlijk,
zonder uitroeptekens en zonder *de beste*.

| Onderdeel | Wat er staat |
|---|---|
| **Naam** | Thuiskok |
| **Ondertitel** (Apple, 30 tekens) | *Weekmenu met de prijs erbij* |
| **Korte beschrijving** (Google, 80 tekens) | *Plan je week, zie wat het kost en doe in één keer je boodschappen.* |
| **Beschrijving** | Vier alinea's: een weekmenu dat past bij je huishouden en je budget, de prijs per portie (*geschat, op basis van de supermarktprijzen*), één boodschappenlijst op volgorde van de winkel, en koken stap voor stap. Daarna premium in één zin: € 2,49 per maand, restjesslim plannen en de lijst delen, opzeggen kan altijd in de app |
| **Categorie** | Eten en drinken |
| **Schermafbeeldingen** | Zes, gemaakt door Iris op de testversie met de echte catalogus: het voorstel van de week met de weekprijs, een recept met de prijs per portie, de lijst per afdeling, de kookmodus met de timer, *Over na deze week*, en de gedeelde lijst. Elk met één regel tekst erboven |
| **Leeftijd** | 4+ bij Apple, *Iedereen* bij Google: geen geweld, geen alcoholreclame, geen chat |
| **Ondersteuning** | Het e-mailadres en de website van Thuiskok, en de privacyverklaring op de website |

**Wat de pagina niet belooft:** een besparing in euro's. De bèta mat dat de weekprijs gemiddeld 14 procent
naast de kassabon zat ([de bèta](23-beta.md)), dus de pagina zegt *geschat*, net als de app.

## De vragenlijsten van de stores

Apple (de privacylabels) en Google (*Data safety*) vragen wat de app over mensen verzamelt. Jesse vulde ze in
op basis van [de AVG-check](24-afronding-en-go-no-go-3.md), met PostHog eruit:

| Gegeven | Wat de stores te horen krijgen |
|---|---|
| E-mailadres of account van Apple of Google | Verzameld, gekoppeld aan de gebruiker, voor het account |
| Allergieën en dieet | Verzameld, gekoppeld aan de gebruiker, voor de werking van de app, **met toestemming** |
| Weekmenu, lijst, favorieten | Verzameld, gekoppeld aan de gebruiker, voor de werking van de app |
| Foutmeldingen (Sentry) | Verzameld, niet gekoppeld aan de gebruiker, voor het oplossen van fouten |
| Aankopen | Verwerkt door Apple en Google zelf; de app bewaart alleen óf iemand premium heeft |
| Analyse en reclame | **Niets**, en de app volgt niemand over andere apps heen |

Account verwijderen kan in de app, zoals beide stores eisen; dat stond al in orde bij de AVG-check.

## Wat de reviewers nodig hebben

- **Een testaccount** met premium, zodat de reviewer restjesslim plannen en de gedeelde lijst kan zien
  zonder te betalen, met een tweede account om de lijst mee te delen.
- **Een notitie** van vijf regels: wat Thuiskok is, dat de prijzen geschat zijn, en dat premium een
  abonnement via de store is dat in drie tikken op te zeggen is.
- **Premium in de stores**: het abonnement van € 2,49 per maand, zonder proefperiode, wordt met de versie
  mee ingediend. Dat kan pas als de afspraken voor betaalde apps zijn getekend (hieronder).

## Voordat het bureau op *indienen* drukt

Go/no-go 3 gaf **go onder voorwaarden**, en sprint 6 legde vast wat Thuiskok zelf in de stores regelt. Alles
wat nog moet, ligt bij Thuiskok:

| Wat | Wie | Waarom vóór de inzending |
|---|---|---|
| De privacyverklaring en de zin bij de toestemmingsvraag goedgekeurd | De jurist van Thuiskok | Voorwaarde van go/no-go 3, en de store-pagina linkt ernaar |
| De verwerkersovereenkomsten getekend, met het bureau, de cloud in Amsterdam en Sentry | Thuiskok | Voorwaarde van go/no-go 3. Die met PostHog is niet meer nodig |
| De voorwaarden voor betaalde apps getekend, de bank- en belastinggegevens ingevuld, en Thuiskok aangemeld voor het tarief van 15 procent bij Apple | Dave, namens Thuiskok ([sprint 6](20-sprint-6-prijzen-en-premium.md)) | Zonder die afspraken kan premium niet mee in de inzending |

## Indienen en vrijgeven

**Het plan van het bureau:** indienen bij Apple en Google op **dinsdag 4 mei 2027**, zodra de drie regels
hierboven af zijn. Een review duurt meestal een paar dagen, en een afwijzing is te herstellen binnen de
buffer van week 25 en 26 ([plan van aanpak](04-plan-van-aanpak.md)).

**Het advies van het bureau: de app na de goedkeuring niet vanzelf laten verschijnen**, maar met de hand
vrijgeven, in beide stores op dezelfde dag: de lanceringsdag (taak #73). Dan verschijnt Thuiskok niet op een
willekeurige dag in de ene store en een week later in de andere, en staan het team en de monitoring klaar.
Het alternatief is vrijgeven zodra een store goedkeurt: sneller, maar zonder vaste dag.

## Wat de klant nog moet zeggen

1. **De voorwaarden.** Zijn de privacyverklaring en de zin bij de toestemmingsvraag goedgekeurd door de
   jurist, zijn de verwerkersovereenkomsten getekend, en zijn de afspraken met de stores voor betaalde apps
   rond? Zolang één ervan openstaat, dient het bureau niet in, en schuift de inzending in de buffer.
2. **De store-pagina's.** Zijn de naam, de teksten en de zes schermafbeeldingen zoals hierboven akkoord?
3. **Vrijgeven.** Met de hand, in beide stores op de lanceringsdag (het advies van het bureau), of vanzelf
   zodra een store goedkeurt?

## Volgende stap

Na het antwoord van de klant: indienen, de review, en daarna de lanceringsdag (taak #73).
