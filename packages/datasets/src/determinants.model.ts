import type { DeterminantMap } from './data/determinants';

export function mergeDeterminantMap(map1?: DeterminantMap, map2?: DeterminantMap): DeterminantMap {
  const acc: DeterminantMap = {
    masculin: {
      withVowel: [],
      withoutVowel: [],
      default: [],
    },
    feminin: {
      withVowel: [],
      withoutVowel: [],
      default: [],
    },
    plural: {
      withVowel: [],
      withoutVowel: [],
      default: [],
    },
  };

  for (const gender of ['masculin', 'feminin', 'plural'] as const) {
    for (const type of ['withVowel', 'withoutVowel', 'default'] as const) {
      const uniqueDeterminants = [...new Set([...(map1?.[gender][type] ?? []), ...(map2?.[gender][type] ?? [])])];
      acc[gender][type].push(...uniqueDeterminants);
    }
  }

  return acc;
}
