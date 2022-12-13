let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let [T, ...tests] = input;

for (let i = 0; i < T; i++) {
  let stack = [];
  let arr = tests[i].trim().split("");
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === "(") {
      stack.push("(");
    }
    if (arr[j] === ")") {
      if (stack.length > 0 && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        stack.push(")");
      }
    }
  }

  if (stack.length === 0) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
