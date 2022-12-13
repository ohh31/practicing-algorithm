let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n"); ///dev/stdin
const [N, ...testcases] = input;
let result = [];
for (let i = 0; i < N * 2; i += 2) {
  let [N, M] = testcases[i].split(" ");
  const order = testcases[i + 1].split(" ").map((i) => Number(i));
  let targetIndex = Number(M);
  let count = 0;
  while (1) {
    let shifted = order.shift();
    let max = Math.max(...order);

    if (shifted >= max && targetIndex === 0) {
      count += 1;
      result.push(count);
      break;
    } else if (shifted >= max && targetIndex !== 0) {
      count += 1;
      targetIndex -= 1;
    } else if (shifted < max && targetIndex === 0) {
      targetIndex = order.length;
      order.push(shifted);
    } else if (shifted < max && targetIndex !== 0) {
      targetIndex -= 1;
      order.push(shifted);
    }
  }
}

console.log(result.join("\n"));
