import { unscopedDeterminants } from '@autheur/datasets';
import { getRandomItemInArray, isFirstCharAVowelOrAnH } from '@autheur/operators';
import type { Generator } from '../generator';

export const determinant = (): Generator => ({
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
    const group = unscopedDeterminants[type];

    corpus.push(...group.default);
    corpus.push(...(startsWithAVowelOrAH ? group.withVowel : group.withoutVowel));

    const determinant = getRandomItemInArray(corpus);

    return {
      word: determinant,
      noSpaceAfter: determinant.endsWith("'"),
    };
  },
});
