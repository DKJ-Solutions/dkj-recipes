import { roundAmount, searchKey } from './format';

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
