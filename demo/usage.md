---
title: Simple Usage
order: 1
---

本 Demo 演示一行文字的用法。

```jsx
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import LowcodeEngineExt from '@felce/lowcode-engine-ext';

class App extends Component {
  render() {
    return (
      <div>
        <LowcodeEngineExt />
      </div>
    );
  }
}

const root = createRoot(document.getElementById('lce-container')!);

root.render(<App />);
```
