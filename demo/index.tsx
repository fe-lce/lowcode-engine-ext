import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import LowcodeEngineExt from '../src/index';

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
