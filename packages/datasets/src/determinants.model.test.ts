import { DeterminantMap } from './data/determinants';
import { describe, it, expect } from 'vitest';
import { mergeDeterminantMap } from './determinants.model';

describe('mergeDeterminantMap', () => {
  describe('when the arguments are two determinants maps with distinct keys', () => {
    it('should return a determinant map with the determinants merged', () => {
      const a: DeterminantMap = {
        feminin: {
          default: ['a'],
          withVowel: ['b'],
          withoutVowel: ['c'],
        },
        masculin: {
          default: ['d'],
          withVowel: ['e'],
          withoutVowel: ['f'],
        },
        plural: {
          default: ['g'],
          withVowel: ['h'],
          withoutVowel: ['i'],
        },
      };

      const b: DeterminantMap = {
        feminin: {
          default: ['j'],
          withVowel: ['k'],
          withoutVowel: ['l'],
        },
        masculin: {
          default: ['m'],
          withVowel: ['n'],
          withoutVowel: ['o'],
        },
        plural: {
          default: ['p'],
          withVowel: ['q'],
          withoutVowel: ['r'],
        },
      };

      expect(mergeDeterminantMap(a, b)).toEqual({
        feminin: {
          default: ['a', 'j'],
          withVowel: ['b', 'k'],
          withoutVowel: ['c', 'l'],
        },
        masculin: {
          default: ['d', 'm'],
          withVowel: ['e', 'n'],
          withoutVowel: ['f', 'o'],
        },
        plural: {
          default: ['g', 'p'],
          withVowel: ['h', 'q'],
          withoutVowel: ['i', 'r'],
        },
      });
    });
  });

  describe('when the arguments are two determinants maps with same keys', () => {
    it('should return a determinant map with the determinants deduplicated', () => {
      const a: DeterminantMap = {
        feminin: {
          default: ['a'],
          withVowel: ['b'],
          withoutVowel: ['c'],
        },
        masculin: {
          default: ['d'],
          withVowel: ['e'],
          withoutVowel: ['f'],
        },
        plural: {
          default: ['g'],
          withVowel: ['h'],
          withoutVowel: ['i'],
        },
      };

      const b: DeterminantMap = {
        feminin: {
          default: ['a'],
          withVowel: ['k'],
          withoutVowel: ['l'],
        },
        masculin: {
          default: ['m'],
          withVowel: ['e'],
          withoutVowel: ['o'],
        },
        plural: {
          default: ['p'],
          withVowel: ['q'],
          withoutVowel: ['i'],
        },
      };

      expect(mergeDeterminantMap(a, b)).toEqual({
        feminin: {
          default: ['a'],
          withVowel: ['b', 'k'],
          withoutVowel: ['c', 'l'],
        },
        masculin: {
          default: ['d', 'm'],
          withVowel: ['e'],
          withoutVowel: ['f', 'o'],
        },
        plural: {
          default: ['g', 'p'],
          withVowel: ['h', 'q'],
          withoutVowel: ['i'],
        },
      });
    });
  });

  describe('when the first map is undefined', () => {
    it('should return the second map', () => {
      const a: DeterminantMap = {
        feminin: {
          default: ['a'],
          withVowel: ['b'],
          withoutVowel: ['c'],
        },
        masculin: {
          default: ['d'],
          withVowel: ['e'],
          withoutVowel: ['f'],
        },
        plural: {
          default: ['g'],
          withVowel: ['h'],
          withoutVowel: ['i'],
        },
      };

      expect(mergeDeterminantMap(a, undefined)).toEqual({
        feminin: {
          default: ['a'],
          withVowel: ['b'],
          withoutVowel: ['c'],
        },
        masculin: {
          default: ['d'],
          withVowel: ['e'],
          withoutVowel: ['f'],
        },
        plural: {
          default: ['g'],
          withVowel: ['h'],
          withoutVowel: ['i'],
        },
      });
    });
  });

  describe('when the second map is undefined', () => {
    it('should return the first map', () => {
      const a: DeterminantMap = {
        feminin: {
          default: ['a'],
          withVowel: ['b'],
          withoutVowel: ['c'],
        },
        masculin: {
          default: ['d'],
          withVowel: ['e'],
          withoutVowel: ['f'],
        },
        plural: {
          default: ['g'],
          withVowel: ['h'],
          withoutVowel: ['i'],
        },
      };

      expect(mergeDeterminantMap(undefined, a)).toEqual({
        feminin: {
          default: ['a'],
          withVowel: ['b'],
          withoutVowel: ['c'],
        },
        masculin: {
          default: ['d'],
          withVowel: ['e'],
          withoutVowel: ['f'],
        },
        plural: {
          default: ['g'],
          withVowel: ['h'],
          withoutVowel: ['i'],
        },
      });
    });
  });
});
