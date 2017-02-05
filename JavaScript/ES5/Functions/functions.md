#Functions

## Table of Contents

{{TOC}}

## Introduction

```javascript
// anonymous function
var f = function (a,b) {
    return a*b;
};

function nonAno (a,b) {
    return a*b;
};

console.log(f(2,3));        // 6
console.log(nonAno(4,5));   // 20




```

### Callbacks

```javascript
function myFunction (arg1, arg2, callback) {
    var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
    callback(my_number);
}

myFunction (1, 49, function(num) {
    console.log("1 from 49: " + num);
});
```

### Closure

```javascript
var myObj = (function () {
   var myValue = 'whatever';

   return {
       getMyValue: function () {
           return myValue;
       },
       setMyValue: function (value) {
           myValue = value;
       }
   };

}());

myObj.setMyValue('Webia1')
console.log(myObj.getMyValue());
```

### Auto Execution

```javascript
// Auto Execute
(function(whatever){
    console.log ("I am, what I am,..", whatever);
    // I am, what I am,.. OK ?
})('OK ?');
```

### Reduce

```javascript
var data = [1,2,3,4,5,6,7,8,9];

/*
data.reduce = function (f,value) {
    for (var i=0; i < this.length; i++) {
        value = f(this[i],value);
    }
    return value;
}
*/

function add (a,b) { return a+b; }
function multiply (a,b) { return a*b; }

console.log(data.reduce(add,0));
console.log(data.reduce(multiply,1));

```

## Invocation Patterns related to ***this***

### Function Invocation Pattern

```javascript
var myObj = {
    myValue: 10
}

myObj.double = function () {
    var that = this;
    function innerHelperFunction () {
        that.myValue = that.myValue * 2;
    }
    innerHelperFunction();
}

myObj.double();
console.log (myObj);
// { myValue: 20, double: [Function] }

```

### Method Invocation Pattern

```javascript
var myObj = {
    value: 'Initial Value',
    changeValue: function (value) {
        this.value = value;
    }
};

console.log (myObj);
// { value: 'Initial Value', changeValue: [Function: changeValue] }

myObj.changeValue('New Value');

console.log (myObj);
// { value: 'New Value', changeValue: [Function: changeValue] }
```

### Constructor Invocation Pattern

```javascript
myObj = function (myProp) {
    this.myProp = myProp + ' my new instance ;) ';
};

myObj.prototype.setMyName = function (myName) {
    this.myName = myName;
};

myObj.prototype.getMyProp = function () {
    return 'myProp: ' + this.myProp;
};

myObj.prototype.getMyName = function () {
    return 'myName: ' + this.myName;
};

var newObj = new myObj('Hello');
newObj.setMyName('Webia1');

console.log(newObj.getMyProp());
console.log(newObj.getMyName());

```

### Apply Invocation Pattern

```javascript
var myArray = [2,3];
function add (a,b) { return a+b; }

// apply's first argument is the value,
// that should be bound to 'this'
var sum = add.apply(null,myArray);

console.log (sum);
```