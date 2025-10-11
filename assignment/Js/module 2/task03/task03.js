function DogNames() {
  let dogs = [];

  for (let i = 0; i < 6; i++) {
    let dogName = prompt(`Enter the name of dog ${i + 1}:`);
    dogs.push(dogName);
  }
  dogs.sort().reverse();

  let list = document.querySelector("#doglist");

  for (let i = 0; i < dogs.length; i++) {
    let li = document.createElement("li");
    li.textContent = dogs[i];
    list.appendChild(li);
  }
}
DogNames();
