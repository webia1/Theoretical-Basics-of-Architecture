#Functions

## Invocation Patterns related to `this`

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