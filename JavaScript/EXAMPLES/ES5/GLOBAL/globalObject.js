var global = (function(){return this;});
var globalObject = global();

function search (term){
    for (var item in globalObject) {
        var tmp = item.toUpperCase();
        var index = tmp.indexOf(term.toUpperCase());
        if ( index !== -1){
            console.log(item);
        }
    }
}

search('');



