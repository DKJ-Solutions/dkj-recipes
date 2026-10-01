# This repo -- dkj-recipes

- **What it is for:** een mobile-first recepten-app -- in de supermarkt snel bij je recepten, zodat je
  makkelijk de ingrediënten kunt kopen. Eisen en besluiten staan in issue #1, wensen als issues.
- **Recepten komen via Claude in de repo:** Dave levert een recept aan (tekst, link of foto), Claude zet
  het als bestand in `recipes/` volgens `recipes/_SJABLOON.md`. Geen database, login of invoerscherm.
- **Trunk:** `main`.
- **Visibility:** public (`DKJ-Solutions/dkj-recipes`) -- nothing confidential goes in it.
- **Owner:** Dave (`DaveKJohn`), the decision-maker the constitution's "the owner" refers to.
- **The specialists:** the orchestrator (Chris) is always loaded through `CLAUDE.md` ->
  `.claude/specialists/SPECIALISTS.md`, which carries his body import, his lens import and this repo's
  roster.
