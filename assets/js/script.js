// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

//Function to validate password length input
function checkPasswordLength(length) {
    if (!length || isNaN(length)) {
        alert("Kindly input a valid number");
        return false;
    }

    if (length < 8 || length > 128) {
        alert("Password length has to be between 8 and 128");
        return false;
    }

    return true;
}

// Function to prompt user for password options
function getPasswordOptions() {
    // Request and store desired password length from the user
    let inputtedLength = prompt("Hello! \n\nKindly input the number of characters you want for your password");

    //Validate inputted password length
    if (!inputtedLength || !checkPasswordLength(inputtedLength)) {
        return null;
    }

    //Convert input to integer
    inputtedLength = parseInt(inputtedLength);

    //Request and store desired password character combination from the user
    let lowercaseCheck = confirm("Click OK to include lowercase characters");
    let uppercaseCheck = confirm("Click OK to include uppercase characters");
    let numericCheck = confirm("Click OK to include numerics");
    let specialCharCheck = confirm("Click OK to include special characters");

    //Validated the selected criteria ensuring that at least one of the character type is selected
    if (lowercaseCheck + uppercaseCheck + numericCheck + specialCharCheck < 1 ) { 
        alert("Kindly select at least one character option");
        return null;
    }

    //Store input in an array
    const arrayCharacters = [
        { characters: lowerCasedCharacters, isSelected: lowercaseCheck },
        { characters: upperCasedCharacters, isSelected: uppercaseCheck },
        { characters: numericCharacters, isSelected: numericCheck },
        { characters: specialCharacters, isSelected: specialCharCheck }
    ];

    //Return the whole input collected as an object
    return { groupedarray: arrayCharacters, passwordLength: inputtedLength };
}


// Function for getting a random element from an array
function getRandom(arr) {
    return Math.floor(Math.random() * arr.length);
}


// Function to generate password with user input
function generatePassword() {
    // Variable Declaration
    let password = "";
    let character = '';

    //Get User inputs
    let userInputArray = getPasswordOptions();

    //Check if the inputs are valid
    if (userInputArray !== null) {

        let inputtedPasswordLength = userInputArray.passwordLength;
        const inputtedSelections = userInputArray.groupedarray;

        //Loop over the inputted length of password to generate password
        while (password.length < inputtedPasswordLength) {
            let arrayIndex = getRandom(inputtedSelections);

            if (inputtedSelections[arrayIndex].isSelected) {
                
                let characterIndex = getRandom(inputtedSelections[arrayIndex].characters);
                character = (inputtedSelections[arrayIndex].characters)[characterIndex];

                password += character;
            }
        }
    }

    return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);