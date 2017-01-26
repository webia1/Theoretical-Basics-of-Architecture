#Objects in ES5

## Types in ES5
### SimpleTypes
* number
* string
* boolean
* null
* undefined

### Objects
* array
* function
* object

## Object Literals

```javascript
var myObject = {
	foo: true,
	bar: 'webia1'
}
```

## Retrieval

```javascript
myObject.bar   // webia1
myObject[foo]  // true
myObject[baz]  // undefined 
```
Attempting to retrieve values from undefined will throw `TypeError` exception:

`myObject[baz].name  // throw 'TypeError'`

## Prototype

Every Object is linked to `Object.prototype`, an Object that comes standard with ES5.Prototype link has no effect on Updating:

```javascript
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

myObj1.baz = 'I am new';
console.log (myObj2.baz);

console.log(myObj1.hasOwnProperty('baz'));  // true
console.log(myObj2.hasOwnProperty('baz'));  // false
```

If we add a new property to a prototype, that property will immediately be visible in all of the objects, that are based on that prototype:

```javascript
myObj1.baz = 'I am new';
console.log (myObj2.baz); // I am new 
```

The `hasOwnProperty` method does not look at the prototype chain:

```javascript
console.log(myObj1.hasOwnProperty('baz'));  // true
console.log(myObj2.hasOwnProperty('baz'));  // false
```

## Enumeration

The `for in` statement can loop over all of the property names including functions and prototype properties.

```javascript
var blackBox = {
    foo: 10,
    bar: 20
};

var myObj = Object.create(blackBox);

myObj.name = 'webia1';
myObj.foo = 100;

for (var whatever in myObj) {
    if (myObj.hasOwnProperty(whatever)) {
        console.log (whatever);
    }  // name, foo
}

for (var whatever in myObj) {
   console.log (whatever);  // name, foo, bar
}
```


## Miscellaneous[^JavaScript Good Parts - Douglas Crockford]

* A property name can be any string
* A property value can be any JavaScript value, except for `undefined`.
* Update by assignment: `myObject.foo = false`
* If object does not have the property name, the object will be augmented: `myObject.anotherFoo = false`
* Objects are passed around by reference. They are never copied.
* The `hasOwnProperty` method does not look at the prototype chain.