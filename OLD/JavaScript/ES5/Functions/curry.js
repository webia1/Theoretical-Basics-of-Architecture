function add (a,b) {
    return a + b;
}

Function.prototype.curry = function () {
    // arguments array is not an array
    // it does not have the concat method
    // that's the gimmick:
    var slice = Array.prototype.slice;
    var args = slice.apply(arguments);
    var that = this;

    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
};

var add1 = add.curry(1);
console.log(add1(6)); // 7

