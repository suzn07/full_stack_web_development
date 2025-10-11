const number = parseInt(prompt("Enter a number:"));
const prime_number = document.querySelector(".prime_number");

if (Number.isNaN(number)) {
  prime_number.textContent = "Please enter a valid number.";
} else if (number < 2) {
  prime_number.textContent = `${number} is not a prime number.`;
} else {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    prime_number.textContent = `${number} is a prime number.`;
  } else {
    prime_number.textContent = `${number} is not a prime number.`;
  }
}
