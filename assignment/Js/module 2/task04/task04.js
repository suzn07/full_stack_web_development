function getNumbers() {
  const numbers = [];
  let num;

  while (true) {
    num = Number(prompt("Enter a number 0 to stop:"));
    if (num === 0) break;
    numbers.push(num);
  }

  return numbers;
}

function sortDescending(arr) {
  return arr.sort((a, b) => b - a);
}

function main() {
  const nums = getNumbers();
  const sortedNums = sortDescending(nums);

  console.log("Numbers from largest to smallest:");
  for (let n of sortedNums) {
    console.log(n);
  }
}

main();
