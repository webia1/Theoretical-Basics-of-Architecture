var a = [10,20,[30,[40, [1,2]]],50,[2,3]];

var result = [];

a.forEach(i => {
    goDeeper(i);
});


function goDeeper (a) {
    if (a.length) {
       a.forEach(i => {
          goDeeper(i);
       });
    } else {
        result.push(a);
    }
}

console.log (
    result.sort((a,b) => a-b)
);

