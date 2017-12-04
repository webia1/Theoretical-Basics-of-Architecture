// Wrong example !
var myObj = function () {
    var myValue = 'Initial Value';
    return {
        getMyValue: function () {
            return myValue;
        },
        setMyValue: function (value) {
            myValue = value;
        }
    }
}

/*
console.log(myObj.myValue); // undefined
console.log(myObj.getMyValue());
// TypeError: myObj.getMyValue is not a function
console.log(myObj.setMyValue('newValue'));
// TypeError: myObj.setMyValue is not a function
*/

var myNewObj = new myObj();
console.log(myNewObj.myValue); // undefined
console.log(myNewObj.getMyValue()); // 'Initial Value'
myNewObj.setMyValue('newValue');
console.log(myNewObj.getMyValue()); // 'newValue'
