import { pluralize, feminize, getRandomItemInArray } from '@autheur/operators';
import { nouns } from './data/noms';
import { adjectives } from './data/adjectifs';
import { adverbs } from './data/adverbes';

export * from './data/determinants';
export { mergeDeterminantMap } from './determinants.model';
export { Noun, Adjective, Gender };
export { nouns, adjectives, getRandomAdjective, getRandomNoun, adverbs, getRandomAdverbe };

type Gender = 'f' | 'm' | 'u';

type Noun = {
  singular: string;
  gender: Gender;
  plural: string;
};

type Adjective = {
  masculinSingular: string;
  masculinPlural: string | undefined;
  femininSingular: string | undefined;
  femininPlural: string | undefined;
};

const getRandomNoun = (): Noun => {
  const [singular, gender, plural] = getRandomItemInArray(nouns);
  return {
    singular,
    gender: gender as Gender,
    plural: plural ?? pluralize(singular),
  };
};

const getRandomAdjective = (): Adjective => {
  const [radical, masculinPlural, femininSingular, femininPlural] = getRandomItemInArray(adjectives);

  return {
    masculinSingular: radical!,
    masculinPlural: masculinPlural ?? pluralize(radical!),
    femininSingular: femininSingular ?? feminize(radical!),
    femininPlural: femininPlural ?? pluralize(femininSingular ?? feminize(radical!)),
  };
};

const getRandomAdverbe = (): string => getRandomItemInArray(adverbs);
