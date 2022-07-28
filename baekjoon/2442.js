const { Console } = require("console");
let fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().split(" ");

const total = input[0];

for (let row = 0; row < total; row++) {
  const N = row * 2 + 1;
  let stars = "*".repeat(N);
  let empty = " ".repeat((total * 2 - N - 1) / 2);

  console.log(empty + stars);
}
