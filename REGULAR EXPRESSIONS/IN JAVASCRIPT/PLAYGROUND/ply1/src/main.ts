import { strict as assert } from 'assert';

// assert.notStrictEqual(1, '1');
// assert.throws(() => eval('null.nothing'), TypeError); //?

let text = 'Me foo';
let regex = /foo/iy;

if (regex.sticky) {
  regex.lastIndex = 0;
  regex.test(text); // => false

  regex.lastIndex = 3;
  regex.test(text); // => true

  regex.test(text); // => false
}
