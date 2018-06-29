import React, { Component } from 'react';
import './Grid.css';

import Cell from '../../components/Cell/Cell';

class Grid extends Component {
  state = {
    grid: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]
  }
  render() {
    return (
      <div className="Grid">
        {this.state.grid.map((row, rowIndex) => {
          return row.map((cell, cellIndex) => {
            return (
              <Cell 
                row={rowIndex} 
                cell={cellIndex} 
                value={cell}
                key={String(rowIndex) + String(cellIndex)}
              />
            );
          });
        })}
      </div>
    );
  }
}

export default Grid;
