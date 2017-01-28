// anonymous function f
var f = function (a,b) {
    var e = a*b;
    return e;
};

function nonAno (a,b) {
    var e = a*b;
    console.log (e);
    return e;
};

console.log(f(2,3));    // 6
nonAno(4,5);  // 20

var whatever = 'Hallo';

// Auto Execute
(function(whatever){
    console.log ("I am, what I am,..", whatever);
    // I am, what I am,.. OK ?
})('OK ?');

console.log ('Whatever: ', whatever);
// Whatever:  Hallo



