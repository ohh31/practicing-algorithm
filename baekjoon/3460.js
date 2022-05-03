//3460. 이진수 구하기

const { Console } = require("console");
let fs = require("fs");
const { off } = require("process");
let input = fs.readFileSync("../input.txt").toString().split("\n"); ///dev/stdin

let T = input[0];
let output = "";

function getBinaryNumberArray(n) {
  let arr = [];
  let binaryString = parseInt(n).toString(2);
  for (i = 0; i < binaryString.length; i++) {
    arr.push(parseInt(binaryString.substring(i, i + 1)));
  }
  return arr;
}

for (i = 1; i <= T; i++) {
  let n = input[i];
  let outputArr = getBinaryNumberArray(n).reverse();
  for (i = 0; i < outputArr.length; i++) {
    if (outputArr[i] === 1) {
      output = output + i + " ";
    }
  }
}

console.log(output);
