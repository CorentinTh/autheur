# autheur

[![CI](https://github.com/CorentinTh/autheur/actions/workflows/ci.yml/badge.svg)](https://github.com/CorentinTh/autheur/actions/workflows/ci.yml)

> Random french sentence generator

## Installation

Install using your favorite dependency manager.

**NPM**

```bash
npm install @autheur/generator
```

**PNPM**

```bash
pnpm install @autheur/generator
```

**Yarn**

```bash
yarn add @autheur/generator
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

### `subject`

Generate an subject to be used with a verb.

```typescript
import { generate, subject } from '@autheur/generator';

generate([subject()]); // je
```

You can specify the gender and/or the plurality

```typescript
import { generate, subject } from '@autheur/generator';

generate([subject({ isPlural: true })]); // nous, vous, ils, elles
generate([subject({ isPlural: false })]); // je, tu, il, elle, on

generate([subject({ isFeminine: true })]); // je, tu, on, elle, nous, vous, elles
generate([subject({ isFeminine: false })]); // je, tu, on, il, nous, vous, ils

generate([subject({ isFeminine: false, isPlural: false })]); // je, tu, on, elle
```

### `oneOf`

Get a random word/sentence from a list that you specify.

```typescript
import { generate, oneOf } from '@autheur/generator';

generate([oneOf(['foobar', 'yolo'])]); // yolo
```

## Packages

This is a monorepo with the following packages:

| Package                                       | Description                                                  |
| --------------------------------------------- | ------------------------------------------------------------ |
| [`@autheur/dataset`](./packages/datasets/)    | Dataset of sorted french words broke down by categories      |
| [`@autheur/generator`](./packages/generator/) | The generator itself with they logic                         |
| [`@autheur/operators`](./packages/operators/) | Utilities to manipulate words (ex: pluralize, feminize, ...) |

## Credits

Coded with ❤️ by [Corentin Thomasset](//corentin-thomasset.fr).

## License

This project is under the [MIT license](LICENSE).
