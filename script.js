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
  let pwdLength = "";

  //check for user error before moving forward
  function pwdCheck() {
    pwdLength = prompt("Type a number between 8 and 128.");
    if (pwdLength < 8 || pwdLength > 128 || pwdLength == null || pwdLength == false) {     
      alert("Hmm let's try that again!");
      pwdCheck();
    } else {
    return;
    } 
  }
  pwdCheck();
  alert("Great. Next, select what character types to include. Select OK for Yes and Cancel for no. Be sure to say OK to least one!")
  //log user's pwd length:
  console.log("Chosen length: ", pwdLength);

 //user chooses character types
//check for user error before moving forward (confirms return true or false)
  let ucSelect = "";
  let lcSelect = "";
  let numSelect = "";
  let specialSelect = "";
   
  function pwdCheck2() {
    ucSelect = confirm("Would you like to include uppercase letters?");  
    lcSelect = confirm("Would you like to include lowercase letters?");
    numSelect = confirm("Would you like to include numbers?");
    specialSelect = confirm("Would you like to include special characters?");
    if (ucSelect == false && lcSelect == false && numSelect == false && specialSelect == false) {
      alert("Remember, you need to choose at least one!");
      pwdCheck2();
    } else {
      return;
    }
  }
  pwdCheck2();    

  //log user's answers:
  console.log("Include upper: ", ucSelect);
  console.log("Include lower: ", lcSelect);
  console.log("Include numeric: ", numSelect);
  console.log("Include special: ", specialSelect);

  //Check which arrays we access based on user choices, then add those into a new array.
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