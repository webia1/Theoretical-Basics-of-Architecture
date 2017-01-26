var myObj = {
    foo: 10,
    bar: 20
};

// Copy no reference no prototype chain
var myObj2 = Object.assign({}, myObj);

myObj.foo = 77;

console.log(myObj2); // { foo: 10, bar: 20 }
