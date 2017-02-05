#Miscellaneous

## hasOwnProperty

```javascript
var myObj = {
    myData: ['one', 'two', 'three', 'four']
};

if (myObj.hasOwnProperty('myData')) {
    console.log(myObj.myData);
}

```

## typeof

```javascript
var myArray = [
    'a String',
    0, -1, 1, 123,
    null,
    undefined,
    true,
    false,
    NaN,
    ['one', 'two'],
    {
        myFunc: function () {
            return 'myFunc'
        }
    }
];

for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i] + ' is type of ', typeof myArray[i]);
}

var myFunc2 = function (a,b) {
    return a+b;
}

var myObj = {};

console.log (typeof (myFunc2));     // function
console.log (typeof (myArray));     // object
console.log (typeof (myObj));       // object
console.log (typeof (null));        // object !!

console.log (typeof (myArray)   === typeof (myObj));    // true
console.log (typeof (myFunc2)   === 'function');        // true
console.log (typeof (myObj)     === 'object');          // true
console.log (typeof undefined   === 'undefined');       // true
console.log (typeof undefined   === undefined);         // false



```