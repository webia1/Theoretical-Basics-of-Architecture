var myObj = {
    value: 'Initial Value',
    changeValue: function (value) {
        this.value = value;
    }
};

console.log (myObj);
// { value: 'Initial Value', changeValue: [Function: changeValue] }

myObj.changeValue('New Value');

console.log (myObj);
// { value: 'New Value', changeValue: [Function: changeValue] }