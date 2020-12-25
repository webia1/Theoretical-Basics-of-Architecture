# RegularExpressions in JS/TS

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
   6. [`s` single line](#s-single-line)

<!-- /code_chunk_output -->

## Syntax

### Literale Notation: `/muster/flags`

```javascript
let re = /myRegexPattern/gi;
```

### Mittels Konstruktor: `RegExp(muster [, flags])`

Wichtig: Zeichenklassen wie z.B. `\w` müssen escaped `\\w` werden, später mehr dazu.

```java
let re = new RegExp('myRegexPattern', 'gi' );
```

## Flags

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

Match with full Unicode
