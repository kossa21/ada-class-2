// const age = 29;
// const name = "Sablina";
// const greeting = "Hello, nice to see you.";

// // const answerOfUser = prompt("What is your name?");

// // alert(`You just told me your name is ${answerOfUser}`);

// // There are many types of data
// //numbers
// const anandaAge = 29;

// // strings -> text
// // strings are text that we need to write inside quotes
// // The quotes that we can use are "", '', ``

// const text = "My name is Ananda";
// const text1 = "My";
// const text2 = "c";
// const text3 = "";
// const text4 = "!!!";

// // booleans
// // true or false
// let isTheLightOn = false;
// isTheLightOn = true;
// const isItRaining = false;
// const amIBreathing = true;

// alert(isTheLightOn);

// isTheLightOn = true;

// alert(isTheLightOn);

// alert("Hi");

// console.log("The data type of my variable is", typeof isTheLightOn);

// // --------------------------------------------------------------------------------
// // Operators

// //Operations with numbers, strings, variables

// let minutes = 2;
// const secondsInMinutes = minutes * 60;

// const milliseconds = 4500;
// const secondsInMilliseconds = milliseconds / 1000;

// milliseconds / 1000;

// console.log(`In ${minutes} mins, there are ${secondsInMinutes} secs`);
// console.log(`In ${milliseconds} millisecs, there are ${secondsInMilliseconds} secs`);

// // Assignment and comparison operations

// //Assignment -> =

// const numberOfStudents = 4;

// // Comparisons -> is this element equal to this other?, is this greater than the other?

// //equal, we can use with numbers and with strings
// const isStudents3 = numberOfStudents === 3;

// console.log(
//   `if number of students is ${numberOfStudents}, saying that there are 3 students is ${isStudents3}`
// );

// //greater than
// const isStudentsMoreThan3 = numberOfStudents > 3;

// console.log(`We have more than 3 students? ${isStudentsMoreThan3}`);

// //smaller than
// const isStudentsLessThan3 = numberOfStudents < 3;

// console.log(`We have less than 3 students? ${isStudentsLessThan3}`);

// // Different than -> !=

// const isStudentsNot4 = numberOfStudents != 4;

// console.log(`I don't have 4 students, right?! ${isStudentsNot4}`);

// // Comparing strings

// const userName = prompt("What is your name?");
// const isUserNameAnanda = userName === "Ananda";
// const isUserStudent = true;

// console.log("User name is Ananda?", isUserNameAnanda);

// // --------------------------------------
// // Logical operators
// // And &&, Or || , Not !

// // And,
// // true && true = true
// // true && false = false
// // false && student = false
// // false && false = false
// //Is the name Ananda and is a student?
// const isUserAnandaAndStudent = isUserNameAnanda && isUserStudent;
// console.log(`Is the user Name Ananda and is a student? ${isUserAnandaAndStudent}`);

// // Or
// // Is going to be true if one of the possibilities or both are true

// const isUserAnandaOrStudent = isUserNameAnanda || isUserStudent;
// console.log(`Is the user Name Ananda or is a student? ${isUserAnandaOrStudent}`);

//--------------------------------------------------------
//--------------------------Conditionals ------------------------------
//--------------------------------------------------------

// if (userName === "Ananda") {
//   alert("Hello Ananda");
// } else {
//   alert("You are not Ananda, but hello Anyway");
// }

const databaseEmail = "ananda@gmail.com";
const databasePassword = "1234";

const enteredEmail = prompt("Hi, what is your email?");
const enteredPassword = prompt("What is your password?");

//if else statement
if (enteredPassword === password) {
  alert("Yay, you got it right, you're logged in, welcome.");
  alert("You have 10.000€ in your account");
} else {
  if (enteredPassword === "123") {
    alert("you are close");
  }
  if (enteredPassword === "12345") {
    alert("You are overdoing it");
  }
  alert("Don't try to be clever, this is not your account, go away");
}

// alert("Now you are not in the bank anymore, keep coding");

// //if statement

// alert("Now you are not in the bank anymore, keep coding");

//Guess the number game
// const rightNumber = 6;

// alert("Guess a number between 1 and 10");

// const enteredNumber = prompt("What is your guess?");
// console.log(`the entered number is ${enteredNumber} and the data type is ${typeof enteredNumber}`);

// if (enteredNumber === 0 || enteredNumber > 10) {
//   alert(" u.u really? I told you 1 to 10, go away");
// } else {
//   if (enteredNumber > rightNumber) {
//     alert("Your number is too high");
//   }
//   if (enteredNumber < rightNumber) {
//     alert("Your number is too low");
//   }
//   if (enteredNumber == rightNumber) {
//     alert("Yayyyyyyyyyyy you got it right");
//   }
// }

// switch
// 1 -> cookie, 2 -> protein bar, 3 -> coca cola, 4 -> aquarius, 5-> water, 6->doritos

// const userChoice = prompt("Which item do you want to select?");

// // if(userChoice == 1){
// //     alert("You chose cookie")
// // }
// // if( userChoice == 2){
// //     alert("You chose protein bar")
// // }

// let itemToGive = "";

// switch (userChoice) {
//   case "1":
//     itemToGive = "cookie";
//     break;

//   case "2":
//     itemToGive = "protein bar";
//     break;

//   case "3":
//     itemToGive = "coca cola";
//     break;

//   case "4":
//     itemToGive = "aquarius";
//     break;

//   case "5":
//     itemToGive = "water";
//     break;

//   case "6":
//     itemToGive = "doritos";
//     break;

//   default:
//     itemToGive = "something is not in the machine";
//     break;
// }

// alert(`The item you chose was ${itemToGive}`);
