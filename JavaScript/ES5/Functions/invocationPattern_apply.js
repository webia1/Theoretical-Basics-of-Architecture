var myArray = [2,3];
function add (a,b) { return a+b; }

// apply's first argument is the value,
// that should be bound to 'this'
var sum = add.apply(null,myArray);

console.log (sum);
