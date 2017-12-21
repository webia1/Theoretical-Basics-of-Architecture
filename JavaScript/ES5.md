<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Introduction](#introduction)
- [SimpleTypes in ES5](#simpletypes-in-es5)
  - [boolean](#boolean)
  - [null](#null)
  - [undefined](#undefined)
  - [Infinity](#infinity)
  - [NaN](#nan)
  - [Number](#number)
    - [Number Object.getOwnPropertyNames(Number)](#number-objectgetownpropertynamesnumber)
      - [length](#length)
      - [name](#name)
      - [prototype](#prototype)
      - [isFinite](#isfinite)
      - [isInteger](#isinteger)
      - [isNaN](#isnan)
      - [isSafeInteger](#issafeinteger)
      - [parseFloat](#parsefloat)
      - [parseInt](#parseint)
      - [MAX_VALUE](#max_value)
      - [MIN_VALUE](#min_value)
      - [NaN](#nan-1)
      - [NEGATIVE_INFINITY](#negative_infinity)
      - [POSITIVE_INFINITY](#positive_infinity)
      - [MAX_SAFE_INTEGER](#max_safe_integer)
      - [MIN_SAFE_INTEGER](#min_safe_integer)
      - [EPSILON](#epsilon)
    - [Number Object.getOwnPropertyNames(Number.prototype)](#number-objectgetownpropertynamesnumberprototype)
      - [constructor](#constructor)
      - [toExponential](#toexponential)
      - [toFixed](#tofixed)
      - [toPrecision](#toprecision)
      - [toString](#tostring)
      - [valueOf](#valueof)
      - [toLocaleString](#tolocalestring)
  - [String](#string)
    - [String Object.getOwnPropertyNames(String)](#string-objectgetownpropertynamesstring)
      - [length](#length-1)
      - [name](#name-1)
      - [prototype](#prototype-1)
      - [fromCharCode](#fromcharcode)
      - [fromCodePoint](#fromcodepoint)
      - [raw](#raw)
    - [String Object.getOwnPropertyNames(String.prototype)](#string-objectgetownpropertynamesstringprototype)
      - [length](#length-2)
      - [constructor](#constructor-1)
      - [charAt](#charat)
      - [charCodeAt](#charcodeat)
      - [concat](#concat)
      - [endsWith](#endswith)
      - [includes](#includes)
      - [indexOf](#indexof)
      - [lastIndexOf](#lastindexof)
      - [localeCompare](#localecompare)
      - [normalize](#normalize)
      - [replace](#replace)
      - [slice](#slice)
      - [split](#split)
      - [substr](#substr)
      - [substring](#substring)
      - [startsWith](#startswith)
      - [toString](#tostring-1)
      - [trim](#trim)
      - [trimLeft](#trimleft)
      - [trimRight](#trimright)
      - [toLowerCase](#tolowercase)
      - [toUpperCase](#touppercase)
      - [valueOf](#valueof-1)
      - [match](#match)
      - [search](#search)
      - [anchor](#anchor)
      - [big](#big)
      - [blink](#blink)
      - [bold](#bold)
      - [fixed](#fixed)
      - [fontcolor](#fontcolor)
      - [fontsize](#fontsize)
      - [italics](#italics)
      - [link](#link)
      - [small](#small)
      - [strike](#strike)
      - [sub](#sub)
      - [sup](#sup)
      - [repeat](#repeat)
      - [codePointAt](#codepointat)
      - [padStart](#padstart)
      - [padEnd](#padend)
      - [toLocaleLowerCase](#tolocalelowercase)
      - [toLocaleUpperCase](#tolocaleuppercase)
- [typeof](#typeof)
  - [Checking if Array](#checking-if-array)
- [Objects](#objects)
  - [Object Retrieval](#object-retrieval)
  - [Object Enumeration](#object-enumeration)
  - [Object Prototype](#object-prototype)
    - [Object Prototyp Augmentation](#object-prototyp-augmentation)
  - [Object Object.getOwnPropertyNames(Object)](#object-objectgetownpropertynamesobject)
    - [length](#length-3)
    - [name](#name-2)
    - [prototype](#prototype-2)
    - [assign](#assign)
    - [getOwnPropertyDescriptor](#getownpropertydescriptor)
    - [getOwnPropertyDescriptors](#getownpropertydescriptors)
    - [getOwnPropertyNames](#getownpropertynames)
    - [getOwnPropertySymbols](#getownpropertysymbols)
    - [is](#is)
    - [preventExtensions](#preventextensions)
    - [seal](#seal)
    - [create](#create)
    - [defineProperties](#defineproperties)
    - [defineProperty](#defineproperty)
    - [freeze](#freeze)
    - [getPrototypeOf](#getprototypeof)
    - [setPrototypeOf](#setprototypeof)
    - [isExtensible](#isextensible)
    - [isFrozen](#isfrozen)
    - [isSealed](#issealed)
    - [keys](#keys)
    - [entries](#entries)
    - [values](#values)
  - [Object Object.getOwnPropertyNames(Object.prototype)](#object-objectgetownpropertynamesobjectprototype)
    - [constructor](#constructor-2)
    - [__defineGetter__](#__definegetter__)
    - [__defineSetter__](#__definesetter__)
    - [hasOwnProperty](#hasownproperty)
    - [__lookupGetter__](#__lookupgetter__)
    - [__lookupSetter__](#__lookupsetter__)
    - [isPrototypeOf](#isprototypeof)
    - [propertyIsEnumerable](#propertyisenumerable)
    - [toString](#tostring-2)
    - [valueOf](#valueof-2)
    - [__proto__](#__proto__-%5Bobject%20Object%5D)
    - [toLocaleString](#tolocalestring-1)
- [Arrays](#arrays)
  - [Array Object.getOwnPropertyNames(Array)](#array-objectgetownpropertynamesarray)
    - [length](#length-4)
    - [name](#name-3)
    - [prototype](#prototype-3)
    - [isArray](#isarray)
    - [from](#from)
    - [of](#of)
  - [Object.getOwnPropertyNames(Array.prototype)](#objectgetownpropertynamesarrayprototype)
    - [length](#length-5)
    - [concat](#concat-1)
    - [pop](#pop)
    - [push](#push)
    - [shift](#shift)
    - [unshift](#unshift)
    - [slice](#slice-1)
    - [splice](#splice)
    - [includes](#includes-1)
    - [indexOf](#indexof-1)
    - [keys](#keys-1)
    - [entries](#entries-1)
    - [forEach](#foreach)
    - [filter](#filter)
    - [map](#map)
    - [every](#every)
    - [some](#some)
    - [reduce](#reduce)
    - [reduceRight](#reduceright)
    - [toString](#tostring-3)
    - [toLocaleString](#tolocalestring-2)
    - [join](#join)
    - [reverse](#reverse)
    - [sort](#sort)
    - [lastIndexOf](#lastindexof-1)
    - [copyWithin](#copywithin)
    - [find](#find)
    - [findIndex](#findindex)
    - [fill](#fill)
- [Functions](#functions)
  - [Invocation, this, arguments & patterns](#invocation-this-arguments--patterns)
    - [Function Invocation Pattern](#function-invocation-pattern)
    - [Method Invocation Pattern](#method-invocation-pattern)
    - [Constructor Invocation Pattern](#constructor-invocation-pattern)
    - [Apply Invocation Pattern](#apply-invocation-pattern)
  - [Arguments](#arguments)
  - [Return Value](#return-value)
  - [Exceptions](#exceptions)
  - [Augmenting](#augmenting)
  - [Self-Executing Anonymous Functions or better said "Immediately-Invoked Function Expression (IIFE)](#self-executing-anonymous-functions-or-better-said-immediately-invoked-function-expression-iife)
  - [Cascade](#cascade)
  - [Closures](#closures)
  - [Callbacks](#callbacks)
  - [Curry](#curry)
  - [Module](#module)
  - [Functions Object.getOwnPropertyNames(Function)](#functions-objectgetownpropertynamesfunction)
    - [length](#length-6)
    - [name](#name-4)
    - [prototype](#prototype-4)
  - [Functions Object.getOwnPropertyNames(Function.prototype)](#functions-objectgetownpropertynamesfunctionprototype)
    - [length](#length-7)
    - [name](#name-5)
    - [arguments](#arguments)
    - [caller](#caller)
    - [constructor](#constructor-3)
    - [apply](#apply)
      - [Parameters & Returnvalue](#parameters--returnvalue)
    - [bind](#bind)
    - [call](#call)
    - [toString](#tostring-4)
- [Regular Expressions](#regular-expressions)
  - [RegExp Object.getOwnPropertyNames(RegExp)](#regexp-objectgetownpropertynamesregexp)
    - [$&](#)
    - [$'](#)
    - [$+](#)
    - [$1](#1)
    - [$2](#2)
    - [$3](#3)
    - [$4](#4)
    - [$5](#5)
    - [$6](#6)
    - [$7](#7)
    - [$8](#8)
    - [$9](#9)
    - [$_](#_)
    - [$`](#)
    - [input](#input)
    - [lastMatch](#lastmatch)
    - [lastParen](#lastparen)
    - [leftContext](#leftcontext)
    - [length](#length-8)
    - [name](#name-6)
    - [prototype](#prototype-5)
    - [rightContext](#rightcontext)
  - [RegExp Object.getOwnPropertyNames(RegExp.prototype)](#regexp-objectgetownpropertynamesregexpprototype)
    - [compile](#compile)
    - [constructor](#constructor-4)
    - [exec](#exec)
    - [flags](#flags)
    - [global](#global)
    - [ignoreCase](#ignorecase)
    - [multiline](#multiline)
    - [source](#source)
    - [sticky](#sticky)
    - [test](#test)
    - [toString](#tostring-5)
    - [unicode](#unicode)
- [Symbol](#symbol)
  - [Own](#own)
    - [for](#for)
    - [hasInstance](#hasinstance)
    - [isConcatSpreadable](#isconcatspreadable)
    - [iterator](#iterator)
    - [keyFor](#keyfor)
    - [length](#length-9)
    - [match](#match-1)
    - [name](#name-7)
    - [prototype](#prototype-6)
    - [replace](#replace-1)
    - [search](#search-1)
    - [species](#species)
    - [split](#split-1)
    - [toPrimitive](#toprimitive)
    - [toStringTag](#tostringtag)
    - [unscopables](#unscopables)
  - [prototype](#prototype-7)
    - [constructor](#constructor-5)
    - [toString](#tostring-6)
    - [valueOf](#valueof-3)
- [Error](#error)
  - [Own](#own-1)
    - [captureStackTrace](#capturestacktrace)
    - [length](#length-10)
    - [name](#name-8)
    - [prototype](#prototype-8)
    - [stackTraceLimit](#stacktracelimit)
  - [Prototype](#prototype)
    - [constructor](#constructor-6)
    - [message](#message)
    - [name](#name-9)
    - [toString](#tostring-7)
- [Math](#math)
  - [E](#e)
  - [LN10](#ln10)
  - [LN2](#ln2)
  - [LOG10E](#log10e)
  - [LOG2E](#log2e)
  - [PI](#pi)
  - [SQRT1_2](#sqrt1_2)
  - [SQRT2](#sqrt2)
  - [abs](#abs)
  - [acos](#acos)
  - [acosh](#acosh)
  - [asin](#asin)
  - [asinh](#asinh)
  - [atan](#atan)
  - [atan2](#atan2)
  - [atanh](#atanh)
  - [cbrt](#cbrt)
  - [ceil](#ceil)
  - [clz32](#clz32)
  - [cos](#cos)
  - [cosh](#cosh)
  - [exp](#exp)
  - [expm1](#expm1)
  - [floor](#floor)
  - [fround](#fround)
  - [hypot](#hypot)
  - [imul](#imul)
  - [log](#log)
  - [log10](#log10)
  - [log1p](#log1p)
  - [log2](#log2)
  - [max](#max)
  - [min](#min)
  - [pow](#pow)
  - [random](#random)
  - [round](#round)
  - [sign](#sign)
  - [sin](#sin)
  - [sinh](#sinh)
  - [sqrt](#sqrt)
  - [tan](#tan)
  - [tanh](#tanh)
  - [trunc](#trunc)
- [Date](#date)
  - [Date Object.getOwnPropertyNames(Date)](#date-objectgetownpropertynamesdate)
    - [UTC](#utc)
    - [length](#length-11)
    - [name](#name-10)
    - [now](#now)
    - [parse](#parse)
    - [prototype](#prototype-9)
  - [Object.getOwnPropertyNames(Date.prototype)](#objectgetownpropertynamesdateprototype)
    - [constructor](#constructor-7)
    - [getDate](#getdate)
    - [getDay](#getday)
    - [getFullYear](#getfullyear)
    - [getHours](#gethours)
    - [getMilliseconds](#getmilliseconds)
    - [getMinutes](#getminutes)
    - [getMonth](#getmonth)
    - [getSeconds](#getseconds)
    - [getTime](#gettime)
    - [getTimezoneOffset](#gettimezoneoffset)
    - [getUTCDate](#getutcdate)
    - [getUTCDay](#getutcday)
    - [getUTCFullYear](#getutcfullyear)
    - [getUTCHours](#getutchours)
    - [getUTCMilliseconds](#getutcmilliseconds)
    - [getUTCMinutes](#getutcminutes)
    - [getUTCMonth](#getutcmonth)
    - [getUTCSeconds](#getutcseconds)
    - [getYear](#getyear)
    - [setDate](#setdate)
    - [setFullYear](#setfullyear)
    - [setHours](#sethours)
    - [setMilliseconds](#setmilliseconds)
    - [setMinutes](#setminutes)
    - [setMonth](#setmonth)
    - [setSeconds](#setseconds)
    - [setTime](#settime)
    - [setUTCDate](#setutcdate)
    - [setUTCFullYear](#setutcfullyear)
    - [setUTCHours](#setutchours)
    - [setUTCMilliseconds](#setutcmilliseconds)
    - [setUTCMinutes](#setutcminutes)
    - [setUTCMonth](#setutcmonth)
    - [setUTCSeconds](#setutcseconds)
    - [setYear](#setyear)
    - [toDateString](#todatestring)
    - [toGMTString](#togmtstring)
    - [toISOString](#toisostring)
    - [toJSON](#tojson)
    - [toLocaleDateString](#tolocaledatestring)
    - [toLocaleString](#tolocalestring-3)
    - [toLocaleTimeString](#tolocaletimestring)
    - [toString](#tostring-8)
    - [toTimeString](#totimestring)
    - [toUTCString](#toutcstring)
    - [valueOf](#valueof-4)
- [Statements](#statements)
  - [for and for in](#for-and-for-in)
  - [while](#while)
  - [do while](#do-while)
  - [switch](#switch)
- [Some Oddities](#some-oddities)
  - [typeof](#typeof-1)
- [Equality](#equality)
  - [Comments](#comments)
  - [Reserved Words](#reserved-words)
  - [Falsy Values](#falsy-values)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->



# Introduction

Based on: Loose Typing, (Dynamic) Objects, Functions, Prototypal Inheritance, Classfree Object System (Expressive Object Literal System).  

# SimpleTypes in ES5
## boolean
## null
## undefined
## Infinity
## NaN
## Number
```JavaScript
1 == 1.0       // true
1 === 1.0      // true
1 == '1'       // true
1 === '1'      // false
1 / 0          // Infinity
1 / 'x'        // NaN
NaN == NaN     // false
NaN === NaN    // false
1e2 == 100     // true, 1e2 = 1 * 10^2
1.3e2 == 130   // true
```

### Number Object.getOwnPropertyNames(Number)
#### length
#### name
#### prototype
#### isFinite
#### isInteger
#### isNaN
#### isSafeInteger
#### parseFloat
#### parseInt
#### MAX_VALUE
#### MIN_VALUE
#### NaN
#### NEGATIVE_INFINITY
#### POSITIVE_INFINITY
#### MAX_SAFE_INTEGER
#### MIN_SAFE_INTEGER
#### EPSILON

### Number Object.getOwnPropertyNames(Number.prototype)

#### constructor
#### toExponential
#### toFixed
#### toPrecision
#### toString
#### valueOf
#### toLocaleString

## String

```JavaScript
'A' === "\u0041"               // true
'myString'.length              // 8
'c' + 'a' + 'r' === 'car'      // true
'car'.toUpperCase() === 'CAR'  // true
```

### String Object.getOwnPropertyNames(String)

#### length
#### name
#### prototype
#### fromCharCode
#### fromCodePoint
#### raw

### String Object.getOwnPropertyNames(String.prototype)
#### length
#### constructor
#### charAt
#### charCodeAt
#### concat
#### endsWith
#### includes
#### indexOf
#### lastIndexOf
#### localeCompare
#### normalize
#### replace
#### slice
#### split
#### substr
#### substring
#### startsWith
#### toString
#### trim
#### trimLeft
#### trimRight
#### toLowerCase
#### toUpperCase
#### valueOf
#### match
#### search
#### anchor
#### big
#### blink
#### bold
#### fixed
#### fontcolor
#### fontsize
#### italics
#### link
#### small
#### strike
#### sub
#### sup
#### repeat
#### codePointAt
#### padStart
#### padEnd
#### toLocaleLowerCase
#### toLocaleUpperCase

# typeof

The values produced by `typeof` are: `number`, `string`, `boolean`, `undefined`, `function`, `object`

**Attention**: ` typeof(array) // 'object'` 

**Attention**: ` typeof(null) === 'object' // true` 

## Checking if Array

There are several ways to do that:

```JavaScript
var a = [1,2,3];
  
// Solution 1
a.constructor === Array    

// Solution 2
Object.prototype.toString.call( a ) === '[object Array]'
  
// Solution 3
a.constructor.name == "Array"
  
// Solution 4 (ES6)
Array.isArray(a)  
```


# Objects

Objects are a key/value pair.

```javascript
var myObject = {
	foo: true,
	bar: 'webia1'
}
```

* A property value can be any JavaScript value, except for `undefined`.
* If object does not have the property name, the object will be augmented
* Objects are passed around by reference. They are never copied.

## Object Retrieval

```javascript
myObject.bar   // webia1
myObject[foo]  // true
myObject[baz]  // undefined 
```
Attempting to retrieve values from undefined will throw `TypeError` exception:

`myObject[baz].name  // throw 'TypeError'`

## Object Enumeration

The `for in` statement can loop over all of the property names including functions and prototype properties.

```JavaScript
var blackBox = {
    foo: 10,
    bar: 20
};

var myObj = Object.create(blackBox);

myObj.foo = 100;
myObj.name = 'webia1';

for (var whatever in myObj) {
    if (myObj.hasOwnProperty(whatever)) {
        console.log (whatever);
    }  // name, foo
}

for (var whatever in myObj) {
   console.log (whatever);  // name, foo, bar
}
```

## Object Prototype

Every Object is linked to `Object.prototype`, an Object that comes standard with ES5.Prototype link has no effect on Updating:

```JavaScript
var myObj1 = {
    foo: 10,
    bar: 20
};

var myObj2 = Object.create(myObj1);

myObj2.foo = 77;
myObj1.foo = 33;

console.log (myObj2);               // {}
console.log (myObj2.foo);           // 77
console.log (myObj1.foo);           // 33
```

If we add a new property to a prototype, that property will immediately be visible in all of the objects, that are based on that prototype:

```JavaScript
myObj1.baz = 'I am new';
console.log (myObj2.baz);           // I am new
```

### Object Prototyp Augmentation

```javascript
Number.prototype.integer = function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
}

console.log ((-10/3).integer());    // -3
```
 
## Object Object.getOwnPropertyNames(Object)

### length
### name
### prototype
### assign

assign

```JavaScript
var myObj = {
    foo: 10,
    bar: 20
};

// Copy no reference no prototype chain
var myObj2 = Object.assign({}, myObj);

myObj.foo = 77;

console.log(myObj2); // { foo: 10, bar: 20 }
```

### getOwnPropertyDescriptor
### getOwnPropertyDescriptors
### getOwnPropertyNames
### getOwnPropertySymbols
### is
### preventExtensions
### seal
### create

```JavaScript
var vehicle = {
    name: 'Origin',
    weight: 0
};

var car = Object.create(vehicle);

for (i in car) console.log(i);     // name, weight
console.log(car);                  // {}

car.name = 'Car';
console.log(car);                  // { name: 'Car' }
```

An another example (called delegation):

```JavaScript
var creature  = { name: 'Default Name'};
var mammals   = Object.create(creature);
var dolphins = Object.create(mammals);

mammals.habitats = ['land','sea','air'];
dolphins.averageExpectancy = '40 years';
console.log (dolphins);

/* 
{ averageExpectancy: '40 years' }
*/

for (var i in dolphins) console.log (i, dolphins[i]);

/*
averageExpectancy 40 years
habitats [ 'land', 'sea', 'air' ]
name Default Name
*/

```

### defineProperties
### defineProperty
### freeze
### getPrototypeOf
### setPrototypeOf
### isExtensible
### isFrozen
### isSealed
### keys

```javascript
Object.keys(Number.prototype); // [ 'integer' ]
```

### entries
### values 

## Object Object.getOwnPropertyNames(Object.prototype)

### constructor
### __defineGetter__
### __defineSetter__
### hasOwnProperty

The `hasOwnProperty` method does not look at the prototype chain:

```JavaScript
console.log(myObj1.hasOwnProperty('baz'));  // true
console.log(myObj2.hasOwnProperty('baz'));  // false
```

### __lookupGetter__
### __lookupSetter__
### isPrototypeOf
### propertyIsEnumerable
### toString
### valueOf
### __proto__
### toLocaleString



# Arrays

Arrays are objects in Javascript, you can use delete to remove elements from an array (but there would be a hole). You can also use „for in“ statement to iterate over all the properties of an array (no guarantee about the order of the properties plus there are unexpected properties from the prototype chain). Better you use „for“ statement to avoid these problems.

## Array Object.getOwnPropertyNames(Array)
### length
TODO: See `Array.prototype.length` above
### name
### prototype
### isArray
### from
### of

## Object.getOwnPropertyNames(Array.prototype)

### length
```javascript
var empty = []; // empty.length = 0
console.log(empty.length); // 0
empty.length = 3;
console.log(empty.length); // 3 
console.log(empty); //[ <3 empty items> ] 
var days = ['FR','SA','SO']; // days.length = 3;
```
### concat

Concatenating Arrays without changing the original-ones.

> `var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])`

```javascript

// arr1.concat(arr2,arr3,.....,arr_n); 
// arr1.concat(arr2, 'newArrayElement');

var a = ['A','B'];
var x = ['Y','Z'];

console.log (a.concat(x)); // [ 'A', 'B', 'Y', 'Z' ]
console.log (a); // ['A','B'];
console.log (x); // ['Y','Z'];
```

### pop

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

```javascript
var a = [1,2,3,4];
var lastElementOfArray = a.pop();
console.log(lastElementOfArray);    // 4
console.log(a);                     // [ 1, 2, 3 ]
```

### push

The push() method adds one or more elements to the end of an array and returns the new length of the array.

```javascript
var a = [1,2,3];
var newLength = a.push(4);
console.log(newLength);     // 4
console.log(a);             // [ 1, 2, 3, 4 ]
```

### shift

The shift() method removes the first element from an array and returns that element. This method changes the length of the array.

```javascript
var a = [1, 2, 3];
var b = a.shift();

console.log(a); // [2, 3]
console.log(b); // 1
```

### unshift

The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

```javascript
var a = [1, 2, 3];
a.unshift(4, 5);

console.log(a); // [4, 5, 1, 2, 3]
```

### slice

The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

```javascript
var arr = ['JAN','FEB','MAR','APR'];
// slice FROM Index [TO Index]
console.log(arr.slice(1,2));    // [ 'FEB' ]
console.log(arr.slice(1,3));    // [ 'FEB', 'MAR' ]
console.log(arr.slice(1,1));    // [ ]
console.log(arr.slice(1));      // [ 'FEB', 'MAR', 'APR' ]
console.log(arr); // [ 'JAN', 'FEB', 'MAR', 'APR' ]
```
### splice

The splice() method changes the contents of an array by removing existing elements and/or adding new elements.

> `array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`

```javascript
var arr = ['ONE','THREE','TEN','FOUR'];

// GOTO index AND remove X ELEMENTS AND/OR ADD ELEMENT(S)

var removedElement = arr.splice(1,0,'TWO');

console.log(removedElement); //  [] Empty Array
console.log(arr);   // [ 'ONE', 'TWO', 'THREE', 'TEN', 'FOUR' ]

removedElement = arr.splice(3,1);

console.log(removedElement);    // [ 'TEN' ]
console.log(arr);   // [ 'ONE', 'TWO', 'THREE', 'FOUR' ]  
```

### includes

The includes() method determines whether an array includes a certain element, returning true or false as appropriate.

```javascript
var arr = ['ONE','TWO','THREE'];
var isIncluded = arr.includes('TWO');
console.log(isIncluded);    // true
```
### indexOf

The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

> For the String method, see String.prototype.indexOf().

```javascript
var arr = ['ONE','TWO','THREE'];
var indexOf = arr.indexOf('THREE');
console.log(indexOf);    // 2
indexOf = arr.indexOf('FOUR');
console.log(indexOf);    // -1
```

### keys

The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

```javascript
var arr = ['ONE','TWO','THREE'];
var iterator = arr.keys();

console.log(iterator);  // {}
console.log(iterator.next());  // { value: 0, done: false }
console.log(iterator.next());  // { value: 1, done: false }
console.log(iterator.next());  // { value: 2, done: false }
console.log(iterator.next());  // { value: undefined, done: true }

// ES6 spread operator . . . 
console.log([...arr.keys()]);   // [ 0, 1, 2 ]
console.log(Object.keys(arr));  // [ '0', '1', '2' ]
```
### entries

The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

```javascript
var a = ['a', 'b', 'c'];
var iterator = a.entries();

console.log(iterator.next().value); // [0, 'a']
console.log(iterator.next().value); // [1, 'b']
console.log(iterator.next().value); // [2, 'c']

// SECOND EXAMPLE

var b = ['a', 'b', 'c'];
var iterator = b.entries();

console.log(iterator.next()); // { value: [ 0, 'a' ], done: false }
console.log(iterator.next()); // { value: [ 1, 'b' ], done: false }
console.log(iterator.next()); // { value: [ 2, 'c' ], done: false }
console.log(iterator.next()); // { value: undefined, done: true }
```

### forEach

The forEach() method executes a provided function once for each array element.

> arr.forEach(function callback(currentValue[, index[, array]]) {
    //your iterator
}[, thisArg]);

```javascript
const items = ['mon', 'tue', 'wed'];
const copy  = [];

items.forEach(function(item){
    copy.push(item.toUpperCase());
});

console.log(items);     // [ 'mon', 'tue', 'wed' ]
console.log(copy);      // [ 'MON', 'TUE', 'WED' ]
```

Second Example

```javascript
const items = ['mon', 'tue', 'wed'];
const copy  = [];
const indexes = [];

function copyAndToUppercase (element, index, array){
    copy.push(element.toUpperCase());
    indexes.push(index);
}

items.forEach(copyAndToUppercase);

console.log(items);     // [ 'mon', 'tue', 'wed' ]
console.log(copy);      // [ 'MON', 'TUE', 'WED' ]
console.log(indexes);   // [ 0, 1, 2 ]
```

Third Example: Using thisArg

```javascript
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
  // ^---- Note
};

const obj = new Counter();
obj.add([3, 5, 8]);
obj.count;    // 3 
obj.sum;      // 16
```
### filter

The filter() method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
var values = [30,10,20,40,0];

// ES5 Version
function greaterThen20 (value) {
    return value > 20;
}

const result = values.filter(greaterThen20);
console.log(result); // [ 30, 40 ]

//ES6 Version is very short
const resultNew = values.filter(el => el > 20);
console.log(resultNew); // [ 30, 40 ]
```
### map
The map() method creates a new array with the results of calling a provided function on every element in the calling array.

```javascript
var arr = [9,16,25,36];
console.log(arr.map(Math.sqrt)); // [ 3, 4, 5, 6 ]

var arr2 = [
    {foo: 'What', bar: 'Take'},
    {foo: 'Ever', bar: 5}
];

console.log(arr2.map(i => i.foo)); 
// [ 'What', 'Ever' ]

console.log(arr2.map(i => i.bar)); 
// [ 'Take', 5 ]
```

### every

The every() method tests whether all elements in the array pass the test implemented by the provided function.

```javascript
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var arr1 = [2,3,4,'Hallo',5,6];
var arr2 = [2,3,4,5,6,'7'];

// ES6 Syntax - short pattern
console.log(arr1.every(isNumeric)); // false
console.log(arr2.every(isNumeric)); // true
```

### some

The some() method tests whether at least one element in the array passes the test implemented by the provided function.

```javascript
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var arr = ['existing', 'a', 'numeric', 'value', 7];

// ES6 Syntax - short pattern
console.log(arr.some(isNumeric)); // true
```

### reduce
### reduceRight
### toString
### toLocaleString
### join

The `join()` method joins all elements of an array (or an array-like object) into a string and returns this string. If not given comma is the standard separator.

> `arr.join([separator])

```javascript
var a = ['A','B'];

console.log (a.join());         // "A,B"  
console.log (a.join(''));       // "A B"
console.log (a.join(' - '));    // "A - B"
console.log (a);                // [ 'A', 'B' ]
```

### reverse
### sort
### lastIndexOf
### copyWithin
### find
### findIndex
### fill

# Functions

Functions in JavaScript are objects and they are linked to `Function.prototype`, which is itself linked to `Object.prototype`.

## Invocation, this, arguments & patterns

Every function receives two additional parameters `this` and `arguments`.

### Function Invocation Pattern

```javascript
var myObj = { myValue: 10 };

myObj.double = function () {
    
    // this refers to myObj yet
    // store it in a local variable
    
    var that = this;
    
    function someInnerFunction () {
        
        that.myValue = that.myValue * 2;

        // this refers to global object !!
        // the following will be NaN
        
        this.myValue = this.myValue * 2;
    }
    someInnerFunction();
};

myObj.double(); // myObj.myValue = 20
```  

### Method Invocation Pattern

```javascript
var person = {
    name: 'Not set yet',
    setPersonName: function (name) {
        // this refers to person
        this.name = name;
    }
};

person.setPersonName('Michael Jackson');
```

### Constructor Invocation Pattern

Functions that are intended to be used with the `new` prefix are `constructors`. By convention they are kept in variables with a capitalized name.

```javascript
var Person = function (name) {
    this.name = name;
};

Person.prototype.getName = function () {
    return 'Name: ' + this.name;
};

var person = new Person('Michael Jackson');
console.log(person.getName());
```


### Apply Invocation Pattern

Example with Functions

```javascript
function add (a,b) { return a+b; }

var myArray = [2,3];

// this refers to null
var sum = add.apply(null,myArray);

console.log (sum); // 5
```

Example with Methods

```javascript
var Person = function (){};
  
Person.prototype.getMyName = 
	function () {return this.name};

var SomePerson = { name: 'Michael Jackson'};

// No null as first parameter, 
// this refers to SomePerson
  
var nameOfSomePerson = 
	Person.prototype.getMyName.apply(SomePerson);
console.log (nameOfSomePerson); // Michael Jackson
```

## Arguments

Bonus parameter, which gives access to all of the arguments. It is an array-like-object, has a `length` property, but it lacks all of the array methods.

[>> See here more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments)

## Return Value

A function always returns a value, if not specified then `undefined`. 

## Exceptions

```javascript
function giveMeAnException () {
    throw {
        name: 'Kind greetings from @Webia1',
        message: 'Demo Exception'
    }
}

function catchingException () {
    try {
        giveMeAnException();
    } catch (e) {
        console.log('Exception: ', e);
    }
}

catchingException();
```

## Augmenting

```javascript
String.prototype.sayHello = function () {
    return 'Hello!'
};

console.log ('someString'.sayHello());
```

## Self-Executing Anonymous Functions or better said "Immediately-Invoked Function Expression (IIFE)

Two different syntaxes:

```javascript
(function(){}())
(function(){})()
```

## Cascade

An object with chain-able methods, that returning `this`, make it possible to cascade:

```javascript
var myOperations = {
    result: 0,
    plus2: function (){
        this.result = this.result + 2;
        return this;
    },
    timesThree: function () {
        this.result = this.result * 3;
        return this;
    },
    logResult: function () {
        console.log(this.result);
    }
};

myOperations.plus2().timesThree().logResult();
```

## Closures

```javascript
var myObj = (function () {
   var myValue = 'whatever';
   return {
       getMyValue: function () { return myValue;},
       setMyValue: function (value) {
           myValue = value;
       }
   };
}());

myObj.setMyValue('Webia1');
console.log(myObj.getMyValue()); // Webia1
console.log(myObj.myValue); // undefined
```

## Callbacks

```JavaScript
function someFunction () {
    return 'Some data ';
}

function callback (f1,f2) {
    return f2(f1());
}

var foo = callback (someFunction, function(data){
   return data + 'received';
});

console.log(foo); // Some data received
```

## Curry
Currying is the way to reduce functions with several arguments to single-one. (Concatenating arguments)

```javascript
function add (a,b) {
    return a + b;
}

Function.prototype.curry = function () {
    // arguments array is not an array
    // it does not have the concat method
    // that's the gimmick:
    var slice = Array.prototype.slice;
    var args = slice.apply(arguments);
    var that = this;

    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
};

var add1 = add.curry(1);
console.log(add1(6)); // 7
``` 

## Module

Definition: A module is a function or object that presents an interface but that hides its state and implementation. (Closures + IIFE)

## Functions Object.getOwnPropertyNames(Function)

Explained in next chapter: Function.prototype (is the same)

### length
### name
### prototype

## Functions Object.getOwnPropertyNames(Function.prototype)

###  length
The length of function parameter
###  name
The name of the function
###  arguments
Function parameter (within the function) 
###  caller

The "caller" property of the arguments object has been identified as a vulnerable point for security when we mix privileged scripts and unprivileged scripts. Considering that it is not ECMA and is not planned to be part of JavaScript 2.0, we should remove it. [Details here](https://bugzilla.mozilla.org/show_bug.cgi?id=7224)

```javascript
function whoCalled() {
    if (whoCalled.caller == null)
        console.log('I was called from the global scope.');
    else
        console.log(whoCalled.caller + ' called me!');
}

function foo ()  { whoCalled();}
foo();

/*
	function foo() {
	    whoCalled();
	} called me!
*/
```

###  constructor

```javascript
function foo ()  {}
console.log(foo.constructor);
console.log(foo.constructor());	
```

###  apply

The `apply()` method calls a function with a given this value and arguments provided as an array (or an array-like object).

While the syntax of this function is almost identical to that of `call()`, the fundamental difference is that `call()` accepts an argument list, while `apply()` accepts a single array of arguments.

```javascript
// foo.apply(thisArg, [argsArray])
Math.max.apply(null,[5, 6, 2, 3, 7]); // 7

function add (a, b) {
    return a + b;
}

console.log(add.call(this, 1, 2));      // 3
console.log(add.apply(this, [1,2]));    // 3
```

#### Parameters & Returnvalue

> thisArg

The value of this provided for the call to `foo`. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, `null` and `undefined` will be replaced with the global object, and primitive values will be boxed.

> argsArray

An array-like object, specifying the arguments with which `foo` should be called, or `null` or `undefined` if no arguments should be provided to the function. Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array. 

> Return Value

The result of calling the function with the specified `this` value and `arguments`.

> apply() & Monkey-patching

[Wikipedia](https://en.wikipedia.org/wiki/Monkey_patch): The term `monkey patch` seems to have come from an earlier term, `guerrilla patch`, which referred to changing code sneakily – and possibly incompatibly with other such patches – at runtime.The word guerrilla, homophonous with gorilla (or nearly so), became monkey, possibly to make the patch sound less intimidating. An alternative etymology is that it refers to “monkeying about” with the code (messing with it).

Monkey patching is used to:
- Replace methods / attributes / functions at runtime, e.g. to stub out a function during testing;
- Modify/extend behaviour of a third-party product without maintaining a private copy of the source code;
- Apply a patch at runtime to the objects in memory, instead of the source code on disk;
- Distribute security or behavioural fixes that live alongside the original source code (an example of this would be distributing the fix as a plugin for the Ruby on Rails platform).

*Attention:* Monkey patch creates a discrepancy between the original source code on disk and the observed behaviour that can be very confusing to anyone unaware of the patches' existence.

[>> See some useful examples here](http://me.dt.in.th/page/JavaScript-override/)
 


###  bind
###  call

The `call()` method calls a function with a given this value and arguments provided as a list. (See chapter „apply“ above)

###  toString

# Regular Expressions

```JavaScript
/regexpChoice/[g][i][m] 
```

## RegExp Object.getOwnPropertyNames(RegExp)
### $&
### $'
### $+
### $1
### $2
### $3
### $4
### $5
### $6
### $7
### $8
### $9
### $_
### $`
### input
### lastMatch
### lastParen
### leftContext
### length
### name
### prototype
### rightContext
## RegExp Object.getOwnPropertyNames(RegExp.prototype)
### compile
### constructor
### exec
### flags
### global
### ignoreCase
### multiline
### source
### sticky
### test
### toString
### unicode

# Symbol

## Own
### for
### hasInstance
### isConcatSpreadable
### iterator
### keyFor
### length
### match
### name
### prototype
### replace
### search
### species
### split
### toPrimitive
### toStringTag
### unscopables

## prototype
### constructor
### toString
### valueOf

# Error

## Own
### captureStackTrace
### length
### name
### prototype
### stackTraceLimit

## Prototype
### constructor
### message
### name
### toString



# Math
## E
## LN10
## LN2
## LOG10E
## LOG2E
## PI
## SQRT1_2
## SQRT2
## abs
## acos
## acosh
## asin
## asinh
## atan
## atan2
## atanh
## cbrt
## ceil
## clz32
## cos
## cosh
## exp
## expm1
## floor
## fround
## hypot
## imul
## log
## log10
## log1p
## log2
## max
## min
## pow
## random
## round
## sign
## sin
## sinh
## sqrt
## tan
## tanh
## trunc

# Date
## Date Object.getOwnPropertyNames(Date)
### UTC
### length
### name
### now
### parse
### prototype
## Object.getOwnPropertyNames(Date.prototype)
### constructor
### getDate
### getDay
### getFullYear
### getHours
### getMilliseconds
### getMinutes
### getMonth
### getSeconds
### getTime
### getTimezoneOffset
### getUTCDate
### getUTCDay
### getUTCFullYear
### getUTCHours
### getUTCMilliseconds
### getUTCMinutes
### getUTCMonth
### getUTCSeconds
### getYear
### setDate
### setFullYear
### setHours
### setMilliseconds
### setMinutes
### setMonth
### setSeconds
### setTime
### setUTCDate
### setUTCFullYear
### setUTCHours
### setUTCMilliseconds
### setUTCMinutes
### setUTCMonth
### setUTCSeconds
### setYear
### toDateString
### toGMTString
### toISOString
### toJSON
### toLocaleDateString
### toLocaleString
### toLocaleTimeString
### toString
### toTimeString
### toUTCString
### valueOf

# Statements 

## for and for in

```javascript
var myData = ['zero', 'one', 'two', 'three'];

for (var i = 0; i < myData.length; i++) {
    console.log(myData[i]);
}

for (var item in myData) {
    console.log(item, myData[item]);
}

/* for .. of -> not available in ES5

 for (var item of myData) {
    console.log(item);
 }

 */
```

## while

```javascript
var myName = "webia1";
var i = 0;
var j = myName.length;
var temp = '';

/* Write myName backwards */
while (i < j) {
    temp += myName[j - (i+1)];
    i++;
}

console.log(myName,' => ' ,temp);
```

## do while

```javascript
var myString ='webia1'
var i = 0;

do {
    console.log (myString[i]);
    i++;
} while (i < myString.length);
```

## switch

```javascript
var whatever = "world";

switch (whatever) {
    case 'world':
        console.log ('Hello World');
        break;
    default:
        console.log('Hello '+whatever);
}
```

# Some Oddities

## typeof

```javascript
console.log(typeof {}); // object
console.log(typeof Object); // function

console.log(typeof NaN); // number
console.log(typeof 1); // number
console.log(typeof Number); // function

console.log(typeof undefined); // undefined
console.log(typeof null); // object
```

# Equality

```javascript
isNaN(NaN) // true
NaN == NaN // false
null == undefined       // true
null === undefined      // false
```

## Comments
Block comments `/* .. */` are not safe for commenting out blocks of code, for instance: 

```JavaScript 
var r = /a*/.match(s) // better use one line comment here
```

## Reserved Words 
Reserved words may not be used to name a variable, parameter or object properties.  

## Falsy Values
```JavaScript
false,
null,
0,
'',                     // Empty String
NaN
undefined
```


