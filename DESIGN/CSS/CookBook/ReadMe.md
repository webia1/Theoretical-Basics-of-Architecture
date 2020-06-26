# CSS(3) Cook Book

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
