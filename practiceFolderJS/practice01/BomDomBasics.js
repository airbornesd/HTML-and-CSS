//const prompt = require("prompt-sync")({ sigint: true });
//console.log("write a number of your choice: ");
let num = prompt("write a number of your choice: ");
let userInput = Number.parseInt(num);
if (userInput == 4) {
  location.href =
    "https://www.youtube.com/watch?v=xOCzjgjedRc&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=28";
} else {
  console.log("you don't want to study");
}


let color = prompt("enter the page color: ");
document.body.style.background = color;