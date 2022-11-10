const { Console } = require("console");
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n"); ///dev/stdin

const num = input[0];
let arr = input[1].split(" ").sort((a, b) => Number(a) - Number(b));
const N = arr[0] * arr[num - 1];
console.log(N);
