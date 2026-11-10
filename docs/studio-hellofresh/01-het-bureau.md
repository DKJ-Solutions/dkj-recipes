# 1. Het bureau

Een klein softwarebureau van **20 mensen**, gespecialiseerd in gebruiksvriendelijke (UX-gedreven)
SaaS-producten en mobiele apps. Alle namen zijn verzonnen.

## Het team

| Team | Mensen | Rol | Wat ze doen |
|---|---|---|---|
| **Directie** (2) | Dave | CEO | Klantrelatie, offerte, contract, grote keuzes |
| | Chris | COO | Levering: planning, bezetting, kwaliteit |
| **Product** (3) | Sanne | Product Lead | Bewaakt het *waarom*: doelen, prioriteiten, de roadmap |
| | Joris | Product Owner | Vertaalt wensen naar user stories en beheert de backlog |
| | Fatima | Delivery Manager | Sprints, planning, budget; ruimt blokkades op |
| **Design** (4) | Lotte | Design Lead | Bewaakt de designkwaliteit en het designsysteem |
| | Mehmet, Iris | UX/UI-designers | Flows, wireframes, het visuele ontwerp, het prototype |
| | Bram | UX Researcher | Interviews, usertests, analyse van concurrenten |
| **Engineering** (9) | Wouter | Tech Lead / architect | Technische keuzes, codekwaliteit, inschattingen |
| | Ayla, Daan, Koen | Mobile developers | De app voor iOS en Android (één codebase) |
| | Ruben, Mila, Sem | Backend developers | API, database, koppelingen, beheerportaal-API |
| | Noor | Web developer | Het beheerportaal waar de klant recepten beheert |
| | Jesse | DevOps | Servers, CI/CD, monitoring, beveiliging |
| **QA** (2) | Nadia | QA Lead | Testplan, acceptatiecriteria, de bèta |
| | Tim | Test automation | Geautomatiseerde tests die elke wijziging controleren |

**Niet iedereen werkt fulltime op één klant.** Op dit project staat een **kernteam van 12**:
Sanne, Joris, Fatima, Lotte, Iris, Bram, Wouter, Ayla, Daan, Ruben, Mila en Nadia. De rest springt
bij waar nodig (Noor voor het beheerportaal, Jesse voor de infrastructuur, Tim voor de
testautomatisering) of werkt voor andere klanten. Zo verdient een bureau van 20 zijn salarissen:
twee tot drie klanten tegelijk.

## Het werkritme (Scrum in sprints van 2 weken)

| Moment | Wanneer | Wie | Waarvoor |
|---|---|---|---|
| **Daily stand-up** | Elke ochtend, 15 min | Het kernteam | Wat deed ik, wat ga ik doen, wat houdt me tegen |
| **Sprint planning** | Begin van elke sprint | Team + PO | Welke stories passen in deze twee weken |
| **Refinement** | Halverwege de sprint | PO, designer, tech lead | Stories voor de volgende sprint helder en ingeschat maken |
| **Sprint review (demo)** | Einde van de sprint | Team + **klant** | Laten zien wat werkt; de klant geeft feedback |
| **Retrospective** | Na de review | Team | Wat ging goed, wat doen we volgende keer anders |
| **Stuurgroep** | Elke 4 weken | Dave, Chris, Sanne + klant | Budget, planning, risico's, grote scopebesluiten |

**Waarom zo:** de klant ziet elke twee weken werkende software. Een misverstand kost dan
hooguit twee weken werk, en niet zes maanden.

## De tools

| Waarvoor | Tool | Waarom deze |
|---|---|---|
| Ontwerp en prototype | **Figma** | Designers en developers kijken in hetzelfde bestand; het prototype is klikbaar |
| Backlog en sprints | **Linear** (of Jira) | User stories, prioriteiten, sprintborden |
| Kennisbank | **Notion** | Besluiten, verslagen, specificaties |
| Communicatie | **Slack** | Met een gedeeld kanaal voor de klant |
| Code | **GitHub** | Versiebeheer, code review via pull requests, CI |
| App-techniek | **React Native (Expo)** | Eén codebase voor iOS en Android, dus minder developers nodig |
| Backend | **Node.js + PostgreSQL**, gehost bij een EU-cloud | Vertrouwd, schaalbaar, AVG-vriendelijk |
| Foutmeldingen | **Sentry** | Ziet crashes bij echte gebruikers voordat zij klagen |
| Gebruiksstatistieken | **Amplitude** of **PostHog** | Meten welke functies gebruikt worden |
| Bèta-distributie | **TestFlight** en **Google Play Console** | Testversies bij testgebruikers |
| Betalingen | **Mollie** | Nederlands, iDEAL, abonnementen (als het verdienmodel daarom vraagt) |

**Uitleg in een notendop.** Hoe een klantvraag een product wordt:

1. **Klantvraag** → intakegesprek en briefing (*wat en waarom*).
2. **Discovery** → onderzoek en scope (*wat precies, voor wie, wat niet*).
3. **Design** → prototype dat getest is met echte gebruikers (*hoe het werkt en eruitziet*).
4. **Backlog** → user stories met acceptatiecriteria (*wat "klaar" betekent*).
5. **Sprints** → elke twee weken werkende software en een demo.
6. **Bèta en lancering** → echte gebruikers, en daarna de app stores.
