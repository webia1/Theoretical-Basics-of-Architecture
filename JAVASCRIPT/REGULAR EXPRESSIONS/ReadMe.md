# Regular Expressions

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Overview](#overview)
  - [Main Rules](#main-rules)
  - [Engines](#engines)
    - [DFA - Deterministic Finite Automation](#dfa-deterministic-finite-automation)
    - [NFA - Nondeterministic Finite Automation](#nfa-nondeterministic-finite-automation)
      - [Traditional NFA](#traditional-nfa)
      - [POSIX](#posix)
- [Character Representations](#character-representations)
  - [Special Characters](#special-characters)
  - [Octal Escape `\num`](#octal-escape-num)
  - [Hex and Unicode Escapes: `\xnum \x{num} \unum \Unum`](#hex-and-unicode-escapes-xnum-xnum-unum-unum)
  - [Control Characters: `\cchar`](#control-characters-cchar)
- [Character Classes and Class-Like Constructs](#character-classes-and-class-like-constructs)
  - [Normal Classes](#normal-classes)
  - [Class Shorthands (Excerpt)](#class-shorthands-excerpt)
  - [Posix Character Classes (Excerpt)](#posix-character-classes-excerpt)
  - [Unicode Properties, Scripts and Blocks (Excerpt): `\p{prop} \P{prop}`](#unicode-properties-scripts-and-blocks-excerpt-pprop-pprop)
  - [Unicode Combining Character Sequence](#unicode-combining-character-sequence)
- [Glossary](#glossary)
  - [PCRE](#pcre)

<!-- /code_chunk_output -->

## Overview

### Main Rules

- The earliest (leftmost) match wins
- Standard quantifiers are greedy

### Engines

#### DFA - Deterministic Finite Automation

#### NFA - Nondeterministic Finite Automation

##### Traditional NFA

##### POSIX

Posix always picks the longest of the leftmode matches. Example: `cat|category` Would match `category` even if `cat` appears earlier.

Slower than DFA but provides:

- Capturing,
- Look-Around and
- NonGreedy Quantifiers

## Character Representations

### Special Characters

```javascript
^ $ . , - * + ? = ! : | ( ) [ ] { } \ /
```

### Octal Escape `\num`

```javascript
let re = /\015\012/; // matches an ASCII CR/LF Sequence
```

### Hex and Unicode Escapes: `\xnum \x{num} \unum \Unum`

### Control Characters: `\cchar`

## Character Classes and Class-Like Constructs

### Normal Classes

```javascript
[...] [^...]
```

### Class Shorthands (Excerpt)

```javascript
\d \w \s \b \D \W \S \B
```

### Posix Character Classes (Excerpt)

```javascript
[:alnum:] [:alpha:] [:blank:]
[:cntrl:] [:digit:] [:graph:]
[:lower:] [:print:] [:punct:]
[:space:] [:upper:] [:xdigit:]
```

### Unicode Properties, Scripts and Blocks (Excerpt): `\p{prop} \P{prop}`

See Details at: http://www.regular-expressions.info/unicode.html#category or here: https://www.fileformat.info/info/unicode/category/index.htm

```javascript
\p{L}     Letters
\p{Ll}    Lowercase Letters
\p{Lm}    Modifier Letters → Try it out
\p{Lo}    Letters other
\p{Lt}    Titlecase Letters
\p{Lu}    Uppercase Letters
\p{C}     Control codes and Characters
\p{Cc}    ASCI and Latin-1 control chracters
\p{Cf}    Nonvisible formatting Characters
\p{Cn}    Unassigned Codepoints
\p{Co}    Private use, such as company logos
\p{Cs}    Surrogates (Ersatzmittel)
\p{M}     Meant to combine with base characters,
          such as accent marks
\p{Mc}    Modification Characters
          (e.g. vowel signs: ă, ĕ, ĭ, ŏ, ŭ.)
\p{Me}    a character that encloses the character
          it is combined with (circle, square, keycap, etc.).
\p{Mn}    a character intended to be combined
          with another character without taking up
          extra space (e.g. accents, umlauts, etc.).
\p{N}     any kind of numeric character in any script.
\p{Nd}    a digit zero through nine in any script
          except ideographic scripts.
\p{Nl}    a number that looks like a letter, such as a Roman numeral
\p{No}    a superscript or subscript digit, or a number
          that is not a digit 0–9 (excluding numbers
          from ideographic scripts).
\p{P}     any kind of punctuation character
\p{Pc}    a punctuation character such as an underscore
          that connects words.
\p{Pd}    any kind of hyphen or dash
\p{Pe}    any kind of closing bracket
\p{Pi}    any kind of opening quote
\p{Pf}    any kind of closing quote
\p{Po}    any kind of punctuation character
          that is not a dash, bracket, quote or connector
\p{Ps}    any kind of opening bracket
\p{S}     math symbols, currency signs, dingbats,
          box-drawing characters, etc
\p{Sc}    any currency sign
\p{Sk}    a combining character (mark) as a
          full character on its own
\p{Sm}    any mathematical symbol
\p{So}    various symbols that are not math symbols,
          currency signs, or combining characters
\p{Z}     any kind of whitespace or invisible separator
\p{Zl}    line separator character U+2028
\p{Zp}    paragraph separator character U+2029
\p{Zs}    a whitespace character that is invisible, but does take up space
```

### Unicode Combining Character Sequence

```javascript
// prettier-ignore
\X
```

(PCRE-PHP) Matches any valid Unicode sequence, including line breaks.
Anchors and zero-width assertions

## Glossary

### PCRE

Perl Compatible Regular Expressions
