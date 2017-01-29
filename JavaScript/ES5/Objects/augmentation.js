Number.prototype.integer = function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
}

console.log ((-10/3).integer());


console.log('Prototype Keys', Object.keys(Number.prototype));
console.log('getOwnPropertyNames Number.prototype', Object.getOwnPropertyNames(Number.prototype));
console.log('getOwnPropertyNames Number', Object.getOwnPropertyNames(Number));


console.log('getOwnPropertyNames Array.prototype', Object.getOwnPropertyNames(Array.prototype));
console.log('getOwnPropertyNames Array', Object.getOwnPropertyNames(Array));

console.log('getOwnPropertyNames Function.prototype', Object.getOwnPropertyNames(Function.prototype));
console.log('getOwnPropertyNames Function', Object.getOwnPropertyNames(Function));

console.log('getOwnPropertyNames Boolean.prototype', Object.getOwnPropertyNames(Boolean.prototype));
console.log('getOwnPropertyNames Boolean', Object.getOwnPropertyNames(Boolean));

console.log('getOwnPropertyNames String.prototype', Object.getOwnPropertyNames(String.prototype));
console.log('getOwnPropertyNames String', Object.getOwnPropertyNames(String));

console.log('getOwnPropertyNames Object.prototype', Object.getOwnPropertyNames(Object.prototype));
console.log('getOwnPropertyNames Object', Object.getOwnPropertyNames(Object));
