var Person = function (myName) {this.myName = myName};


var p = new Person('Michael');

Person.prototype.getMyName = function () {
    return this.myName;
};



console.log(p.getMyName());