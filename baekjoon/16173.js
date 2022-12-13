let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n"); ///dev/stdin
let [N, ...arr] = input;
num = Number(N);
let matrix = arr.map((i) => i.split(" ").map(Number));
let stack = [];
let graph = [...new Array(num * num)].map(() => []);
let visited = [...new Array(num * num)].fill(0);
let answers = false;

function createGraph(N) {
  for (let i = 0; i < N * N; i++) {
    let column = i % N;
    let row = parseInt(i / N);

    if (matrix[row][column] === -1) {
      graph[i].push(-1);
      graph[i].push(-1);
    } else {
      graph[i].push(i + matrix[row][column]);
      graph[i].push(i + N * matrix[row][column]);
    }
  }
}

function getIsReached(start) {
  for (let i = 0; i < 2; i++) {
    let end = graph[start][i];
    let limit = i === 0 ? (parseInt(start / N) + 1) * N : N * N;
    if (end === -1) {
      answers = true;
      break;
    }
    if (!visited[end] && end < limit) {
      visited[end] = true;
      stack.push(end);
      getIsReached(end);
    } else if (!visited[end] && end >= limit) {
      visited[end] = true;
      if (stack && i === 1) {
        getIsReached(stack.pop());
      }
    }
  }
}

createGraph(num);
getIsReached(0);

console.log(answers ? "HaruHaru" : "Hing");
