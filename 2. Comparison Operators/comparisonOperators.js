// --------------------------------------------------------------------------------
// Operators

//Operations with numbers, strings, variables

let minutes = 2;
const secondsInMinutes = minutes * 60;

const milliseconds = 4500;
const secondsInMilliseconds = milliseconds / 1000;

milliseconds / 1000;

console.log(`In ${minutes} mins, there are ${secondsInMinutes} secs`);
console.log(`In ${milliseconds} millisecs, there are ${secondsInMilliseconds} secs`);

// Assignment and comparison operations

//Assignment -> =

const numberOfStudents = 4;

// Comparisons -> is this element equal to this other?, is this greater than the other?

//equal, we can use with numbers and with strings
const isStudents3 = numberOfStudents === 3;

console.log(
  `if number of students is ${numberOfStudents}, saying that there are 3 students is ${isStudents3}`
);

//greater than
const isStudentsMoreThan3 = numberOfStudents > 3;

console.log(`We have more than 3 students? ${isStudentsMoreThan3}`);

//smaller than
const isStudentsLessThan3 = numberOfStudents < 3;

console.log(`We have less than 3 students? ${isStudentsLessThan3}`);

// Different than -> !=

const isStudentsNot4 = numberOfStudents != 4;

console.log(`I don't have 4 students, right?! ${isStudentsNot4}`);

// Comparing strings

const userName = prompt("What is your name?");
const isUserNameAnanda = userName === "Ananda";
const isUserStudent = true;

console.log("User name is Ananda?", isUserNameAnanda);
