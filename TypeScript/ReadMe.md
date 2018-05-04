# Advanced Topics

## Introduction
### Declaration
```typescript
// It is a question of style
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

### void
```typescript
function warnUser(): void {
    alert("This is my warning message");
}
```
### undefined, null

By default `null` and `undefined` are subtypes of all other types. That means you can assign null and undefined to something like `number`. However, when using the `--strictNullChecks` flag, null and undefined are only assignable to void and their respective types.

```typescript
let u: undefined = undefined;
let n: null = null;
```
### never
The never type represents the type of values that never occur.

```typescript
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}
```
