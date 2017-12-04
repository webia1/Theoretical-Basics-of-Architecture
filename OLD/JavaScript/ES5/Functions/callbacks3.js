function setTextForObject (text, object) {
    return 'My Text is: '+text+' for Object: '+object+ ' and its color is: ';
}

function getColor () {
    return 'red';
}

function getObject () {
    return 'car';
}

function doAll (text, object, textObjectCallback, colorCallback) {
    console.log(textObjectCallback(text,object), colorCallback);
}
// see the difference
doAll('OK', getObject(), setTextForObject, getColor());