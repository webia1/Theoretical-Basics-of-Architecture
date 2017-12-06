
var person = {
    name: 'Not set yet',
    setPersonName: function (name) {
        // this refers to person
        this.name = name;
    }
};

person.setPersonName('Michael Jackson');
