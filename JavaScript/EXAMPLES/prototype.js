var myObj1 = {
    foo: 10,
    bar: 20
};

var myObj2 = Object.create(myObj1);

myObj2.foo = 77;
myObj1.foo = 33;

console.log (myObj2);               // {}
console.log (myObj2.foo);           // 77
console.log (myObj1.foo);           // 33

myObj1.baz = 'I am new';
console.log (myObj2.baz);

console.log(myObj1.hasOwnProperty('baz'));  // true
console.log(myObj2.hasOwnProperty('baz'));  // false
