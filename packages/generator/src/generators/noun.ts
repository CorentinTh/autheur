import defu from 'defu';
import { getRandomNoun } from '@autheur/datasets';
import type { Generator } from '../generator';

export const noun = (config: { isPlural?: boolean } = {}): Generator => {
  const { isPlural } = defu(config, { isPlural: Math.random() > 0.5 });

  return {
    imposeForm: true,
    generate: () => {
      const noun = getRandomNoun();

      return {
        word: noun[isPlural ? 'plural' : 'singular'],
        form: {
          gender: noun.gender,
          isPlural,
        },
      };
    },
  };
};
