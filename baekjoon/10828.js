const { Console } = require("console");
let fs = require("fs");
const { off } = require("process");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n"); ///dev/stdin
const [N, ...commands] = input;
let stack = [];
let result = [];

function executeCommand(input) {
  if (input.includes("pop")) {
    result.push(stack.pop() || -1);
  } else if (input.includes("size")) {
    result.push(stack.length);
  } else if (input.includes("empty")) {
    result.push(stack[0] ? 0 : 1);
  } else if (input.includes("top")) {
    result.push(stack[stack.length - 1] || -1);
  } else {
    stack.push(input.split(" ")[1]);
  }
}

for (let i = 1; i < N; i++) {
  executeCommand(commands[i]);
}

console.log(result.join("\n"));
