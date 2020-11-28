import { strict as assert } from 'assert';

// assert.notStrictEqual(1, '1');
// assert.throws(() => eval('null.nothing'), TypeError); //?

let text = 'It is OK. I am 34.';
let regex = /OK/g; // dot or digits

console.log(text.replace(regex, 'ok'));
