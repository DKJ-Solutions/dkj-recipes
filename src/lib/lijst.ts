// Met de extensie, zodat `npm test` dit bestand zonder bundler in Node kan laden.
import { roundAmount, searchKey } from './format.ts';

type Ingredient = { naam: string; hoeveelheid?: number; eenheid?: string; afdeling?: string };
/** `factor` is het gekozen aantal porties gedeeld door het aantal in het recept. */
export type Recipe = { id: string; titel: string; ingredienten: Ingredient[]; factor?: number };
export type Merged = Ingredient & { key: string; recepten: string[] };

// De boodschappenlijst bewaart alleen welke recepten erop staan, op dit toestel.
const KEY = 'lijst';

export function loadList(): string[] {
  try {
    const ids = JSON.parse(localStorage.getItem(KEY) ?? '[]');
    return Array.isArray(ids) ? ids.filter((id) => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

export function saveList(ids: string[]) {
  try {
    if (ids.length) localStorage.setItem(KEY, JSON.stringify(ids));
    else localStorage.removeItem(KEY);
  } catch {
    /* geen opslag beschikbaar: de lijst geldt dan alleen tot de pagina sluit */
  }
}

// Eigen items: wat je zelf op de lijst typt ("wc-papier"), los van de recepten, op dit toestel.
// Elk item heeft een vaste `key` die met `eigen:` begint; de sleutel van een receptingrediënt bevat
// altijd een `|`, dus een vinkje voor een eigen item kan nooit op een ingrediënt landen.
export type EigenItem = { key: string; naam: string };
const EIGEN_KEY = 'eigen:lijst';

// Zonder opslag (privévenster, geblokkeerde site-data) leeft de lijst in het geheugen tot de pagina sluit.
let opslag = true;
let geheugen: EigenItem[] = [];

const isEigenItem = (i: unknown): i is EigenItem =>
  typeof i === 'object' && i !== null && typeof (i as EigenItem).key === 'string' && typeof (i as EigenItem).naam === 'string';

export function loadEigen(): EigenItem[] {
  if (!opslag) return [...geheugen];
  let ruw: string | null;
  try {
    ruw = localStorage.getItem(EIGEN_KEY);
  } catch {
    opslag = false;
    return [...geheugen];
  }
  try {
    const items = JSON.parse(ruw ?? '[]');
    return Array.isArray(items) ? items.filter(isEigenItem) : [];
  } catch {
    return []; // rommel in de opslag: een lege lijst, de opslag zelf werkt nog
  }
}

export function saveEigen(items: EigenItem[]) {
  geheugen = [...items];
  if (!opslag) return;
  try {
    if (items.length) localStorage.setItem(EIGEN_KEY, JSON.stringify(items));
    else localStorage.removeItem(EIGEN_KEY);
  } catch {
    opslag = false; /* geen opslag beschikbaar: de eigen items gelden dan alleen tot de pagina sluit */
  }
}

let teller = 0;
const nieuweKey = () => `eigen:${Date.now().toString(36)}${(teller++).toString(36)}${Math.random().toString(36).slice(2, 6)}`;

/** Zet getypte tekst op de lijst, getrimd en verder precies zoals getypt. Leeg of alleen spaties: niets. */
export function addEigen(tekst: string): EigenItem | undefined {
  const naam = tekst.trim();
  if (!naam) return undefined;
  const item = { key: nieuweKey(), naam };
  saveEigen([...loadEigen(), item]);
  return item;
}

export function removeEigen(key: string) {
  saveEigen(loadEigen().filter((i) => i.key !== key));
}

export function clearEigen() {
  saveEigen([]);
}

/** Alleen voor de tests: begin weer met werkende opslag en een leeg geheugen. */
export function resetEigenVoorTest() {
  opslag = true;
  geheugen = [];
}

// Het aantal porties dat op de receptpagina is gekozen. Staat er niets, dan geldt het recept.
const portiesKey = (id: string) => `porties:${id}`;

export function loadPorties(id: string): number | undefined {
  try {
    return Number(localStorage.getItem(portiesKey(id))) || undefined;
  } catch {
    return undefined;
  }
}

export function savePorties(id: string, n: number, origineel: number) {
  try {
    if (n === origineel) localStorage.removeItem(portiesKey(id));
    else localStorage.setItem(portiesKey(id), String(n));
  } catch {
    /* geen opslag beschikbaar */
  }
}

/**
 * Voegt de ingrediënten van meerdere recepten samen: dezelfde naam met dezelfde eenheid wordt één
 * regel, met de hoeveelheden opgeteld. De volgorde is die van het eerste voorkomen. Elk recept wordt
 * eerst met zijn `factor` geschaald; er wordt pas na het optellen afgerond, zodat afrondingen zich niet
 * opstapelen.
 */
export function mergeIngredients(recipes: Recipe[]): Merged[] {
  const merged = new Map<string, Merged>();
  const scaled = new Set<string>();
  for (const r of recipes) {
    const factor = r.factor ?? 1;
    for (const i of r.ingredienten) {
      const key = `${searchKey(i.naam).trim()}|${i.eenheid ?? ''}`;
      const hoeveelheid = i.hoeveelheid === undefined ? undefined : i.hoeveelheid * factor;
      if (hoeveelheid !== undefined && factor !== 1) scaled.add(key);
      const m = merged.get(key);
      if (!m) {
        merged.set(key, { ...i, hoeveelheid, key, recepten: [r.titel] });
        continue;
      }
      if (hoeveelheid !== undefined) m.hoeveelheid = (m.hoeveelheid ?? 0) + hoeveelheid;
      m.afdeling ??= i.afdeling;
      if (!m.recepten.includes(r.titel)) m.recepten.push(r.titel);
    }
  }
  return [...merged.values()].map((m) =>
    scaled.has(m.key) && m.hoeveelheid !== undefined ? { ...m, hoeveelheid: roundAmount(m.hoeveelheid) } : m,
  );
}
