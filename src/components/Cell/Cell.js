import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  render() {
    return (
      <div className={this.props.value === 0 ? 'Cell' : 'Cell selected'}>
        <span>{this.props.value === 0 ? null : this.props.value}</span>
      </div>
    );
  }
}

export default Cell;
