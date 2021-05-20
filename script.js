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

//created an object called password and giving it properties, which I hope will help me manipulated it easier
function generatePassword() {
  var password = {
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    lowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    symbols: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "~", "?", "<", ">", ":", ";", "/", " ", ".", ".", "{", "}"],
    allCharacters: [],
    length: window.prompt("Please pick a password length", "Enter a number between 8 and 128"),
    text: "",
  }

  if (password.length <= 7 || password.length >= 129 || isNaN(parseInt(password.length))) {
  window.alert ("Must be a NUMBER and be between 8 and 128");
  } else {
    var incldNum = window.confirm("Do you want numbers in your password?");
    var incldLowerCase = window.confirm("Do you want lowercase letters in your password?");
    var incldUpperCase = window.confirm("Do you want uppercase letters in your password?");
    var incldSymbols = window.confirm("Do you want symbols in your password?");

    if (incldNum) {
      // password.text += password.numbers[Math.floor(Math.random() * 10)];
      password.allCharacters = password.allCharacters.concat(password.numbers)
    }
    if (incldLowerCase) {
      // password.text += password.lowerCase[Math.floor(Math.random() * 26)];
      password.allCharacters = password.allCharacters.concat(password.lowerCase)
    }
    if (incldUpperCase) {
      password.allCharacters = password.allCharacters.concat(password.upperCase)
    }
    if (incldSymbols) {
      password.allCharacters = password.allCharacters.concat(password.symbols)
    } 

    for (var i=0; i < password.length; i++) {
    password.text += password.allCharacters[Math.floor(Math.random() * password.allCharacters.length)];
    }
    
    console.log(password.text)
  }
}

/* Commented out all the experimenting I did

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

console.log(password.lowerCase[Math.floor(Math.random() * 26)], password.numbers[Math.floor(Math.random() * 10)], password.upperCase[Math.floor(Math.random() * 26)], password.symbols[Math.floor(Math.random() * 26)]);
//console.log(password.length);
//sudo code
for (var i=0; i < password.length; i++) {
  password.text += password.lowerCase[Math.floor(Math.random() * 10)];
}

console.log(password.text)

// var i = 0;

// while(i < password.length) {
//   password.text += password.numbers[Math.floor(Math.random() * 10)];
//   i++;
// }

// do {
//   password.text += password.numbers[Math.floor(Math.random() * 10)];
// }while(i < password.length)
*/