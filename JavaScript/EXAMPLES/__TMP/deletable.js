var a =  {
    foo: 'bar'
};

console.log(Object.getOwnPropertyDescriptors(a));
console.log('Object.isExtensible: ',Object.isExtensible(a)); // true
console.log('Object.isFrozen: ',Object.isFrozen(a)); // false

Object.preventExtensions(a);

console.log('Object.isExtensible: ',Object.isExtensible(a)); // false
console.log('Object.isFrozen: ',Object.isFrozen(a)); // false

delete a.foo;

console.log('Object.isExtensible: ',Object.isExtensible(a)); // false
console.log('Object.isFrozen: ',Object.isFrozen(a)); // true
