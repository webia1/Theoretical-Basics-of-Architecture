var Person = function (name) {
    this.name = name;
};

Person.prototype.getName = function () {
    return 'Name: ' + this.name;
};

var person = new Person('Michael Jackson');
console.log(person.getName());

