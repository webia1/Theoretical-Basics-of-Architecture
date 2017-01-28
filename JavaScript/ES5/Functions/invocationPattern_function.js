var myObj = {
    myValue: 10
}

myObj.double = function () {
    var that = this;
    function innerHelperFunction () {
        that.myValue = that.myValue * 2;
    }
    innerHelperFunction();
}

myObj.double();
console.log (myObj);
// { myValue: 20, double: [Function] }

