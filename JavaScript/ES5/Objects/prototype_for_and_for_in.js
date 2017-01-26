var blackBox = {
    foo: 10,
    bar: 20
};

var myObj = Object.create(blackBox);

myObj.name = 'webia1';
myObj.foo = 100;

for (var whatever in myObj) {
    if (myObj.hasOwnProperty(whatever)) {
        console.log (whatever);
    }  // name, foo
}

for (var whatever in myObj) {
   console.log (whatever);  // name, foo, bar
}
