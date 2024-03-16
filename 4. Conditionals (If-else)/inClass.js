const databaseEmail = "ananda@gmail.com";
const databasePassword = "1234";

// ------------- Diana's solution -------------

function dianaCheckLogin() {
  console.log("This is Diana's solution");
  const userEmail = prompt("what is ur emai?");
  const userPass = prompt("whats your password?");

  if (databaseEmail === userEmail && databasePassword === userPass) {
    alert("Welcome");
  } else {
    alert("Go Away ");
  }
}

// ------------- Sablina's solution -------------

function sablinaCheckLogin() {
  console.log("This is Sablina's solution");
  const personEmail = prompt("What is your email?");
  const personPassword = prompt("What is your password?");

  const isEmailCorrect = personEmail === databaseEmail;
  const isPasswordCorrect = personPassword === databasePassword;

  if (isEmailCorrect && isPasswordCorrect) {
    alert("Welcome!");
  } else {
    alert("Try again!");
  }
}

// ------------- Sam's solution -------------

function samCheckLogin() {
  console.log("This is Sam's solution");
  const databaseEmail = "ananda@gmail.com";
  const databasepassword = "1234";

  const enteredEmail = prompt(" enter you email address");
  const enterpassword = prompt(" whats your password ");
  console.log(` the user entered the email ${enteredEmail}`);

  const isEmailright = enteredEmail === databaseEmail;
  const ispasswordright = enterpassword === databasepassword;

  if (databaseEmail === enteredEmail && databasepassword == enterpassword) {
    alert(" welcome, you are logged in");
  } else {
    alert(" go away, your email is not right");
  }
}

// ------------- Ananda's solution to the first flow ---------

// const enteredEmail = prompt("Enter your email address");

// const isEmailRight = enteredEmail === databaseEmail; // true or false

// if (isEmailRight === true) {
//   const enteredPassword = prompt("Enter your password");
//   const isPasswordRight = enteredPassword === databasePassword; // true or false

//   if (isPasswordRight === true) {
//     alert("Welcome, you are logged in");
//   } else {
//     alert("Wrong pass, go away");
//   }
// } else {
//   alert("Go away, your email is not right");
// }
