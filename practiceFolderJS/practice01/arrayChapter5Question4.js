const prompt = require("prompt-sync")();
let arr = [];
let a = null;
let i = 0;
while (a != 0) {
  let userInput = prompt();
  a = Number.parseInt(userInput);
  if (a == 0) {
    break;
  }
  arr[i] = a * a;
  i++;
}
console.log(arr);

let factorial = arr.reduce((j, k) => {
  return j * k;
});

console.log(factorial);
