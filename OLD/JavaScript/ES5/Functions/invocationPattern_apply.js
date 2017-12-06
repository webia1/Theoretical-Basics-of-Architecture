
function add (a,b) { return a+b; }
var myArray = [2,3];
// this refers to null
var sum = add.apply(null,myArray);
console.log (sum); // 5

var Person = function (){};
Person.prototype.getMyName = function () {return this.name};
var SomePerson = { name: 'Michael Jackson'};
// No null as first parameter, this refers to SomePerson
var nameOfSomePerson = Person.prototype.getMyName.apply(SomePerson);
console.log (nameOfSomePerson); // Michael Jackson
