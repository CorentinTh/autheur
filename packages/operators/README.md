# @autheur/operators

Utility function to manipulate french words

## Installation

```
npm i @autheur/operators
```

## API

### `pluralize`

Pluralize regular words

```typescript
import { pluralize } from '@autheur/operators';

pluralize('arbre'); // arbres
pluralize('gateau'); // gateaux
pluralize('vitrail'); // vitraux
```

### `feminize`

Feminize regular adjectives

```typescript
import { feminize } from '@autheur/operators';

feminize('inventif'); // inventive
feminize('intelligent'); // intelligente
feminize('jeune'); // jeune
```

### `isFirstCharAVowel`

Return true if the input string start with a vowel

```typescript
import { isFirstCharAVowel } from '@autheur/operators';

isFirstCharAVowel('arbre'); // true
isFirstCharAVowel('jeune'); // false
isFirstCharAVowel('hotel'); // false
```

### `isFirstCharAVowelOrAnH`

Return true if the input string start with a vowel or a h

```typescript
import { isFirstCharAVowelOrAnH } from '@autheur/operators';

isFirstCharAVowelOrAnH('arbre'); // true
isFirstCharAVowelOrAnH('jeune'); // false
isFirstCharAVowelOrAnH('hotel'); // true
```

### `capitalize`

Return the input string with the first letter uppercased

```typescript
import { capitalize } from '@autheur/operators';

capitalize('arbre'); // Arbre
capitalize('jeune'); // Jeune
capitalize('école'); // École
```

### `getRandomItemInArray`

Return a random item from an array

```typescript
import { getRandomItemInArray } from '@autheur/operators';

getRandomItemInArray(['foo', 'bar', 'baz']); // baz
getRandomItemInArray(['foo', 'bar', 'baz']); // foo
```

## Other packages

This is a from a monorepo with the following packages:

| Package                                                                                     | Description                                                  |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| [`@autheur/dataset`](https://github.com/CorentinTh/autheur/tree/main/packages/datasets/)    | Dataset of sorted french words broke down by categories      |
| [`@autheur/generator`](https://github.com/CorentinTh/autheur/tree/main/packages/generator/) | The generator itself with they logic                         |
| [`@autheur/operators`](https://github.com/CorentinTh/autheur/tree/main/packages/operators/) | Utilities to manipulate words (ex: pluralize, feminize, ...) |

## Credits

Coded with ❤️ by [Corentin Thomasset](//corentin-thomasset.fr).

## License

This project is under the [MIT license](LICENSE).
