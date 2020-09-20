# Regular Expressions in JavaScript

> Examples (German) here: <https://webia1.github.io/regex.github.io/>

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Pattern](#pattern)
- [Caracters with special meanings](#caracters-with-special-meanings)
  - [Punctiation Characters](#punctiation-characters)
  - [Special Characters](#special-characters)
  - [Literal Characters](#literal-characters)
- [Details](#details)
- [Character Classes](#character-classes)
  - [Unicode Character Classes (ES2018)](#unicode-character-classes-es2018)

<!-- /code_chunk_output -->

## Pattern

```javascript
let pattern = /^e/; // or
let pattern = new RegExp('^e');
```

## Caracters with special meanings

### Punctiation Characters

```txt
  ^
  $
  .          Any Character except newline or another Unicode line terminator
             (with s flag -> line terminators are included)
  *
  +
  ?
  =
  !
  :
  |
  \
  /
  ()
  []         Character Classes
  {}

```

### Special Characters

```txt
  \w    Any ASCII word character. Equivalent to [a-zA-Z0-9_]
  \W    Any non ASCII word character. Equivalent to [^a-zA-Z0-9_]
  \s    Any Unicode whitespace character
  \S    Any non Unicode whitespace character
  \d    Any ASCII digit. Equivalent to [0-9]
  \D    Any character other than an ASCII digit. Equivalent to [^0-9]
  [\b]  A literal backspace (Special case).
```

### Literal Characters

```txt
  \0    NUL Character (\u0000)
  \t    Tab
  \n    Newline
  \v    Vertical Tab
  \f    Form feed
  \r    Carriage return
  \xnn  z.B. x0A for Newline
```

## Details

## Character Classes

```txt
  [abc]    Any one of the letters a, b, or c
  [^abc]   Any one character other than a, b, or c
            (A caret (^) within character classes is negation!)
  [a-z]    Hypen (-) indicates a range ()
```

### Unicode Character Classes (ES2018)

```js
  \p
  \P

/\p{Decimal_Number}/u; // one decimal digit any of the world's writing system

```
