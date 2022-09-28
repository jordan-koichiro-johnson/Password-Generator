// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  let length = prompt("Choose a length for your password (anywhere form 8 to 128 characters).")
  while (isNaN(length) || length < 8 || length > 128) {
    length = prompt("Choose a length for your password. Please input an integer between 8 and 128.")
  }
  let lowercase = prompt("Would you like to include lowercase letters? (yes or no)")
  while (lowercase.toLowerCase() !== "yes" && lowercase.toLowerCase() !== "no") {
    lowercase = prompt("Would you like to include lowercase letters? Please input yes or no")
  }
  let uppercase = prompt("Would you like to include uppercase letters? (yes or no)")
  while (uppercase.toLowerCase() !== "yes" && uppercase.toLowerCase() !== "no") {
    uppercase = prompt("Would you like to include uppercase letters?Please input yes or no")
  }
  let numeric = prompt("Would you like to include numbers? (yes or no)")
  while (numeric.toLowerCase() !== "yes" && numeric.toLowerCase() !== "no") {
    numeric = prompt("Would you like to include numbers? Please input yes or no")
  }
  let special = prompt("Would you like to include special characters? (yes or no)")
  while (special.toLowerCase() !== "yes" && special.toLowerCase() !== "no") {
    special = prompt("Would you like to include special characters? Please input yes or no")
  }
  while (lowercase.toLowerCase() === "no" && uppercase.toLowerCase() === "no" && numeric.toLowerCase() === "no" && special.toLowerCase() === "no"){
    return "You can't make a password without any characters. Please allow at least one character type.";
  }
  console.log(length + lowercase + uppercase + numeric + special)
  let lowerChars = "qwertuyiopasdfghjklzxcvbnm"
  let upperChars = lowerChars.toUpperCase()
  let numbChars = "1234567890"
  let specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  let charString = ""
  let randString= ""
  if (lowercase.toLowerCase() === "yes") {
    charString = lowerChars + charString
  }
  if (uppercase.toLowerCase() === "yes") {
    charString = upperChars + charString
  }
  if (numeric.toLowerCase() === "yes") {
    charString = numbChars + charString
  }
  if (special.toLowerCase() === "yes") {
    charString = specialChars + charString
  }
  for (let i = 0; i < length ; i++) {
    randString += charString.charAt(Math.floor(Math.random() * charString.length))
  }
  return randString;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
