# 9. Technische verkenning: prijzen en receptbron

**Eigenaar:** Wouter (Tech Lead) · **Week 1–2:** 16–27 november 2026 · **Status:** **afgerond** op
11 november 2026 (taak #52)

> **Wat we moesten uitzoeken.** De klant heeft twee dingen besloten
> ([intake](02-intake-klant.md)): de prijzen zijn **schattingen** zonder partnerschap met een
> supermarkt, en Thuiskok voert de **eigen recepten** in via een beheerportaal dat wij bouwen. Deze
> verkenning beantwoordt de twee vragen die daaruit volgen: **waar halen we de schattingen vandaan**,
> en **hoe staat een recept in de database** zodat de lijst, de porties, de prijs en de restjes eruit
> volgen.

## Deel 1: de receptbron en het datamodel

### Het uitgangspunt

Thuiskok levert in week 10 de eerste 50 recepten aan via het beheerportaal (sprint 2). De vraag is
dus niet *waar de recepten vandaan komen*, maar **in welke vorm ze erin moeten**. Elke functie uit de
[persona's](08-personas.md) stelt een eis aan die vorm:

| Functie | Wat het datamodel daarvoor moet kunnen | Voor wie |
|---|---|---|
| Porties van 1 tot 6, per week te kiezen | Hoeveelheden **per portie** opslaan, niet per recept | Marieke, Daan |
| Een lijst die samenvoegt en per afdeling sorteert | Elk ingrediënt komt uit **één gedeelde catalogus** met een afdeling, geen vrije tekst | Marieke |
| Een weekprijs | Elk catalogusingrediënt heeft een **geschatte prijs** met bron en peildatum | Noor, Marieke |
| Restjes slim inplannen | Elk catalogusingrediënt kent zijn **verpakkingsgrootte** | Daan |
| Eerlijke kooktijden, de basisvoorraad noemen ([teardown](03-hellofresh-teardown.md)) | Kooktijd als veld; ingrediënten markeerbaar als **basisvoorraad** | Iedereen |

**De belangrijkste keuze is de catalogus.** Een ingrediënt als vrije tekst ("2 el crème fraîche")
is snel ingevoerd, maar dan kan de app niets: niet samenvoegen, niet sorteren, niet prijzen en geen
restjes zien. Daarom kiest het beheerportaal een ingrediënt uit de catalogus, met zoeken terwijl je
typt. Staat het er nog niet in, dan maakt de redacteur het aan, en dan zijn afdeling, verpakking en
prijs verplicht.

### Het model

```text
Recept                      ReceptIngrediënt                Ingrediënt (catalogus)
------                      ----------------                ----------------------
titel                       recept            ──► Recept    naam
beschrijving                ingrediënt        ──► Ingr.     afdeling (groente, zuivel, …)
foto                        hoeveelheid per portie          eenheid (g, ml, stuk)
kooktijd (minuten)          eenheid                         verpakkingsgrootte (bv. 125 ml)
moeilijkheid                optioneel (ja/nee)              basisvoorraad (ja/nee)
labels (vega, kindvriendelijk, …)                           prijs per verpakking (schatting)
seizoen                                                     prijsbron en peildatum
status (concept / live)
                            Stap
                            ----
                            recept, volgorde, tekst, timer (optioneel)
```

**Wouters advies voor de opslag:** een relationele database (PostgreSQL). Recepten, ingrediënten en
de koppeling ertussen zijn precies het soort gegevens waar een relationele database voor gemaakt is,
en de berekeningen hieronder zijn er een eenvoudige query. De definitieve keuze valt in sprint 1
(taak #60), samen met inloggen en de hosting.

### Twee prijzen, niet één

Uit het model volgen **twee verschillende getallen**, en de app moet ze niet door elkaar halen:

- **Prijs per portie:** wat je *opeet*. De hoeveelheid per portie maal de prijs per gram of stuk.
  Twee eetlepels crème fraîche kosten een paar cent.
- **Weekprijs:** wat je *afrekent*. Per ingrediënt de hele verpakkingen die je moet kopen, opgeteld
  over de week, zonder wat al in de basisvoorraad staat. Het hele bakje crème fraîche telt mee.

**De weekprijs is het getal dat de belofte draagt.** De interviews lieten zien dat de prijs per
recept niemand overhaalt, maar dat de prijs van de week de reden is om de box op te zeggen
([interviews](07-interviews.md), H2a en H2b). Het verschil tussen de twee getallen is bovendien
precies wat restjesslim plannen kleiner maakt, zodat die functie zijn eigen besparing kan laten zien.

## Deel 2: een bron voor geschatte prijzen

### Wat er te vinden is

Onderzocht op 11 november 2026 aan de hand van openbare bronnen. **Gecontroleerd** betekent: zo staat
het in de genoemde bron. **Afgeleid** betekent: onze inschatting, nog niet nagekeken.

| Bron | Wat het geeft | Hoe vers | Juridisch | Oordeel |
|---|---|---|---|---|
| **Zelf de sites van de ketens uitlezen** (scrapen) | Prijs per product, per keten | Dagelijks | **Risico.** Na het arrest *Ryanair tegen PR Aviation* (Hof van Justitie EU, C-30/14, 2015) kan een keten gebruiksvoorwaarden contractueel afdwingen, ook voor gegevens die niet als databank beschermd zijn (gecontroleerd). Dat de voorwaarden van de ketens het verbieden, is afgeleid: die van AH waren niet te openen | **Niet doen** |
| **[Checkjebon](https://github.com/supermarkt/checkjebon/wiki)** | Een open JSON-bestand met productprijzen van onder meer AH, Jumbo, Plus, Dirk, Vomar en Picnic, **zonder Lidl** (gecontroleerd) | Vaak bijgewerkt | **Onduidelijk.** De code heeft een MIT-licentie en de wiki zegt dat de data hergebruikt mag worden, maar de data komt zelf uit scrapen en heeft geen eigen datalicentie (gecontroleerd) | **Goed om mee te beginnen**, niet om in productie van af te hangen |
| [Supermarktscanner](https://www.supermarktscanner.nl/gebruiksvoorwaarden) en betaalde scrapers | Prijs per product | Dagelijks | Verboden voor commercieel gebruik zonder toestemming (gecontroleerd), of betaald en op dezelfde onofficiële bron | **Nee** |
| **[CBS](https://www.cbs.nl/nl-nl/cijfers/detail/80345ned)** | Landelijke gemiddelde prijzen, maar alleen voor een handvol basisproducten per kilo; de oude tabel stopte in 2019 (gecontroleerd) | Jaarlijks | Vrij te gebruiken (CC-BY) | **Alleen als controle**, te grof voor recepten |
| **[Open Prices](https://openfoodfacts.github.io/open-prices/guides/data/)** (Open Food Facts) | Prijzen van kassabonnen, verzameld door vrijwilligers | Wisselend | Vrij, maar wie de data gebruikt, moet het resultaat onder dezelfde licentie delen (ODbL) | **Nog niet**: hoeveel Nederlandse prijzen erin staan, is niet bekend |
| **Een eigen prijstabel** | ± 300 ingrediënten met een prijs per verpakking, met de bron en de peildatum | Elk kwartaal | Geen | **Goed genoeg** |

### Wouters advies

1. **De bron is een eigen prijstabel van ongeveer 300 ingrediënten.** Het is dezelfde catalogus als in
   deel 1, met per ingrediënt de prijs van een verpakking, de bron en de peildatum. Een redacteur van
   Thuiskok vult hem in het beheerportaal. De eerste vulling gebruikt Checkjebon als spiekbriefje, met
   het midden van de ketens en zonder aanbiedingen. **Elk kwartaal** wordt de tabel bijgewerkt, en waar
   het CBS een gemiddelde heeft, controleren we daartegen. Geen scraper, geen afhankelijkheid, geen
   licentierisico.
2. **Checkjebon als automatische bron alleen met toestemming.** Wil Thuiskok de tabel later automatisch
   laten bijwerken, dan eerst schriftelijke toestemming van de beheerder van Checkjebon, of een
   juridisch advies. Tot dan is het een hulpmiddel bij het invullen, geen voeding van de app.
3. **Niet:** zelf scrapen, of betaalde scrapers. Open Prices bekijken we opnieuw als bekend is hoeveel
   Nederlandse prijzen erin staan.

**Hoe nauwkeurig dat is.** Een schatting uit zo'n tabel zit er naar verwachting **15 tot 25 procent**
naast (afgeleid, niet gemeten). Daarom toont de app een afgerond bedrag met *ongeveer* ervoor, en het
woord *indicatief*, zoals met de klant is afgesproken. Voor de weekprijs is dat genoeg: Noor wil zien
dat haar week goedkoper is dan de box van € 50 voor drie maaltijden, en daarvoor hoeft het bedrag niet
op de cent te kloppen.

### Wat dit kost, voor de MoSCoW (taak #53)

- **Bouw:** het beheerportaal krijgt een scherm voor de catalogus en de prijzen. Dat valt binnen
  sprint 2 (het portaal) en sprint 6 (de prijs per portie en de weekprijs). Er is geen koppeling met
  een externe bron, dus er komt geen extra werk bij.
- **Bij de klant:** de eerste vulling kost een redacteur van Thuiskok naar schatting **één à twee
  dagen**, en daarna **een halve dag per kwartaal** (afgeleid). Dat is werk voor Thuiskok, niet voor
  ons, en het moet in de planning van hun redactie.

### Wat nog open is

- De gebruiksvoorwaarden van de ketens zijn niet gelezen. Dat hoeft niet zolang we niet scrapen.
- De opvolger van de CBS-tabel (*Gemiddelde prijzen voedingsmiddelen vanaf 1800*) is niet nagekeken.
- Hoeveel Nederlandse prijzen in Open Prices staan, is niet gemeten.

Geen van de drie blokkeert de MoSCoW: het advies hierboven werkt zonder.
