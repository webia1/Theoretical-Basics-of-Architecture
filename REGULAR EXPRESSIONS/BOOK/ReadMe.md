# Regular Expressions in JS/TS (DENGLISH)

> [Drehbuch hier](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

> [>> See Browser Compatibility here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Browser_compatibility)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=true} -->

<!-- code_chunk_output -->

1. [Syntax](#syntax)
   1. [Literale Notation: `/muster/flags`](#literale-notation-musterflags)
   2. [Mittels Konstruktor: `RegExp(muster [, flags])`](#mittels-konstruktor-regexpmuster-flags)
2. [Flags](#flags)
   1. [`g` global](#g-global)
   2. [`m` multiline](#m-multiline)
   3. [`i` insensitive](#i-insensitive)
   4. [`y` sticky](#y-sticky)
   5. [`u` unicode](#u-unicode)
3. [Built-in Properties and Methods](#built-in-properties-and-methods)
   1. [Instance properties (STANDARD)](#instance-properties-standard)
      1. [get RegExp[@@species]](#get-regexpspecies)
      2. [RegExp.prototype.dotAll](#regexpprototypedotall)
      3. [RegExp.prototype.flags](#regexpprototypeflags)
      4. [RegExp.prototype.global](#regexpprototypeglobal)
      5. [RegExp.prototype.ignoreCase](#regexpprototypeignorecase)
      6. [RegExpInstance.lastIndex](#regexpinstancelastindex)
      7. [RegExp.prototype.multiline](#regexpprototypemultiline)
      8. [RegExp.`$1-$9`](#regexp1-9)
         1. [Using $n with String.replace](#using-n-with-stringreplace)
         2. [Using $n with RegExp.test](#using-n-with-regexptest)
      9. [RegExp.prototype.source](#regexpprototypesource)
      10. [RegExp.prototype.sticky](#regexpprototypesticky)
      11. [RegExp.prototype.unicode](#regexpprototypeunicode)
      12. [Not Yet Standard Instance Properties](#not-yet-standard-instance-properties)
          1. [RegExp.input `($_)`](#regexpinput-_)
          2. [RegExp.lastMatch `($&)`](#regexplastmatch)
          3. [RegExp.lastParen `($+)`](#regexplastparen)
          4. [RegExp.leftContext ($`)](#regexpleftcontext)
          5. [RegExp.rightContext `($')`](#regexprightcontext)
   2. [Instance methods](#instance-methods)
      1. [RegExp.prototype.compile() (deprecated)](#regexpprototypecompile-deprecated)
      2. [RegExp.prototype.exec()](#regexpprototypeexec)
         1. [Exec All Matches](#exec-all-matches)
      3. [RegExp.prototype.test()](#regexpprototypetest)
      4. [RegExp.prototype.toString()](#regexpprototypetostring)
      5. [RegExp.prototype@@match](#regexpprototypematch)
      6. [RegExp.prototype@@matchAll](#regexpprototypematchall)
      7. [RegExp.prototype@@replace](#regexpprototypereplace)
      8. [RegExp.prototype@@search](#regexpprototypesearch)
      9. [RegExp.prototype@@split](#regexpprototypesplit)
4. [Cookbook](#cookbook)
   1. [Test & Exec](#test-exec)
      1. [regex.test](#regextest)
      2. [regex.exec](#regexexec)
   2. [Zeichenklassen `[...]`](#zeichenklassen)
   3. [Wiederholungen `{x,y}`](#wiederholungen-xy)
   4. [Gruppen `(...)`](#gruppen)
      1. [Teilausdrücke](#teilausdrücke)

<!-- /code_chunk_output -->

## Syntax

### Literale Notation: `/muster/flags`

```javascript
let re = /myRegexPattern/gi;
```

### Mittels Konstruktor: `RegExp(muster [, flags])`

```java
let re = new RegExp('myRegexPattern', 'gi' );
```

**Wichtig:** Zeichenklassen wie z.B. `\w` müssen escaped `\\w` werden.

When using the constructor-function, the normal string escape rules (preceding special characters with \ when included in a string) are necessary.

For example, the following are equivalent:

```javascript
let re = /\w+/;
let re = new RegExp('\\w+');
```

## Flags

### `g` global

Don't return after the first match

### `m` multiline

`^` and `$` match start/end of the line

### `i` insensitive

Case-insensitive-match

### `y` sticky

Proceed matching from where the previous match ended only. The sticky property reflects whether or not the search is sticky (searches in strings only from the index indicated by the lastIndex property of this regular expression).

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

Match with full Unicode

## Built-in Properties and Methods

### Instance properties (STANDARD)

#### get RegExp[@@species]

[>> Details here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@species)

#### RegExp.prototype.dotAll

Whether . matches newlines or not. The `dotAll` property indicates whether or not the "s" flag is used with the regular expression. `dotAll` is a read-only property of an individual regular expression instance.

#### RegExp.prototype.flags

A string that contains the flags of the RegExp object.

#### RegExp.prototype.global

Whether to test the regular expression against all possible matches in a string, or only against the first.

#### RegExp.prototype.ignoreCase

Whether to ignore case while attempting a match in a string.

#### RegExpInstance.lastIndex

[>> Details here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex)

#### RegExp.prototype.multiline

Whether or not to search in strings across multiple lines.

#### RegExp.`$1-$9`

Further details [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n).

##### Using $n with String.replace

The following script uses the replace() method of the String instance to match a name in the format first last and output it in the format last, first. In the replacement text, the script uses $1 and $2 to indicate the results of the corresponding matching parentheses in the regular expression pattern.

```javascript
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
str.replace(re, '$2, $1'); // "Smith, John"
RegExp.$1; // "John"
RegExp.$2; // "Smith"
```

##### Using $n with RegExp.test

The following script uses the test() method of the RegExp instance to grab a number in a generic string.

```javascript
var str = 'Test 24';
var number = /(\d+)/.test(str) ? RegExp.$1 : '0';
number; // "24"
```

Please note that any operation involving the usage of other regular expressions between a re.test(str) call and the RegExp.$n property, might have side effects, so that accessing these special properties should be done instantly, otherwise the result might be unexpected.

#### RegExp.prototype.source

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

#### RegExp.prototype.sticky

Whether or not the search is sticky.

#### RegExp.prototype.unicode

Whether or not Unicode features are enabled.

#### Not Yet Standard Instance Properties

See further details [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

##### RegExp.input `($_)`

##### RegExp.lastMatch `($&)`

##### RegExp.lastParen `($+)`

##### RegExp.leftContext ($`)

```javascript
($`)
```

##### RegExp.rightContext `($')`

### Instance methods

#### RegExp.prototype.compile() (deprecated)

(Re-)compiles a regular expression during the execution of a script.

#### RegExp.prototype.exec()

Executes a search for a match in its string parameter. The `exec()` method executes a search for a match in a specified string. Returns a result `array`, or `null`.

JavaScript `RegExp` objects are stateful when they have the global or sticky flags set (e.g. `/foo/g` or `/foo/y`). They store a lastIndex from the previous match. Using this internally, `exec()` can be used to iterate over multiple matches in a string of text (with capture groups), as opposed to getting just the matching strings with `String.prototype.match()`.

A newer function has been proposed to simplify matching multiple parts of a string (with capture groups): `String.prototype.matchAll()`.

If you are executing a match simply to find `true` or `false`, use `RegExp.prototype.test()` method or `String.prototype.search()` instead.

##### Exec All Matches

```javascript
let text = 'It is OK. I am 34.';
let regex = /[.\d]+/g; // dot or digits

interface RegExpExecArray {
  groups?: {
    [key: string]: string,
  };
}

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
```

#### RegExp.prototype.test()

Tests for a match in its string parameter.

#### RegExp.prototype.toString()

Returns a string representing the specified object. Overrides the Object.prototype.toString() method.

#### RegExp.prototype[@@match]()

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

#### RegExp.prototype[@@matchAll]()

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

#### RegExp.prototype[@@replace]()

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

#### RegExp.prototype[@@search]()

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

#### RegExp.prototype[@@split]()

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

## Cookbook

### Test & Exec

#### regex.test

```javascript
let text = 'Hello World!';
let regex = /hello/gi; // dot or digits

let m = regex.test(text); // => true
```

#### regex.exec

```javascript
let text = 'Hello World!';
let regex = /hello/gi; // dot or digits

let m = regex.exec(text);

if (m) {
  console.log('Match: ', m);
  // Match:  [ 'Hello', index: 0, input: 'Hello World!', groups: undefined ]
  // m[0] => first match
  // m.index => index of first match
  // m.input => the text we're searching within
}
```

### Zeichenklassen `[...]`

`/[0-9]+/` = `\d+` Beliebige Ziffer

```javascript
/\d+/gi.test('Enthält der Satz eine Nummer wie 4711?'); // true
```

### Wiederholungen `{x,y}`

`{1,2}` wenigstens einmal, höchstens zweimal <br/>
`{2}` genau viermal <br/>
`{x,}` mindestens x mal oder öfter

```javascript
let text = 'Es ist 21:00.';
let regex = /\d{1,2}:\d{2}/gi;
let match = regex.exec(text);

if (match) {
  console.log('Match: ', match[0]); // 21:00
}
```

### Gruppen `(...)`

#### Teilausdrücke

```javascript
/oh(ha)+da/gi.test('OhhahahaDa'); // true
```
