const { Console } = require("console");
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n"); ///dev/stdin

const inputRow = input;
for (let i = 0; i < inputRow.length; i++) {
  let N = inputRow[i];

  let num = 0;
  let index = 1;
  while (true) {
    num = (num * 10 + 1) % N;
    if (num === 0) {
      break;
    }
    index++;
  }
  console.log(index);
}
