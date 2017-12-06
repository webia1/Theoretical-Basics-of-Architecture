var MyClosureObject = (function (){
    var MyName = 'Michael Jackson';
    return {
        getMyName: function () { return MyName;},
        setMyName: function (name) { MyName = name}
    }
}());

console.log(MyClosureObject.getMyName()); // Michael JAckson
MyClosureObject.setMyName('George Michael');
console.log(MyClosureObject.getMyName()); // George Michael
console.log(MyClosureObject.MyName); // undefined