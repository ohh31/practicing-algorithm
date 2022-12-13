let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let A = input[1].trim().split(" ").map(Number);
let B = input[2].trim().split(" ").map(Number);
let hashArr = new Array(200000).fill().map(() => new Array(5));
let count = 0;

function setHash(input) {
  let key = input % 200000;
  let key2 = parseInt(input / 200000) - 1;
  if (hashArr[key][key2]) {
    count++;
  }
  hashArr[key][key2] = input;
}

for (let i = 0; i < N; i++) {
  setHash(A[i]);
}

for (let i = 0; i < M; i++) {
  setHash(B[i]);
}

let answer = N - count + M - count;
console.log(answer);
