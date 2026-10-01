---
# Sjabloon voor een recept. Kopieer dit bestand naar recipes/<naam-van-het-recept>.md (kleine
# letters, streepjes) en vul het in. Bestanden die met een _ beginnen, verschijnen niet in de app.
titel: Naam van het recept
porties: 4            # optioneel
tijd: 30              # optioneel, in minuten
tags: [voorbeeld]     # optioneel
bron: https://...     # optioneel: link of korte omschrijving
ingredienten:
  # hoeveelheid (een getal) en eenheid zijn optioneel; naam is verplicht.
  # afdeling is optioneel en bepaalt onder welk kopje het ingrediënt staat. In winkelvolgorde:
  # groente, fruit, brood, vlees, vis, vega, zuivel, kaas, eieren, houdbaar, kruiden, wereldkeuken,
  # diepvries, dranken (zie src/lib/afdeling.ts). Een andere naam mag ook en komt daarna; zonder
  # afdeling komt het onder "Overig".
  - { hoeveelheid: 400, eenheid: g, naam: pasta, afdeling: houdbaar }
  - { hoeveelheid: 2, naam: uien, afdeling: groente }
  - { naam: zout en peper }
---

1. Eerste stap van de bereiding.
2. Tweede stap.
