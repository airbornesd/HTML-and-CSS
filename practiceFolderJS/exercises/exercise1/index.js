const prompt = require("prompt-sync")();

let x = Math.floor(Math.random() * 100 + 1);

console.log("guess the number: ");

let a = null;
let score = 100;
while (a != x) {
  let userInput = prompt();
  a = Number.parseInt(userInput);
  if (a == x) {
    console.log("you are right");
    break;
  } else if (a > x) {
    console.log("you'r guess is greater then the value");
  } else if (a < x) {
    console.log("you'r guess is smaller then the value");
  }
  score--;
}

console.log("your score is: ", score, "and the number was: ", x);
