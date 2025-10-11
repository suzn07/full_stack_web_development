const InputName = document.querySelector("#name");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

const selectRoom = () => {
  const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
  const randomNumber = Math.floor(Math.random() * houses.length);
  return houses[randomNumber];
};

const sortStudent = () => {
  const student = InputName.value;
  const house = selectRoom();
  result.textContent = `${student}, you are ${house}.`;
};

btn.addEventListener("click", sortStudent);
InputName.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sortStudent();
});
