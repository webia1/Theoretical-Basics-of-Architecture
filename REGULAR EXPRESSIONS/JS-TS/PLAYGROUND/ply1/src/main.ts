import { strict as assert } from 'assert';

// assert.notStrictEqual(1, '1');
// assert.throws(() => eval('null.nothing'), TypeError); //?

let text = 'Hello World!';
let regex = /hello/gi; // dot or digits

let m = regex.test(text); // => true

let regexPrototypes = Object.getOwnPropertyNames(RegExp.prototype); //?
let regexPrototypesTypeOf = [];

regexPrototypes.map((m, i): void => {
  // console.log (typeof RegExp.prototype[m]);

  regexPrototypesTypeOf.push({
    name: regexPrototypes[i],
    // @ts-ignore
    type:
      typeof RegExp.prototype && RegExp.prototype[m]
        ? RegExp.prototype[m]
        : '',
  });
});

console.log('Types: ', regexPrototypesTypeOf);

if (m) {
  console.log('Match: ', m);
  // Match:  [ 'Hello', index: 0, input: 'Hello World!', groups: undefined ]
  // m[0] => first match
  // m.index => index of first match
  // m.input => the text we're searching within
}
