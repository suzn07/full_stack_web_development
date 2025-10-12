"use strict";
const names = ["John", "Paul", "Jones"];

const target = document.getElementById("target");

let html = "";

for (let i = 0; i < names.length; i++) {
  const listItem = document.createElement("li");
  listItem.textContent = names[i];
  target.appendChild(listItem);
}
