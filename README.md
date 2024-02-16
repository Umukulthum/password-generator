# Password Generator
Automatically generates a unique password based on the criteria selected by the user


## Description
The purpose of this project is to use Javascript to : 
1. Generate a password when the button is clicked
2. Present a series of prompts for password criteria
    - Length of password (at least 8 characters but no more than 128)
    - Character types (Lowercase, Uppercase, Numerics and Special characters)
3. Validate for each input and ensure that at least one character type is selected
4. Display the generated password in an alert or on the page once prompts are answered correctly


## My Approach
* I started by attaching a function to an event listener for whenever the "Generate Password" button is clicked
* I then created various functions to perform different small tasks as regards to the main function to generate password
* One of the small functions as mentioned above is to get the desired password length and character types options from the user. 
* I then validated the inputted length for different possible inputs 
* The user is presented with a series of prompts for password criteria for various character types (lower case, upper case, numerics and special characters) and validated the selections ensuring that at least one character type is selected
* An appropriate error message in an alert box is presented to the user whenever an unacceptable password length is inputted or no character type was selected
* I then proceeded to randomly selecting a character type from the users selections so as to pick a random element from its array of predefined characters
* Lastly, after ensuring that the correct password length is inputted and at least one character type is selected, the generated password is displayed in a box on the webpage to the user using 'querySelector' to get the unique id of the html textarea element and attaching the generated password to its value


## Screenshot
![image][page-1]


## Live
https://umukulthum.github.io/password-generator


## Repository
https://github.com/Umukulthum/password-generator


[page-1]: assets/images/05-javascript-challenge-demo.png

