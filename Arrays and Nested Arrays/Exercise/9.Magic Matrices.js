//9.	Magic Matrices

function magixMatrix(matrix) {
  let isMagic = true;

  for (let i = 0; i < matrix.length - 1; i++) {
    let row = matrix[i];
    let rowSumOne = 0;
    let rowSumTwo = 0;
    let colSumOne = 0;
    let colSumTwo = 0;
    for (k = 0; k < row.length; k++) {
      rowSumOne += matrix[i][k];
      rowSumTwo += matrix[i + 1][k];
      colSumOne += matrix[k][i];
      colSumTwo += matrix[k][i + 1];
    }

    if (rowSumOne !== rowSumTwo && colSumOne !== colSumTwo) {
      return (isMagic = false);
    }
  }
  return isMagic;
}

console.log(
  magixMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5],
  ])
);
console.log(
  magixMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1],
  ])
);
console.log(
  magixMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
  ])
);
