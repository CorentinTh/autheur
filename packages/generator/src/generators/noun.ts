import { getRandomNoun } from '@autheur/datasets';
import type { Generator } from '../generator';

export const noun = (config?: { isPlural?: boolean }): Generator => ({
  imposeForm: true,
  generate: () => {
    const { isPlural } = Object.assign({}, config, { isPlural: Math.random() > 0.5 });
    const noun = getRandomNoun();

    return {
      word: noun[isPlural ? 'plural' : 'singular'],
      form: {
        gender: noun.gender,
        isPlural,
      },
    };
  },
});
