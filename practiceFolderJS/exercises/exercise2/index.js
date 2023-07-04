let userInput = prompt("show any one: S(snake) W(water) G(gun)");
let characters = ["s", "w", "g"];
let randomChar = characters[Math.floor(Math.random() * characters.length)];
alert(randomChar + userInput);

if (randomChar === "s" && userInput === "w") {
  alert("computer wins! ");
} else if (randomChar === "g" && userInput === "s") {
  alert("computer wins! ");
} else if (randomChar === "w" && userInput === "g") {
  alert("computer wins! ");
} else if (randomChar === userInput) {
  alert("tie! ");
} else {
  alert("you win!");
}
