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