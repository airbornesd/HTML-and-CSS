// npm init -y

// npm install prompt-sync

// const prompt = require('prompt-sync')();

const prompt = require("prompt-sync")();
let arr = [];

// question-1
// let arrSize = 5;
// for (let i = 0; i < arrSize; i++) {
//   let userInput = prompt();
//   let a = Number.parseInt(userInput);
//   arr[i] = a;
// }

// question-2, question-3
let a = null;
let i = 0;
while (a != 0) {
  let userInput = prompt();
  a = Number.parseInt(userInput);
  if(a != 0 && a % 10 != 0) {
    arr[i] = a;
  }
  i++;
}

console.log(arr);
console.log(typeof arr[0]);


