// Assignment Code
//generateBtn selects the button element from the html file (notice the id="generate" in the HTML)
var generateBtn = document.querySelector("#generate");

//acceptance criteria: pw length between 8 and 128 characters, can choose to include uc, lc, numeric, and/or special char
var lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] //todo: type out uc letters
var ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] 
var specialChar = ["!", "#", "$", "%", "&", "'", "\"", "(", ",", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "{", "|", "}", "~", "`"]

//WHEN I click the button to generate a password, THEN I am presented with a series of prompts for password criteria: this should be an onclick event
function generatePassword() {
  var pwdLength = prompt("Type a number between 8 and 128"); // pwdLength = userInput (10)
  var upperSelect = confirm("Would you like to include uppercase letters?") // yes or no question, output will be true or false
  var lowerSelect = confirm("Would you like to include lowercase letters?")
  var numericSelect = confirm("Would you like to include numbers?")
  var specialCharSelect = confirm("Would you like to include special characters?")

  // TODO: what happens if user inputs a number outside of range for prompt ie: 7 - 129 ? 
  // TODO: what happens if user inputs a letter for prompt? (lookup how to verify primitive types (string, number, bool, etc))
  // TODO: what happens if user selects no on all confirms? (lookup recursive functions)

  //log the outputs based on user's answers:
  console.log("length", pwdLength);
  console.log("upper", upperSelect);
  console.log("lower", lowerSelect);
  console.log("numeric", numericSelect);
  console.log("special", specialCharSelect);

  //check which arrays we're going to use
  let charSelection = []
  if (upperSelect) { //you don't need to include === true in here becuase it's implied (implicit falseys are 0, null, "undefined", "")
    charSelection = charSelection.concat(ucLetters);
  } 
  if (lowerSelect) {
    charSelection = charSelection.concat(lcLetters);
  } 
  if (numericSelect) {
    charSelection = charSelection.concat(numeric);
  } 
  if (specialCharSelect) {
    charSelection = charSelection.concat(specialChar);
  } 

  console.log("characters", charSelection);

  // loop to randomly grab a character from our charSelection array and add that character to a variable
  // look up random number generator (*hint: floor)
  
  let finishedPassword;

  for (let i = 0; i < pwdLength; i++) {
      //randomly grab character
      //add that character to a variable
  }

//create a string (pwd) based on the information from the function
  return "" // must return your finished password
}

//Need to generate pwd based on users choice above
// if onclick

// Write password to the #password input
//The function password has two variables: password and passwordText
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
