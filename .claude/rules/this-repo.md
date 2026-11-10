# This repo -- dkj-recipes

- **What it is for:** een mobile-first recepten-app -- in de supermarkt snel bij je recepten, zodat je
  makkelijk de ingrediënten kunt kopen. Eisen en besluiten staan in issue #1, wensen als issues.
- **Recepten komen via Claude in de repo:** Dave levert een recept aan (tekst, link of foto), Claude zet
  het als bestand in `recipes/` volgens `recipes/_SJABLOON.md`. Geen database, login of invoerscherm.
- **Trunk:** `main`.
- **Visibility:** public (`DKJ-Solutions/dkj-recipes`) -- nothing confidential goes in it.
- **Owner:** Dave (`DaveKJohn`), the decision-maker the constitution's "the owner" refers to.
- **Het rollenspel (doel #43, `docs/studio-hellofresh/`):** Dave speelt zowel de CEO als de klant
  Thuiskok. Een keuze van de klant wordt daarom geparkeerd als `awaiting-decision-dev`, nooit als
  `awaiting-decision-client`. Elke taak levert een besluit of document op in `docs/studio-hellofresh/`
  en een regel in het logboek daar; een antwoord van de klant wordt nooit verzonnen. Het doel (label
  `goal`) en de mijlpalen (de sub-issues van het doel) zijn geen werk: een sweep slaat ze over
  (`-SkipIssue`), en ze worden gesloten zodra hun taken dicht zijn. Een taak die afhangt van een
  geparkeerde eerdere taak wordt geparkeerd als `awaiting-pull`, met een verwijzing naar die taak.
- **The specialists:** the orchestrator (Chris) is always loaded through `CLAUDE.md` ->
  `.claude/specialists/SPECIALISTS.md`, which carries his body import, his lens import and this repo's
  roster.
