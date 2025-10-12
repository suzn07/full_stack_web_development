function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function main() {
  const resultsList = document.querySelector(".dicerolls");
  resultsList.innerHTML = "";

  const sides = Number(prompt("Enter the number of sides on the dice:"));
  if (sides < 1) {
    alert("The dice must have at least ome side");
    return;
  }

  const maxNumber = sides;
  let roll;
  let html = "";

  while (roll !== maxNumber) {
    roll = rollDice(sides);
    html += `<li>You rolled: ${roll}</li>`;
  }

  resultsList.innerHTML = html;
}

main();
