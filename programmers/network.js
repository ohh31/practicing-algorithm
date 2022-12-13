let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n"); ///dev/stdin
const n = Number(input[0]);
const arr = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];
let networkIndex = 0;
function solution(n, computers) {
  let graph = [...new Array(200)].map(() => []);
  let stack = [];
  let visited = [...new Array(200)].fill(false);
  function createGraph() {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (computers[i][j] === 1) {
          graph[i].push(j);
        }
      }
    }
  }

  function dfs(start) {
    for (const end of graph[start]) {
      if (!visited[end] && !stack.includes(start)) {
        visited[end] = true;
        stack = [end];
        networkIndex++;
        dfs(end);
      }

      if (!visited[end] && stack.includes(start)) {
        visited[end] = true;
        stack.push(end);
        dfs(end);
      }
    }
  }

  createGraph();
  for (let i = 0; i < n; i++) {
    dfs(i);
  }

  let answer = networkIndex;
  return answer;
}

console.log(solution(n, arr));
