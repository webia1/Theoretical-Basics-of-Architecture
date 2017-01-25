#Theoretical Principles

##Statements

### For

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

### While

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

### Do While

```javascript
var myString ='webia1'
var i = 0;

do {
    console.log (myString[i]);
    i++;
} while (i < myString.length);
```

### Switch

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