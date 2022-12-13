let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\n");
let [T, ...arr] = input;
for (let i = 0; i < T; i++) {
  let answer = [];
  let wordArr = [];

  wordArr.push(...arr[i].trim().split(" "));

  for (let j = 0; j < wordArr.length; j++) {
    let splitedWord = wordArr[j].split("");
    if (splitedWord.length === 1) {
      answer.push(...splitedWord);
    }
    if (splitedWord.length > 1) {
      let reverseWord = "";
      while (splitedWord.length > 0) {
        reverseWord += splitedWord.pop();
      }
      answer.push(reverseWord);
    }
  }
  console.log(answer.join(" "));
}

// for (let j = 0; j < words.length; j++) {
//   let splitedWord = words[j].split("");
//   let reverse = [];
//   if (splitedWord.length === 1) {
//     console.log(words[j]);
//   } else if (splitedWord.length > 1) {
//     for (let k = 0; k < splitedWord.length; k++) {
//       reverse.push(splitedWord.pop());
//     }
//     console.log(reverse.join());
//   }
// }
