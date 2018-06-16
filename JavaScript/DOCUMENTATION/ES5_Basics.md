# JavaScript Basics

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

* [JavaScript Basics](#javascript-basics)
	* [SimpleTypes in ES5 (EcmaScript)](#simpletypes-in-es5-ecmascript)
	* [Number](#number)
		* [PROPERTIES](#properties)
		* [METHODS](#methods)
			* [Number.isFinite()](#numberisfinite)
			* [Number.isInteger()](#numberisinteger)
			* [Number.isNaN()](#numberisnan)
			* [Number.isSafeInteger()](#numberissafeinteger)
			* [Number.parseFloat()](#numberparsefloat)
			* [Number.parseInt()](#numberparseint)
			* [Number.prototype.toExponential()](#numberprototypetoexponential)
			* [Number.prototype.toFixed()](#numberprototypetofixed)
			* [Number.prototype.toLocaleString()](#numberprototypetolocalestring)
			* [Number.prototype.toPrecision()](#numberprototypetoprecision)
			* [Number.prototype.toSource()](#numberprototypetosource)
			* [Number.prototype.toString()](#numberprototypetostring)
			* [Number.prototype.valueOf()](#numberprototypevalueof)
	* [String](#string)
		* [PROPERTIES](#properties-1)
			* [String.prototype](#stringprototype)
			* [string.length](#stringlength)
		* [METHODS](#methods-1)
			* [String.fromCharCode()](#stringfromcharcode)
			* [String.fromCodePoint()](#stringfromcodepoint)
			* [String.prototype.anchor()](#stringprototypeanchor)
			* [String.prototype.big()](#stringprototypebig)
			* [String.prototype.blink()](#stringprototypeblink)
			* [String.prototype.bold()](#stringprototypebold)
			* [String.prototype.charAt()](#stringprototypecharat)
			* [String.prototype.charCodeAt()](#stringprototypecharcodeat)
			* [String.prototype.codePointAt()](#stringprototypecodepointat)
			* [String.prototype.concat()](#stringprototypeconcat)
			* [String.prototype.endsWith()](#stringprototypeendswith)
			* [String.prototype.fixed()](#stringprototypefixed)
			* [String.prototype.fontcolor()](#stringprototypefontcolor)
			* [String.prototype.fontsize()](#stringprototypefontsize)
			* [String.prototype.includes()](#stringprototypeincludes)
			* [String.prototype.indexOf()](#stringprototypeindexof)
			* [String.prototype.italics()](#stringprototypeitalics)
			* [String.prototype.lastIndexOf()](#stringprototypelastindexof)
			* [String.prototype.link()](#stringprototypelink)
			* [String.prototype.localeCompare()](#stringprototypelocalecompare)
			* [String.prototype.match()](#stringprototypematch)
			* [String.prototype.normalize()](#stringprototypenormalize)
			* [String.prototype.padEnd()](#stringprototypepadend)
			* [String.prototype.padStart()](#stringprototypepadstart)
			* [String.prototype.quote()](#stringprototypequote)
			* [String.prototype.repeat()](#stringprototyperepeat)
			* [String.prototype.replace()](#stringprototypereplace)
			* [String.prototype.search()](#stringprototypesearch)
			* [String.prototype.slice()](#stringprototypeslice)
			* [String.prototype.small()](#stringprototypesmall)
			* [String.prototype.split()](#stringprototypesplit)
			* [String.prototype.startsWith()](#stringprototypestartswith)
			* [String.prototype.strike()](#stringprototypestrike)
			* [String.prototype.sub()](#stringprototypesub)
			* [String.prototype.substr()](#stringprototypesubstr)
			* [String.prototype.substring()](#stringprototypesubstring)
			* [String.prototype.sup()](#stringprototypesup)
			* [String.prototype.toLocaleLowerCase()](#stringprototypetolocalelowercase)
			* [String.prototype.toLocaleUpperCase()](#stringprototypetolocaleuppercase)
			* [String.prototype.toLowerCase()](#stringprototypetolowercase)
			* [String.prototype.toSource()](#stringprototypetosource)
			* [String.prototype.toString()](#stringprototypetostring)
			* [String.prototype.toUpperCase()](#stringprototypetouppercase)
			* [String.prototype.trim()](#stringprototypetrim)
			* [String.prototype.trimLeft()](#stringprototypetrimleft)
			* [String.prototype.trimRight()](#stringprototypetrimright)
			* [String.prototype.valueOf()](#stringprototypevalueof)
			* [String.prototype@@iterator](#stringprototypeiterator)
			* [String.raw()](#stringraw)
* [typeof](#typeof)
	* [Checking if Array](#checking-if-array)
* [Objects](#objects)
	* [Object Retrieval](#object-retrieval)
	* [Object Enumeration](#object-enumeration)
	* [Object Prototype](#object-prototype)
		* [Object Prototyp Augmentation](#object-prototyp-augmentation)
	* [Object Object.getOwnPropertyNames(Object)](#object-objectgetownpropertynamesobject)
		* [length](#length)
		* [name](#name)
		* [prototype](#prototype)
		* [assign](#assign)
		* [getOwnPropertyDescriptor](#getownpropertydescriptor)
		* [getOwnPropertyDescriptors](#getownpropertydescriptors)
		* [getOwnPropertyNames](#getownpropertynames)
		* [getOwnPropertySymbols](#getownpropertysymbols)
		* [is](#is)
		* [preventExtensions](#preventextensions)
		* [seal](#seal)
		* [create](#create)
		* [defineProperties](#defineproperties)
		* [defineProperty](#defineproperty)
		* [freeze](#freeze)
		* [getPrototypeOf](#getprototypeof)
		* [setPrototypeOf](#setprototypeof)
		* [isExtensible](#isextensible)
		* [isFrozen](#isfrozen)
		* [isSealed](#issealed)
		* [keys](#keys)
		* [entries](#entries)
		* [values](#values)
	* [Object Object.getOwnPropertyNames(Object.prototype)](#object-objectgetownpropertynamesobjectprototype)
		* [constructor](#constructor)
		* [__defineGetter__](#__definegetter__)
		* [__defineSetter__](#__definesetter__)
		* [hasOwnProperty](#hasownproperty)
		* [__lookupGetter__](#__lookupgetter__)
		* [__lookupSetter__](#__lookupsetter__)
		* [isPrototypeOf](#isprototypeof)
		* [propertyIsEnumerable](#propertyisenumerable)
		* [toString](#tostring)
		* [valueOf](#valueof)
		* [__proto__](#__proto__)
		* [toLocaleString](#tolocalestring)
* [Arrays](#arrays)
	* [Array Object.getOwnPropertyNames(Array)](#array-objectgetownpropertynamesarray)
		* [length](#length-1)
		* [name](#name-1)
		* [prototype](#prototype-1)
		* [isArray](#isarray)
		* [from](#from)
		* [of](#of)
	* [Object.getOwnPropertyNames(Array.prototype)](#objectgetownpropertynamesarrayprototype)
		* [length](#length-2)
		* [concat](#concat)
		* [pop](#pop)
		* [push](#push)
		* [shift](#shift)
		* [unshift](#unshift)
		* [slice](#slice)
		* [splice](#splice)
		* [includes](#includes)
		* [indexOf](#indexof)
		* [keys](#keys-1)
		* [entries](#entries-1)
		* [forEach](#foreach)
		* [filter](#filter)
		* [map](#map)
		* [every](#every)
		* [some](#some)
		* [reduce](#reduce)
		* [reduceRight](#reduceright)
		* [toString](#tostring-1)
		* [toLocaleString](#tolocalestring-1)
		* [join](#join)
		* [reverse](#reverse)
		* [sort](#sort)
		* [lastIndexOf](#lastindexof)
		* [copyWithin](#copywithin)
		* [find](#find)
		* [findIndex](#findindex)
		* [fill](#fill)
		* [Array.from](#arrayfrom)
		* [Array.isArray](#arrayisarray)
		* [Array.of](#arrayof)
* [Functions](#functions)
	* [Invocation, this, arguments & patterns](#invocation-this-arguments-patterns)
		* [Function Invocation Pattern](#function-invocation-pattern)
		* [Method Invocation Pattern](#method-invocation-pattern)
		* [Constructor Invocation Pattern](#constructor-invocation-pattern)
		* [Apply Invocation Pattern](#apply-invocation-pattern)
	* [Arguments](#arguments)
	* [Return Value](#return-value)
	* [Exceptions](#exceptions)
	* [Augmenting](#augmenting)
	* [Self-Executing Anonymous Functions or better said "Immediately-Invoked Function Expression (IIFE)](#self-executing-anonymous-functions-or-better-said-immediately-invoked-function-expression-iife)
	* [Cascade](#cascade)
	* [Closures](#closures)
	* [Callbacks](#callbacks)
	* [Curry](#curry)
	* [Module](#module)
	* [Functions Object.getOwnPropertyNames(Function)](#functions-objectgetownpropertynamesfunction)
		* [length](#length-3)
		* [name](#name-2)
		* [prototype](#prototype-2)
	* [Functions Object.getOwnPropertyNames(Function.prototype)](#functions-objectgetownpropertynamesfunctionprototype)
		* [length](#length-4)
		* [name](#name-3)
		* [arguments](#arguments-1)
		* [caller](#caller)
		* [constructor](#constructor-1)
		* [apply](#apply)
			* [Parameters & Returnvalue](#parameters-returnvalue)
		* [bind](#bind)
		* [call](#call)
		* [toString](#tostring-2)
* [Regular Expressions](#regular-expressions)
	* [RegExp Object.getOwnPropertyNames(RegExp)](#regexp-objectgetownpropertynamesregexp)
		* [$&](#)
		* [$'](#-1)
		* [$+](#-2)
		* [$1](#1)
		* [$2](#2)
		* [$3](#3)
		* [$4](#4)
		* [$5](#5)
		* [$6](#6)
		* [$7](#7)
		* [$8](#8)
		* [$9](#9)
		* [$_](#_)
		* [$`](#-3)
		* [input](#input)
		* [lastMatch](#lastmatch)
		* [lastParen](#lastparen)
		* [leftContext](#leftcontext)
		* [length](#length-5)
		* [name](#name-4)
		* [prototype](#prototype-3)
		* [rightContext](#rightcontext)
	* [RegExp Object.getOwnPropertyNames(RegExp.prototype)](#regexp-objectgetownpropertynamesregexpprototype)
		* [compile](#compile)
		* [constructor](#constructor-2)
		* [exec](#exec)
		* [flags](#flags)
		* [global](#global)
		* [ignoreCase](#ignorecase)
		* [multiline](#multiline)
		* [source](#source)
		* [sticky](#sticky)
		* [test](#test)
		* [toString](#tostring-3)
		* [unicode](#unicode)
* [Symbol](#symbol)
	* [Own](#own)
		* [for](#for)
		* [hasInstance](#hasinstance)
		* [isConcatSpreadable](#isconcatspreadable)
		* [iterator](#iterator)
		* [keyFor](#keyfor)
		* [length](#length-6)
		* [match](#match)
		* [name](#name-5)
		* [prototype](#prototype-4)
		* [replace](#replace)
		* [search](#search)
		* [species](#species)
		* [split](#split)
		* [toPrimitive](#toprimitive)
		* [toStringTag](#tostringtag)
		* [unscopables](#unscopables)
	* [prototype](#prototype-5)
		* [constructor](#constructor-3)
		* [toString](#tostring-4)
		* [valueOf](#valueof-1)
* [Error](#error)
	* [Own](#own-1)
		* [captureStackTrace](#capturestacktrace)
		* [length](#length-7)
		* [name](#name-6)
		* [prototype](#prototype-6)
		* [stackTraceLimit](#stacktracelimit)
	* [Prototype](#prototype-7)
		* [constructor](#constructor-4)
		* [message](#message)
		* [name](#name-7)
		* [toString](#tostring-5)
* [Math](#math)
	* [E](#e)
	* [LN10](#ln10)
	* [LN2](#ln2)
	* [LOG10E](#log10e)
	* [LOG2E](#log2e)
	* [PI](#pi)
	* [SQRT1_2](#sqrt1_2)
	* [SQRT2](#sqrt2)
	* [abs](#abs)
	* [acos](#acos)
	* [acosh](#acosh)
	* [asin](#asin)
	* [asinh](#asinh)
	* [atan](#atan)
	* [atan2](#atan2)
	* [atanh](#atanh)
	* [cbrt](#cbrt)
	* [ceil](#ceil)
	* [clz32](#clz32)
	* [cos](#cos)
	* [cosh](#cosh)
	* [exp](#exp)
	* [expm1](#expm1)
	* [floor](#floor)
	* [fround](#fround)
	* [hypot](#hypot)
	* [imul](#imul)
	* [log](#log)
	* [log10](#log10)
	* [log1p](#log1p)
	* [log2](#log2)
	* [max](#max)
	* [min](#min)
	* [pow](#pow)
	* [random](#random)
	* [round](#round)
	* [sign](#sign)
	* [sin](#sin)
	* [sinh](#sinh)
	* [sqrt](#sqrt)
	* [tan](#tan)
	* [tanh](#tanh)
	* [trunc](#trunc)
* [Date](#date)
	* [Date Object.getOwnPropertyNames(Date)](#date-objectgetownpropertynamesdate)
		* [UTC](#utc)
		* [length](#length-8)
		* [name](#name-8)
		* [now](#now)
		* [parse](#parse)
		* [prototype](#prototype-8)
	* [Object.getOwnPropertyNames(Date.prototype)](#objectgetownpropertynamesdateprototype)
		* [constructor](#constructor-5)
		* [getDate](#getdate)
		* [getDay](#getday)
		* [getFullYear](#getfullyear)
		* [getHours](#gethours)
		* [getMilliseconds](#getmilliseconds)
		* [getMinutes](#getminutes)
		* [getMonth](#getmonth)
		* [getSeconds](#getseconds)
		* [getTime](#gettime)
		* [getTimezoneOffset](#gettimezoneoffset)
		* [getUTCDate](#getutcdate)
		* [getUTCDay](#getutcday)
		* [getUTCFullYear](#getutcfullyear)
		* [getUTCHours](#getutchours)
		* [getUTCMilliseconds](#getutcmilliseconds)
		* [getUTCMinutes](#getutcminutes)
		* [getUTCMonth](#getutcmonth)
		* [getUTCSeconds](#getutcseconds)
		* [getYear](#getyear)
		* [setDate](#setdate)
		* [setFullYear](#setfullyear)
		* [setHours](#sethours)
		* [setMilliseconds](#setmilliseconds)
		* [setMinutes](#setminutes)
		* [setMonth](#setmonth)
		* [setSeconds](#setseconds)
		* [setTime](#settime)
		* [setUTCDate](#setutcdate)
		* [setUTCFullYear](#setutcfullyear)
		* [setUTCHours](#setutchours)
		* [setUTCMilliseconds](#setutcmilliseconds)
		* [setUTCMinutes](#setutcminutes)
		* [setUTCMonth](#setutcmonth)
		* [setUTCSeconds](#setutcseconds)
		* [setYear](#setyear)
		* [toDateString](#todatestring)
		* [toGMTString](#togmtstring)
		* [toISOString](#toisostring)
		* [toJSON](#tojson)
		* [toLocaleDateString](#tolocaledatestring)
		* [toLocaleString](#tolocalestring-2)
		* [toLocaleTimeString](#tolocaletimestring)
		* [toString](#tostring-6)
		* [toTimeString](#totimestring)
		* [toUTCString](#toutcstring)
		* [valueOf](#valueof-2)
* [Statements](#statements)
	* [for and for in](#for-and-for-in)
	* [while](#while)
	* [do while](#do-while)
	* [switch](#switch)
* [Some Oddities](#some-oddities)
	* [typeof](#typeof-1)
* [Equality](#equality)
	* [Comments](#comments)
	* [Reserved Words](#reserved-words)
	* [Falsy Values](#falsy-values)

<!-- /code_chunk_output -->

## SimpleTypes in ES5 (EcmaScript)

`boolean`, `null`, `undefined`, `Infinity`, `NaN`, `Number`

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

## Number


### PROPERTIES
```javascript
console.log(
    Number.EPSILON, // smallest float point difference
    Number.MAX_SAFE_INTEGER,
    Number.MAX_VALUE, // MAX_VALUE + 1 <= INFINITY
    Number.MIN_SAFE_INTEGER, // = - MAX_SAFE_INTEGER
    Number.MIN_VALUE, // Values < MIN_VALUE = 0
    Number.NEGATIVE_INFINITY, // -Infinity
    Number.NaN, // NaN
    Number.POSITIVE_INFINITY // Infinity
);
```

### METHODS

#### Number.isFinite()

The Number.isFinite() method determines whether the passed value is a finite number. **Important:** In comparison to the global `isFinite()` function, this method doesn't forcibly convert the parameter to a number. This means only values of the type number, that are also finite, return true.

```javascript
Number.isFinite(Infinity);  // false
Number.isFinite(NaN);       // false
Number.isFinite(-Infinity); // false

Number.isFinite(0);         // true
Number.isFinite(2e40);      // true

Number.isFinite('0');       // false, would've been true with
                            // global isFinite('0')
Number.isFinite(null);      // false, would've been true with
                            // global isFinite(null)
```
#### Number.isInteger()
The Number.isInteger() method determines whether the passed value is an integer. If the target value is an integer, return true, otherwise return false. If the value is NaN or infinite, return false.

#### Number.isNaN()
The `Number.isNaN()` method determines whether the passed value is `NaN` and its type is Number. It is a more robust version of the original, global isNaN().

Due to both equality operators, == and ===, evaluating to false when checking if NaN is NaN, the function `Number.isNaN()` has become necessary. This situation is unlike all other possible value comparisons in JavaScript.

#### Number.isSafeInteger()
The `Number.isSafeInteger()` method determines whether the provided value is a number that is a safe integer. A safe integer is an integer that

- can be exactly represented as an IEEE-754 double precision number, and
- whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.

For example, 253 - 1 is a safe integer: it can be exactly represented, and no other integer rounds to it under any IEEE-754 rounding mode. In contrast, 253 is not a safe integer: it can be exactly represented in IEEE-754, but the integer 253 + 1 can't be directly represented in IEEE-754 but instead rounds to 253 under round-to-nearest and round-to-zero rounding.  The safe integers consist of all integers from -(253 - 1) inclusive to 253 - 1 inclusive (± 9007199254740991 or ± 9,007,199,254,740,991).  

Handling values larger or smalller than ~9 quadrillion with full precision requires using an arbitrary precision arithmetic library.  See [What Every Programmer Needs to Know about Floating Point Arithmetic](http://floating-point-gui.de/) for more information [on floating point representations of numbers](https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic).

> [Academic Paper about Floaing Point Arithmetic from Oracle](https://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html)


#### Number.parseFloat()

The `Number.parseFloat()` method parses a string argument and returns a floating point number. This method behaves identically to the global function [`parseFloat()`](#TODO) and is part of ECMAScript 2015 (its purpose is modularization of globals).

#### Number.parseInt()

**Important Suggestion:** always specify a radix!

This method has the same functionality as the global [`parseInt()`](#TODO) function.

> `parseInt(string, radix);`

**radix:** An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems)

Return value: An integer number parsed from the given string. If the first character cannot be converted to a number, `NaN` is returned.

**Attention:**

Because some numbers include the e character in their string representation (e.g. 6.022e23), using parseInt to truncate numeric values will produce unexpected results when used on very large or very small numbers. parseInt should not be used as a substitute for `Math.floor()`.

To convert number to its string literal in a particular radix use intValue.toString(radix).

```javascript
a = 5;
console.log(a.toString (2)); // 101

// ATTENTION!
// console.log(5.toString(2));
// SyntaxError: Invalid or unexpected token

console.log(5..toString(2)); // 101

```

#### Number.prototype.toExponential()
The toExponential() method returns a string representing the Number object in exponential notation.

 ```javascript
 (1230.456).toExponential(2); // "1.23e+3"
 ```

#### Number.prototype.toFixed()
The toFixed() method formats a number using fixed-point notation. The number is rounded if necessary, and the fractional part is padded with zeros if necessary so that it has the specified length. If numObj is greater than 1e+21, this method simply calls Number.prototype.toString() and returns a string in exponential notation.

```javascript
console.log(
  2.4673.toFixed(),      // 2
  2.4673.toFixed(1),     // 2,5
  2.4673.toFixed(2),     // 2,47

  -2.4673.toFixed(2),    // -2,47 number
  (-2.4673).toFixed(2),  // "-2,47" string
    
  //ATTENTION  
  typeof (-2.4673.toFixed(2)),    // number
  typeof ((-2.4673).toFixed(2)),  // string
);
```

#### Number.prototype.toLocaleString()

The toLocaleString() method returns a string with a language sensitive representation of this number. [See Details here online.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)

```javascript
var number = 123456.78912;

function toLocaleStringSupportsOptions() {
    return !!(typeof Intl == 'object' && Intl && typeof Intl.NumberFormat == 'function');
}

if (toLocaleStringSupportsOptions()) {
// request a currency format
    console.log(number.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR',
        maximumSignificantDigits: 8,
        minimumFractionDigits: 2
    }));

// → 123.456,79 €
}
```
#### Number.prototype.toPrecision()

The toPrecision() method returns a string representing the Number object to the specified precision.

> `numObj.toPrecision([precision])`

```javascript
var n = 0.2345;
var j = 3.2345;
// precision between 1 and 100
console.log(
    n.toPrecision(),   // "0.2345"
    n.toPrecision(1),  // "0.2"
    n.toPrecision(2),  // "0.23"
    n.toPrecision(3),  // "0.234" <-- ROUND DOWN
    n.toPrecision(4),  // "0.2345" 
    n.toPrecision(5),   // "0.23450"

    j.toPrecision(),   // "3.2345"
    j.toPrecision(1),  // "3.2"
    j.toPrecision(2),  // "3.23"
    j.toPrecision(3),  // "3.235" <-- ROUND UP
    j.toPrecision(4),  // "3.2345"
    j.toPrecision(5)   // "3.23450"
);
```
#### Number.prototype.toSource()
Non-Standard, do not use!
#### Number.prototype.toString()

> `numObj.toString([radix])`

#### Number.prototype.valueOf()
The valueOf() method returns the wrapped primitive value of a Number object.

> `numObj.valueOf()`

This method is usually called internally by JavaScript and not explicitly in web code.

```javascript
var numObj = new Number(10);
console.log(typeof numObj); // object

var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // number
```

## String

```JavaScript
'A' === "\u0041"               // true
'myString'.length              // 8
'c' + 'a' + 'r' === 'car'      // true
'car'.toUpperCase() === 'CAR'  // true
```

### PROPERTIES
#### String.prototype
#### string.length

### METHODS
#### String.fromCharCode()
The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.

> `String.fromCharCode(num1[, ...[, numN]])`

`String.fromCharCode(65, 66, 67); // "ABC"`

#### String.fromCodePoint()
The static String.fromCodePoint() method returns a string created by using the specified sequence of code points.

> `String.fromCodePoint(num1[, ...[, numN]])`


- `String.fromCodePoint()` Not supported by Internet Explorer and Safari
- `String.fromCharCode()` Supported since for ever, double as fast

**The difference:**

Although most common Unicode values can be represented with one 16-bit number (as expected early on during JavaScript standardization) and fromCharCode() can be used to return a single character for the most common values (i.e., UCS-2 values which are the subset of UTF-16 with the most common characters), in order to deal with ALL legal Unicode values (up to 21 bits), fromCharCode() alone is inadequate. Since the higher code point characters use two (lower value) "surrogate" numbers to form a single character, `String.fromCodePoint()` (part of the ES6 draft) can be used to return such a pair and thus adequately represent these higher valued characters.

#### String.prototype.anchor()
> Deprecated

#### String.prototype.big()
> Deprecated

#### String.prototype.blink()
> Deprecated

#### String.prototype.bold()
> Deprecated

#### String.prototype.charAt()
The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
> [See better online](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)

#### String.prototype.charCodeAt()
`'ABC'.charCodeAt(0); // 65`

#### String.prototype.codePointAt()
`'ABC'.codePointAt(1); // 66`

#### String.prototype.concat()
The concat() function combines the text from one or more strings and returns a new string. Changes to the text in one string do not affect the other string.

```javascript
var hello = 'Hello, ';
console.log(hello.concat('World', '. Have a nice day.'));
// Hello, World. Have a nice day.

var greetList = ['Hello', ' ', 'World', '!'];
var result = "".concat(...greetList);

console.log(result); // Hello World!
```

#### String.prototype.endsWith()
The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

> `str.endsWith(searchString[, length])`

```javascript
var str = 'To be, or not to be, that is the question.';

console.log(str.endsWith('question.')); // true
console.log(str.endsWith('to be'));     // false
console.log(str.endsWith('to be', 19)); // true
``` 

#### String.prototype.fixed()
> Deprecated

#### String.prototype.fontcolor()
> Deprecated

#### String.prototype.fontsize()
> Deprecated

#### String.prototype.includes()
The includes() method determines whether one string may be found within another string, returning true or false as appropriate. The `includes()` method is case sensitive.

> `str.includes(searchString[, position])`

```javascript
var s = "On the roof";
console.log(s.includes('on')); // false
console.log(s.includes('On')); // true
``` 
#### String.prototype.indexOf()
The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found. The `indexOf()` is case sensitive.

The return value is the index of the first occurrence of searchValue, or -1 if not found.
An empty string searchValue will match at any index between 0 and `str.length`.

> `str.indexOf(searchValue[, fromIndex])`

```javascript
var s = 'Come on onto the roof';
// -----------^--^-------------
// ------0----5--8-------------

console.log(s.indexOf('on'));   // 5
console.log(s.indexOf('on',6)); // 8
``` 

#### String.prototype.italics()
> Deprecated

#### String.prototype.lastIndexOf()
The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found, it is is case sensitive.


> `str.lastIndexOf(searchValue[, fromIndex])`

```javascript
var s = "to be or not to be";
// ------0---------------^--
console.log(s.lastIndexOf('be')); // 16
```


#### String.prototype.link()
> Deprecated

#### String.prototype.localeCompare()
The localeCompare() method returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order.

The new locales and options arguments let applications specify the language whose sort order should be used and customize the behavior of the function. In older implementations, which ignore the locales and options arguments, the locale and sort order used are entirely implementation dependent.
> `referenceStr.localeCompare(compareString[, locales[, options]])`

```javascript
// The letter "a" is before "c" yielding a negative value
'a'.localeCompare('c'); // -2 or -1 (or some other negative value)

// Alphabetically the word "check" comes after "against" yielding a positive value
'check'.localeCompare('against'); // 2 or 1 (or some other positive value)

// "a" and "a" are equivalent yielding a neutral value of zero
'a'.localeCompare('a'); // 0
``` 

localeCompare enables a case-insensitive sort of an array:

```javascript
var items = ['cliché', 'communiqué', 'café', 'adieu'];
items.sort((a, b) => a.localeCompare(b)); 
// ['adieu', 'café', 'cliché', 'communiqué']
``` 

#### String.prototype.match()
The match() method retrieves the matches when matching a string against a regular expression.

> `str.match(regexp)`

If the string matches the expression, it will return an Array containing the entire matched string as the first element, followed by any results captured in parentheses. If there were no matches, null is returned.

#### String.prototype.normalize()
#### String.prototype.padEnd()
#### String.prototype.padStart()
#### String.prototype.quote()
#### String.prototype.repeat()
#### String.prototype.replace()
#### String.prototype.search()
#### String.prototype.slice()
#### String.prototype.small()
#### String.prototype.split()
#### String.prototype.startsWith()
#### String.prototype.strike()
#### String.prototype.sub()
#### String.prototype.substr()
#### String.prototype.substring()
#### String.prototype.sup()
#### String.prototype.toLocaleLowerCase()
#### String.prototype.toLocaleUpperCase()
#### String.prototype.toLowerCase()
#### String.prototype.toSource()
#### String.prototype.toString()
#### String.prototype.toUpperCase()
#### String.prototype.trim()
#### String.prototype.trimLeft()
#### String.prototype.trimRight()
#### String.prototype.valueOf()
#### String.prototype[@@iterator]()
#### String.raw()

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
The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```javascript
const array1 = [1, 2, 3, 4];
const reducer = function (accumulator, currentValue) {
    return accumulator + currentValue;
}

console.log(array1.reduce(reducer));
// 1 + 2 + 3 + 4 = 10

console.log(array1.reduce(reducer, 5));
// 5 + 1 + 2 + 3 + 4 = 15
```
### reduceRight
The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

```javascript
var arr = [[0, 1], [2, 3], ['4', 5]];
function concatElements (a,b){
    return a.concat(b);
}

var flattened = arr.reduceRight(concatElements,[3]);

console.log(flattened);
// [ 3, '4', 5, 2, 3, 0, 1 ]
```
### toString

The `toString()` method returns a string representing the specified array and its elements.

```javascript
var arr = ['one', 'two', 3];

var toStringResult = arr.toString();
var joinResult = arr.join();

console.log (toStringResult); // one,two,3
console.log (joinResult); // one,two,3

console.log (toStringResult == joinResult);  // true
console.log (toStringResult === joinResult); // true
```

### toLocaleString

The toLocaleString() method returns a string representing the elements of the array. The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).

> [See Details at Developer.Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toLocaleString)

> [See some related issues at StackOverFlow](https://stackoverflow.com/questions/47931763/array-prototype-tolocalestring-number-formatting-issue)

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
The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
```javascript
var a = [1,2,3,4];
a.reverse();
console.log(a); // [ 4, 3, 2, 1 ]
```
### sort
The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.

The time and space complexity of the sort cannot be guaranteed as it is implementation independent.

```javascript
var numArr = [1, 10, 21, 2];
console.log(numArr.sort()); // [1, 10, 2, 21]

function compareNumbers(a, b) {
    return a - b;
}
console.log(numArr.sort(compareNumbers)); // 1,2,10,21

function compareStrings (a,b) {
    var A = a.toUpperCase();
    var B = b.toUpperCase();

    if (A < B ) return -1;
    if (A > B ) return 1;
    return 0;
}

var strArr = ['Mon','FRI','SAT', 'MON','TUE', 'Son' ];

console.log(strArr.sort(compareStrings));
// [ 'FRI', 'Mon', 'MON', 'SAT', 'Son', 'TUE' ]
```

### lastIndexOf
The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched (case-sensitiv) backwards, starting at fromIndex.

> `arr.lastIndexOf(searchElement)`

> `arr.lastIndexOf(searchElement, fromIndex)`

```javascript
var s = "on tuesday or on monday";
var a = s.split(' ');

console.log (a.map(e => a.indexOf(e)+': '+e));
// [ '0: on', '1: tuesday', '2: or', '3: on', '4: monday' ]

console.log (a.lastIndexOf('on')); // 3
console.log (a.indexOf('on')); // 0
console.log (a.lastIndexOf('xx')); // -1
```
### copyWithin
The copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its size.

> `arr.copyWithin(target)`

> `arr.copyWithin(target, start)`

> `arr.copyWithin(target, start, end)`

```javascript
var a = ['a','b','c','d','e','f','g','h'];
console.log(a.copyWithin(2));
// moving array from 0 if not given 2 places right (if positive)
//  [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
//     0 -  1 -  2 -  3  - 4 -  5 -  6 -  7
//              'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'
//  [ 'a', 'b', 'a', 'b', 'c', 'd', 'e', 'f' ]


b = ['a','b','c','d','e','f','g','h'];
console.log(b.copyWithin(2,1));
//  [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
//     0 -  1 -  2 -  3  - 4 -  5 -  6 -  7
//              'b', 'c', 'd', 'e', 'f', 'g', 'h'
//  [ 'a', 'b',                              ]
//  [ 'a', 'b', 'b', 'c', 'd', 'e', 'f', 'g' ]

c = ['a','b','c','d','e','f','g','h'];
console.log(c.copyWithin(3,0));
//  [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
//     0 -  1 -  2 -  3  - 4 -  5 -  6 -  7
//                   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'
//  [ 'a', 'b', 'c',                         ]
//  [ 'a', 'b', 'c', 'a', 'b', 'c', 'd', 'e' ]

d = ['a','b','c','d','e','f','g','h'];
console.log(d.copyWithin(1,4));
//  [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
//     0 -  1 -  2 -  3  - 4 -  5 -  6 -  7
//         'e', 'f', 'g', 'h'
//  [ 'a',                     'f', 'g', 'h' ]
//  [ 'a', 'e', 'f', 'g', 'h', 'f', 'g', 'h' ]


e = ['a','b','c','d','e','f','g','h'];
console.log(e.copyWithin(1,4,5));
//  [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
//     0 -  1 -  2 -  3  - 4 -  5 -  6 -  7
//         'e',
//  [ 'a',      'c', 'd', 'e', 'f', 'g', 'h' ]
//  [ 'a', 'e', 'c', 'd', 'e', 'f', 'g', 'h' ]

f = ['a','b','c','d','e','f','g','h'];

console.log(f.copyWithin(4,2,5));

//  copy elements between 2 & 5 (= c,d,e) -> to 4 
//  [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]
//               ^    ^    ^
//               |    |    |
//     0 -  1 -  2 -  3  - 4 -  5 -  6 -  7
//                         |    
//                        'c', 'd', 'e', 
//  [ 'a', 'b', 'c', 'd',  |    |    |   'h' ]
//  [ 'a', 'b', 'c', 'd', 'c', 'd', 'e', 'h' ]
```

### find
The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

```javascript
var a = [11,2,13,4,15,6,17,8];

console.log(a.find(i => i > 13)); // 15
console.log(a.find(i => i > 100)); // undefined
```

### findIndex
The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.

```javascript
var a = [11,2,13,4,15,6,17,8];

console.log(a.findIndex(i => i > 13)); // 4
console.log(a.findIndex(i => i > 100)); // -1
```

### fill
The fill() method fills all the elements of an array from a start index to an end index with a static value.

> `arr.fill(value[, start[, end]])`

```javascript
var numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.fill(1));       // [ 1, 1, 1,  1,   1,  1 ]
console.log(numbers.fill('a',3,5)); // [ 1, 1, 1, 'a', 'a', 1 ]
```

### Array.from 
The `Array.from()` method creates a new Array instance from an array-like or iterable object.

> Parameters: arrayLike, [mapFn], [thisArg]

> Return value: A new Array instance

```javascript
var a = Array.from('foo');
console.log(a); // [ 'f', 'o', 'o' ]

function returnArrayFromArgs () {
    return Array.from(arguments);
}

var result = returnArrayFromArgs(1,2,4,'hallo',true,{a: 2});
console.log(result); [ 1, 2, 4, 'hallo', true, { a: 2 } ]

var x = [9,25];
result = Array.from (x,Math.sqrt);
console.log(result); // [ 3, 5 ]

x = [3,5];
result = Array.from (x,x => x*x);
console.log(result); // [ 9, 25 ]
```

### Array.isArray
The `Array.isArray()` function determines whether the passed value is an Array.

```javascript
Array.isArray([1, 2, 3]);  // true
```

### Array.of
The Array.of() method creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.

The difference between Array.of() and the Array constructor is in the handling of integer arguments: Array.of(7) creates an array with a single element, 7, whereas Array(7) creates an empty array with a length property of 7 (Note: this implies an array of 7 empty slots, not slots with actual undefined values).

```javascript
console.log(Array.of(7));  // [ 7 ]
console.log(Array.of(2018, 'Hi', '!')); // [ 2018, 'Hi', '!' ]

console.log(Array(7));  // [ <7 empty items> ]
console.log(Array(2018, 'Hi', '!'));    // [ 2018, 'Hi', '!' ]
```


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


