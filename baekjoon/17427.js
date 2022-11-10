const { Console } = require("console");
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n"); ///dev/stdin

const N = input[0];
let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += Math.floor(N / i) * i;
}
console.log(sum);
