import { mergeDeterminantMap } from '../determinants.model';

export type DeterminantMap = {
  [k in 'masculin' | 'feminin' | 'plural']: {
    [k in 'withVowel' | 'withoutVowel' | 'default']: string[];
  };
};

export type DeterminantType = 'defined' | 'undefined' | 'possessive' | 'demonstrative';

export const determinants: { [k in DeterminantType]: DeterminantMap } = {
  defined: {
    masculin: {
      withVowel: ["l'"],
      withoutVowel: ['le'],
      default: [],
    },
    feminin: {
      withVowel: ["l'"],
      withoutVowel: ['la'],
      default: [],
    },
    plural: {
      withVowel: [],
      withoutVowel: [],
      default: ['les'],
    },
  },
  undefined: {
    masculin: {
      withVowel: [],
      withoutVowel: [],
      default: ['un'],
    },
    feminin: {
      withVowel: [],
      withoutVowel: [],
      default: ['une'],
    },
    plural: {
      withVowel: [],
      withoutVowel: [],
      default: ['des'],
    },
  },
  possessive: {
    masculin: {
      withVowel: [],
      withoutVowel: [],
      default: ['mon', 'ton', 'son', 'notre', 'votre', 'leur'],
    },
    feminin: {
      withVowel: ['mon', 'ton', 'son'],
      withoutVowel: ['ma', 'ta', 'sa'],
      default: ['notre', 'votre', 'leur'],
    },
    plural: {
      withVowel: [],
      withoutVowel: [],
      default: ['mes', 'tes', 'ses', 'nos', 'vos', 'leurs'],
    },
  },
  demonstrative: {
    masculin: {
      withVowel: ['cet'],
      withoutVowel: ['ce'],
      default: [],
    },
    feminin: {
      withVowel: [],
      withoutVowel: [],
      default: ['cette'],
    },
    plural: {
      withVowel: [],
      withoutVowel: [],
      default: ['ces'],
    },
  },
};

export const unscopedDeterminants = Object.values(determinants).reduce(mergeDeterminantMap, undefined)!;
