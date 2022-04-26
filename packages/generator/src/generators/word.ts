import type { Generator, SpacerConfig } from '../generator';

export const word = (word: string, { noSpaceAfter, noSpaceBefore }: Partial<SpacerConfig> = {}): Generator => ({
  imposeForm: false,
  generate: () => ({ word, noSpaceAfter, noSpaceBefore }),
});
