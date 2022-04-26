import { getDeburredFirstCharacter, isFirstCharAVowel, isFirstCharAVowelOrAnH } from './vowels';
import { describe, it, expect } from 'vitest';

describe('getDeburredFirstCharacter', () => {
  describe('when the first character has diacritics', () => {
    it('should return the clean version', () => {
      expect(getDeburredFirstCharacter('école')).toEqual('e');
      expect(getDeburredFirstCharacter('àaa')).toEqual('a');
      expect(getDeburredFirstCharacter('êee')).toEqual('e');
      expect(getDeburredFirstCharacter('ëaa')).toEqual('e');
      expect(getDeburredFirstCharacter('ça')).toEqual('c');
      expect(getDeburredFirstCharacter('œuf')).toEqual('o');
    });
  });

  describe('when the first character is uppercase', () => {
    it('should return the lowercase first character', () => {
      expect(getDeburredFirstCharacter('MAISON')).toEqual('m');
      expect(getDeburredFirstCharacter('ARBRE')).toEqual('a');
      expect(getDeburredFirstCharacter('ÉÉ')).toEqual('e');
    });
  });
});

describe('isFirstCharAVowelOrAnH', () => {
  describe('when the first character is a vowel or a h', () => {
    it('should return true', () => {
      expect(isFirstCharAVowelOrAnH('arbre')).toEqual(true);
      expect(isFirstCharAVowelOrAnH('école')).toEqual(true);
      expect(isFirstCharAVowelOrAnH('œuf')).toEqual(true);
      expect(isFirstCharAVowelOrAnH('immense')).toEqual(true);
      expect(isFirstCharAVowelOrAnH('ordre')).toEqual(true);
      expect(isFirstCharAVowelOrAnH('utile')).toEqual(true);
      expect(isFirstCharAVowelOrAnH('yach')).toEqual(true);
      expect(isFirstCharAVowelOrAnH('hotel')).toEqual(true);
    });
  });

  describe('when the first character is not a vowel', () => {
    it('should return false', () => {
      expect(isFirstCharAVowelOrAnH('maison')).toEqual(false);
      expect(isFirstCharAVowelOrAnH('bateau')).toEqual(false);
      expect(isFirstCharAVowelOrAnH('koala')).toEqual(false);
      expect(isFirstCharAVowelOrAnH('litre')).toEqual(false);
    });
  });

  describe('when the first character is not a letter', () => {
    it('should return false', () => {
      expect(isFirstCharAVowelOrAnH('')).toEqual(false);
      expect(isFirstCharAVowelOrAnH('  ')).toEqual(false);
      expect(isFirstCharAVowelOrAnH('--')).toEqual(false);
      expect(isFirstCharAVowelOrAnH('^^')).toEqual(false);
      expect(isFirstCharAVowelOrAnH('~')).toEqual(false);
      expect(isFirstCharAVowelOrAnH()).toEqual(false);
      expect(isFirstCharAVowelOrAnH(undefined)).toEqual(false);
    });
  });
});

describe('isFirstCharAVowel', () => {
  describe('when the first character is a vowel', () => {
    it('should return true', () => {
      expect(isFirstCharAVowel('arbre')).toEqual(true);
      expect(isFirstCharAVowel('école')).toEqual(true);
      expect(isFirstCharAVowel('œuf')).toEqual(true);
      expect(isFirstCharAVowel('immense')).toEqual(true);
      expect(isFirstCharAVowel('ordre')).toEqual(true);
      expect(isFirstCharAVowel('utile')).toEqual(true);
      expect(isFirstCharAVowel('yach')).toEqual(true);
    });
  });

  describe('when the first character is not a vowel', () => {
    it('should return false', () => {
      expect(isFirstCharAVowel('hotel')).toEqual(false);
      expect(isFirstCharAVowel('maison')).toEqual(false);
      expect(isFirstCharAVowel('bateau')).toEqual(false);
      expect(isFirstCharAVowel('koala')).toEqual(false);
      expect(isFirstCharAVowel('litre')).toEqual(false);
    });
  });

  describe('when the first character is not a letter', () => {
    it('should return false', () => {
      expect(isFirstCharAVowel('')).toEqual(false);
      expect(isFirstCharAVowel('  ')).toEqual(false);
      expect(isFirstCharAVowel('--')).toEqual(false);
      expect(isFirstCharAVowel('^^')).toEqual(false);
      expect(isFirstCharAVowel('~')).toEqual(false);
      expect(isFirstCharAVowel()).toEqual(false);
      expect(isFirstCharAVowel(undefined)).toEqual(false);
    });
  });
});
