import { adjective } from './../generators/adjective';
import { getRandomItemInArray } from '@autheur/operators';
import type { Generator } from '../generator';
import { adverb, determinant, noun, oneOf, word } from '../generators';

export function nounPhrase(): Generator[] {
  return getRandomItemInArray([
    [determinant(), noun(), adjective()],
    [determinant(), adjective(), noun()],
    [determinant(), adjective(), noun(), adverb(), adjective()],
    [determinant(), noun(), adverb(), adjective()],
  ]);
}
