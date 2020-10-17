# Lodash 4+

Abbreviations:

- Array &rarr; `arr` or `a`
- Notice &rarr; `N:`
- Result &rarr; `res` or `r`

## Array

chunk, compact, **concat**, **difference**, **differenceBy**, **differenceWith**, dro, p dropRight, dropRightWhile, dropWhile, fill, findIndex, findLastIndex, first, ->, hea, d flatten, flattenDeep, flattenDepth, fromPairs, head, indexOf, initial, intersectio, n intersectionBy, intersectionWith, join, last, lastIndexOf, nth, pull, pullAll, pullAllB, y pullAllWith, pullAt, remove, reverse, slice, sortedIndex, sortedIndexBy, sortedIndexO, f sortedLastIndex, sortedLastIndexBy, sortedLastIndexOf, sortedUniq, sortedUniqBy, tai, l take, takeRight, takeRightWhile, takeWhile, union, unionBy, unionWith, uniq, uniqB, y uniqWith, unzip, unzipWith, without, xor, xorBy, xorWith, zip, zipObject, zipObjectDee, p zipWith

### concat

```javascript
let arr = [1];
let res = concat(array, 2, [3], [[4]]); // => [1, 2, 3, [4]]
```

### difference, differenceBy, differenceWith

```javascript
difference([2, 1], [2, 3]); // => [1]

differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]
// N: The floor() method rounds a number DOWNWARDS to the nearest integer

differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], 'x');
// => [{ 'x': 2 }]

var objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];
differenceWith(objects, [{ x: 1, y: 2 }], isEqual);
// => [{ 'x': 2, 'y': 1 }]
```
