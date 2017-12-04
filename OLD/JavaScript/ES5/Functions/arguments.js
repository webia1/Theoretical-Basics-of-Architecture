function add() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

var myNumbers = [];
for (var i=0; i<100; i++){
    myNumbers.push(i);
}

console.log(add(1,2,3,4,5,6));

console.log(add(myNumbers));