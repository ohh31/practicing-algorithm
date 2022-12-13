const { Console } = require("console");
let fs = require("fs");
const { off } = require("process");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n"); ///dev/stdin
const [N, ...commands] = input;
let deque = [];
let result = [];

function executeCommand(input) {
  if (input.includes("pop_front")) {
    result.push(deque.shift() || -1);
  } else if (input.includes("pop_back")) {
    result.push(deque.pop() || -1);
  } else if (input.includes("size")) {
    result.push(deque.length);
  } else if (input.includes("empty")) {
    result.push(deque[0] ? 0 : 1);
  } else if (input.includes("push_front")) {
    deque.unshift(input.split(" ")[1]);
  } else if (input.includes("push_back")) {
    deque.push(input.split(" ")[1]);
  } else if (input.includes("front")) {
    result.push(deque[0] || -1);
  } else if (input.includes("back")) {
    result.push(deque[deque.length - 1] || -1);
  } else {
    deque.push(input.split(" ")[1]);
  }
}

for (let i = 0; i < N; i++) {
  executeCommand(commands[i]);
}

console.log(result.join("\n"));
