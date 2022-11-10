const { Console } = require("console");
let fs = require("fs");
const { off } = require("process");
let input = fs.readFileSync("./input.txt").toString().split(" ");

let A = parseInt(input[0]);
let B = parseInt(input[1]);
let C = parseInt(input[2]);
console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
