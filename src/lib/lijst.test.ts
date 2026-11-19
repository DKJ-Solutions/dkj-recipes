import { beforeEach, describe, test } from 'node:test';
import assert from 'node:assert/strict';
import { addEigen, clearEigen, loadEigen, removeEigen, resetEigenVoorTest } from './lijst.ts';

// Node heeft geen localStorage; deze nep-opslag gedraagt zich zoals de browser, of weigert alles.
function nepOpslag(werkt = true) {
  const data = new Map<string, string>();
  const weiger = () => {
    throw new Error('geen opslag');
  };
  (globalThis as { localStorage?: unknown }).localStorage = {
    getItem: (k: string) => (werkt ? (data.get(k) ?? null) : weiger()),
    setItem: (k: string, v: string) => (werkt ? void data.set(k, v) : weiger()),
    removeItem: (k: string) => (werkt ? void data.delete(k) : weiger()),
  };
  return data;
}

describe('eigen items', () => {
  beforeEach(() => resetEigenVoorTest());

  test('een toegevoegd item wordt bewaard en weer geladen', () => {
    const data = nepOpslag();
    const item = addEigen('wc-papier');
    assert.ok(item);
    assert.deepEqual(loadEigen(), [item]);
    assert.deepEqual(JSON.parse(data.get('eigen:lijst')!), [item]);
  });

  test('tekst wordt getrimd en verder precies bewaard zoals getypt', () => {
    nepOpslag();
    assert.equal(addEigen('  Wc-Papier  (8 rol) ')?.naam, 'Wc-Papier  (8 rol)');
  });

  test('lege invoer of alleen spaties voegt niets toe', () => {
    const data = nepOpslag();
    assert.equal(addEigen(''), undefined);
    assert.equal(addEigen('   \t\n'), undefined);
    assert.deepEqual(loadEigen(), []);
    assert.equal(data.size, 0);
  });

  test('elk item heeft een eigen, vaste sleutel die niet op een ingrediënt kan landen', () => {
    nepOpslag();
    const a = addEigen('melk')!;
    const b = addEigen('melk')!;
    assert.notEqual(a.key, b.key);
    assert.match(a.key, /^eigen:[^|]+$/);
    assert.deepEqual(loadEigen().map((i) => i.key), [a.key, b.key]);
  });

  test('verwijderen haalt alleen dat item weg', () => {
    nepOpslag();
    const a = addEigen('melk')!;
    const b = addEigen('brood')!;
    removeEigen(a.key);
    assert.deepEqual(loadEigen(), [b]);
  });

  test('leegmaken haalt alles weg, ook uit de opslag', () => {
    const data = nepOpslag();
    addEigen('melk');
    addEigen('brood');
    clearEigen();
    assert.deepEqual(loadEigen(), []);
    assert.equal(data.has('eigen:lijst'), false);
  });

  test('rommel in de opslag geeft een lege lijst, geen fout', () => {
    const data = nepOpslag();
    data.set('eigen:lijst', '{kapot');
    assert.deepEqual(loadEigen(), []);
  });

  test('zonder opslag werkt toevoegen tot de pagina sluit', () => {
    nepOpslag(false);
    const a = addEigen('melk')!;
    const b = addEigen('brood')!;
    assert.deepEqual(loadEigen(), [a, b]);
    removeEigen(a.key);
    assert.deepEqual(loadEigen(), [b]);
  });
});
