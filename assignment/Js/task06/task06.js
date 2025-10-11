const square_root_calc = confirm("Should I Calculate the Square root?");
const root_number = document.querySelector(".square_root");
if (square_root_calc) {
  const number = parseFloat(prompt("Enter a Number:"));
  if (isNaN(number)) {
    root_number.textContent = "Please enter a valid number.";
  } else if (number < 0) {
    root_number.textContent =
      "Square root of negative number cannot be Calculated";
  } else {
    const squareRoot = Math.sqrt(number);
    root_number.textContent = `The Square root of ${number} is ${squareRoot}.`;
  }
} else {
  root_number.textContent = "The Square root is not Calculated.";
}
