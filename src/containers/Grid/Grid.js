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
    ],
    counter: 0
  }
  move = (row, cell) => {
    let counter = this.state.counter;
    let grid = [...this.state.grid];

    counter += 1;
    grid[row][cell] = counter;
    
    this.setState({grid, counter});
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
                move={this.move}
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
