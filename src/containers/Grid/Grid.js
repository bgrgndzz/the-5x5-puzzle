import React, { Component } from 'react';
import './Grid.css';

import Cell from '../../components/Cell/Cell';

class Grid extends Component {
  state = {
    grid: [],
    availableMoves: [],
    counter: 0
  }
  
  getAvailableMoves = (row, cell, grid) => {
    let availableMoves = [];

    // vertical and horizontal check
    if (row  - 3 >= 0 && grid[row - 3][cell] === 0) availableMoves.push([row - 3, cell]); // top
    if (row  + 3 <= 4 && grid[row + 3][cell] === 0) availableMoves.push([row + 3, cell]); // bottom
    if (cell - 3 >= 0 && grid[row][cell - 3] === 0) availableMoves.push([row, cell - 3]); // left
    if (cell + 3 <= 4 && grid[row][cell + 3] === 0) availableMoves.push([row, cell + 3]); // right

    // diagonal check
    if (row - 2 >= 0 && cell - 2 >= 0 && grid[row - 2][cell - 2] === 0) { // top-left
      availableMoves.push([row - 2, cell - 2]);
    }
    if (row + 2 <= 4 && cell - 2 >= 0 && grid[row + 2][cell - 2] === 0) { // bottom-left
      availableMoves.push([row + 2, cell - 2]);
    }
    if (row - 2 >= 0 && cell + 2 <= 4 && grid[row - 2][cell + 2] === 0) { // top-right
      availableMoves.push([row - 2, cell + 2]);
    }
    if (row + 2 <= 4 && cell + 2 <= 4 && grid[row + 2][cell + 2] === 0) { // bottom-right
      availableMoves.push([row + 2, cell + 2]);
    }

    return availableMoves;
  }
  move = (row, cell) => {
    let counter = this.state.counter;
    let grid = [...this.state.grid];
    let availableMoves = this.state.availableMoves;
    
    const lastMove = counter;

    if (grid[row][cell] !== 0) return false; // do not move if the cell is already selected
    if (availableMoves.filter(
      availableMove => availableMove[0] == row && availableMove[1] == cell
    ).length === 0) return false; // do not move if the move is not in availableMoves

    counter += 1;
    grid[row][cell] = counter;
    availableMoves = this.getAvailableMoves(row, cell, grid);
    
    this.setState({grid, counter, availableMoves});
  }

  componentDidMount() {
    let grid = [];
    let availableMoves = [];
    // setup the grid and populate available moves
    for (let i = 0; i < 5; i++) {
      grid.push([]);
      for (let j = 0; j < 5; j++) {
        grid[grid.length - 1].push(0);
        availableMoves.push([i, j]);
      }
    }
    this.setState({grid, availableMoves});
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
