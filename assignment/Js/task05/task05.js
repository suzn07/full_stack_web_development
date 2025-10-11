function leapYear() {
  const year = parseInt(document.querySelector("#year").value);
  let resultText = "";

  if (isNaN(year)) {
    resultText = "Please enter a valid number.";
  } else {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      resultText = year + " is a leap year.";
    } else {
      resultText = year + " is not a leap year.";
    }
  }

  document.querySelector("#result").textContent = resultText;
}
