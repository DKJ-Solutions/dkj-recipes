# 10. Het discovery-rapport (go/no-go 1)

**Opgesteld door:** Sanne (Product Lead), Joris (Product Owner), Wouter (Tech Lead) en Fatima
(Delivery Manager) · **Week 4:** 7–11 december 2026 · **Status:** **aangeboden aan de klant** op 11
november 2026 (taak #53); **het besluit van de klant volgt**

> **Wat dit rapport is.** De oplevering van deel A van de [offerte](05-offerte.md): de vastgestelde
> scope van de MVP, en een **definitieve begroting voor deel B**. Met dit rapport beslist Thuiskok of
> we verder gaan (go/no-go 1). Het besluit zelf is van de klant en staat hier pas als het genomen is.

## In één oogopslag

- **Het product klopt, de belofte verschuift.** Mensen zeggen een maaltijdbox op vanwege de prijs,
  maar een prijskaartje per recept is niet waarom ze kiezen. De belofte wordt **"het gemak van een
  box, voor het geld van gewone boodschappen"**, met de **weekprijs** als bewijs.
- **We ontwerpen voor Noor**, de afhaker die het plannen mist. Zij is de enige persona met een echte
  stem eronder.
- **Eén functie gaat omlaag**: restjesslim plannen gaat van Must naar Should, want het echte bewijs
  spreekt het eerder tegen. **Eén functie komt erbij**: de prijstabel in het beheerportaal.
- **De begroting van deel B daalt** van een plafond van **€ 1.198.000** naar **€ 1.159.000**.
- **De planning blijft staan:** lancering in week 26.

## 1. Wat we geleerd hebben

| Onderzoek | De kern | Waar het staat |
|---|---|---|
| Teardown | HelloFresh heeft al een kookmodus; de verbeterpunten zijn geen abonnementsdwang, de lijst, elke portiegrootte en de prijs | [Teardown](03-hellofresh-teardown.md) |
| Interviews | Prijs is de reden om op te zeggen (voorlopig bevestigd). De prijs per recept is geen reden om te kiezen (niet bevestigd). Restjes besparen geld: open, en de echte stem spreekt het eerder tegen | [Interviews](07-interviews.md) |
| Persona's | Noor (primair), Marieke en Daan (secundair, alleen op fictie) | [Persona's](08-personas.md) |
| Techniek | Hoeveelheden per portie, één ingrediëntencatalogus, en een eigen prijstabel van ± 300 ingrediënten. Niet scrapen | [Technische verkenning](09-technische-verkenning.md) |

**Hoe zeker dit is.** Er zat één echte deelnemer in de interviews, en acht fictieve. Elke conclusie
is dus voorlopig. De usertest in het design (taak #58) toetst haar met vijf echte mensen. Daarom
staat bij elke wijziging hieronder wat de usertest kan veranderen.

## 2. De MoSCoW

De lijst uit de [teardown](03-hellofresh-teardown.md) blijft het uitgangspunt. Hieronder staan alleen
de **wijzigingen**. Alles wat niet genoemd wordt, blijft zoals het daar staat.

| Functie | Was | Wordt | Waarom | Wat de usertest kan veranderen |
|---|---|---|---|---|
| **Weekmenu met prijs** | M, met prijs per portie | **M, met de weekprijs voorop** | De weekprijs draagt de belofte; de prijs per portie staat in het recept, maar niet als uithangbord (H2b) | Niets aan de M; wel waar de prijs op het scherm staat |
| **Weekbudget** | M (premium) | **M (premium)**, ongewijzigd | Echt bewijs: de prijs drijft het opzeggen (H2a) | — |
| **Porties van 1 tot 6** | M | **M**, nu **per week** te kiezen | Het samengestelde gezin rekent met twee of vijf (H6, fictief). Het datamodel kan het zonder extra werk | Bevestigt de test het niet, dan blijft de keuze per account in plaats van per week |
| **Lijst per afdeling** | M | **M**, ongewijzigd | H3 is open, maar dit is ons belangrijkste verschil met de box, en het kost weinig: de afdeling staat al in de catalogus | — |
| **Restjesslim plannen** | M (premium) | **S (premium)** | De echte stem gooit "niet veel" weg (H4). De functie is duur: ze vraagt een slim weekmenu, niet alleen een veld | Bevestigt de test het wél, dan wordt ze weer M, en dat kost geld (zie de begroting) |
| **Prijstabel in het beheerportaal** | — | **M**, nieuw | Zonder tabel geen prijs; Thuiskok houdt haar zelf bij | — |
| **Eigen recepten toevoegen** | — | **W**, nieuw | Eén fictieve wens (Daan). Buiten de opdracht: Thuiskok levert de recepten | — |

**Wat premium dan nog geeft.** Het weekbudget en de gedeelde lijst blijven Must. Restjesslim plannen
komt erbij zodra het gebouwd is. Premium blijft dus te verkopen voor € 2 à € 3 per maand. De
betaalbereidheid in de interviews ligt tussen € 0 en € 5, met € 5 bij de echte deelnemer.

## 3. De definitieve begroting voor deel B

| Post | Berekening | Bedrag |
|---|---|---|
| Kernteam, zoals in de offerte | 1.215 dagen | |
| − Restjesslim plannen naar Should | − 60 dagen (het slimme weekmenu en de restjesweergave in sprint 8) | |
| + De prijstabel in het beheerportaal | + 15 dagen (sprint 2 en 6) | |
| **Kernteam, definitief** | **1.170 dagen × € 850** | **€ 994.500** |
| Externe kosten | ongewijzigd | € 15.000 |
| Onvoorzien | 15 procent van het kernteam | € 149.175 |
| **Plafond deel B** | | **€ 1.158.675**, afgerond **€ 1.159.000** |

**Dat is € 39.000 onder het plafond uit de offerte.** De offerte rekende met afgeronde
tussenbedragen; deze begroting rekent ze uit.

**Als restjesslim plannen toch Must wordt**, komen de 60 dagen terug: € 51.000 plus onvoorzien,
samen € 58.650. Het plafond wordt dan ongeveer **€ 1.217.300**, en dat is **boven** het
plafond uit de offerte. Dat kan alleen met een schriftelijk akkoord van de klant (offerte, deel B).

## 4. De planning

**De lancering blijft in week 26.** Sprint 8 krijgt ruimte: de 60 dagen die restjesslim plannen kostte,
worden buffer voor de afronding en de prestaties, of gaan naar restjesslim plannen als Should, zolang
het plafond dat toelaat. Het design (fase 2) begint volgens plan in week 3.

## 5. Wat er nu van de klant nodig is: go/no-go 1

Thuiskok kiest een van deze drie:

1. **Go, met deze scope.** Restjesslim plannen wordt Should, met een plafond van **€ 1.159.000**. Het
   design begint.
2. **Go, maar restjesslim plannen blijft Must.** Het plafond wordt ongeveer **€ 1.217.300**, wat de
   klant schriftelijk moet goedkeuren. Het design begint.
3. **No-go.** We stoppen hier. Alleen deel A is verschuldigd, en Thuiskok krijgt alles wat er tot nu
   toe gemaakt is.

Met de oplevering van dit rapport is de tweede helft van deel A verschuldigd (**€ 36.125**), los van het
besluit.
