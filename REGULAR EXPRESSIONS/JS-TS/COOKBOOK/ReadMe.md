# JS/TS Regex Cookbook (German)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Zeichenklassen](#zeichenklassen)
- [Wiederholungen](#wiederholungen)

<!-- /code_chunk_output -->

## Zeichenklassen

`/[0-9]/` = `[\d]` Beliebige Ziffer

## Wiederholungen

`{1,2}` wenigstens einmal, höchstens zweimal
`{2}` genau viermal
`{x,}` mindestens x mal oder öfter

```javascript
let text = 'Es ist 21:00.';
let regex = /\d{1,2}:\d{2}/gi;
let match = regex.exec(text);

if (match) {
  console.log('Match: ', match[0]); // 21:00
}
```
