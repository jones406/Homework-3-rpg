// Assignment Code

//select button element from html file (button id="generate")
var generateBtn = document.querySelector("#generate");

//User choice: include uc or lc letters, numbers, special characters
var lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] 
var specialChar = ["!", "#", "$", "%", "&", "'", "\"", "(", ",", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "{", "|", "}", "~", "`"]

//create a function to generate a random pwd
function generatePassword() {
  let yourPassword = "";
  let pwdLength = prompt("Type a number between 8 and 128.");
 
  //check for user error before moving forward
  function pwdCheck() {
    if (pwdLength > 7 && pwdLength < 129 && pwdLength != isNaN) {
      return;
    }
    pwdCheck()
  } 
  pwdCheck();

  //log user's pwd length:
  //console.log("Chosen length: ", pwdLength);

  let ucSelect = confirm("Would you like to include uppercase letters?");  
  let lcSelect = confirm("Would you like to include lowercase letters?");
  let numSelect = confirm("Would you like to include numbers?");
  let specialSelect = confirm("Would you like to include special characters?");
  
  //check for user error before moving forward
  function pwdCheck2() {
    if (ucSelect == false && lcSelect == false && numSelect == false && specialSelect == false) {
      alert("pick at least one - now start over");
      }
      pwdCheck();
  }
  pwdCheck2();    

  //log user's answers:
  //console.log("Include upper: ", ucSelect);
  //console.log("Include lower: ", lcSelect);
  //console.log("Include numeric: ", numSelect);
  //console.log("Include special: ", specialSelect);

  //Check which arrays we access based on choices user made. Chosen arrays will be added into new array
  let charSelection = []
  if (ucSelect) { //don't need to include ""=== true" after upperSelect, it's implied
    charSelection = charSelection.concat(ucLetters); //or why wouldn't we
  }  
  if (lcSelect) {
    charSelection = charSelection.concat(lcLetters);
  } 
  if (numSelect) {
    charSelection = charSelection.concat(numeric);
  } 
  if (specialSelect) {
    charSelection = charSelection.concat(specialChar);
  } 

  console.log("characters:", charSelection); // log our new array in the console

  //loop thru my charSelection array and pick randomly however many times was specified by pwdLength
  for (let i = 0; i < pwdLength; i++) {
    yourPassword += charSelection[Math.floor(Math.random()*charSelection.length)];
  }
  return yourPassword
}
    // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);