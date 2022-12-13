let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n"); ///dev/stdin

const [T, ...set] = input;

const solve = (input) => {
  let queue = [];
  let centers = [];
  for (let i = 0; i < input.length; i++) {
    queue.push(Number(input[i]));
    queue.sort((a, b) => a - b);
    let index = i + 1;
    if (index % 2 === 1) {
      let centerIndex = (1 + index) / 2 - 1;
      let centerData = queue[centerIndex];
      centers.push(centerData);
    }
  }
  return centers;
};

let index = 0;

for (let i = 0; i < T; i++) {
  let M = set[index];
  let iteration = Math.floor(M / 10) + Boolean(M % 10);
  let input = [];
  for (let j = index + 1; j < j + iteration; j++) {
    input.push(...set[j].split(" "));
  }
  index = index + 1 + iteration;

  const result = solve(input);
  console.log(result.length);
  for (let i = 0; i <= result.length; i += 10) {
    console.log(result.slice(i, i + 10).join(" "));
  }
}
