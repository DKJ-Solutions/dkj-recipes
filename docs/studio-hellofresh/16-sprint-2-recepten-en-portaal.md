# 16. Sprint 2: recepten tonen en het beheerportaal

**Eigenaar:** Wouter (Tech Lead), met Fatima (Delivery Manager) · **Week 9–10:** 11–22 januari 2027 ·
**Status:** **gebouwd** op 11 november 2026 (taak #61); **de demo ligt bij de klant**

> **Wat deze sprint oplevert.** Twee kanten van hetzelfde recept. Aan de ene kant het
> **beheerportaal**: de webpagina waarin een redacteur van Thuiskok een recept invoert, met de
> ingrediënten uit één catalogus. Aan de andere kant **de app**, die dat recept laat zien zoals het
> [wireframe](12-wireframes.md) (scherm 8) het tekende. Na deze sprint staat er iets in de app, maar
> nog geen weekmenu: dat komt in sprint 3.
>
> **Waarom het portaal nu komt.** Thuiskok levert in week 10 de eerste 50 recepten aan, via het
> portaal ([offerte](05-offerte.md)). Zonder recepten is er in sprint 3 geen weekmenu om voor te
> stellen, dus het portaal moet in de eerste week van deze sprint werken.

## De sprint in het kort

**Het sprintdoel:** *"Een redacteur van Thuiskok voert in het portaal een recept in, met de
ingrediënten uit de catalogus, ziet het voorbeeld, publiceert het, en ziet het een minuut later in de
testapp."*

- **Wie:** Noor (web developer, het portaal), Ruben en Mila (de API en de catalogus), Wouter, Ayla en
  Koen (de app), Iris (de portaalschermen, en ze kijkt de onderdelen in de app na), Nadia (testen). Daan is terug
  van zijn vrije week en neemt de onderdelen uit het designsysteem over.
- **De hele capaciteit**, na de 60 procent van sprint 1. Fatima legde de volgorde vast: **week 9 het
  portaal, week 10 de app.** Zo kan Thuiskok in week 10 invoeren terwijl het team aan de app werkt.
- **Het portaal is pas deze sprint getekend.** De [wireframes](12-wireframes.md) lieten het bewust
  liggen. Iris en Wouter tekenden het op de eerste dag, in een uur, met de onderdelen van het brand book
  zoals ze zijn ([designsysteem](13-designsysteem.md)): het is een werkscherm, geen etalage.

## Het beheerportaal

De route uit de [user flows](11-user-flows.md) (flow 7), zoals hij nu gebouwd is:

```text
Inloggen (e-mail + code op de telefoon, uit sprint 1)
  → Recepten: een lijst met per recept concept of live
  → Nieuw recept
      → Titel, beschrijving, kooktijd, moeilijkheid, labels, seizoen
      → Foto (vierkant, met de vraag "Zelf gekookt en zelf gefotografeerd?")
      → Ingrediënten: typen en kiezen uit de catalogus, met een hoeveelheid per portie
          → Ontbreekt het? → Nieuw in de catalogus: afdeling, eenheid, verpakking, basisvoorraad, prijs
      → Stappen: tekst, en waar nodig een timer
  → Voorbeeld, zoals de app het toont
  → Publiceren (of als concept bewaren)

Inloggen → Catalogus en prijzen → per ingrediënt de prijs, de bron en de peildatum
```

Wat het team daarbij besloot, en waarom:

- **Een ingrediënt kiezen, niet typen.** Het veld zoekt terwijl je typt, in de catalogus. Alleen wat er
  echt niet in staat, maakt de redacteur nieuw aan, en dan zijn de afdeling, de verpakking en de prijs
  verplicht. Anders kan de lijst niet samenvoegen en de weekprijs niet rekenen
  ([technische verkenning](09-technische-verkenning.md)).
- **De hoeveelheid is per portie.** Het formulier vraagt "voor één persoon", en rekent in het voorbeeld
  terug naar twee eters. Een redacteur die gewend is aan "voor 4" ziet zo meteen of het klopt.
- **De vraag bij de foto komt uit het designsysteem.** Nakoken mag, de foto van HelloFresh overnemen
  niet ([designsysteem](13-designsysteem.md), hoofdstuk 6). Het portaal kan dat niet controleren,
  maar het vraagt het bij elke foto. Wie "nee" antwoordt, kan het recept als concept bewaren, niet
  publiceren.
- **Concept eerst.** Een recept is pas in de app te zien als iemand op *Publiceren* drukt. Zo kan
  Thuiskok in week 10 invoeren zonder dat een half recept in de testapp verschijnt.
- **De prijstabel staat er al, maar rekent nog niet.** Elk ingrediënt in de catalogus heeft een prijs
  per verpakking met de bron en de peildatum, en het scherm *Catalogus en prijzen* kleurt de prijzen
  die ouder zijn dan een kwartaal. Het rekenen (de prijs per portie en de weekprijs) komt in sprint 6.
  Zo kan Thuiskok de eerste vulling van de tabel nu al doen, met Checkjebon als spiekbriefje.
- **De catalogus begint niet leeg.** Ruben laadde vooraf 120 veelgebruikte ingrediënten met hun
  afdeling, eenheid en een gangbare verpakking, zonder prijs. Thuiskok vult de prijzen en vult aan
  wat ontbreekt.

## De app: het recept

De app krijgt deze sprint één echt scherm: **het recept** (scherm 8 van de wireframes).

- **Bovenaan de kooktijd en wat je uit je voorraad nodig hebt**, voordat iemand begint. Dat is klacht 5
  over HelloFresh ([teardown](03-hellofresh-teardown.md)).
- **De ingrediënten voor twee eters.** Het aantal aanpassen komt in sprint 5, samen met de kookmodus.
- **De prijs per portie staat er nog niet.** Die plek blijft leeg tot sprint 6, als er gerekend wordt.
  Een prijs tonen die nog niet klopt, breekt de regel "eerlijk over wat we niet weten".
- **De tab Week toont voorlopig alle live recepten onder elkaar**, als receptkaarten. Het voorstel van
  de week komt in sprint 3; tot dan is dit de plek om de recepten te zien.
- **Recepten werken zonder bereik**, als ze één keer geladen zijn. De lijst eist dat in sprint 4; het
  recept krijgt het nu al mee, omdat het dezelfde opslag op het toestel is.

**De onderdelen uit het designsysteem** die sprint 1 bewust liet liggen, bouwde Daan voor zover deze
schermen ze nodig hebben: de knoppen, het label, de receptkaart en de tabbalk
([designsysteem](13-designsysteem.md), hoofdstuk 4). De lijstrij, de timer, de kookstap en de
weekprijs-kaart komen met de sprint die ze nodig heeft.

## Wat er af is

| Verhaal | Klaar |
|---|---|
| Inloggen in het portaal en een lijst van recepten, concept en live | **ja** |
| Een recept invoeren met foto, stappen en timers | **ja** |
| Een ingrediënt kiezen uit de catalogus, of nieuw aanmaken met de verplichte velden | **ja** |
| Het voorbeeld zoals de app het toont, en publiceren | **ja** |
| De catalogus met de prijs, de bron en de peildatum, en wat ouder is dan een kwartaal gekleurd | **ja** |
| De app toont een gepubliceerd recept binnen een minuut, ook zonder bereik | **ja** |
| De tab Week met alle live recepten als receptkaarten | **ja** |
| De eerste 50 recepten van Thuiskok in het portaal | **open**: dat is invoerwerk van Thuiskok, zie hieronder |

**Waarmee het team testte.** Nadia gebruikte de twaalf gerechten uit het
[prototype](14-prototype-en-usertest.md), alleen in de testomgeving en als concept. Ze staan niet in
productie, en ze tellen niet mee voor de 50 van Thuiskok.

**Hoeveel recepten sprint 3 nodig heeft.** Een weekmenu van drie avonden, met twee of drie
alternatieven om te wisselen, vraagt al gauw een dozijn passende recepten per week. Wie vegetarisch
eet, heeft er evenveel nodig die vegetarisch zijn. Het team schat dat het weekmenu vanaf **30 live
recepten, waarvan 12 vegetarisch**, genoeg te kiezen heeft om niet elke week hetzelfde voor te stellen
(afgeleid, niet gemeten).

## De demo bij de klant

**Vrijdag 22 januari 2027**, drie kwartier, met het portaal op het grote scherm en de telefoon ernaast.
Joris leidt, Noor laat het portaal zien.

1. Inloggen in het portaal, met de code op de telefoon.
2. Een recept invoeren: kip-curry met rijst. Eén ingrediënt staat nog niet in de catalogus
   (kerriepoeder), en wordt ter plekke aangemaakt.
3. Het voorbeeld bekijken, en publiceren.
4. Op de telefoon de tab Week verversen: het recept staat erbij. Openen: kooktijd, voorraad,
   ingrediënten voor twee.
5. Het scherm *Catalogus en prijzen*, met de gekleurde prijzen die bijgewerkt moeten worden.

**Wat er nog niet te zien is:** het voorstel van de week, de boodschappenlijst, de kookmodus en elke
prijs in de app.

## Wat de klant nog moet zeggen

1. **De recepten.** Staan de eerste 50 recepten erin, of wanneer wel? Voor het weekmenu in sprint 3
   (taak #62) heeft het team er minstens 30 live nodig, waarvan 12 vegetarisch. Wie bij Thuiskok voert
   ze in, zodat die redacteuren een login krijgen?
2. **De accounts in de stores.** Zijn het Apple Developer-account en het Google Play-account er, zodat
   de testversie vanaf sprint 3 via TestFlight en de Play Console kan in plaats van via Expo? Het bureau
   heeft er dan een uitnodiging voor nodig.
3. **De demo.** Is het portaal en het recept in de app zoals hierboven akkoord, of mist Thuiskok iets
   voordat sprint 3 (onboarding en het weekmenu, taak #62) begint?

## Volgende stap

Sprint 3: de onboarding en het weekmenu kiezen (taak #62), zodra de klant de demo heeft gezien.
