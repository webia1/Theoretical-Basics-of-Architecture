function log(data) {
    return function () {
        console.log(data);
    };
}


setTimeout(log('some dynamic content'), 300);


