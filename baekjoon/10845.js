let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n"); ///dev/stdin
const [N, ...commands] = input;
let queue = [];
let result = [];

function executeCommand(input) {
  if (input.includes("pop")) {
    result.push(queue.shift() || -1);
  } else if (input.includes("size")) {
    result.push(queue.length);
  } else if (input.includes("empty")) {
    result.push(queue[0] ? 0 : 1);
  } else if (input.includes("front")) {
    result.push(queue[0] || -1);
  } else if (input.includes("back")) {
    result.push(queue[queue.length - 1] || -1);
  } else {
    queue.push(input.split(" ")[1]);
  }
}

for (let i = 0; i < N; i++) {
  executeCommand(commands[i]);
}

console.log(result.join("\n"));
