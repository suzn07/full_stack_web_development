function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function main() {
  const diceRoll = document.querySelector(".dicerolls");
  diceRoll.innerHTML = "";
  let roll;
  let html = "";

  while (roll !== 6) {
    roll = rollDice();
    html += `<li>You rolled: ${roll}</li>`;
  }

  diceRoll.innerHTML = html;
}
