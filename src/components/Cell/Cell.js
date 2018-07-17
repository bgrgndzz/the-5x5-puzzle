import React, { Component } from 'react';
import './Cell.css';

class Cell extends Component {
  move = () => {
    this.props.move(this.props.row, this.props.cell)
  };

  render() {
    return (
      <div 
        className={this.props.value === 0 ? 'Cell' : 'Cell selected'}
        onClick={this.move}
      >
        <span>{this.props.value === 0 ? null : this.props.value}</span>
      </div>
    );
  }
}

export default Cell;
