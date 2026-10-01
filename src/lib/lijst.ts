import { searchKey } from './format';

type Ingredient = { naam: string; hoeveelheid?: number; eenheid?: string };
export type Recipe = { id: string; titel: string; ingredienten: Ingredient[] };
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

/**
 * Voegt de ingrediënten van meerdere recepten samen: dezelfde naam met dezelfde eenheid wordt één
 * regel, met de hoeveelheden opgeteld. De volgorde is die van het eerste voorkomen.
 */
export function mergeIngredients(recipes: Recipe[]): Merged[] {
  const merged = new Map<string, Merged>();
  for (const r of recipes) {
    for (const i of r.ingredienten) {
      const key = `${searchKey(i.naam).trim()}|${i.eenheid ?? ''}`;
      const m = merged.get(key);
      if (!m) {
        merged.set(key, { ...i, key, recepten: [r.titel] });
        continue;
      }
      if (i.hoeveelheid !== undefined) m.hoeveelheid = (m.hoeveelheid ?? 0) + i.hoeveelheid;
      if (!m.recepten.includes(r.titel)) m.recepten.push(r.titel);
    }
  }
  return [...merged.values()];
}
