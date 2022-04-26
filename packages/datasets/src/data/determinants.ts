type DeterminantMap = {
  [k in 'masculin' | 'feminin' | 'plural']: {
    [k in 'withVowel' | 'withoutVowel' | 'default']: string[];
  };
};

export const determinants: { [k: string]: DeterminantMap } = {
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

export const unscopedDeterminants = Object.values(determinants).reduce(
  (acc: DeterminantMap, v: DeterminantMap) => {
    for (const [gender, types] of Object.entries(v)) {
      for (const [type, arr] of Object.entries(types)) {
        acc[gender as 'masculin' | 'feminin' | 'plural'][type as 'withVowel' | 'withoutVowel' | 'default'].push(...arr);
      }
    }

    return acc;
  },
  {
    masculin: {
      withVowel: [],
      withoutVowel: [],
      default: [],
    },
    feminin: {
      withVowel: [],
      withoutVowel: [],
      default: [],
    },
    plural: {
      withVowel: [],
      withoutVowel: [],
      default: [],
    },
  }
);
