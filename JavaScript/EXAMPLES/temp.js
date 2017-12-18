    var creature  = { name: 'Default Name'};
    var mammals   = Object.create(creature);
    var dolphins  = Object.create(mammals);

    mammals.habitats = ['land','sea','air'];
    dolphins.averageExpectancy = '40 years';

    // console.log(Object.getOwnPropertyNames(dolphins));

    var o = {};

    var a = [];
    for (var i in dolphins) {
        a.unshift(i);
    }
    console.log (a);

    console.log (JSON.stringify(o));

