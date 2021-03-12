# React

## Simple Component

```jsx
import React from 'react';
import './App.css';

class App extends React.Component {

  myName = "Webia1";
  constructor (props) {
    super(props);
    this.state = {
      myName: this.myName
    };
  }

```

## Simple Hook Example

```tsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
