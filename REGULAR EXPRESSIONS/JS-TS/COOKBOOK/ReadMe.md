# JS/TS Regex Cookbook (German)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Basics](#basics)
  - [Zeichenklassen](#zeichenklassen)
  - [Wiederholungen](#wiederholungen)
  - [Gruppen](#gruppen)
    - [Teilausdrücke](#teilausdrücke)

<!-- /code_chunk_output -->

## Basics

### Zeichenklassen

`/[0-9]+/` = `\d+` Beliebige Ziffer

```javascript
/\d+/gi.test('Enthält der Satz eine Nummer wie 4711?'); // true
```

### Wiederholungen

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

### Gruppen

#### Teilausdrücke

```javascript
/oh(ha)+da/gi.test('OhhahahaDa'); // true
```
