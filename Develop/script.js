// Assignment Code
// Generate password function
function generatePassword() {
  const specialCharacters = '!@#$%^&*()_-+=<>?/[]{}|';
  const numericCharacters = '0123456789';
  const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// Get password length

  let passwordLength = parseInt(prompt("How long would you like your password? Choose between 8 and 128."));
// Make sure password legnth is between 8 and 128.
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128.");
      passwordLength = parseInt(prompt("How long would you like your password? Choose between 8 and 128."));
  }
// Get user input to add different types of characters
  let includeSpecial = confirm("Include special characters?");
  let includeNumeric = confirm("Include numeric characters?");
  let includeLowercase = confirm("Include lowercase characters?");
  let includeUppercase = confirm("Include uppercase characters?");
// Make sure user chooses at least one character type
  while (!(includeSpecial || includeNumeric || includeLowercase || includeUppercase)) {
      alert("You must choose at least one character type.");
      includeSpecial = confirm("Include special characters?");
      includeNumeric = confirm("Include numeric characters?");
      includeLowercase = confirm("Include lowercase characters?");
      includeUppercase = confirm("Include uppercase characters?");
  }
// Checks for each character type. If the value is true it adds the chracters to character list.
  let characters = '';
  characters += (includeSpecial) ? specialCharacters : '';
  characters += (includeNumeric) ? numericCharacters : '';
  characters += (includeLowercase) ? lowercaseCharacters : '';
  characters += (includeUppercase) ? uppercaseCharacters : '';
// For loop to randomly generate the password with required length and character specifications.
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
// Replace text in box with generated password.
  document.getElementById('password').textContent = password;

}

