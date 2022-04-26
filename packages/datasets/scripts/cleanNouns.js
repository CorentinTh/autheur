const { nouns } = require('../dist');
const { pluralize } = require('@autheur/operators');

const duplicate = (comparator) => (v, i, a) => a.findIndex((v2) => comparator(v, v2)) === i;

const cleanedNouns = nouns
  .map(([singular, gender, plural]) => [singular, gender, ...(plural && pluralize(singular) !== plural ? [plural] : [])])
  .sort(([a], [b]) => a.localeCompare(b))
  .filter(duplicate(([a], [b]) => a === b));

console.log(JSON.stringify(cleanedNouns));
