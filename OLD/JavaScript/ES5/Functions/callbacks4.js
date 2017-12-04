function myFunction (arg1, arg2, callback) {
    var my_number = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
    callback(my_number);
}

myFunction (1, 49, function(num) {
    console.log("1 from 49: " + num);
});