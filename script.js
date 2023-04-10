//the parameters object is used to store the different criteria the user can select for their password to contain

var parameters = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "1234567890",
  specialcharacters: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
  };
  


function generatePassword() {
  //the generatedpassword variable is left blank so we have a variable to store the finished password in
  //the output variable is left blank to add or exclude each set of criteria sequentially 
  //the parameterchosen boolean is set to false by default so if it remains unchanged to true by each of the criteria, the function will display an alert and return
  var generatedpassword=""
  var output =""
  var parameterchosen = false;


//this variable displays a prompt for the user to input a number, which is used for the later for the length of a for loop that generates the password
  var passwordlength = prompt("Please Select Your Desired Password Character Length");
  

  //the following three if statements ensure the inputted number is greater than 7 characters, less than 128, and is a number, otherwise it will display a relevant alert and return
  if (passwordlength < 8) {
    alert("Password cannot be below 8 characters");
    return;
  }

  if (passwordlength > 128) {
    alert("Password cannot exceed 128 characters");
    return;
  }

  if (isNaN(passwordlength)) {
    alert("Only Numerical Inputs Are Allowed");
    return;
  }

/*each of the following confirm prompts are used to set the password criteria and add them to the output variable, as long as one is chosen  the parameterchosen boolean will become
true, allowing the function to continue to the generatedpassword return */

  var chooselower = confirm("Do you want to include lowercase letters?")

  if (chooselower) {
    output += parameters.lowercase;
    parameterchosen=true;
  }

  
  var chooseupper = confirm("Do you want to include uppercase letters?")

  if (chooseupper) {
    output += parameters.uppercase;
    parameterchosen=true;
  }

  var choosenumber = confirm("Do you want to include numbers?")

  if (choosenumber) {
    output += parameters.numbers;
    parameterchosen=true;
  }

  var choosespecial = confirm("Do you want to include special characters?")

  if (choosespecial) { 
    output += parameters.specialcharacters;
    parameterchosen=true;
  }
//if no password criteria have been set, the function will return here, since there are no available characters to use
  if (!parameterchosen) {
    alert("You Must Choose At Least One Parameter");
  return;
  }
//the following for loop uses the selected criteria to generate a password, and references the passwordlength variable for how many times it will add a random character from the criteria
  for (var i = 0; i < passwordlength; i++) {
 generatedpassword += output[Math.floor(Math.random() * output.length)]
 
  }
//the final return outputs the randomly generated password for the writepassword function so it can assign it to the placeholder text
  return generatedpassword;
}


var generateBtn = document.querySelector("#generate");

//the writepassword function calls the generatepassword function, targets the placeholder text of "Your secure password", and replaces it with the randomly generated password.

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//this event listener is added to call the writepassword when the generate button is clicked

generateBtn.addEventListener("click", writePassword);
