var me = function () {
  console.log ("I'am outside");
} 

function whereAreYou () {
  console.log (typeof me); // undefined
  // me(); would output "TypeError: me is not a function"
  var me = () => {
    console.log ("I'am inside");
  } 
  me(); // that would work
}

whereAreYou(); // Where are you? Inside or outside?