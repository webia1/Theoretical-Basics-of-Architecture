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

## [for](./source/basic_statements/for.js)

## [do while](./source/basic_statements/do_while.js)

## [while](./source/basic_statements/while.js)

## [switch](./source/basic_statements/switch.js)

## Hoisting

![Hoisting Example 1](image/hoisting_1.png)
![Hoisting Example 2](image/hoisting_2.png)
![Hoisting Example 3](image/hoisting_3.png)

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

Einige eingebaute Fehler-Konstruktoren sind: `Error(), SyntaxError(), TypeError()`, sie besitzen die Eigenschaften `name, message`. 

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