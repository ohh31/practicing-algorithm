const { Console } = require("console");
let fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().split(" ");

let stars = "";
const totalRow = input[0];

for (let row = 0; row < totalRow; row++) {
  let empty = "";
  stars += "*";

  for (let i = 0; i < totalRow - row; i++) {
    empty += " ";
  }

  console.log(empty + stars + "\n");
}
