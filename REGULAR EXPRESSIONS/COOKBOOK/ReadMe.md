# JS/TS Regex Cookbook (German)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Basics](#basics)
  - [Zeichenklassen `[...]`](#zeichenklassen)
  - [Wiederholungen `{x,y}`](#wiederholungen-xy)
  - [Gruppen `(...)`](#gruppen)
    - [Teilausdrücke](#teilausdrücke)

<!-- /code_chunk_output -->

## Basics

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
