// task 1
"use strict";
const consoler = function () {
  console.log("I'm printing to console");
};

consoler();

// task 2
const user_name = prompt("Type your name.");
document.querySelector("#display_name").textContent =
  "Hello," + " " + user_name + "!";
