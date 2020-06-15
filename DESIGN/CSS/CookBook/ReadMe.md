# CSS(3) Cook Book

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
