const items = ['mon', 'tue', 'wed'];
const copy  = [];

items.forEach(function(item){
    copy.push(item.toUpperCase());
});

console.log(items);     // [  ]'mon', 'tue', 'wed' ]
console.log(copy);      // [ 'MON', 'TUE', 'WED'