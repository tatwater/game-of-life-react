import React, { Component } from 'react';

import Grid from '../grid/Grid';
import { SeedButton } from './game_styles';


class Game extends Component {
  constructor(props) {
    super(props);

    // Adjust these settings as desired
    // -----
    let height = 10;
    let width = 10;
    let seedFrequency = .3;
    // -----

    this.state = {
      cells: Array(height * width).fill(false),
      height: height,
      seedFrequency: seedFrequency,
      width: width,
    }

    this.seedCells = this.seedCells.bind(this);
  }

  seedCells() {
    let newCells = this.state.cells.slice();

    for (let i = 0; i <= newCells.length; i++) {
      newCells[i] = Math.random() <= this.state.seedFrequency;
    }

    this.setState({
      cells: newCells,
    });
  }

  render() {
    console.log(this.state.cells);
    return (
      <div>
        <Grid
          cells={ this.state.cells }
          height={ this.state.height }
          width={ this.state.width }
        />
        <SeedButton onClick={() => { this.seedCells() }}>
          Seed Cells
        </SeedButton>
      </div>
    );
  }
}

export default Game;
