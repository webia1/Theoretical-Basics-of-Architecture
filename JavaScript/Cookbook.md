# Cookbook

## Cut file extension

```javascript
var x = 'myFoto.jpg';

// Methode 1: String.substr()
var f = x.substr(0, x.lastIndexOf('.')) || x

console.log(f); // myFoto
```

## Get file extension
```javascript
var filename = 'css/styles.css';
var ext = require('path').extname(filename);
console.log(ext); // .css
```

## `filter` array content based on search criteria

```javascript
var arr = ['big','bank', 'bold','DAnk', 'gaNg'];

function searchArray (query) {
    return arr.filter(function (item) {
       var tmp = item.toUpperCase();
       return (tmp.indexOf(query.toUpperCase()) !== -1)
    });
}

var searchResult = searchArray('an');

console.log(searchResult); // [ 'bank', 'DAnk', 'gaNg' ]
```

## Constants in ES5
```javascript
//  only in ES5 through the help of object properties
//  and only in global context and not in a block scope
Object.defineProperty(typeof global === "object" ? global : window, "PI", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
})
```
