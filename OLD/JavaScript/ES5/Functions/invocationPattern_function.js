var myObj = { myValue: 10 };

myObj.double = function () {
    // this refers to myObj yet
    // store it in a local variable
    var that = this;
    function someInnerFunction () {
        that.myValue = that.myValue * 2;

        // global this.myValue is undefined
        // the following will be NaN
        this.myValue = this.myValue * 2;
    }
    someInnerFunction();
};

myObj.double(); // myObj.myValue = 20


