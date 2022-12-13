let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n"); ///dev/stdin

let [H, W] = input[0].split(" ").map(Number);
let block = input[1].split(" ").map(Number);
let matrix = new Array(H).fill(0).map(() => new Array(W).fill(0));
let answer = 0;

function createMatrix() {
  for (let i = 0; i < W; i++) {
    for (let j = 0; j < block[i]; j++) {
      matrix[j][i] = 1;
    }
  }
}

function getAmount() {
  for (let i = 0; i < H; i++) {
    let startIndex = 0;
    let isStarted = false;
    let amountArr = [];

    for (let j = 0; j < W; j++) {
      //시작
      if (amountArr.length === 0 && matrix[i][j] === 1) {
        startIndex = j;
        isStarted = true;
      }
      //종료
      else if (amountArr.length > 0 && matrix[i][j] === 1) {
        answer += amountArr.length;
        amountArr = [];
      }
      //진행 중
      else if (isStarted && matrix[i][j] === 0) {
        amountArr.push(j);
      }
    }
  }
}

createMatrix();
getAmount();
console.log(answer);
// let startIndex = 0;
// let endIndex = 0;
// let amounts = [];
// let answer = 0;
// console.log(block);
// while (1) {
//   //start index 설정
//   if (block[startIndex] === 0) {
//     startIndex++;
//   } else {
//     // start, end 구하기
//     for (let i = startIndex + 1; i < W; i++) {
//       if (block[startIndex] <= block[i]) {
//         endIndex = i;
//         break;
//       } else {
//         amounts.push(block[i]);
//       }
//     }

//     //총량계산
//     if (amounts.length > 0) {
//       let value = Math.min(block[startIndex], block[endIndex]);
//       for (let i = 0; i < amounts.length; i++) {
//         answer += value - amounts[i];
//       }
//     }
//     startIndex = endIndex;
//     amounts = [];
//   }

//   if (startIndex === W - 1 || endIndex === W - 1) {
//     break;
//   }
// }

// console.log(answer);
