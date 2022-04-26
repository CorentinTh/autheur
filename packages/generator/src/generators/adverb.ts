import { getRandomAdverbe } from '@autheur/datasets';
import type { Generator } from '../generator';

export const adverb = (): Generator => ({
  imposeForm: false,
  generate: () => ({ word: getRandomAdverbe() }),
});
