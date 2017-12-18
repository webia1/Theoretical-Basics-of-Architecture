var arr = ['big','bank', 'bold','DAnk', 'gaNg'];

function searchArray (query) {
    return arr.filter(function (item) {
       var tmp = item.toUpperCase();
       return (tmp.indexOf(query.toUpperCase()) !== -1)
    });
}

var searchResult = searchArray('an');

console.log(searchResult); // [ 'bank', 'DAnk', 'gaNg' ]