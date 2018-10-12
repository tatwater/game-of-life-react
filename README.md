# Game of Life

By Teagan Atwater

## Project Setup

Call `yarn install` from the project directory.

## Run the Project

Call `npm start` from the project directory and open `http://localhost:3000` in a browser.

## Thoughts

### Design direction

- Game controls all grid data for each generation (describing alive/dead cells)
- Game calculates each subsequent grid state on timer
- Parent lays out all Children, passing individual state
- Children render with alive/dead styles

### Remaining Steps

- Complete debugging of seed function (currently crashes browser)
- Build liveOrDie function, which looks up surrounding grid squares' boolean values, tallying the trues and returning a boolean for whether or not that cell becomes alive or dead in the next frame
- Build timePasses function, triggered onClick by Begin button (to be built; similar to Seed button) which uses setTimeout() to call liveOrDie on all cells in this.state.cells
