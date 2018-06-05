var me = function () {
  console.log ("I'am outside");
} 

function whereAreYou (){
  console.log (typeof me); // undefined
  var me = function (){
    console.log ("I'am inside");
  }; 
  me(); 
}

whereAreYou(); // I'am inside