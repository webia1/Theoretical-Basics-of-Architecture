Number.prototype.integer = function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
}

console.log ((-10/3).integer());


console.log('Prototype Keys', Object.keys(Number.prototype));
console.log('getOwnPropertyNames Number.prototype', Object.getOwnPropertyNames(Number.prototype));
console.log('getOwnPropertyNames Number', Object.getOwnPropertyNames(Number));


console.log('getOwnPropertyNames Array.prototype', Object.getOwnPropertyNames(Array.prototype));
console.log('getOwnPropertyNames Array', Object.getOwnPropertyNames(Array));
