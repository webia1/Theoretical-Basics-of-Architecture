// @ts-ignore
let text = 'HelloWorldWorldW';
// @ts-ignore
let regex = /(?:world)*/gi; // dot or digits

let m: any = regex.exec(text); //?

if (m) {
  console.log('Match: ', m);
  // Match:  [ 'Hello', index: 0, input: 'Hello World!', groups: undefined ]
  // m[0] => first match
  // m.index => index of first match
  // m.input => the text we're searching within
}
