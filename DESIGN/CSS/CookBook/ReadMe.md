# CSS(3) Cook Book

## Using OK sign (&#10004;)

Link1: https://www.toptal.com/designers/htmlarrows/symbols/heavy-check-mark/
Link2: https://stackoverflow.com/questions/9963576/ok-or-accepted-symbol-in-html

## Working with Text in Scalable Vector Graphics (SVG)

[>> Here](https://www.hongkiat.com/blog/scalable-vector-graphics-text/)

## Breaking Words and Lines

[Here is a long explanation](https://css-tricks.com/where-lines-break-is-complicated-heres-all-the-related-css-and-html/) and an excerpt here:

The `&shy;` character is just like the `<wbr>` element. You can inject a line break via pseudo-element like `::before { content: "\A"; }` as long as the element isn’t inline (or if it is, it needs white-space: pre;)

## Hypens (Bindestriche-Silbentrennung) & Breakpoints

[css-tricks.com &rarr; hypens](https://css-tricks.com/almanac/properties/h/hyphenate/)

The hyphens property controls hyphenation of text in block level elements. 

## Styling `hr`

[Link: CSS Tricks](https://css-tricks.com/examples/hrs/)

An Excerpt:

```css

hr.style-one {
  width: 100%;
  border: 0;
  height: 2px;
  background-image: linear-gradient(
    to right,
    rgba($gray, 0),
    rgba($gray, 0.85),
    rgba($gray, 0)
  );
}


/* Inset, by Dan Eden */

hr.style-six {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
```


## Min Font Size

[One of the answers at StackOverflow, below an excerpt,..](https://stackoverflow.com/a/61892360/3025289)

```
h1{
    font-size: 10vw; /* Browsers that do not support "MIN () - MAX ()" and "Clamp ()" functions will take this value.*/
    font-size: max(100px, min(10vw, 150px)); /* Browsers that do not support the "clamp ()" function will take this value. */
    font-size: clamp(100px, 10vw, 150px);
}
```

## Simple TypeWriter Animation

```css
.cTypeWriter {
  position: relative;
  width: 400px;
  white-space: nowrap;
  overflow: hidden;
}

.cTypeWriterAnim {
  animation: typing 1s 0.3s steps(100) infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 400px;
  }
}
```
