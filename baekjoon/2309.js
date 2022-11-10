const { Console } = require("console");
let fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const total = input.reduce((sum, currValue) => {
  return sum + currValue;
});

let answers = "";
for (let i = 0; i < 9; i++) {
  if (answers.length > 0) break;
  for (let j = i + 1; j < 9; j++) {
    if (input[i] + input[j] + 100 == total) {
      const result = input
        .filter((_, k) => k != i && k != j)
        .sort((a, b) => a - b);
      answers = result.join(`\n`);
      console.log(answers);

      break;
    }
  }
}
