import { adjective } from './../generators/adjective';
import { getRandomItemInArray } from '@autheur/operators';
import type { Generator } from '../generator';
import { adverb, determinant, noun, word } from '../generators';

export function nounPhrase(): Generator[] {
  return getRandomItemInArray([
    [determinant(), noun()],
    [determinant(), noun(), adjective()],
    [determinant(), noun(), adverb(), adjective()],
    [determinant(), noun(), adjective(), word('et'), adjective()],
  ]);
}
