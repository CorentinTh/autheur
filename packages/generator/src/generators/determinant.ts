import { determinants, DeterminantType, mergeDeterminantMap, DeterminantMap } from '@autheur/datasets';
import { getRandomItemInArray, isFirstCharAVowelOrAnH } from '@autheur/operators';
import defu from 'defu';
import type { Generator } from '../generator';

export const determinant = (config: { types?: DeterminantType[] } = {}): Generator => {
  const { types } = defu(config, { types: ['undefined', 'defined', 'possessive', 'demonstrative'] });
  const determinantsMergedByTypes = types.reduce((acc: DeterminantMap | undefined, type) => mergeDeterminantMap(acc, determinants[type as DeterminantType]), undefined);

  return {
    imposeForm: false,
    generate: ({
      subject: {
        word,
        form: { gender, isPlural },
      },
    }) => {
      const corpus: string[] = [];
      const startsWithAVowelOrAH = isFirstCharAVowelOrAnH(word);
      const type = isPlural ? 'plural' : gender === 'f' ? 'feminin' : 'masculin';
      const group = determinantsMergedByTypes?.[type] ?? { default: [], withVowel: [], withoutVowel: [] };

      corpus.push(...group.default);
      corpus.push(...(startsWithAVowelOrAH ? group.withVowel : group.withoutVowel));

      const determinant = getRandomItemInArray(corpus);

      return {
        word: determinant,
        noSpaceAfter: determinant.endsWith("'"),
      };
    },
  };
};
