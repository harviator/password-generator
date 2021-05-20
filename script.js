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
    
    return password.text;
  }
}

password.text = password.numbers[Math.floor(Math.random() * numbers.length)];

console.log(password.text);