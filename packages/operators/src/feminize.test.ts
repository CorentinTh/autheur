import { transformers, feminize } from './feminize';
import { describe, it, expect } from 'vitest';

describe('transformers', () => {
  describe('ending matcher should feminize word according to their ending', () => {
    it('word ending with "e" should stay with an "e"', () => {
      const { transformer } = transformers.find(({ endingPattern }) => endingPattern === 'e')!;

      expect(transformer('sincère')).toEqual('sincère');
      expect(transformer('jeune')).toEqual('jeune');
    });

    it('word ending with "x" should be pluralized with "use"', () => {
      const { transformer } = transformers.find(({ endingPattern }) => endingPattern === 'x')!;

      expect(transformer('heureux')).toEqual('heureuse');
      expect(transformer('valeureux')).toEqual('valeureuse');
    });

    it('word ending with "if" should be pluralized with "ive"', () => {
      const { transformer } = transformers.find(({ endingPattern }) => endingPattern === 'if')!;

      expect(transformer('sportif')).toEqual('sportive');
      expect(transformer('inventif')).toEqual('inventive');
    });

    it('default handler should add an e', () => {
      const { transformer } = transformers.find(({ endingPattern }) => endingPattern === '')!;

      expect(transformer('passionné')).toEqual('passionnée');
      expect(transformer('intelligent')).toEqual('intelligente');
    });
  });
});

describe('feminize', () => {
  describe('when the input word has uppercase characters', () => {
    it('should return the word pluralized and lowercased', () => {
      expect(feminize('intelligent')).toEqual('intelligente');
      expect(feminize('INTELLIGENT')).toEqual('intelligente');
      expect(feminize('inTellIgeNt')).toEqual('intelligente');
      expect(feminize('intelLigeNT')).toEqual('intelligente');
    });
  });
  describe('when words with different endings', () => {
    it('should return the word properly pluralized', () => {
      expect(feminize('passionné')).toEqual('passionnée');
      expect(feminize('inventif')).toEqual('inventive');
      expect(feminize('sincère')).toEqual('sincère');
    });
  });
});
