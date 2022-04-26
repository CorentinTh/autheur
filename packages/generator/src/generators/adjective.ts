import { getRandomAdjective, Adjective } from '@autheur/datasets';
import type { Generator } from '../generator';

export const adjective = (): Generator => ({
  imposeForm: false,
  generate: ({
    subject: {
      form: { gender, isPlural },
    },
  }) => {
    const k: keyof Adjective = `${gender === 'm' ? 'masculin' : 'feminin'}${isPlural ? 'Plural' : 'Singular'}`;

    return {
      word: getRandomAdjective()[k] as string,
    };
  },
});
