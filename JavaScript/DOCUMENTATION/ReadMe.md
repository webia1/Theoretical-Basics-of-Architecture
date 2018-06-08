# JavaScript Documentation

In deutscher Sprache (and sometimes in & English) :)

## Use Strict

```javascript
"use strict";
```

## Unabsichtlich erzeugte globale Variablen

```javascript
var a = b = 0; // b globale Variable
```

Globale Variablen sind Eigenschaften des globalen Objektes und können daher auch mit `delete` gelöscht werden.

## Zugriff auf das globale Objekt

```javascript {cmd="node"}
var global = (function(){
  return this;
}()); // Man beachte die zusäztlichen Klammern

console.log(global);
```

## Basic Statements

### for

```javascript
var myData = ['zero', 'one', 'two', 'three'];

for (var i = 0; i < myData.length; i++) {
    console.log(myData[i]);
}

for (var index in myData) {
    console.log(index, myData[index]);
}

/* for .. of -> not available in ES5

 for (var item of myData) {
    console.log(item);
 }

 */
```

### do while

```javascript
var myString ='webia1';
var i = 0;

do {
    console.log (myString[i]);
    i++;
} while (i < myString.length);
```

### while

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

console.log(myName,' => ' ,temp); // webia1  =>  1aibew
```

### switch

```javascript
var whatever = "world";

switch (whatever) {
    case 'world':
        console.log ('Hello World!');
        break;
    default:
        console.log('Hello ' + whatever);
}
```

## Hoisting

Function `whereAreYou` has a variable `me` too. Therefore the first `console.log`
is `undefined`.

```javascript
var me = "I'am outside";

function whereAreYou (){
  console.log (me); // undefined
  var me = "I'am inside";
  console.log (me);
}

whereAreYou(); // I'am inside
```

The same example without the second `me` works as expected:

```javascript
var me = "I'am outside";

function whereAreYou (){
  console.log (me);
}

whereAreYou(); // I'am outside
```

Same examples with `functions`.

```javascript
var me = function () {
  console.log ("I'am outside");
}

function whereAreYou (){
  console.log (typeof me); // undefined
  // me(); would output "TypeError: me is not a function"
  var me = function () { // anonym function
    console.log ("I'am inside");
  };
  me();
}

whereAreYou(); // I'am inside
```

You have exact the same behaviour with so called `array functions (ES6)`:

```javascript
var me = function () {
  console.log ("I'am outside");
};

function whereAreYou () {
  console.log (typeof me); // undefined
  // me(); would output "TypeError: me is not a function"
  var me = () => {
    console.log ("I'am inside");
  };
  me(); // that would work
}

whereAreYou(); // I'am inside
```

**Attention!** `function declarations` below work something differently!

```javascript
var me = function () {
  console.log ("I'am outside");
};

function whereAreYou (){
  console.log (typeof me); // function
  me (); // I'am inside
  function me (){
    console.log ("I'am inside");
  }
  me(); // I'am inside
}

whereAreYou();
```

## Performant `for` loops

### Suboptimal

```javascript
for (var i=0; i < myarray.length; i++){
  // ....
}
```

### Besser

```javascript
for (var i=0, max=myarray.length; i < max; i++){
  // ....
}
```

### Noch besser

```javascript
for (var i=myarray.length; i--){
  // ....
}
```

### Best (with while loop)

```javascript
var myArray = [], i = myArray.length;
while (i--) {
  // ....
}
```

## `for in` loop with `hasOwnProperty()`

```javascript
for (var i in whatever ){
  if (whatever.hasOwnProperty(i)) {
    // ....
  }
}
```

## Erweitern von eingebauten Prototypen

```javascript
if (typeof Object.prototype.myMethod !== 'function') {
  Object.prototype.myMethod = function () {
    // Implementierung
  }
}
```

## Konstruktoren mit Großbuchstaben beginnen

```javascript
function MyWhateverConstructor () { ... }
function myWhateverFunction () { ... }

var myWhatever = new MyWhateverConstructor ();
myWhateverFunction ();
```

## Selbst aufrufender Konstruktor

Hilft, wenn `new` vergessen wird.

```javascript {cmd="node"}
function Whatever () {
  if (!(this instanceof Whatever)) {
    return new Whatever();
  }
  this.description = "It is whatever!";
}

var w1 = new Whatever(),
    w2 = Whatever();

console.log (
  w1.description, // It is whatever!
  w2.description, // It is whatever!
);
```

## Regexp Literal

```javascript {cmd="node"}
// var re = /pattern/gmi;  // g..Global, m..Multiline, i..Case insensitive
var re1 = /\\/gm; // looking for a single backslash
var re2 = new RegExp ("\\\\","gm"); // looking for a single backslash

var someString = "A12X23Y";
var re = /[a-z]/gi;
var noLetters = someString.replace (re,""); // 1223

```

## Wrapper für Primitive

Diese lassen sich durch die eingebauten Konstruktoren `Number(), String() und Boolean()` erzeugen.

```javascript {cmd="node"}
var hello = "Hello World";
var myHello = hello.split(' ')[0]; // Hello
myHello.foo = 'bar'; // no error, but it does not do anything
console.log (
  typeof myHello.foo, // undefined
  myHello, // Hello
  hello, // Hello World
  );

var myHello2 = new String('Hello');
myHello2.foo = 'bar';
console.log(typeof myHello2.foo); // string
```

## Error Objects

Einige eingebaute Fehler-Konstruktoren sind: `Error(), SyntaxError(),
TypeError()`, sie besitzen die Eigenschaften `name, message`.

### Eigene Exceptions werfen

```javascript
// try {} catch (e) {}
try {
// es ist etwas bestimmtes passiert
  throw {
    name: "MyOwnWhateverErrorType",
    message: "Uuups, I did it again",
    foo: "I've a foo whatever it is",
    remedy: genericErrorHandler // Wer kümmert sich darum
  };
} catch (e) {
    console.log(e.message);
    e.remedy(); // Aufruf von genericErrorHandler()
}
```

## Funktionen

### Terminologie

```javascript
var add = function add (a,b) { return a+b; }  // named function
var add = function (a,b) { return a+b; }  // anonym function
function add (a,b) { return a+b; }  // function declaration
```

### Callback Muster

```javascript

```

## Currying

```javascript
/*
 if the function is invoked, with
 no arguments => return 0
 one argument => return preventively a function, because argument(s) missing
 two or more arguments => return the sum

 */

function add () {
    var slice = Array.prototype.slice;
    var x = slice.apply(arguments);
    if (x.length == 1) return function (n){ return x[0] + n; };
    if (x.length >= 2) return x.reduce((i,j) => i+j);
    return 0;
}

console.log(add());         // 0
console.log(add(1));        // [function]
console.log(add(1)(2));     // 3
console.log(add(1,2));      // 3
console.log(add(1,2,3,4));  // 10
```

## Cookbook Part

## isArray

```javascript
if (typeof Array.isArray === 'undefined') {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) == '[object Array]';
  }
}
```

## isNumber or isNumeric

```javascript
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
```

```javascript
function isNumeric(n) {
    return Number(parseFloat(n)) === n;
}
```

## isValueSet

```javascript
isValueSet(value: string): boolean {
  return value ? true : false;
}
```

**Falsy values:**

```javascript
null
undefined
NaN
"" // Empty String
0
false
```

## Removing duplicate characters (`...new Set()`)

```javascript
 console.log (
   [...new Set('xxyzssscabaaxbcc')].join('')
   // 'xyzscab'
 );
```

## Capitalizing (Blockbuchstaben)

```javascript
var str = "english";

var r1 = str.replace(/^./, str[0].toUpperCase());
var r2 = str.charAt(0).toUpperCase() + str.slice(1);
var r3 = str[0].toUpperCase() + str.slice(1);
var r4 = str[0].toUpperCase() + str.substr(1);
var r5 = str.replace(/^./, match => match.toUpperCase());

// Here is a defect implementation
// works with "english" but not with "engel"
// because engel[0] == engel[3]
// Use it for demonstration purposes
// for an unit-test-example

var r6 = str.split('')
    .map (s => {
        if (str.indexOf(s) === 0) return s.toUpperCase();
        return s;
    }).join ('');

// correct implemention with spread operator

var r7 = [...str]
    .map((s,i) => i ? s : s.toUpperCase())
    .join('');

/*
 * CONSIDER THE CSS SOLUTION
 p:first-letter {
 text-transform: capitalize;
 }
 * */

console.log (
    '\n' + r1, r2, r3, r4, r5,r6, r7, // English <--
    '\n' + str // english <-- not modified
);
```

## Number to Array

**Attention!** `Array.from (ES6)`

```javascript
var n = 0;
var m = 1234;

function numToArray (num) {
    return Array.from(num.toString()).map(Number);
}

console.log(numToArray(n)); // [ 0 ]
console.log(numToArray(m)); // [ 1, 2, 3, 4 ]
```