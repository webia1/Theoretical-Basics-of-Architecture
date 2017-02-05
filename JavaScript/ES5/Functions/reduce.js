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

