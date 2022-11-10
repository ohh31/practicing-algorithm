const { Console } = require("console");
let fs = require("fs");
let [A, B] = fs.readFileSync("./input.txt").toString().split(" ").sort();
let min = A;
let max = B;

while (min !== 0) {
  const temp = min;
  min = max % min;
  max = temp;
}

console.log(max);
console.log((A * B) / max);
