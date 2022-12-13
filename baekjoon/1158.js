let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split(" ");
let [N, K] = input.map(Number);
let queue = [];
let answer = [];

for (let i = 1; i <= N; i++) {
  queue.push(i);
}

let index = 1;
while (queue.length > 0) {
  let num = queue.shift();

  if (index < K) {
    queue.push(num);
    index++;
  } else if (index === K) {
    answer.push(num);
    index = 1;
  }
}

console.log("<" + answer.join(", ") + ">");
