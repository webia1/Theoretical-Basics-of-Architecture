function add (a,b) {
    return a+b
}

function calc (a,b,callback) {
    return callback(a,b);
}

console.log(calc (3,10,add));