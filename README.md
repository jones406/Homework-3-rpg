# Random Password Generator App

## Description
Generate random, secure passwords based on criteria you've selected. 

## User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page


## Modifications to the script.js file:
I completed the generatePassword function by following this logic:
1.	create variable for the final output: yourPassword
2.	create variable for password length: pwdLength
3.	Prompt: Let user choose length between 8-128 characters. 
4.	Convert prompt to integer.
5.	Check for user error using if statements in a recursive function called pwdCheck
6.	Call that function if no user error
7.	Allow user to select their character types
8.	Check user error using the same method as before, function pwdCheck2
9.	Create arrays to hold different char types
10.	Depending on user choice, one or more arrays should be accessed
11.	Concatenate any arrays user chose into a new array called charSelection
12.	Use function yourPassword to grab randomly from the new array
13.	The existing function, writePassword, then takes the input from all of this, the generatePassword fn, and writes it to the HTML file.


## References:
•	Tyler Arthur, Tutor
•	Eric Torres, AskBCS Learning Assistant
•	https://www.w3schools.com/js/js_comparisons.asp
•	https://stackoverflow.com/questions/15686318/why-do-not-a-number-values-equal-true-when-cast-as-boolean-in-python-numpy
•	https://stackoverflow.com/questions/22893516/javascript-function-if-else-isnan
