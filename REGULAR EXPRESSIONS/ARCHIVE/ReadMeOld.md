# Regular Expressions in JavaScript

> Examples (German) here: <https://webia1.github.io/regex.github.io/>

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Pattern](#pattern)
- [Caracters with special meanings](#caracters-with-special-meanings)
  - [Punctiation Characters](#punctiation-characters)
    - [^](#)
    - [\$](#-1)
    - [.](#-2)
    - [\*](#-3)
    - [+](#-4)
    - [?](#-5)
    - [=](#-6)
      - [(?=...) Positive Look Ahead](#positive-look-ahead)
    - [!](#-7)
    - [:](#-8)
    - [|](#-9)
    - [\\](#-10)
    - [/](#-11)
    - [()](#-12)
    - [[]](#-13)
    - [{}](#-14)
  - [Special Characters](#special-characters)
    - [\w](#w)
    - [\W](#w-1)
    - [\s](#s)
    - [\S](#s-1)
    - [\d](#d)
    - [\D](#d-1)
    - [[\b]](#b)
  - [Literal Characters](#literal-characters)
    - [\0](#0)
    - [\t](#t)
    - [\n](#n)
    - [\v](#v)
    - [\f](#f)
    - [\r](#r)
    - [\xnn](#xnn)
- [Details](#details)
- [Character Classes](#character-classes)
  - [Unicode Character Classes (ES2018)](#unicode-character-classes-es2018)

<!-- /code_chunk_output -->

## Pattern

```javascript
let pattern = /^e/gims; // or
let pattern = new RegExp('^e');
```

## Caracters with special meanings

### Punctiation Characters

#### ^

Start of string, or the point after newline if match mode `/m`

#### \$

End of search string, or before any newline if match mode `/m`

#### .

Any Character except newline or another Unicode line terminator (with s flag -> line terminators are included)

#### \*

0 or more

#### +

1 or more

#### ?

0 or 1

#### =

##### (?=...) Positive Look Ahead

Asserts that the given subpattern can be matched here, without consuming characters

```javascript
'foobar foobaz'.match(/foo(?=bar)/gi); // => ["foo"]
```

#### !

in negative lookea-head/behind etc, details later

#### :

(?:...) Match everything enclose

#### |

(a|b) a or b

#### \\

#### /

#### ()

#### []

Character Classes

#### {}

### Special Characters

#### \w

Any ASCII word character. Equivalent to [a-zA-Z0-9_]

#### \W

Any non ASCII word character. Equivalent to [^a-za-z0-9_]

#### \s

Any Unicode whitespace character

#### \S

Any non Unicode whitespace character

#### \d

Any ASCII digit. Equivalent to [0-9]

#### \D

Any character other than an ASCII digit. Equivalent to [^0-9]

#### [\b]

A literal backspace (Special case).

### Literal Characters

#### \0

NUL Character (\u0000)

#### \t

Tab

#### \n

Newline

#### \v

Vertical Tab

#### \f

Form feed

#### \r

Carriage return

#### \xnn

z.B. x0A for Newline

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
