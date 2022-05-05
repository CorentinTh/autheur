# @autheur/generator

Random french sentence generator

## Installation

```
npm i @autheur/generator
```

## Usage

The core function is `generate`: it permits to generate a sentence given a pattern

```typescript
import { generate, determinant, noun, adverb, adjective } from '@autheur/generator';

const sentence = generate([determinant(), noun(), adverb(), adjective()]);

console.log(sentence);
// leurs taille-crayons à demi alourdis
```

## Generators

A generator permits to define a portion of the sentence

### `determinant`

Generate a determinant (_un_, _une_, _le_, _les_, _cette_, ...)

```typescript
import { generate, determinant } from '@autheur/generator';

generate([determinant()]); // mon
```

You can specify which types of determinant you want between **undefined**, **defined**, **possessive**, **demonstrative**

```typescript
import { generate, determinant } from '@autheur/generator';

generate([determinant({ types: ['possessive'] })]); // notre
```

### `noun`

Generate a noun.

- the noun generated will impose its form (gender + plurality) to the rest of the sentence.
- by default the plurality is randomly chosen

```typescript
import { generate, noun } from '@autheur/generator';

generate([noun()]); // allumette
```

You can force the plurality with a parameter

```typescript
import { generate, determinant } from '@autheur/generator';

generate([noun({ isPlural: true })]); // animaux
generate([noun({ isPlural: false })]); // ampoule
```

### `comma`

Generate a comma.

```typescript
import { generate, comma } from '@autheur/generator';

generate([comma()]); // ,
```

### `adverb`

Generate an adverb.

```typescript
import { generate, adverb } from '@autheur/generator';

generate([adverb()]); // suffisamment
```

### `word`

Generate an word that you specify.

```typescript
import { generate, word } from '@autheur/generator';

generate([word('foobar')]); // foobar
```

You can specify if your word is preceded or followed by a space if their is another word

```typescript
import { generate, word } from '@autheur/generator';

generate([word("l'", { noSpaceAfter: true }), word('arbre')]); // l'arbre
generate([word("l'"), word('arbre', { noSpaceBefore: true })]); // l'arbre
```

### `oneOf`

Get a random word/sentence from a list that you specify.

```typescript
import { generate, oneOf } from '@autheur/generator';

generate([oneOf(['foobar', 'yolo'])]); // yolo
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
