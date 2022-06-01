// 11.	Equal Neighbors
 
function equalNeighbors(matrix) {
  let counter = 0;
  let rowSize = matrix[0].length;
    //console.log(rowSize);
 
    // check cols:
    for(let colI = 0; colI < rowSize; colI++){
        for(let rowI = 0; rowI < matrix.length; rowI++){
            // console.log(matrix[rowI][colI], 'cols');
            if (matrix[rowI][colI] === matrix[rowI][colI + 1]) {
                counter++;
            }
        }
    }
 
    // check rows:
    for(let rowI = 0; rowI < matrix.length-1; rowI++){
        for(let colI = 0; colI < matrix[rowI].length; colI++){
            // console.log(matrix[rowI][colI], 'rows');
            if (matrix[rowI][colI] === matrix[rowI+1][colI]) {
                counter++;
            }
        }
    }
 
    console.log(counter);
}
 
equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);
console.log("----");
equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);
console.log("----");
equalNeighbors([
  ["2", "2", "5", "7", "4"],
  ["4", "0", "5", "3", "4"],
  ["2", "5", "5", "4", "2"],
]);
 
