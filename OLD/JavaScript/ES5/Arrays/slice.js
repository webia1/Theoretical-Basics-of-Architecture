var arr = ['JAN','FEB','MAR','APR'];
// slice FROM Index [TO Index]
console.log(arr.slice(1,2));    // [ 'FEB' ]
console.log(arr.slice(1,3));    // [ 'FEB', 'MAR' ]
console.log(arr.slice(1,1));    // [ ]
console.log(arr.slice(1));      // [ 'FEB', 'MAR', 'APR' ]
console.log(arr); // [ 'JAN', 'FEB', 'MAR', 'APR' ]
