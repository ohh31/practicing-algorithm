const { Console } = require("console");
let fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().split(" ");

const total = input;

for (let row = 0; row < total; row++) {
  let stars = "*".repeat(total - row);
  let empty = " ".repeat(row);
  console.log(empty + stars);
}
