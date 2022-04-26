import type { Generator } from '../generator';

export const comma: Generator = {
  imposeForm: false,
  generate: () => ({ word: ',', noSpaceBefore: true }),
};
