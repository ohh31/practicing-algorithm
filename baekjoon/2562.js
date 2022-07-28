const { Console } = require("console");
let fs = require("fs");
const { off } = require("process");
let input = fs.readFileSync("../input.txt").toString().split("\n"); ///dev/stdin

const numbers = input;
let maxNum = 0;
let maxIndex = 0;

for (i = 0; i < 9; i++) {
  if (numbers[i] - maxNum > 0) {
    maxNum = numbers[i];
    maxIndex = i + 1;
  }
}
console.log(maxNum + "\n" + maxIndex);
