# 4. Plan van aanpak: van intake tot app store in 26 weken

**Eigenaar:** Fatima (Delivery Manager), met Sanne (Product Lead) · **Versie:** 0.1, voor de
offerte

## In één oogopslag

```text
Week   0    2    4    6    8   10   12   14   16   18   20   22   24   26
       |----|----|----|----|----|----|----|----|----|----|----|----|----|
Intake ##
Discovery ########
Design         ##########
Bouw (sprints 1-8)        ################################
Bèta en afronding                                         ########
Lancering                                                         ####
```

De fases **overlappen** bewust. Design begint terwijl de discovery wordt afgerond, en de bouw
begint met de techniek (inloggen, database) terwijl het design van de schermen nog gefinetuned
wordt.

## De fases

### Fase 0 — Intake en offerte (week 0)

- **Wat:** klantgesprek, eerste scope, offerte, contract.
- **Wie:** Dave, Chris, Sanne.
- **Oplevering:** de [intake](02-intake-klant.md), een getekende offerte.
- **Beslismoment:** de klant tekent, of niet.

### Fase 1 — Discovery (week 1–4)

- **Wat:** de [teardown](03-hellofresh-teardown.md) controleren, 8 tot 10 interviews met de
  doelgroep, persona's, de MoSCoW-lijst vaststellen, een technische verkenning (supermarktdata,
  prijzen, receptbron).
- **Wie:** Bram, Sanne, Joris, Lotte, Wouter.
- **Oplevering:** een **discovery-rapport** met de vastgestelde scope van de MVP en een herziene
  planning.
- **Beslismoment (go/no-go 1):** de klant keurt de scope goed. Pas daarna is de prijs van de bouw
  definitief.

### Fase 2 — Design (week 3–8)

- **Wat:** user flows, wireframes, het visuele ontwerp, een klikbaar prototype in Figma,
  usertests met 5 mensen, een designsysteem (kleuren, knoppen, typografie).
- **Wie:** Lotte, Iris, Mehmet, Bram.
- **Oplevering:** een **getest prototype** en een designsysteem.
- **Beslismoment (go/no-go 2):** de klant keurt het prototype goed.

### Fase 3 — Bouw (week 7–22, acht sprints van twee weken)

| Sprint | Weken | Doel van de sprint |
|---|---|---|
| 1 | 7–8 | Fundament: inloggen, database, CI, de app-structuur |
| 2 | 9–10 | Recepten tonen; het beheerportaal om recepten in te voeren |
| 3 | 11–12 | Onboarding en het weekmenu kiezen |
| 4 | 13–14 | De boodschappenlijst: samenvoegen, per afdeling, afvinken |
| 5 | 15–16 | Kookmodus, porties aanpassen, favorieten |
| 6 | 17–18 | Prijs per portie en weekbudget |
| 7 | 19–20 | Gedeelde lijst, pushmeldingen, beoordelingen |
| 8 | 21–22 | Restjesslim plannen, afronden, prestaties |

- **Wie:** het hele kernteam.
- **Oplevering per sprint:** een demo bij de klant en een testversie in TestFlight.

### Fase 4 — Bèta en afronding (week 21–24)

- **Wat:** 100 tot 200 testgebruikers, bugs oplossen, prestaties en toegankelijkheid,
  privacyverklaring en AVG-check.
- **Wie:** Nadia, Tim, de developers.
- **Oplevering:** een release candidate zonder blokkerende bugs.
- **Beslismoment (go/no-go 3):** klaar om in te dienen bij de app stores.

### Fase 5 — Lancering (week 25–26)

- **Wat:** inzenden bij Apple en Google (de review duurt een paar dagen en kan worden afgewezen,
  dus daar zit buffer in), de store-pagina's, monitoring op de lanceringsdag.
- **Oplevering:** **Thuiskok staat in de App Store en de Play Store.**

## Wat het ongeveer kost (een indicatie, om het rekenen te leren)

| Post | Berekening | Bedrag |
|---|---|---|
| Kernteam | ongeveer 10 fte gemiddeld × 26 weken × 5 dagen = 1.300 dagen | |
| Dagtarief | gemiddeld €850 per dag | **ca. €1,1 miljoen** |
| Externe kosten | hosting, licenties, app-store-accounts, testpanels | ca. €15.000 |
| Onvoorzien | 10 tot 15 procent buffer | ca. €150.000 |

**Zo lees je dit:** het grootste deel van de prijs is mensen maal tijd. Elke functie die van
"Must" naar "Could" gaat, haalt dagen weg. Daarom is MoSCoW ook een **budgetgesprek**.

## De grootste risico's

| Risico | Gevolg | Wat we doen |
|---|---|---|
| Geen openbare prijsdata van supermarkten | De belangrijkste belofte (prijs per portie) wordt onnauwkeurig | Vroeg in de discovery uitzoeken; desnoods geschatte prijzen met een duidelijke vermelding |
| Geen recepten op de lanceringsdag | Een lege app | De klant levert in week 10 de eerste 50 recepten aan via het beheerportaal |
| Scope groeit ("kan dit er ook nog bij?") | De deadline schuift | Elke nieuwe wens gaat via de Product Owner en de MoSCoW-lijst; iets erbij betekent iets eruit |
| Afwijzing door Apple of Google | Lancering schuift | Richtlijnen vanaf het begin volgen; buffer in week 25–26 |
| Het verdienmodel is nog onbekend | Er moet misschien betalen of adverteren bij | Vóór het einde van de discovery beslissen |
