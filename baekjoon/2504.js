// 2504. 괄호의 값
let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("");
let stack = [];
function parseInput() {
  for (let i = 0; i < input.length; i++) {
    if (stack.length === 0 && (input[i] === ")" || input[i] === "]")) {
      return false;
    }

    if (input[i] === "(" || input[i] === "[") {
      stack.push(input[i]);
    } else if (input[i] === ")") {
      let temp = 0;
      while (1) {
        //직전 스택이 ( 일경우
        if (stack[stack.length - 1] === "(") {
          if (temp === 0) temp = 1;
          stack.pop();
          stack.push(temp * 2);
          break;
        }
        //직전 스택이 숫자일 경우
        else if (typeof stack[stack.length - 1] === "number") {
          let num = stack.pop();
          temp += num;
          if (stack.length === 0) {
            stack.push(temp);
            stack.push(input[i]);
            break;
          }
        } else {
          return false;
        }
      }
    } else if (input[i] === "]") {
      let temp = 0;
      while (1) {
        //직전 스택이 ( 일경우
        if (stack[stack.length - 1] === "[") {
          if (temp === 0) temp = 1;
          stack.pop();
          stack.push(temp * 3);
          break;
        }
        //직전 스택이 숫자일 경우
        else if (typeof stack[stack.length - 1] === "number") {
          let num = stack.pop();
          temp += num;
          if (stack.length === 0) {
            stack.push(temp);
            stack.push(input[i]);
            break;
          }
        } else {
          return false;
        }
      }
    }
  }
  if (
    !(
      stack.includes(")") ||
      stack.includes("(") ||
      stack.includes("]") ||
      stack.includes("[")
    )
  ) {
    return true;
  } else {
    return false;
  }
}

let answer = parseInput();
if (answer) {
  if (stack.length > 1) {
    console.log(stack.reduce((a, b) => a + b));
  } else {
    console.log(stack[0]);
  }
} else {
  console.log(0);
}
