const { adjectives } = require('..');
const { pluralize, feminize } = require('@autheur/operators');
const { inspect } = require('util');

const duplicate = (comparator) => (v, i, a) => a.findIndex((v2) => comparator(v, v2)) === i;

const cleanedAdjectives = adjectives
  .map(([ms, mp, fs, fp]) => {
    const array = [ms];

    if (mp && pluralize(ms) !== mp) array[1] = mp;
    if (fs && feminize(ms) !== fs) array[2] = fs;
    if (fp && pluralize(fs ?? feminize(ms)) !== fp) array[3] = fp;

    return array;
  })
  .sort(([a], [b]) => a.localeCompare(b))
  .filter(duplicate(([a], [b]) => a === b));

console.log(inspect(cleanedAdjectives, { depth: null }));
