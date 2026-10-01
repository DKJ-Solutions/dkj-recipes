type Ingredient = { naam: string; hoeveelheid?: number; eenheid?: string };

const nl = new Intl.NumberFormat('nl-NL', { maximumFractionDigits: 2 });

/**
 * Een geschaalde hoeveelheid, afgerond op wat je in de winkel kunt pakken: vanaf 10 op hele getallen
 * (300 g, niet 299,25 g), daaronder op kwarten (1,5 ui, 0,75 potje). Nooit afgerond naar 0.
 */
export function scaleAmount(n: number, factor: number): number {
  const v = n * factor;
  if (factor === 1) return v;
  if (v >= 10) return Math.round(v);
  return Math.max(0.25, Math.round(v * 4) / 4);
}

/** "400 g penne", "2 uien", "zout en peper"; met `factor` geschaald naar een ander aantal porties. */
export function formatIngredient(i: Ingredient, factor = 1): string {
  const parts: string[] = [];
  if (i.hoeveelheid !== undefined) parts.push(nl.format(scaleAmount(i.hoeveelheid, factor)));
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
