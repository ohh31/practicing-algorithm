const { Console } = require("console");
let fs = require("fs");
let [N, input] = fs.readFileSync("./input.txt").toString().split("\n"); ///dev/stdin
const arr = input.split(" ");
let count = 0;

const isPrime = (input) => {
  if (input < 2) {
    return false;
  } else {
    for (j = 2; j * j <= input; j++) {
      if (input % j === 0) {
        return false;
      }
    }
    return true;
  }
};

for (let i = 0; i < N; i++) {
  if (isPrime(arr[i])) {
    count++;
  }
}
console.log(count);
