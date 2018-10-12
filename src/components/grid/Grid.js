import React, { Component } from 'react';

import Cell from '../cell/Cell';
import { Map } from './grid_styles';


class Grid extends Component {
  render() {
    return (
      <Map
        height={ this.props.height }
        width={ this.props.width }
      >
        {this.props.cells.map((alive, key) => {
          console.log(alive);
          return (
            <Cell
              alive={ alive }
              key={ key }
            />
          );
        })}
      </Map>
    );
  }
}

export default Grid;
