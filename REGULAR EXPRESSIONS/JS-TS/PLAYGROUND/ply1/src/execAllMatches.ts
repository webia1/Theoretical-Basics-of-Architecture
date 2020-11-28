// @ts-ignore Cannot redeclare block-scoped variable
let text = 'It is OK. I am 34.';
// @ts-ignore Cannot redeclare block-scoped variable
let regex = /[.\d]+/g; // dot or digits

let match: RegExpExecArray | null;
let matchArray = [];

while ((match = regex.exec(text))) {
  // The following is necessary to avoid infinite loops
  // width zero-width matches
  if (match.index === regex.lastIndex) {
    regex.lastIndex++;
  }

  if (match[0]) {
    matchArray.push(match[0]);
  }
}

console.log('Matches: ', matchArray);
// output: Matches:  [ '.', '34.' ]
