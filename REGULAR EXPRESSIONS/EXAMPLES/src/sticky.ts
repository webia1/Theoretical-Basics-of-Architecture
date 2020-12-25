// @ts-ignore Cannot redeclare block-scoped variable
let text = 'Me foo';
// @ts-ignore Cannot redeclare block-scoped variable
let regex = /foo/iy;

if (regex.sticky) {
  regex.lastIndex = 0;
  regex.test(text); // => false
  regex.test(text); // => false

  regex.lastIndex = 3;
  regex.test(text); // => true
  regex.test(text); // => false
}
