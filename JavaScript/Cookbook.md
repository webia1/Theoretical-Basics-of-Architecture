# Cookbook

## Cut file extension

```javascript
var x = 'myFoto.jpg';

// Methode 1: String.substr()
var f = x.substr(0, x.lastIndexOf('.')) || x

console.log(f); // myFoto
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
