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

