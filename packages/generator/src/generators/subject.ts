import { getRandomItemInArray } from '@autheur/operators';
import type { Generator, SpacerConfig } from '../generator';

export const subject = ({ isPlural = Math.random() > 0.5, isFeminine = Math.random() > 0.5 }: { isPlural?: boolean; isFeminine?: boolean } = {}): Generator => ({
  imposeForm: true,
  generate: () => {
    return {
      form: { gender: isFeminine ? 'f' : 'm', isPlural },
      word: getRandomItemInArray(isPlural ? ['nous', 'vous', ...(isFeminine ? 'elles' : 'ils')] : ['je', 'tu', 'on', ...(isFeminine ? 'elle' : 'il')]),
    };
  },
});
