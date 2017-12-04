var data = [0,1,2,3,4,5,6,7,8,9];

console.log(data.slice(0,1));      // [ 0 ]
console.log(data.slice(2,5));      // [ 2, 3, 4 ]
console.log(data); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

console.log(data.splice(3,4));     // [ 3, 4, 5, 6 ]
console.log(data);                 // [ 0, 1, 2, 7, 8, 9 ]

Don't confuse splice with split!