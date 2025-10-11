"use strict";

const num1 = parseInt(prompt("Enter first number"));
const num2 = parseInt(prompt("Enter second number"));
const num3 = parseInt(prompt("Enter third number"));
const Sum = num1 + num2 + num3;
const Product = num1 * num2 * num3;
const Average = Sum / 3;

document.querySelector(".calculation").innerHTML =
  "Sum = " +
  Sum +
  "<br>" +
  "Product = " +
  Product +
  "<br>" +
  "Average = " +
  Average;
