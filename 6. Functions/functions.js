const message = "Bonjour, this is Sofitel Hotel, Ebtesam is talking. ";

function callSam(petitionForSam) {
  alert(message);
  alert(`${petitionForSam} is valid, but please call someone else. Adieu.`);
}

function callSamHandler() {
  const userRequest = prompt("What would you like to say to Sam?");

  callSam(userRequest);
}

// callSam("I want extra towels");
// callSam("I want ice");
// callSam("Can I have breakfast for free?");
// callSam(message);

function tipcalculator(percentage, total, people) {
  let tip = total * percentage;

  return (total + tip) / people;
}

let resultTip = tipcalculator(0.15, 546, 6);

// alert(resultTip);
