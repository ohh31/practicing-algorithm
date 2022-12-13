let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let [N, ...arr] = input;
let [K, L] = N.split(" ").map(Number);
let students = arr;
let answers = [];
let hashMap = {};

function createHash() {
  for (let i = 0; i < L; i++) {
    hashMap[students[i].trim()] = i;
  }
}

createHash();
let sortedHashMap = Object.entries(hashMap).sort((a, b) => a[1] - b[1]);
for (let i = 0; i < K; i++) {
  if (sortedHashMap[i]) {
    answers.push(sortedHashMap[i][0]);
  }
}
console.log(answers.join("\n"));
