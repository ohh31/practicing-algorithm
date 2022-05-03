//3460. 이진수 구하기

const { Console } = require("console");
let fs = require("fs");
const { off } = require("process");
let input = fs.readFileSync("../input.txt").toString().split("\n"); ///dev/stdin

let T = input[0];
function getBinaryNumber(n) {
  cn = 0;
  let output = 0;

  while (n > 0) {
    if (n % 2 === 1) {
      output = output + cn + " ";
    }
    n = parseInt(n / 2);
    cn = cn + 1;
  }
  return output;
}

for (i = 1; i <= T; i++) {
  let n = input[i];
  let output = getBinaryNumber(n);
  console.log(output);
}
