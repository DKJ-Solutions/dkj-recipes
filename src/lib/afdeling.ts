// De afdelingen in de volgorde waarin je ze in een gemiddelde supermarkt tegenkomt. Een afdeling die
// hier niet staat, komt daarna (op alfabet); een ingrediënt zonder afdeling komt onder "Overig".
const ORDER = [
  'groente',
  'fruit',
  'brood',
  'vlees',
  'vis',
  'vega',
  'zuivel',
  'kaas',
  'eieren',
  'houdbaar',
  'kruiden',
  'wereldkeuken',
  'diepvries',
  'dranken',
];
const OVERIG = 'overig';

export type Group<T> = { afdeling: string; titel: string; items: T[] };

const rank = (a: string) => (a === OVERIG ? Infinity : ORDER.indexOf(a) === -1 ? ORDER.length : ORDER.indexOf(a));

/**
 * Groepeert ingrediënten per afdeling. Heeft geen enkel ingrediënt een afdeling, dan is er één groep
 * zonder titel: groeperen voegt dan niets toe.
 */
export function groupByAfdeling<T extends { afdeling?: string }>(items: T[]): Group<T>[] {
  if (!items.some((i) => i.afdeling)) return [{ afdeling: '', titel: '', items }];
  const groups = new Map<string, T[]>();
  for (const i of items) {
    const a = i.afdeling?.trim().toLowerCase() || OVERIG;
    groups.set(a, [...(groups.get(a) ?? []), i]);
  }
  return [...groups.entries()]
    .sort(([a], [b]) => rank(a) - rank(b) || a.localeCompare(b, 'nl'))
    .map(([afdeling, items]) => ({
      afdeling,
      titel: afdeling.charAt(0).toUpperCase() + afdeling.slice(1),
      items,
    }));
}
