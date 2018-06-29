import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  render() {
    return (
      <div className="Cell">
        <span>{this.props.value}</span>
      </div>
    );
  }
}

export default Cell;
