#Table of Contents
{{TOC}}

#Introduction

Based on: Loose Typing, (Dynamic) Objects, Functions, Prototypal Inheritance, Classfree Object System (Expressive Object Literal System).  

# Types in ES5
## SimpleTypes
### Number
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

#### Number Property Names

```JavaScript
console.log(Object.getOwnPropertyNames(Number));

/*
[ 'length',
  'name',
  'prototype',
  'isFinite',
  'isInteger',
  'isNaN',
  'isSafeInteger',
  'parseFloat',
  'parseInt',
  'MAX_VALUE',
  'MIN_VALUE',
  'NaN',
  'NEGATIVE_INFINITY',
  'POSITIVE_INFINITY',
  'MAX_SAFE_INTEGER',
  'MIN_SAFE_INTEGER',
  'EPSILON' ]
*/

```

#### Number Prototyp Property Names

```javascript

console.log(Object.getOwnPropertyNames(Number.prototype));

/*
[ 'constructor',
  'toExponential',
  'toFixed',
  'toPrecision',
  'toString',
  'valueOf',
  'toLocaleString',
  'integer' ]
*/
``` 
### String

```JavaScript
'A' === "\u0041"               // true
'myString'.length              // 8
'c' + 'a' + 'r' === 'car'      // true
'car'.toUpperCase() === 'CAR'  // true
```

#### String Property Names

```javascript
Object.getOwnPropertyNames(String);
/*
[ 'length',
  'name',
  'prototype',
  'fromCharCode',
  'fromCodePoint',
  'raw' ]
*/
```

#### String Prototyp Property Names

```javascript
Object.getOwnPropertyNames(String.prototype);

/*
[ 'length',
  'constructor',
  'charAt',
  'charCodeAt',
  'concat',
  'endsWith',
  'includes',
  'indexOf',
  'lastIndexOf',
  'localeCompare',
  'normalize',
  'replace',
  'slice',
  'split',
  'substr',
  'substring',
  'startsWith',
  'toString',
  'trim',
  'trimLeft',
  'trimRight',
  'toLowerCase',
  'toUpperCase',
  'valueOf',
  'match',
  'search',
  'anchor',
  'big',
  'blink',
  'bold',
  'fixed',
  'fontcolor',
  'fontsize',
  'italics',
  'link',
  'small',
  'strike',
  'sub',
  'sup',
  'repeat',
  'codePointAt',
  'padStart',
  'padEnd',
  'toLocaleLowerCase',
  'toLocaleUpperCase' ]
*/
```
### boolean
### null
### undefined

### typeof

The values produced by `typeof` are: `number`, `string`, `boolean`, `undefined`, `function`, `object`

**Attention**: ` typeof(array) // 'object'` 

**Attention**: ` typeof(null) === 'object' // true` 

#### Checking if Array

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


## Objects

### Object Literals

```javascript
var myObject = {
	foo: true,
	bar: 'webia1'
}
```

#### Object Retrieval

```javascript
myObject.bar   // webia1
myObject[foo]  // true
myObject[baz]  // undefined 
```
Attempting to retrieve values from undefined will throw `TypeError` exception:

`myObject[baz].name  // throw 'TypeError'`

#### Object Prototype

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

##### hasOwnProperty

The `hasOwnProperty` method does not look at the prototype chain:

```JavaScript
console.log(myObj1.hasOwnProperty('baz'));  // true
console.log(myObj2.hasOwnProperty('baz'));  // false
```

##### Object Prototyp Augmentation

```javascript
Number.prototype.integer = function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
}

console.log ((-10/3).integer());    // -3
```
 
###### Object.key

Now you can check, which `keys` you have added manually, with the following statement:

```javascript
Object.keys(Number.prototype); // [ 'integer' ]
```

 
#### Object Property Names

```javascript

Object.getOwnPropertyNames(Object);

[ 'length',
  'name',
  'prototype',
  'assign',
  'getOwnPropertyDescriptor',
  'getOwnPropertyDescriptors',
  'getOwnPropertyNames',
  'getOwnPropertySymbols',
  'is',
  'preventExtensions',
  'seal',
  'create',
  'defineProperties',
  'defineProperty',
  'freeze',
  'getPrototypeOf',
  'setPrototypeOf',
  'isExtensible',
  'isFrozen',
  'isSealed',
  'keys',
  'entries',
  'values' ]
```

#### Object Prototyp Property Names

```javascript

Object.getOwnPropertyNames(Object.prototype);

[ 'constructor',
  '__defineGetter__',
  '__defineSetter__',
  'hasOwnProperty',
  '__lookupGetter__',
  '__lookupSetter__',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toString',
  'valueOf',
  '__proto__',
  'toLocaleString' ]

```

#### Object Enumeration

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

#### Object.create

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

#### Object.assign

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

#### Object Miscellaneous

* A property value can be any JavaScript value, except for `undefined`.
* If object does not have the property name, the object will be augmented
* Objects are passed around by reference. They are never copied.


### Arrays
### Functions

Functions in JavaScript are objects and they are linked to `Function.prototype`, which is itself linked to `Object.prototype`.

#### Invocation, this, args

Every function receives two additional parameters `this` and `args`.

#### Function Invocation Pattern

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

#### Method Invocation Pattern

```javascript

```

## Regular Expressions

```JavaScript
/regexpChoice/[g][i][m] 
```

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
null == undefined       // true
null === undefined      // false
```

