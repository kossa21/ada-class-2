let itemToGive = "";

switch (userChoice) {
  case "1":
    itemToGive = "cookie";
    break;

  case "2":
    itemToGive = "protein bar";
    break;

  case "3":
    itemToGive = "coca cola";
    break;

  case "4":
    itemToGive = "aquarius";
    break;

  case "5":
    itemToGive = "water";
    break;

  case "6":
    itemToGive = "doritos";
    break;

  default:
    itemToGive = "something is not in the machine";
    break;
}

alert(`The item you chose was ${itemToGive}`);
