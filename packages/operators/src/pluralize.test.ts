import { transformers, pluralize } from './pluralize';
import { describe, it, expect } from 'vitest';

describe('transformers', () => {
  describe('ending matcher should pluralize word according to their ending', () => {
    it('word ending with "x" should stay with an "x"', () => {
      const { transformer } = transformers.find(({ endingPattern }) => endingPattern === 'x')!;

      expect(transformer('heureux')).toEqual('heureux');
      expect(transformer('valeureux')).toEqual('valeureux');
    });

    it('word ending with "s" should stay with an "s"', () => {
      const { transformer } = transformers.find(({ endingPattern }) => endingPattern === 's')!;

      expect(transformer('temps')).toEqual('temps');
      expect(transformer('tas')).toEqual('tas');
    });

    it('word ending with "au" should be pluralized with "aux"', () => {
      const { transformer } = transformers.find(({ endingPattern }) => endingPattern === 'au')!;

      expect(transformer('nouveau')).toEqual('nouveaux');
      expect(transformer('beau')).toEqual('beaux');
    });

    it('word ending with "al" should be pluralized with "aux"', () => {
      const { transformer } = transformers.find(({ endingPattern }) => endingPattern === 'al')!;

      expect(transformer('original')).toEqual('originaux');
      expect(transformer('amical')).toEqual('amicaux');
    });

    it('default handler should add an s', () => {
      const { transformer } = transformers.find(({ endingPattern }) => endingPattern === '')!;

      expect(transformer('rapide')).toEqual('rapides');
      expect(transformer('gentil')).toEqual('gentils');
    });
  });
});

describe('pluralize', () => {
  describe('when the input word has uppercase characters', () => {
    it('should return the word pluralized and lowercased', () => {
      expect(pluralize('rapide')).toEqual('rapides');
      expect(pluralize('RAPIDES')).toEqual('rapides');
      expect(pluralize('RaPiDe')).toEqual('rapides');
      expect(pluralize('RaPidE')).toEqual('rapides');
    });
  });
  describe('when words with different endings', () => {
    it('should return the word properly pluralized', () => {
      expect(pluralize('heureux')).toEqual('heureux');
      expect(pluralize('tas')).toEqual('tas');
      expect(pluralize('nouveau')).toEqual('nouveaux');
      expect(pluralize('amical')).toEqual('amicaux');
      expect(pluralize('gentil')).toEqual('gentils');
    });
  });
});
