const { Console } = require("console");
let fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().split(" ");

const totalRow = input;

for (let row = 0; row < totalRow; row++) {
  console.log("*".repeat(totalRow - row));
}
