let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n"); ///dev/stdin
const [N, pairN, ...pairArr] = input;

let queue = [1];
let currentIndex = 0;

while (1) {
  if (!queue[currentIndex]) {
    break;
  }
  let currentNode = queue[currentIndex];
  for (let i = 0; i < pairN; i++) {
    let pair = pairArr[i].split(" ").map((i) => Number(i));

    if (pair[0] === currentNode && !queue.includes(pair[1])) {
      queue.push(pair[1]);
    }
  }
  currentIndex += 1;
}

console.log(queue.length - 1);
