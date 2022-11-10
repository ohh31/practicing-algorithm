const { Console } = require("console");
let fs = require("fs");
const { off } = require("process");
let input = fs.readFileSync("./input.txt").toString().split("\n"); ///dev/stdin

const word = input[0];

const result = word.split("").map((el) => {
  let code = el.charCodeAt();
  if (code - 3 < 65) {
    code = code - 3 + 26;
  } else {
    code = code - 3;
  }
  const converted = String.fromCharCode(code);
  return converted;
});
console.log(result.join(""));
