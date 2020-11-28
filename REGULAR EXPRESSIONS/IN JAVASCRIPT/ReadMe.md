# Regular Expressions in JavaScript

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Regex Flags](#regex-flags)
  - [`g` global](#g-global)
  - [`m` multiline](#m-multiline)
  - [`i` insensitive](#i-insensitive)
  - [`y` sticky](#y-sticky)
  - [`u` unicode](#u-unicode)
  - [`s` single line](#s-single-line)
- [Instance properties](#instance-properties)
  - [RegExp.prototype.flags](#regexpprototypeflags)
  - [RegExp.prototype.dotAll](#regexpprototypedotall)
  - [RegExp.prototype.global](#regexpprototypeglobal)
  - [RegExp.prototype.ignoreCase](#regexpprototypeignorecase)
  - [RegExp.prototype.multiline](#regexpprototypemultiline)
  - [RegExp.prototype.source](#regexpprototypesource)
  - [RegExp.prototype.sticky](#regexpprototypesticky)
  - [RegExp.prototype.unicode](#regexpprototypeunicode)
- [Instance methods](#instance-methods)
  - [RegExp.prototype.compile() (deprecated)](#regexpprototypecompile-deprecated)
  - [RegExp.prototype.exec()](#regexpprototypeexec)
  - [RegExp.prototype.test()](#regexpprototypetest)
  - [RegExp.prototype.toString()](#regexpprototypetostring)
  - [RegExp.prototype@@match](#regexpprototypematch)
  - [RegExp.prototype@@matchAll](#regexpprototypematchall)
  - [RegExp.prototype@@replace](#regexpprototypereplace)
  - [RegExp.prototype@@search](#regexpprototypesearch)
  - [RegExp.prototype@@split](#regexpprototypesplit)
- [Basics](#basics)

<!-- /code_chunk_output -->

## Regex Flags

### `g` global

Don't return after first match

### `m` multiline

`^` and `$` match start/end of line

### `i` insensitive

Case insensitive match

### `y` sticky

Proceed matching from where previous match ended only. The sticky property reflects whether or not the search is sticky (searches in strings only from the index indicated by the lastIndex property of this regular expression).

> See here: <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky>

```javascript
let text = 'Me foo';
let regex = /foo/iy;

if (regex.sticky) {
  // => true

  regex.lastIndex = 0;
  regex.test(text); // => false
  regex.test(text); // => false

  regex.lastIndex = 3;
  regex.test(text); // => true
  regex.test(text); // => false
}
```

### `u` unicode

Match with full unicode

### `s` single line

Dot matches newline

## Instance properties

### RegExp.prototype.flags

A string that contains the flags of the RegExp object.

### RegExp.prototype.dotAll

Whether . matches newlines or not. The `dotAll` property indicates whether or not the "s" flag is used with the regular expression. `dotAll` is a read-only property of an individual regular expression instance.

### RegExp.prototype.global

Whether to test the regular expression against all possible matches in a string, or only against the first.

### RegExp.prototype.ignoreCase

Whether to ignore case while attempting a match in a string.

### RegExp.prototype.multiline

Whether or not to search in strings across multiple lines.

### RegExp.prototype.source

The text of the pattern. The source property returns a `String` containing the source text of the regexp object, and it doesn't contain the two forward slashes on both sides and any flags.

```javascript
const regex1 = /fooBar/gi;

console.log(regex1.source);
// output: "fooBar"

console.log(new RegExp().source);
// output: "(?:)"

console.log(new RegExp('\b').source === '\\b');
// output: true
```

### RegExp.prototype.sticky

Whether or not the search is sticky.

### RegExp.prototype.unicode

Whether or not Unicode features are enabled.

## Instance methods

### RegExp.prototype.compile() (deprecated)

(Re-)compiles a regular expression during execution of a script.

### RegExp.prototype.exec()

Executes a search for a match in its string parameter. The `exec()` method executes a search for a match in a specified string. Returns a result `array`, or `null`.

JavaScript `RegExp` objects are stateful when they have the global or sticky flags set (e.g. `/foo/g` or `/foo/y`). They store a lastIndex from the previous match. Using this internally, `exec()` can be used to iterate over multiple matches in a string of text (with capture groups), as opposed to getting just the matching strings with `String.prototype.match()`.

A newer function has been proposed to simplify matching multiple parts of a string (with capture groups): `String.prototype.matchAll()`.

If you are executing a match simply to find `true` or `false`, use `RegExp.prototype.test()` method or `String.prototype.search()` instead.

### RegExp.prototype.test()

Tests for a match in its string parameter.

### RegExp.prototype.toString()

Returns a string representing the specified object. Overrides the Object.prototype.toString() method.

### RegExp.prototype[@@match]()

Performs match to given string and returns match result.

```javascript
class RegExp1 extends RegExp {
  [Symbol.match](str) {
    const result = RegExp.prototype[Symbol.match].call(this, str);
    if (result) {
      return 'VALID';
    }
    return 'INVALID';
  }
}

console.log(
  '2012-07-02'.match(new RegExp1('([0-9]+)-([0-9]+)-([0-9]+)')),
);
// output: "VALID"
```

### RegExp.prototype[@@matchAll]()

Returns all matches of the regular expression against a string.

```javascript
class MyRegExp extends RegExp {
  [Symbol.matchAll](str) {
    const result = RegExp.prototype[Symbol.matchAll].call(this, str);
    if (!result) {
      return null;
    }
    return Array.from(result);
  }
}

const re = new MyRegExp('-[0-9]+', 'g');
console.log('2016-01-02|2019-03-07'.matchAll(re));
// output: Array [Array ["-01"], Array ["-02"],
//         Array ["-03"], Array ["-07"]]
```

### RegExp.prototype[@@replace]()

Replaces matches in given string with new substring.

```javascript
class RegExp1 extends RegExp {
  [Symbol.replace](str) {
    return RegExp.prototype[Symbol.replace].call(this, str, '#!@?');
  }
}

console.log('football'.replace(new RegExp1('foo')));
// expected output: "#!@?tball"
```

### RegExp.prototype[@@search]()

Searches the match in given string and returns the index the pattern found in the string.

```javascript
class RegExp1 extends RegExp {
  constructor(str) {
    super(str);
    this.pattern = str;
  }
  [Symbol.search](str) {
    return str.indexOf(this.pattern);
  }
}

console.log('table football'.search(new RegExp1('foo')));
// expected output: 6
```

### RegExp.prototype[@@split]()

Splits given string into an array by separating the string into substrings.

```javascript
class RegExp1 extends RegExp {
  [Symbol.split](str, limit) {
    const result = RegExp.prototype[Symbol.split].call(
      this,
      str,
      limit,
    );
    return result.map((x) => `(${x})`);
  }
}

console.log('2016-01-02'.split(new RegExp1('-')));
// expected output: Array ["(2016)", "(01)", "(02)"]

console.log('2016-01-02'.split(new RegExp('-')));
// expected output: Array ["2016", "01", "02"]
```

## Basics

```javascript
let re1 = new RegExp('hi', 'ig');
let re2 = /hi/gi; // literal notation
```

When using the constructor function, the normal string escape rules (preceding special characters with \ when included in a string) are necessary.

For example, the following are equivalent:

```javascript
let re = /\w+/;
let re = new RegExp('\\w+');
```
