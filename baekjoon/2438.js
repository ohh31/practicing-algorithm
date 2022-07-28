const { Console } = require("console");
let fs = require("fs");
let input = fs.readFileSync("../input.txt").toString().split(" ");

let stars = "";
for (i = 0; i < input[0]; i++) {
  stars += "*";
  console.log(stars);
}
