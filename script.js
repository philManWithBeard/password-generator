// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Object of functions to prompt user for password options
const getPasswordOptions = {
  getLength: () => {
    let length = prompt(
      // Prompt the user for length of password
      "What length of password do you require? Choose between 8-128"
    );
    if (isNaN(length)) {
      // alert and restart if it's not a number
      alert(`That Was Not a Number`);
    } else if (length === "") {
      // alert and restart if there's no input
      alert(`No input`);
    } else if (length < 8) {
      // alert and restart if it's too short
      alert(`Password Length Too Short`);
    } else if (length > 128) {
      // alert and restart if it's too long
      alert(`Password Length Too Long`);
    } else {
      // return the user input if validated
      return length;
    }
  },
  // Prompt user to choose lowercase characters
  getLowercase: () =>
    confirm("Do you want lowercase characters? Cancel = No, OK = Yes"),
  // Prompt user to choose uppercase characters
  getUppercase: () =>
    confirm("Do you want uppercase characters? Cancel = No, OK = Yes"),
  // Prompt user to choose numeric characters
  getNumeric: () =>
    confirm("Do you want numeric characters? Cancel = No, OK = Yes"),
  // Prompt user to choose special characters
  getSpecChar: () =>
    confirm("Do you want special characters? Cancel = No, OK = Yes"),
};

// Function for getting a random element from an array
getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to generate password with user input
generatePassword = () => {
  // Get length from getPasswordOptions Object
  const length = getPasswordOptions.getLength();

  //return undefined if undefined
  if (length === undefined) {
    return;
  }

  // Create an empty array to hold potential characters
  const charArray = [];

  // Put lowercase characters in the array if user selects them
  if (getPasswordOptions.getLowercase()) {
    charArray.push(...lowerCasedCharacters);
  }

  // Put uppercase characters in the array if user selects them
  if (getPasswordOptions.getUppercase()) {
    charArray.push(...upperCasedCharacters);
  }

  // Put numeric characters in the array if user selects them
  if (getPasswordOptions.getNumeric()) {
    charArray.push(...numericCharacters);
  }

  // Put special characters in the array if user selects them
  if (getPasswordOptions.getSpecChar()) {
    charArray.push(...specialCharacters);
  }

  // Create a string variable to hold the password
  let password = "";

  // Put a random character from charArray into the password string variable
  for (let i = 0; i < length; i++) {
    password += getRandom(charArray);
  }

  return password;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // start again if undefined
  if (password === undefined) {
    writePassword();
  } else {
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
