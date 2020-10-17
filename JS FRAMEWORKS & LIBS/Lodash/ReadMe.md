# Lodash 4+

Abbreviations:

- Array &rarr; `arr` or `a`
- Notice &rarr; `N:`
- Result &rarr; `res` or `r`

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Array](#array)
  - [concat](#concat)
  - [difference, differenceBy, differenceWith](#difference-differenceby-differencewith)
  - [drop, dropRight, dropRightWhile](#drop-dropright-droprightwhile)
  - [fill](#fill)
  - [fromPairs, intersection, sortedIndex, zip](#frompairs-intersection-sortedindex-zip)
- [Object](#object)
  - [countBy](#countby)
  - [every](#every)
  - [flatMap](#flatmap)
  - [groupBy](#groupby)
  - [invokeMap](#invokemap)
  - [keyBy](#keyby)
  - [orderBy](#orderby)
  - [partition](#partition)
- [Date](#date)
- [Function](#function)
  - [spread](#spread)
  - [wrap](#wrap)
- [Lang](#lang)
  - [isNil](#isnil)
  - [toFinite](#tofinite)
- [Math](#math)
  - [ceil (aufrunden)](#ceil-aufrunden)
  - [divide](#divide)
  - [floor (abrunden), round (runden)](#floor-abrunden-round-runden)
- [Number](#number)
  - [inRange(number, [start=0], end)](#inrangenumber-start0-end)
  - [random([lower=0], [upper=1], [floating])](#randomlower0-upper1-floating)
- [Object](#object-1)
  - [get(object, path, [defaultValue])](#getobject-path-defaultvalue)
  - [mapKeys, mapValues](#mapkeys-mapvalues)
  - [transform](#transform)
- [Seq](#seq)
  - [chain, tap, thru, prototype.value()](#chain-tap-thru-prototypevalue)
- [String](#string)
  - [camelCase, capitalize, escape, escapeRegExp](#camelcase-capitalize-escape-escaperegexp)
  - [template](#template)
  - [truncate](#truncate)
- [Util](#util)
  - [attempt](#attempt)
  - [property](#property)

<!-- /code_chunk_output -->

## Array

chunk, compact, concat,

difference, differenceBy, differenceWith,

drop, dropRight, dropRightWhile, dropWhile,

fill,

findIndex, findLastIndex,

first -> head

flatten, flattenDeep, flattenDepth,

fromPairs, head, indexOf, initial,

intersection intersectionBy, intersectionWith,

join, last, lastIndexOf, nth,

pull, pullAll, pullAllBy pullAllWith, pullAt,

remove, reverse, slice,

sortedIndex, sortedIndexBy, sortedIndexOf sortedLastIndex, sortedLastIndexBy, sortedLastIndexOf, sortedUniq, sortedUniqBy,

tail

take, takeRight, takeRightWhile, takeWhile,

union, unionBy, unionWith,

uniq, uniqBy uniqWith,

unzip, unzipWith,

without,

xor, xorBy, xorWith,

zip, zipObject, zipObjectDeep zipWith

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

### drop, dropRight, dropRightWhile

```java
drop([1, 2, 3]); // => [2, 3]

drop([1, 2, 3], 2); // => [3]

dropRight([1, 2, 3]); // => [1, 2]

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];

dropRightWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']

```

### fill

```javascript
      0  1  2  3
fill([4, 6, 8, 10], '*', 1, 3); // from 1 (incl.) to 3 (excl.)
//=> [4, '*', '*', 10]
```

### fromPairs, intersection, sortedIndex, zip

```javascript
fromPairs([
  ['a', 1],
  ['b', 2],
]);
// => { 'a': 1, 'b': 2 }

intersection([2, 1], [2, 3]); // => [2]

sortedIndex([30, 50], 40); // => 1

uniq([3, 1, 1, 2, 3]); // => [3,1,2]

zip(['x', 'x', 'y'], ['a', 'b', 'c'], [1, 2, 3]);
// => [ [ 'x', 'a', 1 ], [ 'x', 'b', 2 ], [ 'y', 'c', 3 ] ]
```

## Object

countBy,

each -> forEach, eachRight -> forEachRight,

every, filter,

find, findLast,

flatMap, flatMapDeep, flatMapDepth,

forEach, forEachRight,

groupBy, includes, invokeMap, keyBy, map, orderBy, partition,

reduce, reduceRight,

reject, sample, sampleSize, shuffle, size, some, sortBy,

### countBy

```javascript
countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

// The `property` iteratee shorthand.
countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
```

### every

```javascript
var users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: false },
];

every(users, ['active', false]);
// => true

every(users, 'active');
// => false
```

### flatMap

```javascript
function duplicate(n) {
  return [n, n];
}

flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]
```

### groupBy

```javascript
groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `property` iteratee shorthand.
groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }
```

### invokeMap

```javascript
invokeMap(
  [
    [5, 1, 7],
    [3, 2, 1],
  ],
  'sort',
);
// => [[1, 5, 7], [1, 2, 3]]

invokeMap([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]
```

### keyBy

```javascript
var array = [
  { key: 'left', value: 97 },
  { key: 'right', value: 100 },
];

keyBy(array, 'key');

// => { left: { key: 'left', value: 97 }, right: { key: 'right', value: 100 } }

keyBy(array, 'value');

// = { 97: { key: 'left', value: 97 }, 100: { key: 'right', value: 100 } }
```

### orderBy

```javascript
var users = [
  { user: 'fred', age: 48 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 40 },
  { user: 'barney', age: 36 },
];

// Sort by `user` in ascending order and by `age` in descending order.
orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
```

### partition

Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for, the second of which contains elements predicate returns falsey for. The predicate is invoked with one argument: (value).

```javascript
var users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
  { user: 'pebbles', age: 1, active: false },
];

partition(users, 'active');
// => objects for [['fred'], ['barney', 'pebbles']]
```

## Date

now

## Function

after, ary, before, bind, bindKey, curry, curryRight, debounce, defer, delay, flip, memoize, negate, once, overArgs, partial, partialRight, rearg, rest, spread, throttle, unary, wrap,

### spread

```javascript
var say = spread(function (who, what) {
  return who + ' says ' + what;
});

say(['fred', 'hello']);
// => 'fred says hello'
```

### wrap

```javascript
var p = wrap(escape, function (func, text) {
  return '<p>' + func(text) + '</p>';
});

p('fred, barney, & pebbles');
// => '<p>fred, barney, &amp; pebbles</p>'
```

## Lang

castArray, clone, **cloneDeep**, cloneDeepWith, cloneWith, conformsTo, eq, gt, gte, isArguments, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith, isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN, isNative, **isNil**, isNull, isNumber, isObject, isObjectLike, **isPlainObject**, isRegExp, isSafeInteger, isSet, isString, isSymbol, isTypedArray, isUndefined, isWeakMap, isWeakSet, lt, lte, toArray, **toFinite**, toInteger, toLength, toNumber, toPlainObject, toSafeInteger, toString,

### isNil

Checks if value is null or undefined

### toFinite

```javascript
toFinite(Infinity); // => 1.7976931348623157e+308
```

## Math

add, ceil, divide, floor, max, maxBy, **mean** (arithmetisches Mittel), meanBy, min, minBy, multiply, round, subtract, **sum**, sumBy,

### ceil (aufrunden)

Computes number rounded up to precision.

```javascript
ceil(4.006);
// => 5

ceil(6.004, 2);
// => 6.01

ceil(6040, -2);
// => 6100
```

### divide

```javascript
divide(6, 4); // 1.5
divide(6, 0); // Infinity
```

### floor (abrunden), round (runden)

```javascript
floor(4.006); // => 4
round(4.006); // => 4

floor(0.046, 2); // => 0.04
round(0.046, 2); // => 0.05

floor(4060, -2); // => 4000
round(4060, -2); // => 4100

floor(4.006, 2); // => 4
round(4.006, 2); // => 4.01

floor(4060, -2); // => 4000
round(4060, -2); // => 4100
```

## Number

clamp, inRange, random,

### inRange(number, [start=0], end)

### random([lower=0], [upper=1], [floating])

## Object

assign, **assignIn**, assignInWith, assignWith, at, create, defaults, defaultsDeep, entries -> toPairs, entriesIn -> toPairsIn, extend -> assignIn, extendWith -> assignInWith, findKey, findLastKey, forIn, forInRight, forOwn, forOwnRight, functions, functionsIn, **get**, has, hasIn, **invert**, invertBy, invoke, keys, keysIn, mapKeys, mapValues, merge, mergeWith, omit, omitBy, pick, pickBy, result, set, setWith, toPairs, toPairsIn, transform, unset, update, updateWith, values, valuesIn,

### get(object, path, [defaultValue])

Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.

**Arguments:**
object (Object): The object to query.
path (Array|string): The path of the property to get.
[defaultValue]: The value returned for undefined resolved values.

```javascript
var object = { a: [{ b: { c: 3 } }] };

get(object, 'a[0].b.c');
// => 3

get(object, ['a', '0', 'b', 'c']);
// => 3

get(object, 'a.b.c', 'default');
// => 'default'
```

### mapKeys, mapValues

```javascript
mapKeys({ a: 1, b: 2 }, function (value, key) {
  return key + value;
});
// => { 'a1': 1, 'b2': 2 }

var users = {
  fred: { user: 'fred', age: 40 },
  pebbles: { user: 'pebbles', age: 1 },
};

mapValues(users, function (o) {
  return o.age;
});
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)

// The `property` iteratee shorthand.
mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
```

### transform

:) I understand, why,..

```javaScript
const a = [3, 6, 9, 7, 8];
let b = [];

const r = transform(
  a,
  function (result, n) {
    result.push(n);
    return n % 3 === 0; // ?
  },
  b
); // => [ 3, 6, 9, 7 ]
```

## Seq

**chain**, tap, thru, prototype[Symbol.iterator], prototype.at, prototype.chain, prototype.commit, prototype.next, prototype.plant, prototype.reverse, prototype.toJSON -> value, prototype.value, prototype.valueOf -> value,

### chain, tap, thru, prototype.value()

```javascript
var users = [
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'pebbles', age: 1 },
];

var youngest = chain(users)
  .sortBy('age')
  .map((u) => 'age: ' + u.age)
  .head()
  .value(); // => age: 1

chain([1, 2, 3])
  .tap((c) => c.unshift(0)) // c is the whole array
  .reverse()
  .value(); // => [3,2,1,0]

chain('  abc  ')
  .trim()
  .thru((a) => [a])
  .value(); // => [ 'abc' ]

var array = [1, 2, 3];

chain(array).reverse().value(); // => [3,2,1]
```

## String

camelCase, capitalize, deburr, endsWith, escape, escapeRegExp, kebabCase, lowerCase, lowerFirst, pad, padEnd, padStart, parseInt, repeat, replace, snakeCase, split, startCase, startsWith, template, toLower, toUpper, trim, trimEnd, trimStart, truncate, unescape, upperCase, upperFirst, words,

### camelCase, capitalize, escape, escapeRegExp

```javascript
camelCase('Foo Bar');
// => 'fooBar'

camelCase('--foo-bar--');
// => 'fooBar'

camelCase('__FOO_BAR__');
// => 'fooBar'

capitalize('FRED');
// => 'Fred'

deburr('déjà vu');
// => 'deja vu'

escape('fred, barney, & pebbles');
// => 'fred, barney, &amp; pebbles'

escapeRegExp('[lodash](https://lodash.com/)');
// => '\[lodash\]\(https://lodash\.com/\)'
```

### template

```javascript
// Use the "interpolate" delimiter to create a compiled template.
var compiled = template('hello <%= user %>!');
compiled({ user: 'fred' });
// => 'hello fred!'

// Use the HTML "escape" delimiter to escape data property values.
var compiled = template('<b><%- value %></b>');
compiled({ value: '<script>' });
// => '<b>&lt;script&gt;</b>'

// Use the "evaluate" delimiter to execute JavaScript and generate HTML.
var compiled = template(
  '<% forEach(users, function(user) { %><li><%- user %></li><% }); %>',
);
compiled({ users: ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'

// Use the internal `print` function in "evaluate" delimiters.
var compiled = template('<% print("hello " + user); %>!');
compiled({ user: 'barney' });
// => 'hello barney!'

// Use the ES template literal delimiter as an "interpolate" delimiter.
// Disable support by replacing the "interpolate" delimiter.
var compiled = template('hello ${ user }!');
compiled({ user: 'pebbles' });
// => 'hello pebbles!'

// Use backslashes to treat delimiters as plain text.
var compiled = template('<%= "\\<%- value %\\>" %>');
compiled({ value: 'ignored' });
// => '<%- value %>'

// Use the `imports` option to import `jQuery` as `jq`.
var text =
  '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
var compiled = template(text, { imports: { jq: jQuery } });
compiled({ users: ['fred', 'barney'] });
// => '<li>fred</li><li>barney</li>'

// Use the `sourceURL` option to specify a custom sourceURL for the template.
var compiled = template('hello <%= user %>!', {
  sourceURL: '/basic/greeting.jst',
});
compiled(data);
// => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.

// Use the `variable` option to ensure a with-statement isn't used in the compiled template.
var compiled = template('hi <%= data.user %>!', {
  variable: 'data',
});
compiled.source;
// => function(data) {
//   var __t, __p = '';
//   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
//   return __p;
// }

// Use custom template delimiters.
templateSettings.interpolate = /{{([\s\S]+?)}}/g;
var compiled = template('hello {{ user }}!');
compiled({ user: 'mustache' });
// => 'hello mustache!'

// Use the `source` property to inline compiled templates for meaningful
// line numbers in error messages and stack traces.
fs.writeFileSync(
  path.join(process.cwd(), 'jst.js'),
  '\
  var JST = {\
    "main": ' +
    template(mainText).source +
    '\
  };\
',
);
```

### truncate

```javascript
truncate('hi-diddly-ho there, neighborino');
// => 'hi-diddly-ho there, neighbo...'

truncate('hi-diddly-ho there, neighborino', {
  length: 24,
  separator: ' ',
});
// => 'hi-diddly-ho there,...'

truncate('hi-diddly-ho there, neighborino', {
  length: 24,
  separator: /,? +/,
});
// => 'hi-diddly-ho there...'

truncate('hi-diddly-ho there, neighborino', {
  omission: ' [...]',
});
// => 'hi-diddly-ho there, neig [...]'
```

## Util

attempt, bindAll, **cond**, **conforms**, constant, defaultTo, flow, flowRight, identity, iteratee, matches, matchesProperty, method, methodOf, mixin, noConflict, noop, nthArg, **over**, overEvery, overSome, property, propertyOf, range, rangeRight, runInContext, stubArray, stubFalse, stubObject, stubString, stubTrue, times, toPath, **uniqueId**,

### attempt

```javascript
// Avoid throwing errors for invalid selectors.
var elements = attempt(function (selector) {
  return document.querySelectorAll(selector);
}, '>_>');

if (isError(elements)) {
  elements = [];
}
```

### property

```javaScript
var objects = [
  { 'a': { 'b': 2 } },
  { 'a': { 'b': 1 } }
];

map(objects, property('a.b'));
// => [2, 1]

map(sortBy(objects, property(['a', 'b'])), 'a.b');
// => [1, 2]
```
