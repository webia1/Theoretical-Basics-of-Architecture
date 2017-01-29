var myObj = function (myValue) {
    return {
        getMyValue: function () {
            return myValue;
        }
    };
};

var myNewObj = myObj('newValue');

console.log(myNewObj.myValue);  // undefined
console.log(myNewObj.getMyValue());  // newValue

