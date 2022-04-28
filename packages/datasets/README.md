# @autheur/datasets

French word datasets and getters

## Installation

```
npm i @autheur/datasets
```

## Usage

### `getRandomNoun`

```typescript
import { getRandomNoun } from '@autheur/datasets';

const noun = getRandomNoun();
// {
//     singular: 'animal',
//     gender: 'm',
//     plural: 'animaux'
// }
```

### `getRandomAdjective`

```typescript
import { getRandomAdjective } from '@autheur/datasets';

const adjective = getRandomAdjective();
// {
//     femininSingular: 'blanche',
//     femininPlural: 'blanches',
//     masculinSingular: 'blanc',
//     masculinPlural: 'blancs',
// }
```

### `getRandomAdverbe`

```typescript
import { getRandomAdverbe } from '@autheur/datasets';

const adjective = getRandomAdverbe();
// finallement
```

### `determinants`

See [determinants.ts](https://github.com/CorentinTh/autheur/blob/main/packages/datasets/src/data/determinants.ts).

```typescript
import { determinants } from '@autheur/datasets';
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
