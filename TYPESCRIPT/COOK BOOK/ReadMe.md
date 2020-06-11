# TypeScript Cookbook

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [TypeScript Cookbook](#typescript-cookbook)
  - [Other Ressources](#other-ressources)
  - [Initialize TS](#initialize-ts)
  - [Compiler Options](#compiler-options)
    - [Some Checks](#some-checks)
  - [Use same name for Class and Interface](#use-same-name-for-class-and-interface)
  - [Mixin Classes](#mixin-classes)
  - [Type Definitions](#type-definitions)
    - [Extending Types](#extending-types)
      - [Old Method](#old-method)
      - [New Method (TS ^2.2)](#new-method-ts-22)
    - [An Array of a certain type at least with e.g. 2 elements](#an-array-of-a-certain-type-at-least-with-eg-2-elements)
    - [Same Type of Elements](#same-type-of-elements)

<!-- /code_chunk_output -->

## Other Ressources

- [Release Notes - Overview](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html)
- [Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
- [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## Initialize TS

```bash
tsc --init
```

## Show (Effective) Configuration

```bash
tsc --showConfig
```

## Compiler Options

### Some Checks

```json
{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

## Use same name for Class and Interface

You don't have to repeat prop-names within the class:

```javascript
interface SomeClass {
  propOne: string;
  propTwo: number;
}

class SomeClass {
  constructor(one: string, two: number) {
    this.propOne = one;
    this.propTwo = two;
  }
}
```

## Mixin Classes

> See here: https://github.com/microsoft/TypeScript/pull/13743

## Type Definitions

> Advanced Types:
> https://www.typescriptlang.org/docs/handbook/advanced-types.html

### Extending Types

> Diskussion: https://github.com/Microsoft/TypeScript/pull/13604

#### Old Method

    type UserEvent = Event & {UserId: string}

#### New Method (TS ^2.2)

    type Event = {
       name: string;
       dateCreated: string;
       type: string;
    }

    interface UserEvent extends Event {
       UserId: string;
    }

### An Array of a certain type at least with e.g. 2 elements

[>> Source StackOverflow](https://stackoverflow.com/questions/57117317/type-definition-an-array-of-a-certain-type-at-least-with-e-g-2-elements)

See _Rest Elements in tuple types_ here:
https://www.typescriptlang.org/docs/handbook/release-notes/overview.html#rest-elements-in-tuple-types

```javascript
let foo: [Foo, Foo, ...Foo[]];
```

And see additionally _User-defined type guards_ here:
https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards

To define a type guard, we simply need to define a function whose return type is
a type predicate:

```javascript
function isAtLeastTwoFoos(x: Foo[]): x is [Foo, Foo, ...Foo[]] {
  return x.length >= 2;
}

if (isAtLeastTwoFoos(fooArray)) {
  foo = fooArray; // okay
}
```

### Same Type of Elements

```javascript
type UnionKeys<U> = U extends U ? keyof U : never;

const test = <T>(x: T & Record<keyof T, Record<UnionKeys<T[keyof T]>, number>>) => true;

const x = test({
  a: {
    x: 1,
    y: 3,
    z: 5
  },
  b: {
    x: 1,
    y: 2,
    z: 7

  },
})
```
