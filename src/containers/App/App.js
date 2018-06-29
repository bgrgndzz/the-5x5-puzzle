import React, { Component } from 'react';
import './App.css';

import Grid from '../Grid/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The 5x5 Puzzle</h1>
        <Grid />
      </div>
    );
  }
}

export default App;
