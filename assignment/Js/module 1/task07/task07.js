const num_of_dice = parseInt(prompt("Enter the number of dice to roll:"));
const diceRolls = document.querySelector(".dice_rolls");

if (isNaN(num_of_dice) || num_of_dice <= 0) {
  diceRolls.textContent = "Please Enter a valid positive number.";
} else {
  let sum = 0;
  for (let i = 0; i < num_of_dice; i++) {
    const roll = Math.floor(Math.random() * 6 + 1);
    sum += roll;
  }
  diceRolls.textContent = `You Rolled ${num_of_dice} dice. The total sum is ${sum}`;
}
