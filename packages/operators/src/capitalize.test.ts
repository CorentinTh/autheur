import { capitalize } from './capitalize';
import { describe, it, expect } from 'vitest';

describe('capitalize', () => {
  describe('when the input is a correct string with characters', () => {
    it('should return the string with the first char uppercase', () => {
      expect(capitalize('foo')).toEqual('Foo');
      expect(capitalize('Foo')).toEqual('Foo');
      expect(capitalize('FOO')).toEqual('FOO');
      expect(capitalize('ééé')).toEqual('Ééé');
    });
  });

  describe('when the input is a non-word argument', () => {
    it('should return the string with the first char uppercase', () => {
      expect(capitalize('')).toEqual('');
      expect(capitalize()).toEqual('');
      expect(capitalize('---')).toEqual('---');
      expect(capitalize('123')).toEqual('123');
      expect(capitalize(']]')).toEqual(']]');
    });
  });
});
