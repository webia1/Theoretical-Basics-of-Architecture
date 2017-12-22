const items = ['mon', 'tue', 'wed'];
const copy  = [];
const indexes = [];

function copyAndToUppercase (element, index, array){
    copy.push(element.toUpperCase());
    indexes.push(index);
}

items.forEach(copyAndToUppercase);

console.log(items);     // [ 'mon', 'tue', 'wed' ]
console.log(copy);      // [ 'MON', 'TUE', 'WED' ]
console.log(indexes);   // [ 0, 1, 2 ]