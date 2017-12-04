var myObj = function (myValue) {
    return {
        getMyValue: function () {
            return myValue;
        }
    };
};

var myNewObj = new myObj('newValue');

console.log(myNewObj.myValue);  // undefined
console.log(myNewObj.getMyValue());  // newValue

