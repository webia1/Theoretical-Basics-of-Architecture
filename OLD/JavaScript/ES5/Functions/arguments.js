function add() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}


var sum = add(3,6,7,4,9,12);
console.log(sum);
