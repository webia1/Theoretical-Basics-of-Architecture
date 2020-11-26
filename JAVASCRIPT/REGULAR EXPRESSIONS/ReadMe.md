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

## Glossary

### PCRE

Perl Compatible Regular Expressions
