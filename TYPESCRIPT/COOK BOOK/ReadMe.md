# TypeScript Cookbook

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [TypeScript Cookbook](#typescript-cookbook)
  - [Initialize TS](#initialize-ts)
  - [Compiler Options](#compiler-options)
    - [Some Checks](#some-checks)
  - [Same name for Class and Interface](#same-name-for-class-and-interface)

<!-- /code_chunk_output -->

## Initialize TS

```bash
tsc --init
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
