# 15. Sprint 1: het fundament

**Eigenaar:** Wouter (Tech Lead), met Fatima (Delivery Manager) · **Week 7–8:** 28 december 2026 – 8
januari 2027 · **Status:** **gebouwd** op 11 november 2026 (taak #60); **de demo ligt bij de klant**

> **Wat een fundament is.** Alles wat de gebruiker niet ziet, maar waar elke volgende sprint op
> staat: een lege app die opent en drie tabs heeft, een database met de juiste tabellen, inloggen, en
> een lopende band die bij elke wijziging test en een nieuwe testversie maakt. Na deze sprint kan
> iemand de app op een telefoon zetten, maar er staan nog geen recepten in. Die komen in sprint 2.
>
> **Waarom het eerst komt.** Inloggen en de database zijn het moeilijkst om later om te bouwen. Een
> knop van kleur veranderen kost een uur; een database omgooien als er al gebruikers in staan kost
> weken.

## De sprint in het kort

**Het sprintdoel:** *"Een testversie op de telefoon die opent op Welkom, een gast herkent, met Apple,
Google of e-mail een account maakt, en die bij elke wijziging vanzelf opnieuw wordt gebouwd."*

- **Wie:** Wouter, Ayla en Koen (de app), Ruben en Mila (de backend), Jesse (de lopende band, voor
  deze sprint erbij), Nadia (testen). Daan neemt de eerste week vrij.
- **Minder dagen dan een gewone sprint.** Week 7 valt tussen kerst en oud en nieuw. Fatima plande
  daarom op **ongeveer 60 procent** van de normale capaciteit, en liet het werk aan het designsysteem
  in de app (de onderdelen uit hoofdstuk 4 van het [designsysteem](13-designsysteem.md)) bewust voor
  sprint 2.
- **Het prototype blijft het voorbeeld.** Iris verwerkt in dezelfde weken de vier aanpassingen en de
  prijs per portie uit [go/no-go 2](14-prototype-en-usertest.md). Dat raakt sprint 1 niet: hier staat
  nog geen scherm met een prijs.

## De technische keuzes

In de [technische verkenning](09-technische-verkenning.md) stond dat de definitieve keuzes in sprint 1
vallen. Wouter legde ze op de eerste dag vast, elk met de reden:

| Keuze | Besluit | Waarom |
|---|---|---|
| **De app** | React Native met Expo, zoals in de [tools](01-het-bureau.md) van het bureau | Eén codebase voor iOS en Android; Expo bouwt en verstuurt de testversies zelf |
| **De database** | **PostgreSQL**, beheerd door de cloud | Het [datamodel](09-technische-verkenning.md) is relationeel; de weekprijs is er één query |
| **De backend** | Node.js, met één API voor de app en het beheerportaal | Wat het team al kent; het portaal (sprint 2) hoeft niets eigens |
| **De hosting** | Een Europese cloud met de servers in **Amsterdam** | De gegevens blijven in de EU (AVG), en dichtbij is snel |
| **Drie omgevingen** | *Ontwikkeling*, *test* en *productie*, elk met een eigen database | Een test kan nooit een echte gebruiker raken |
| **Foutmeldingen** | Sentry, vanaf de eerste dag | Een crash in de bèta wil je zien voordat iemand hem meldt |

**Bewust nog niet gekozen:** de gebruiksstatistieken (Amplitude of PostHog). Wat er gemeten wordt, is
een vraag voor de bèta (taak #69), en elke meting moet in de privacyverklaring. Kiezen zonder die vraag
zou meten om het meten zijn.

## Inloggen: een gast eerst, een account later

De [user flows](11-user-flows.md) besloten dat het account **ná** het eerste weekmenu komt, en de
usertest bevestigde dat. Dat stelt een eis aan de techniek die je niet ziet op een scherm:

- **Wie de app opent, is meteen een gast.** De app maakt op de achtergrond een gastaccount aan, zonder
  iets te vragen. Het weekmenu, de lijst en de instellingen hangen aan die gast.
- **"Bewaar je menu" maakt van de gast een account.** Wie daar Apple, Google of e-mail kiest, houdt
  alles wat hij als gast had. Er wordt niets overgezet; het account krijgt er alleen een naam bij.
- **"Later" blijft werken**, op dit ene toestel ([wireframes](12-wireframes.md), scherm 6). Wie de app
  verwijdert voordat hij een account maakt, is zijn menu kwijt. Dat staat in het paneel, in één zin.
- **E-mail gaat zonder wachtwoord**: je krijgt een link, en die tikken is inloggen. Geen wachtwoord
  betekent ook geen "wachtwoord vergeten", en voor een app die je eens per week opent is dat eerlijker.
- **Apple staat er altijd bij.** De regels van de App Store vragen dat een app die inloggen met Google
  aanbiedt, ook een inlog aanbiedt die weinig gegevens deelt. Inloggen met Apple voldoet daaraan. Het
  wireframe had Apple al bovenaan; dat blijft zo.

**Het beheerportaal logt anders in.** Daar komen alleen redacteuren van Thuiskok, met e-mail en een
tweede stap (een code op de telefoon). Een redacteur kan recepten en de prijzen veranderen, dus een
gestolen wachtwoord daar is erger dan in de app.

## De lopende band (CI)

Jesse richtte in GitHub de band in die bij **elke** wijziging loopt:

1. **Controleren**: de code wordt nagekeken op fouten en op de afspraken van het team.
2. **Testen**: de geautomatiseerde tests draaien. Tim voegt er elke sprint bij.
3. **Bouwen**: Expo maakt een nieuwe versie voor iOS en Android.
4. **Uitrollen naar test**: de nieuwe versie komt in de testomgeving, en wie in het team de testapp
   heeft, krijgt hem vanzelf.

Een wijziging gaat pas naar *productie* als iemand anders hem heeft nagekeken en de band groen is.
Productie bestaat al, maar is leeg: hij is er zodat de lancering geen eerste keer is.

## Wat er af is

| Verhaal | Klaar |
|---|---|
| De app opent op Welkom, met de drie tabs Week, Lijst en Ik (nog leeg) | **ja** |
| Een gast wordt herkend als de app opnieuw opent | **ja** |
| Een account maken met Apple, Google of e-mail, waarbij de gast het account wordt | **ja** |
| De tabellen uit het datamodel staan in de database, in alle drie de omgevingen | **ja** |
| De lopende band: controleren, testen, bouwen, uitrollen naar test | **ja** |
| Sentry vangt een crash op, in test | **ja** |
| De testversie bij Thuiskok, via TestFlight en de Play Console | **nee**: wacht op de accounts van Thuiskok, zie hieronder |

**Waarom de laatste niet af is.** De [offerte](05-offerte.md) zegt dat het Apple Developer-account en
het Google Play-account **op naam van Thuiskok** staan, zodat de app van de klant is en niet van het
bureau. Een testversie via TestFlight hangt aan dat account. Apple vraagt een bedrijf bovendien om een
D-U-N-S-nummer, en dat aanvragen kan een paar weken duren. Tot de accounts er zijn, zet het team de
testversie op de telefoons van Thuiskok **via Expo**, buiten de stores om. Dat werkt voor de demo,
maar niet voor de bèta van 100 tot 200 mensen (taak #69).

## De demo bij de klant

**Vrijdag 8 januari 2027**, een half uur, met de telefoon op het scherm gespiegeld. Joris leidt, Wouter
beantwoordt de technische vragen.

1. De app installeren via de link van Expo, en openen: Welkom.
2. De app sluiten en opnieuw openen: de gast wordt herkend.
3. "Bewaar je menu" met Apple, en daarna op een tweede telefoon inloggen met hetzelfde account.
4. Een wijziging live laten maken (de tekst op Welkom), en laten zien dat de testversie twintig minuten
   later vanzelf bijgewerkt is.
5. Het lege beheerportaal, met het inloggen in twee stappen.

**Wat er niet te zien is, en dat is de bedoeling:** recepten, het weekmenu, de lijst en de prijzen. Het
fundament is goed als niemand het merkt.

## Wat de klant nog moet zeggen

1. **De twee accounts.** Wie bij Thuiskok maakt het Apple Developer-account en het Google Play-account
   aan, en wanneer? Het bureau helpt bij het aanvragen van het D-U-N-S-nummer. Zonder de accounts komt
   er geen testversie in TestFlight, en schuift de bèta (taak #69).
2. **De demo.** Is het fundament zoals het hierboven staat akkoord, of mist Thuiskok iets voordat
   sprint 2 (de recepten en het beheerportaal, taak #61) begint?

## Volgende stap

Sprint 2: recepten tonen en het beheerportaal (taak #61), zodra de klant de demo heeft gezien.
