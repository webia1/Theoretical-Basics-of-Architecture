var arr = Object.getOwnPropertyNames(Object);
console.log (arr.length+' Elements');
arr.sort();

arr.forEach((i) => {
   console.log(i);
});
