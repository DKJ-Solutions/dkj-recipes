type Ingredient = { naam: string; hoeveelheid?: number; eenheid?: string };

const nl = new Intl.NumberFormat('nl-NL', { maximumFractionDigits: 2 });

/** "400 g penne", "2 uien", "zout en peper". */
export function formatIngredient(i: Ingredient): string {
  const parts: string[] = [];
  if (i.hoeveelheid !== undefined) parts.push(nl.format(i.hoeveelheid));
  if (i.eenheid) parts.push(i.eenheid);
  parts.push(i.naam);
  return parts.join(' ');
}

/** Kleine letters en zonder accenten, zodat "creme" ook "crème" vindt. */
export function searchKey(...values: string[]): string {
  return values
    .join(' ')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();
}
