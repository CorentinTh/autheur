import { getRandomItemInArray } from '@autheur/operators';
import type { Generator } from '../generator';

export const oneOf = (words: string[]): Generator => ({
  imposeForm: false,
  generate: () => ({ word: getRandomItemInArray(words) }),
});
