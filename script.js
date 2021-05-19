// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//arrays
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "~", "?", "<", ">", ":", ";", "/", " ", ".", ".", "{", "}"];

console.log(numbers, lowercase, uppercase, symbols);

//random number between 1-26
console.log(Math.floor(Math.random() * 26));

//now I want to take one of my arrays and randomize it
console.log(lowercase[Math.floor(Math.random() * 26)]);

//all my arrays randomized
console.log(lowercase[Math.floor(Math.random() * 26)], numbers[Math.floor(Math.random() * 10)], uppercase[Math.floor(Math.random() * 26)], symbols[Math.floor(Math.random() * 26)]);

//concat all my arrays
var allCharacters = numbers.concat(lowercase, uppercase, symbols);
console.log(allCharacters);

//now I can randomize my new array that includes all my arrays
console.log(allCharacters[Math.floor(Math.random() * 88)]);

//working on increasing string length
console.log(allCharacters[Math.floor(Math.random() * 88)].repeat(128));