// --------------------------------------
// Logical operators
// And &&, Or || , Not !

// And,
// true && true = true
// true && false = false
// false && student = false
// false && false = false
//Is the name Ananda and is a student?
const isUserAnandaAndStudent = isUserNameAnanda && isUserStudent;
console.log(`Is the user Name Ananda and is a student? ${isUserAnandaAndStudent}`);

// Or
// Is going to be true if one of the possibilities or both are true

const isUserAnandaOrStudent = isUserNameAnanda || isUserStudent;
console.log(`Is the user Name Ananda or is a student? ${isUserAnandaOrStudent}`);
