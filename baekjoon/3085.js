const { Console } = require("console");
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let N = +input[0];
let matrix = input.slice(1).map((v) => v.split(""));

function swap(isCol, col, row) {
  let copy = matrix;
  if (!isCol) {
    const temp = copy[col][row];
    copy[col][row] = copy[col + 1][row];
    copy[col + 1][row] = temp;
  } else {
    const temp = copy[col][row];
    copy[col][row] = copy[col][row + 1];
    copy[col][row + 1] = temp;
  }
  return copy;
}

function check(matrix, startCol, endCol, startRow, endRow) {
  let maxCnt = 0;
  let target = -1;

  for (let i = startCol; i <= endCol; i++) {
    for (let j = 0; j < N; j++) {
      if (target === matrix[i][j]) {
        ++maxCnt;
      } else {
        target = matrix[i][j];
      }
    }
  }
  console.log(maxCnt);
  return maxCnt;
}

//i는 행 j는 열
let result = 0;
for (let col = 0; col < N; col++) {
  for (let row = 0; row < N; row++) {
    if (row + 1 < N) {
      let swapedMatrix = swap(true, col, row);
      result = check(swapedMatrix, col, col + 1, row, row);
    }

    // if (j < N) {
    //   let swapedMatrix = swap(false, i, j);
    //   result = check(swapedMatrix, i, i, j, j + 1);
    // }
  }
}

console.log(result);
