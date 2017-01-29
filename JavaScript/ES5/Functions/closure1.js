var myObj = (function () {
   var myValue = 'whatever';

   return {
       getMyValue: function () {
           return myValue;
       },
       setMyValue: function (value) {
           myValue = value;
       }
   };

}());

myObj.setMyValue('Webia1')
console.log(myObj.getMyValue());