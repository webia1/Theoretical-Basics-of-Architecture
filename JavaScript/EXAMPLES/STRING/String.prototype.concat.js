var hello = 'Hello, ';
console.log(hello.concat('World', '. Have a nice day.'));
// Hello, World. Have a nice day.

var greetList = ['Hello', ' ', 'World', '!'];
var result = "".concat(...greetList);

console.log(result); // Hello World!
