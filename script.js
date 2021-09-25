// Assignment Code
//select button element from html file (for which id="generate")
var generateBtn = document.querySelector("#generate");

//User choice: include uc or lc letters, numbers, special characters
var lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var ucLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] 
var specialChar = ["!", "#", "$", "%", "&", "'", "\"", "(", ",", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "{", "|", "}", "~", "`"]

//create a function to generate a random pwd

function generatePassword() {
  var pwdLength = prompt("Type a number between 8 and 128.", ""); //user types number, number is assigned to pwdLength

if (pwdLength < 8) { //user needs to enter a numbe between 8 and 128
  var pwdLength = prompt("That's not long enough, dear. Type a number between 8 and 128.", "");
} else if (pwdLength > 128) {   
  var pwdLength = prompt("That's too long, bud. Type a number between 8 and 128.", "");
} else if (isNaN(pwdLength)) {//https://www.w3schools.com/js/js_comparisons.asp
  var pwdLength = prompt("Type a number, silly goose. Anything between 8 and 128.", ""); //this works once but if you put in a letter a 2nd time it accepts it
} else {
  alert("Cool. Next, you'll choose character types by selecting OK for yes or cancel for no. Select yes for at least two prompts!");
}

//If the user clicks "OK", the input value is returned. 
//If the user clicks "cancel", null is returned. 
//If the user clicks OK without entering any text, an empty string is returned.
  var ucSelect = confirm("Would you like to include uppercase letters?"); // output is true if ok, false if cancel  
  var lcSelect = confirm("Would you like to include lowercase letters?");
  var numSelect = confirm("Would you like to include numbers?");
  var specialSelect = confirm("Would you like to include special characters?");
    
  // TODO: what happens if user selects no on all confirms? (lookup recursive functions)

  //log the outputs based on user's answers:
  console.log("length", pwdLength);
  console.log("upper", ucSelect);
  console.log("lower", lcSelect);
  console.log("numeric", numSelect);
  console.log("special", specialSelect);

  //check which arrays we're going to use
  //First make an empty array. If we need more than one array, we'll combine them into a new array. If all outputs from the user's choices are true, one giant array will be made from the four existing arrays.
  let charSelection = []
  if (ucSelect) { //don't need to include ""=== true" after upperSelect, it's implied (implicit falseys are 0, null, "undefined", "")
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

  // loop to randomly grab a character from our charSelection array and add that character to a variable
  // look up random number generator (*hint: floor)
  




  let finishedPassword = []; //create array? to store the generated password

  //loop thru my charSelection array and pick randomly however many times was specified by pwdLength
  for (let i = 0; i < pwdLength; i++) {
    finishedPassword = charSelection[Math.floor(Math.random()*charSelection.length)];
    console.log(finishedPassword);
      //randomly grab character from charSelection
      //add that character to a variable
  }
}
finishedPassword.join('')





//create a string (pwd) based on the information from the function
  //return(); // must return your finished password

// Write password to the #password input
//The function password has two variables: password and passwordText
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
