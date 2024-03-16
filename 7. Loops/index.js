function whileExample() {
  let counter = 10;

  while (counter > 0) {
    alert(counter);
    counter = counter - 1;
  }

  alert("Happy new year");
}

function forExample() {
  alert("I'm going to say I'm diana 4 times");

  for (let i = 1; i <= 15; i++) {
    alert(`I'm Diana, and the value of i is ${i}`);
  }
}

function happyNewYearFor() {
  for (let i = 10; i > 0; i--) {
    alert(i);
  }

  alert("Happy new year with for!");
}
