# 24. De afronding: wat de bèta vond, de AVG, de toegankelijkheid en go/no-go 3

**Eigenaar:** Nadia (QA Lead), met Jesse (DevOps, de AVG-check), Bram (de toegankelijkheid) en Fatima
(Delivery Manager) · **Week 23–24:** 19 – 30 april 2027 · **Status:** **voorbereid** op 11 november 2026
(taak #70); **go/no-go 3 ligt bij de klant**

> **Wat deze stap oplevert.** Een release candidate: de versie die het bureau bij Apple en Google wil
> indienen. Daarvoor drie dingen naast de bèta: wat de testers vonden oplossen, de AVG-check, en de
> toegankelijkheid gemeten tegen WCAG 2.1 niveau AA, zoals het [designsysteem](13-designsysteem.md)
> afspreekt.
>
> **Wat hier nog niet staat: het besluit.** Go/no-go 3 is de vraag of Thuiskok klaar is om in te dienen
> ([plan van aanpak](04-plan-van-aanpak.md), fase 4). Het bureau laat zien wat er ligt en geeft een advies;
> de klant beslist (hieronder).

**Wat hieronder staat, is gespeeld**, zoals [de bèta](23-beta.md): de bevindingen en de getallen zijn
fictie, bedacht door Chris. **De AVG-check van het bureau is geen juridisch advies.** De
[offerte](05-offerte.md) spreekt af dat de jurist van Thuiskok de privacyverklaring en de voorwaarden
toetst; het bureau zegt wat de app doet en waar het een vraag ziet.

## Wat de bèta achterliet

De bèta eindigde met **0 open blokkades** en vijf van de zes latten gehaald ([de bèta](23-beta.md), "De
uitkomst tegen de lat"). Er gingen 7 hinderlijke meldingen naar deze taak; de eerste is ook de reden dat
opdracht 4 de lat niet haalde:

| Wat | Wat het team deed | Klaar |
|---|---|---|
| Het aantal eters voor deze week wordt niet gevonden (opdracht 4, meting 3) | Ayla zette *Voor 2 · deze week anders?* bovenaan, naast de weekprijs, en *Ik* verwijst ernaar. Dezelfde knop, geen nieuwe functie | **ja**, testversie 1.0.4 |
| De timer gaat op Android te laat af bij een strenge batterijbesparing (meting 5) | Bij de eerste timer vraagt de app één keer om een uitzondering op de batterijbesparing, met een zin waarom | **ja**, 1.0.4 |
| De weekprijs-kaart knipt *per portie* af bij grote letters op een klein toestel | De kaart groeit mee in plaats van af te knippen | **ja**, 1.0.4 |
| Na *Niet weer* is niet te zien waar het recept heen ging | Een korte melding: *"Komt niet meer in je voorstel. Terugzetten?"* | **ja**, 1.0.4 |
| De lijst springt terug naar boven na afvinken op Android | Opgelost | **ja**, 1.0.4 |
| De tekst bij premium belooft meer dan restjesslim plannen waarmaakt (meting 12) | Joris schreef *"minder over na de week"* in plaats van een bedrag | **ja**, 1.0.4 |
| De volgorde van de afdelingen in een winkel met het brood bij de ingang (meting 4) | Niets: één volgorde is genoeg voor de lancering, zoals besloten in [sprint 4](18-sprint-4-boodschappenlijst.md) | **naar na de lancering** |

**Of opdracht 4 nu lukt**, kon de bèta niet meer meten. Bram deed daarom op vrijdag 30 april een korte test
met vijf mensen die Thuiskok nog niet kenden: **vier van de vijf** pasten het aantal eters aan zonder hulp.
Dat haalt de lat van de usertest (3 van de 5). Vijf mensen zijn geen 118, en Nadia zegt dat ook zo bij
go/no-go 3.

## De AVG-check

Jesse liep na wat de app over mensen bewaart, waar, en waarom. De servers staan in Amsterdam
([sprint 1](15-sprint-1-fundament.md)), en Thuiskok is de verantwoordelijke: het bureau en de leveranciers
verwerken de gegevens namens Thuiskok.

| Wat de app bewaart | Waarom | Wat Jesse vond |
|---|---|---|
| Het account: Apple, Google of een e-mailadres | Om het menu en premium te bewaren | In orde. **Een account verwijderen kan in de app**, onder *Ik*, zoals Apple eist; de gegevens zijn binnen 30 dagen weg, ook uit de back-ups |
| Het weekmenu, de lijst, de favorieten, *Niet weer* | Wat de app doet | In orde |
| **Allergieën en dieet** | Het filter in het voorstel ([sprint 3](17-sprint-3-onboarding-en-weekmenu.md)) | **Een vraag.** Een allergie is een gegeven over de gezondheid, en daarvoor gelden strengere regels dan voor een e-mailadres. Zie hieronder |
| De gedeelde lijst en de huisgenoot | Samen boodschappen doen ([sprint 7](21-sprint-7-gedeelde-lijst.md)) | In orde. De huisgenoot ziet de lijst, niet het account of de allergieën van de ander |
| De foutmeldingen in Sentry | Fouten vinden | In orde. Jesse zette het IP-adres uit, en een melding is na 90 dagen weg |
| De metingen in PostHog | De bèta | **Een vraag.** De toestemming gold voor de bèta. Zie hieronder |
| De aankoop van premium | Premium | Loopt via Apple en Google; de app bewaart alleen óf iemand premium heeft |

**De verwerkersovereenkomsten.** Thuiskok heeft er een nodig met het bureau, met de cloud in Amsterdam,
met Sentry, en met PostHog zolang er gemeten wordt. Fatima zette ze klaar; tekenen doet Thuiskok.

**De privacyverklaring voor de lancering** ligt klaar als concept, op basis van die voor de bèta, met de
tabel hierboven in gewone taal. Hij moet langs de jurist van Thuiskok, net als de verklaring voor de bèta.

**De allergieën.** Nu bewaart de app ze bij het account, zodat ze meegaan naar een nieuwe telefoon.
Omdat een allergie over de gezondheid gaat, ziet het bureau twee wegen:

- **Uitdrukkelijk toestemming vragen** in de stap van de onboarding waar je je allergie aanvinkt: één zin
  en een vinkje. Wie geen toestemming geeft, kan het filter niet gebruiken. Een halve dag werk.
- **De allergieën alleen op de telefoon bewaren**, niet op de server. Dan gaan ze niet mee naar een nieuwe
  telefoon, en de gedeelde lijst weet ze niet. Twee dagen werk.

Welke weg nodig is, zegt de jurist van Thuiskok. Het bureau adviseert de eerste, onder voorbehoud van dat
oordeel (hieronder).

## De toegankelijkheid

Bram mat de app tegen **WCAG 2.1 niveau AA**, op een iPhone met VoiceOver en een Android-telefoon met
TalkBack, met de letters op 200 procent, en met een schakelaar in plaats van aanraken. Het contrast van
de kleuren regelt het brand book ([designsysteem](13-designsysteem.md)); de randen van een vakje mat hij
zelf: **3,4 : 1** op het lichtste papier, en de eis is 3 : 1.

**14 bevindingen**, waarvan **11 opgelost** in testversie 1.0.4:

- **Afvinken op de lijst zei niets** met VoiceOver en TalkBack: je hoorde niet of het gelukt was. Nu zegt
  de app *"Uien, afgevinkt"*. Voor wie niet ziet, was dit een blokkade.
- **De timer heette *knop***. Nu: *"Timer, 8 minuten, start"*.
- **♡ en *Niet weer* waren te klein om te raken**: 32 punten, en de eis van Apple en Google is 44 en 48.
- **De kookmodus ging alleen met vegen.** Er staan nu ook knoppen *Vorige* en *Volgende*.
- Zeven kleinere: labels, de volgorde waarin een schermlezer leest, en een melding die te snel verdween.

**Drie bevindingen blijven, met een reden:** de foto's van een recept hebben als beschrijving de naam van
het recept en niet wat erop staat (de naam zegt het al), de animatie van de weekprijs-kaart gaat uit als de
telefoon minder beweging vraagt maar niet in de app zelf, en in het portaal is het voorbeeld van een
recept niet met het toetsenbord te bereiken. Het portaal gebruiken alleen de redacteuren van Thuiskok.

## De release candidate

**Testversie 1.0.4 is de release candidate**, gebouwd op vrijdag 30 april 2027.

| | |
|---|---|
| Blokkerende bevindingen | **0 open** |
| De bèta | 0 blokkades open, vijf van de zes latten, opdracht 4 nagetest met vijf mensen |
| De toegankelijkheid | 11 van de 14 opgelost, 3 met een reden |
| De AVG | in orde, met twee vragen voor de klant en de jurist |
| De snelheid | ongewijzigd sinds [sprint 8](22-sprint-8-restjes-en-afronden.md): 1,6 s koud op Android |
| Wat nog moet vóór het indienen | de verwerkersovereenkomsten tekenen, de privacyverklaring langs de jurist, en de afspraken met de stores (taak #72, zoals besloten in [sprint 6](20-sprint-6-prijzen-en-premium.md)) |

## Go/no-go 3

**Maandag 3 mei 2027**, de stuurgroep: Dave, Chris en Sanne met Thuiskok. Nadia laat de bèta en de
release candidate zien, Jesse de AVG, Bram de toegankelijkheid.

**Het advies van het bureau: go**, onder twee voorwaarden die vóór de inzending in week 25 af moeten: de
jurist van Thuiskok keurt de privacyverklaring goed, en de verwerkersovereenkomsten zijn getekend. Er is
geen open blokkade, en de lat van de bèta die niet gehaald werd, is opgelost en nagetest.

## Wat de klant nog moet zeggen

1. **Go/no-go 3.** Mag de release candidate (testversie 1.0.4) worden ingediend bij Apple en Google,
   onder de twee voorwaarden hierboven? Het alternatief is no-go: dan zegt de klant wat er eerst moet
   gebeuren, en schuift de inzending (taak #72) op. De buffer in week 25 en 26 is daarvoor.
2. **De allergieën.** Uitdrukkelijk toestemming vragen in de onboarding (het advies van het bureau, een
   halve dag), of alleen op de telefoon bewaren (twee dagen)? De jurist van Thuiskok heeft het laatste
   woord, en dan geldt dat oordeel.
3. **Meten na de lancering.** De toestemming voor PostHog gold voor de bèta. Het advies van het bureau:
   **stoppen bij de lancering**. De bèta mat wat nodig was, en weer meten vraagt een toestemmingsvraag in
   de app, en dat is een nieuwe functie, terwijl er tot de lancering niets bijkomt
   ([sprint 8](22-sprint-8-restjes-en-afronden.md)). Het alternatief is doorgaan met de vraag erbij, na
   een nieuwe toets door de jurist.

## Volgende stap

Na een go: de store-pagina's en de inzending bij Apple en Google (taak #72), in week 25. Daarmee is fase 4
rond.
