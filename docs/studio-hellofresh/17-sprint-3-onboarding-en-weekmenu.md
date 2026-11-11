# 17. Sprint 3: de onboarding en het weekmenu kiezen

**Eigenaar:** Wouter (Tech Lead), met Fatima (Delivery Manager) · **Week 11–12:** 25 januari – 5
februari 2027 · **Status:** **gebouwd** op 11 november 2026 (taak #62); **de demo ligt bij de klant**

> **Wat deze sprint oplevert.** De eerste keer en elke week, de [user flows](11-user-flows.md) 1 en 2.
> Wie de app voor het eerst opent, beantwoordt drie vragen en krijgt een weekmenu. Wie hem een week
> later opent, vindt een nieuw voorstel, wisselt wat hem niet bevalt en zegt ja. Na deze sprint doet de
> app wat hij belooft, op twee dingen na: de boodschappenlijst (sprint 4) en de prijzen (sprint 6).
>
> **Waarom het nu kan.** Thuiskok heeft minstens 30 recepten live gezet, waarvan 12 vegetarisch
> ([sprint 2](16-sprint-2-recepten-en-portaal.md), "Het antwoord van de klant"). Dat is de ondergrens
> die het team voor een weekmenu had geschat. En de store-accounts bestaan, dus deze testversie is de
> eerste via TestFlight en de Play Console.

## De sprint in het kort

**Het sprintdoel:** *"Iemand die de app voor het eerst opent, heeft binnen een minuut een weekmenu dat
past bij hoeveel mensen er eten en wat ze niet eten, kan een recept wisselen, en bevestigt het."*

- **Wie:** Wouter, Ayla, Daan en Koen (de app), Ruben en Mila (het voorstel van de week, in de API), Noor
  (de allergenen in het portaal), Iris (de schermen, met de vier aanpassingen uit de
  [usertest](14-prototype-en-usertest.md)), Jesse (TestFlight en de Play Console), Nadia en Tim
  (testen).
- **De hele capaciteit.** Fatima legde de volgorde vast: **week 11 de onboarding en het voorstel, week
  12 wisselen, het aantal eters en het bevestigen.**
- **De schermen liggen er al.** Iris tekende ze in het [prototype](14-prototype-en-usertest.md), met de
  aanpassingen uit de usertest. Deze sprint bouwt ze, en ontwerpt er niets nieuws bij, op één plek na:
  de weekprijs-kaart zonder prijs (hieronder).

## De onboarding

De route uit flow 1, zoals hij nu gebouwd is:

```text
Welkom → Maak mijn weekmenu
  → Voor hoeveel mensen kook je meestal? (1 tot 6) en hoeveel avonden? (2 tot 5, standaard 3)
  → Wat eet je niet? (vlees, vis, en de allergenen; overslaan mag)
  → Het eerste weekmenu
  → Bewaar je menu (Apple, Google of e-mail, of Later)
```

- **Drie schermen, geen vierde.** Elk extra scherm kost mensen. Nadia klokte de route met de testapp:
  zonder aarzelen ongeveer **35 seconden** tot het weekmenu, ruim onder de minuut uit flow 1 (gemeten in
  de testomgeving, met het team als testers, niet met echte gebruikers).
- **"Bewaar je menu" krijgt de reden uit de usertest:** *"Zodat je menu en je lijst op je telefoon
  blijven staan."* Het account zelf werkte al sinds [sprint 1](15-sprint-1-fundament.md): de gast wordt
  het account, en er gaat niets verloren.
- **Wat je invult, is de standaard.** Onder Ik heet het voortaan "Meestal kook ik voor" en "Zo vaak kook
  ik", zoals de usertest vroeg. Veranderen kan daar, en geldt dan voor elke week die nog moet komen.

### Wat eet je niet: de allergenen

Hier vond het team het grootste gat van de sprint. Het [wireframe](12-wireframes.md) (scherm 3) gaat
ervan uit dat Thuiskok **per ingrediënt** de allergenen invoert. Maar de catalogus uit sprint 2 kent
geen allergenen: een ingrediënt heeft een afdeling, een eenheid, een verpakking, een basisvoorraad en een
prijs, en dat is alles. Ook het [datamodel](09-technische-verkenning.md) had er geen plek voor.

**Wat het team deed:**

- **Noor zette een veld voor de allergenen in de catalogus**, met de veertien allergenen die de wet
  kent als vinkjes. Elk ingrediënt krijgt daarnaast een vinkje *"Allergenen nagekeken"*. Een recept
  rekent zijn allergenen uit zijn ingrediënten, net zoals de lijst straks zijn hoeveelheden.
- **Een recept met een ingrediënt dat niet is nagekeken, valt weg** voor iedereen die bij "Wat eet je
  niet?" een allergie aanvinkt. Een filter dat half werkt, is erger dan geen filter: wie een
  notenallergie aanvinkt, gaat ervan uit dat er geen noten in het menu zitten. Zo blijft de regel uit de
  [teardown](03-hellofresh-teardown.md) staan, dat allergenen moeten kloppen zodra we ze tonen.
- **Vlees en vis zijn geen allergenen**, maar labels op het recept. Die waren er al sinds sprint 2
  (*veggie*), en het voorstel gebruikt ze.

**Wat daar nu uit volgt:** van de 120 ingrediënten die Ruben vooraf laadde en de ingrediënten die
Thuiskok erbij maakte, is **er nog niet één nagekeken**. Wie in de testapp een allergie aanvinkt, krijgt
daarom vandaag geen menu, maar de zin *"We hebben nog niet genoeg recepten waarvan we zeker weten dat ze
hierbij passen."* Dat is eerlijk, maar het is geen app. Wie het nakijken doet, is een vraag aan de klant
(hieronder).

## Het weekmenu

De route uit flow 2:

```text
App openen → Het voorstel voor deze week (Voor 2 · deze week anders?)
  ├─ Dit wordt het → bevestigd; volgende week staat er een nieuw voorstel
  ├─ ⇄ bij een recept → drie alternatieven → Meer recepten ▸ → terug
  └─ Voor 2 · deze week anders? → 1 tot 6, alleen voor deze week
```

### Hoe de app een voorstel maakt

Ruben en Mila schreven het voorstel als **een paar vaste regels**, geen slim algoritme. Bij 30 recepten
valt er niets te leren, en een regel kun je de klant uitleggen.

1. **Wat niet past, valt weg**: vlees of vis als je dat niet eet, een allergie, en een recept dat niet
   live is.
2. **Wat je de laatste twee weken kreeg, schuift achteraan.** Niet verboden, wel pas als er niets anders
   is.
3. **Het seizoen gaat voor.** Een recept met het seizoenslabel van deze maand krijgt voorrang.
4. **Niet drie keer hetzelfde.** Hooguit één recept per hoofdingrediënt (kip, pasta, rijst) in één
   week, zodat het menu er niet uitziet als een herhaling.
5. **Bij gelijkspel beslist het toeval.** Twee mensen met dezelfde antwoorden krijgen dus niet
   hetzelfde menu.

**Een nieuw voorstel komt op maandag**, als een nieuwe week begint. Er is geen deadline (flow 2): wie
zondag nog niet bevestigd heeft, houdt het voorstel, en wie halverwege de week bevestigt, kookt de rest
van die week.

### Wisselen

- **Drie alternatieven, en pas daarna Meer recepten** ([wireframes](12-wireframes.md), scherm 5). De
  drie volgen dezelfde regels als het voorstel. *Meer recepten* toont alles wat past, met de veggie
  recepten gewoon ertussen.
- **Bij elk alternatief staat nu de kooktijd en of het veggie is.** Het wireframe zette er het verschil
  in weekprijs bij. Dat kan pas vanaf sprint 6, als er gerekend wordt.

### Het aantal eters

- **De knop bovenaan uit de usertest:** "Voor 2 · deze week anders?". Wat je daar kiest, geldt voor deze
  week, en de week erna begint weer bij de standaard. Zo was de hapering van keuze 4 in de usertest
  bedoeld op te lossen; of het werkt, toetst de bèta (taak #69).
- **De ingrediënten in het recept rekenen mee.** De hoeveelheden staan per portie in de catalogus
  ([sprint 2](16-sprint-2-recepten-en-portaal.md)), dus vier eters is vier keer één portie. Het aantal
  **in het recept zelf** aanpassen, voor één avond, komt in sprint 5 met de kookmodus.

### Dit wordt het

**Bevestigen bewaart het menu, en meer nog niet.** De knop heet in het prototype *"Dit wordt het: maak
mijn boodschappenlijst"*, maar de lijst komt pas in sprint 4. Tot dan heet hij *"Dit wordt het"*, en de
tab Lijst zegt dat de lijst eraan komt. Een knop die iets belooft wat hij niet doet, past niet bij de
[toon](13-designsysteem.md).

### De weekprijs-kaart, zonder prijs

Flow 1 zegt dat de weekprijs er vanaf het eerste scherm staat. Die belofte houdt de app pas in sprint 6,
als de prijzen gerekend worden. **Tot dan staat er geen bedrag**, om de reden uit sprint 2: een prijs die
nog niet klopt, breekt de regel "eerlijk over wat we niet weten".

De kaart staat er wel, op zijn plek bovenaan, met wat er wél vaststaat: *"Deze week · 3 avonden · 2
eters"*. Daan bouwde hem als het onderdeel uit het [designsysteem](13-designsysteem.md), met de regels
voor de weekprijs en de prijs per portie al klaar en leeg. In sprint 6 komen de bedragen erin, zonder dat
er iets verschuift.

## TestFlight en de Play Console

**Dit is de eerste testversie in de stores.** Jesse koppelde de lopende band uit sprint 1 aan de
accounts van Thuiskok, die het bureau als uitnodiging kreeg. Elke groene wijziging gaat nu als nieuwe
versie naar TestFlight en de interne test van de Play Console.

- **Alleen interne testers, voorlopig.** Mensen van Thuiskok en van het bureau, die in het account zijn
  toegevoegd. Daarvoor is geen keuring door Apple nodig.
- **De bèta wordt de eerste externe test.** Voor 100 tot 200 mensen buiten het team (taak #69) keurt
  Apple de testversie eerst. Dat duurt meestal een dag, en het team plant er een week voor in.
- **Expo blijft voor het team zelf**, om een wijziging snel te laten zien zonder op een nieuwe versie te
  wachten.

## Wat er af is

| Verhaal | Klaar |
|---|---|
| De onboarding in drie schermen, van Welkom tot het eerste weekmenu, onder de minuut | **ja** |
| "Bewaar je menu" met de reden uit de usertest; Later blijft werken | **ja** |
| Het voorstel van de week volgens de vijf regels, en een nieuw voorstel op maandag | **ja** |
| Een recept wisselen: drie alternatieven, en daarna Meer recepten | **ja** |
| Het aantal eters voor deze week, met de ingrediënten die meerekenen | **ja** |
| Het weekmenu bevestigen | **ja** |
| De weekprijs-kaart op zijn plek, nog zonder bedrag | **ja** |
| De allergenen per ingrediënt in het portaal, en het filter in de app | **ja**, maar nog geen ingrediënt is nagekeken: zie hieronder |
| De testversie via TestFlight en de Play Console | **ja**, voor interne testers |

**Waarmee het team testte.** Nadia testte met de live recepten van Thuiskok in de testomgeving, en met
de twaalf testgerechten uit sprint 2 erbij om de grensgevallen te raken: een week met vier avonden
veggie, een allergie zonder passend recept, en een week waarin alles al eens voorkwam. Tim zette elk van
die gevallen als geautomatiseerde test op de lopende band.

**Wat 30 recepten wel en niet dragen.** Voor een menu van drie avonden zijn ze genoeg: het team liet het
voorstel honderd keer achter elkaar draaien voor één huishouden, en in geen enkele week kwam een recept
van de twee weken ervoor terug (een simulatie in de testomgeving, geen gebruik). **Voor wie vegetarisch
eet en vijf avonden kookt, wordt het krap**: met 12 veggie recepten komt na twee weken alles terug. Dat
is geen fout in de bouw, maar een reden om de 50 recepten uit de [offerte](05-offerte.md) vóór de bèta
vol te maken.

## De demo bij de klant

**Vrijdag 5 februari 2027**, drie kwartier, met de telefoon op het scherm gespiegeld. Joris leidt,
Iris laat de schermen zien, Wouter beantwoordt de technische vragen.

1. De app installeren **via TestFlight**, voor het eerst zonder Expo.
2. De onboarding van begin tot eind, met een stopwatch erbij: voor 2, drie avonden, geen vis.
3. Het weekmenu bekijken, één recept wisselen, en *Meer recepten* openen.
4. "Voor 2 · deze week anders?" naar vier zetten, en het recept openen: de ingrediënten zijn verdubbeld.
5. Bevestigen, en het menu bewaren met Apple.
6. In het portaal één ingrediënt nakijken op allergenen, zodat de klant ziet hoe lang dat duurt.

**Wat er nog niet te zien is:** de boodschappenlijst, de kookmodus en elke prijs.

## Wat de klant nog moet zeggen

1. **De allergenen.** Wie bij Thuiskok kijkt de allergenen per ingrediënt na, en wanneer? Zolang dat
   niet gebeurd is, krijgt wie een allergie aanvinkt geen menu. Het nakijken moet in elk geval af zijn
   vóór de bèta (taak #69), want daar doen echte mensen met echte allergieën mee. Het team schat het op
   **een halve dag** voor de catalogus zoals hij nu is, met de etiketten van de verpakkingen als bron
   (afgeleid, niet gemeten).
2. **De demo.** Zijn de onboarding en het weekmenu zoals hierboven akkoord, ook het weekmenu zonder
   weekprijs tot sprint 6, of mist Thuiskok iets voordat sprint 4 (de boodschappenlijst, taak #63)
   begint?

## Volgende stap

Sprint 4: de boodschappenlijst, samengevoegd, per afdeling en af te vinken (taak #63), zodra de klant
de demo heeft gezien.
