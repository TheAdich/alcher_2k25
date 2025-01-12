'use client'
//  const CELL_SIZE = 40;
// const COLOR_R = 79;
// const COLOR_G = 38;
// const COLOR_B = 233;
// const STARTING_ALPHA =255;
// const BACKGROUND_COLOR = 31;
// const PROB_OF_NEIGHBOR = 0.5;
// const AMT_FADE_PER_FRAME =1;
// const STROKE_WEIGHT =1;
// let colorWithAlpha;
// let numRows;
// let numCols;
// let currentRow=-1;
// let currentCol =1;
// let alNeighbours =[];
// function setup(){
//   createCanvas(windowWidth,windowHeight);
//   colorWithAlpha = color(COLOR_R,COLOR_G,COLOR_B,STARTING_ALPHA);
//   noFill();
//   stroke(colorWithAlpha);
//   strokeWeight(STROKE_WEIGHT);
//   numRows = Math.ceil(WindowHeight /CELL_SIZE);
//   numCols = Math.ceil(windowWidth/CELL_SIZE);
// }
// function draw(){
//    BACKGROUND_COLOR(BACKGROUND_COLOR);

//    let row =floor(mouseY/CELL_SIZE);
//    let col = floor(mouseX/CELL_SIZE);

//   //  for(let row =0; row<numRows; row++){
//   //   for(let col =0; col<numCols;col++){
//   //       let x = col*CELL_SIZE;
//   //       let y = row*CELL_SIZE;
//   //       rect(x,y,CELL_SIZE,CELL_SIZE);
//   //   }
//   //  }
//   if(row!== currentRow || col !== currentCol){
//       currentRow = row;
//       currentCol = col;
    
//       allNeighbors.push(...getRandomNeighbors(row,col));   
//   }
//   let x = col *CELL_SIZE;
//   let y = row *CELL_SIZE;
//   stroke(colorWithAlpha);
//   rect(x,y,CELL_SIZE,CELL_SIZE);
//   for(let neighbor of allNeighbors){
//     let neighborX = neighbor.col *CELL_SIZE;
//     let neighborY = neighbor.row * CELL_SIZE;

//     neighbor.opacity = max(0, neighbor.opacity - AMT_FADE_PER_FRAME);
//     stroke(COLOR_R,COLOR_G,COLOR_B,neighbor.opacity);
//     rect(neighborX,neighborY,CELL_SIZE,CELL_SIZE);
//     allNeighbors = allNeighbors.filter((neighbor) => neighbor.opacity>0);
//   }

// }

// function getRandomNeighbors(row,col){
//     let neighbors=[];
//     for( let dRow =-1; dRow<=1; dRow++){
//       for(let dCol =-1; dCol<=1; dCol++){
//         let neighborRow = row +dRow;
//         let neighnorCol = col +dCol;

//         let isCurrentCell = dRow ===0 && dCol ===0;

//         let isInBounds =
//            neighborRow>=0 &&
//            neighborRow < numRows &&
//            neighnorCol >= 0 &&
//            neighnorCol <numCols;
//       }
//     }
    
//     if(!isCurrentCell && isBounds && Math.random() <PROB_OF_NEIGHBOR){
//        neighbors.push({
//           row: neighborRow,
//           col:neighborCol,
//           opacity:STARTING_ALPHA,
//        });
//     }

//     return neighbours;
// }

// function windowResized(){
//   resizedCanvas(windowWidth,windowHeight);
//   numRows =Math.ceil(windowHeight/CELL_SIZE);
//   numCols = Math.ceil(windowWidth/CELL_SIZE);
// }


// CONSTANTS
// const CELL_SIZE = 40; // size of each cell in the grid
// const COLOR_R = 79;
// const COLOR_G = 38;
// const COLOR_B = 233;
// const STARTING_ALPHA = 200;
// const BACKGROUND_COLOR = 31;
// const PROB_OF_NEIGHBOR = 0.5;
// const AMT_FADE_PER_FRAME = 5;

// // VARIABLES
// let colorWithAlpha;
// let numRows;
// let numCols;
// let currentRow = -2;
// let currentCol = -2;
// let allNeighbors = []; // Array to store all neighbors

// function setup() {
//   let cnv = createCanvas(windowWidth, windowHeight);
//   cnv.style("position", "fixed");
//   cnv.style("inset", 0);
//   cnv.style("z-index", -1);
//   colorWithAlpha = color(COLOR_R, COLOR_G, COLOR_B, STARTING_ALPHA);
//   noFill();
//   stroke(colorWithAlpha);
//   strokeWeight(1);
//   numRows = Math.ceil(windowHeight / CELL_SIZE); // number of rows in the grid
//   numCols = Math.ceil(windowWidth / CELL_SIZE); // number of columns in the grid
// }

// function draw() {
//   background(BACKGROUND_COLOR);

//   // Calculate the row and column of the cell that the mouse is currently over
//   let row = floor(mouseY / CELL_SIZE);
//   let col = floor(mouseX / CELL_SIZE);

//   // Check if the mouse has moved to a different cell
//   if (row !== currentRow || col !== currentCol) {
//     currentRow = row;
//     currentCol = col;
//     // Add new neighbors to the allNeighbors array
//     allNeighbors.push(...getRandomNeighbors(row, col));
//   }

//   // Use the calculated row and column to determine the position of the cell
//   let x = col * CELL_SIZE;
//   let y = row * CELL_SIZE;

//   // Draw a highlighted rectangle over the cell under the mouse cursor
//   stroke(colorWithAlpha);
//   rect(x, y, CELL_SIZE, CELL_SIZE);

//   // Draw and update all neighbors
//   for (let neighbor of allNeighbors) {
//     let neighborX = neighbor.col * CELL_SIZE;
//     let neighborY = neighbor.row * CELL_SIZE;
//     // Update the opacity of the neighbor
//     neighbor.opacity = max(0, neighbor.opacity - AMT_FADE_PER_FRAME); // Decrease opacity by 5 each frame
//     stroke(COLOR_R, COLOR_G, COLOR_B, neighbor.opacity);
//     rect(neighborX, neighborY, CELL_SIZE, CELL_SIZE);
//   }
//   // Remove neighbors with zero opacity
//   allNeighbors = allNeighbors.filter((neighbor) => neighbor.opacity > 0);
// }

// function getRandomNeighbors(row, col) {
//   let neighbors = []; // Initialize an empty array to store neighbor cells

//   // Loop through the cells surrounding the given cell (row, col)
//   for (let dRow = -1; dRow <= 1; dRow++) {
//     for (let dCol = -1; dCol <= 1; dCol++) {
//       // Calculate the neighboring cell's row and column indices
//       let neighborRow = row + dRow;
//       let neighborCol = col + dCol;

//       // Check if the current cell in the loop is the given cell (row, col)
//       let isCurrentCell = dRow === 0 && dCol === 0;

//       // Check if the neighboring cell is within the grid boundaries
//       let isInBounds =
//         neighborRow >= 0 &&
//         neighborRow < numRows &&
//         neighborCol >= 0 &&
//         neighborCol < numCols;

//       // If the cell is not the given cell, is within bounds, and has a 50% chance,
//       // add the neighboring cell to the neighbors array
//       if (!isCurrentCell && isInBounds && Math.random() < PROB_OF_NEIGHBOR) {
//         neighbors.push({
//           row: neighborRow,
//           col: neighborCol,
//           opacity: 255, // Initial opacity of the neighbor
//         });
//       }
//     }
//   }

//   // Return the array of randomly-selected neighboring cells
//   return neighbors;
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   numRows = Math.ceil(windowHeight / CELL_SIZE); // number of rows in the grid
//   numCols = Math.ceil(windowWidth / CELL_SIZE); // number of columns in the grid
// }





import React, { useEffect, useRef } from "react";
import p5 from 'p5/lib/p5.js';

const GridSketch = ({ width, height, gridsize }) => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      const CELL_SIZE = gridsize;
      const COLOR_R = 254;
      const COLOR_G = 57;
      const COLOR_B = 137;
      const STARTING_ALPHA = 255;
      const AMT_FADE_PER_FRAME = 1;

      let numRows, numCols;
      let currentRow = -1;
      let currentCol = -1;
      let allNeighbors = [];

      p.setup = () => {
        const canvas = p.createCanvas(width, height); // Use passed dimensions
        canvas.parent(sketchRef.current);
        p.noFill();
        p.strokeWeight(1);
        numRows = Math.ceil(height / CELL_SIZE);
        numCols = Math.ceil(width / CELL_SIZE);
      };

      p.draw = () => {
        p.clear();
        const row = Math.floor(p.mouseY / CELL_SIZE);
        const col = Math.floor(p.mouseX / CELL_SIZE);

        // If the cursor moves, activate the current cell and its trailing neighbors
        if (row !== currentRow || col !== currentCol) {
          currentRow = row;
          currentCol = col;
          allNeighbors.push(...getTrailingNeighbors(row, col));
        }

        // Fade and draw the active neighbors
        allNeighbors = allNeighbors.filter((neighbor) => neighbor.opacity > 0);

        allNeighbors.forEach((neighbor) => {
          neighbor.opacity = Math.max(0, neighbor.opacity - AMT_FADE_PER_FRAME);
          const neighborX = neighbor.col * CELL_SIZE;
          const neighborY = neighbor.row * CELL_SIZE;
          p.stroke(COLOR_R, COLOR_G, COLOR_B, neighbor.opacity);
          p.rect(neighborX, neighborY, CELL_SIZE, CELL_SIZE);
        });
      };

      // Function to get trailing neighbors (just the next ones, like right, down, diagonal)
      const getTrailingNeighbors = (row, col) => {
        const neighbors = [];

        // Trailing effect: right, down, and diagonally right-down
        const directions = [
          { dRow: 0, dCol: 1 }, // Right
          { dRow: 1, dCol: 0 }, // Down
          { dRow: 1, dCol: 1 }, // Diagonal (Right-Down)
        ];

        directions.forEach(({ dRow, dCol }) => {
          const neighborRow = row + dRow;
          const neighborCol = col + dCol;
          const isInBounds = 
            neighborRow >= 0 && neighborRow < numRows && 
            neighborCol >= 0 && neighborCol < numCols;

          if (isInBounds) {
            neighbors.push({
              row: neighborRow,
              col: neighborCol,
              opacity: STARTING_ALPHA,
            });
          }
        });

        return neighbors;
      };
    };

    const p5Instance = new p5(sketch);

    return () => p5Instance.remove();
  }, [width, height, gridsize]); // Recreate canvas when dimensions change

  return <div ref={sketchRef}></div>;
};

export default GridSketch;







// import React, { useEffect, useRef } from 'react';
// import p5 from 'p5/lib/p5.js';

// const GridSketch = () => {
//     const sketchRef = useRef();

//     useEffect(() => {
//         const sketch = (p) => {
//             const CELL_SIZE = 16.5; 
//             const COLOR_R = 254;
//             const COLOR_G = 57;
//             const COLOR_B = 137;
//             const STARTING_ALPHA = 255;
//             const PROB_OF_NEIGHBOR = 0.05;
//             const AMT_FADE_PER_FRAME = 1;

//             let numRows, numCols;
//             let currentRow = -1;
//             let currentCol = -1;
//             let allNeighbors = [];

//             p.setup = () => {
                
//                 const canvas = p.createCanvas(p.windowWidth, p.windowHeight);
//                 canvas.parent(sketchRef.current);
//                 p.noFill();
//                 p.strokeWeight(1);
//                 numRows = Math.ceil(p.windowHeight / CELL_SIZE);
//                 numCols = Math.ceil(p.windowWidth / CELL_SIZE);
//             };  

//             p.draw = () => {
//                 p.clear(); 
//                 const row = Math.floor(p.mouseY / CELL_SIZE);
//                 const col = Math.floor(p.mouseX / CELL_SIZE);

//                 if (row !== currentRow || col !== currentCol) {
//                     currentRow = row;
//                     currentCol = col;
//                     allNeighbors.push(...getRandomNeighbors(row, col));
//                 }

//                 allNeighbors = allNeighbors.filter((neighbor) => neighbor.opacity > 0);

//                 allNeighbors.forEach((neighbor) => {
//                     neighbor.opacity = Math.max(0, neighbor.opacity - AMT_FADE_PER_FRAME);
//                     const neighborX = neighbor.col * CELL_SIZE;
//                     const neighborY = neighbor.row * CELL_SIZE;
//                     p.stroke(COLOR_R, COLOR_G, COLOR_B, neighbor.opacity);
//                     p.rect(neighborX, neighborY, CELL_SIZE, CELL_SIZE);
//                 });
//             };

//             const getRandomNeighbors = (row, col) => {
//                 const neighbors = [];
//                 for (let dRow = -1; dRow <= 1; dRow++) {
//                     for (let dCol = -1; dCol <= 1; dCol++) {
//                         const neighborRow = row + dRow;
//                         const neighborCol = col + dCol;

//                         const isCurrentCell = dRow === 0 && dCol === 0;
//                         const isInBounds =
//                             neighborRow >= 0 &&
//                             neighborRow < numRows &&
//                             neighborCol >= 0 &&
//                             neighborCol < numCols;

//                         if (!isCurrentCell && isInBounds && Math.random() < PROB_OF_NEIGHBOR) {
//                             neighbors.push({
//                                 row: neighborRow,
//                                 col: neighborCol,
//                                 opacity: STARTING_ALPHA,
//                             });
//                         }
//                     }
//                 }
//                 return neighbors;
//             };

//             p.windowResized = () => {
//                 p.resizeCanvas(p.windowWidth, p.windowHeight);
//                 numRows = Math.ceil(p.windowHeight / CELL_SIZE);
//                 numCols = Math.ceil(p.windowWidth / CELL_SIZE);
//             };
//         };

//         const p5Instance = new p5(sketch);

//         return () => p5Instance.remove();
//     }, []);

//     return <div ref={sketchRef} style={{ position: 'absolute', top: 0, left: 0 }}></div>;
// };

// export default GridSketch;



// import React, { useState, useEffect } from 'react';


// const GridHoverEffect = () => {
//     const CELL_SIZE = 16; 
//     const [grid, setGrid] = useState({ rows: 0, cols: 0 });

//     useEffect(() => {
        
//         const rows = Math.ceil(window.innerHeight / CELL_SIZE);
//         const cols = Math.ceil(window.innerWidth / CELL_SIZE);
//         setGrid({ rows, cols });

//         const handleResize = () => {
//             const rows = Math.ceil(window.innerHeight / CELL_SIZE);
//             const cols = Math.ceil(window.innerWidth / CELL_SIZE);
//             setGrid({ rows, cols });
//         };

        
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, [CELL_SIZE]);

//     return (
//         <div className="grid-container">
//             {Array.from({ length: grid.rows }).map((_, rowIndex) => (
//                 <div key={rowIndex} className="grid-row">
//                     {Array.from({ length: grid.cols }).map((_, colIndex) => (
//                         <div
//                             key={`${rowIndex}-${colIndex}`}
//                             className="grid-cell"
//                         ></div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default GridHoverEffect;
