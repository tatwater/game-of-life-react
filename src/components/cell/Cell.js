import React from 'react';

import { Alive, Dead } from './cell_styles';


function Cell({ alive }) {
  if (alive) {
    return <Alive />
  } else {
    return <Dead />
  }
}

export default Cell;
