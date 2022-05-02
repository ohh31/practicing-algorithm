// 2502. 약수 구하기

const { Console } = require("console");
let fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().split(" ");

let N = input[0];
let K = input[1];

function getDivisor() {
  let divisors = [];
  for (let i = 1; i <= N; i++) {
    if (N % i === 0) {
      divisors.push(i);
    }
  }
  return divisors[K - 1] === undefined ? 0 : divisors[K - 1];
}

let output = getDivisor();
console.log(output);
