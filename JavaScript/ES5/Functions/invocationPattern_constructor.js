myObj = function (myProp) {
    this.myProp = myProp + ' my new instance ;) ';
};

myObj.prototype.setMyName = function (myName) {
    this.myName = myName;
};

myObj.prototype.getMyProp = function () {
    return 'myProp: ' + this.myProp;
};

myObj.prototype.getMyName = function () {
    return 'myName: ' + this.myName;
};

var newObj = new myObj('Hello');
newObj.setMyName('Webia1');

console.log(newObj.getMyProp());
console.log(newObj.getMyName());

