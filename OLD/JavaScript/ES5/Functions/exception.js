function giveMeAnException () {
    throw {
        name: 'Kind greetings from @Webia1',
        message: 'Demo Exception'
    }
}

function catchingException () {
    try {
        giveMeAnException();
    } catch (e) {
        console.log('Exception: ', e);
    }
}

catchingException();