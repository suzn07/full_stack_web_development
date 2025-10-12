function Numbers() {
  const numbers = [];

  while (true) {
    const num = Number(prompt("Enter a number:"));

    if (numbers.includes(num)) {
      alert("The number has already been given");
      break;
    }

    numbers.push(num);
  }

  return numbers;
}

function sortAscending(arr) {
  return arr.sort((a, b) => a - b);
}

function main() {
  const nums = Numbers();
  const sortedNums = sortAscending(nums);

  console.log("Numbers in ascending order:");
  for (let n of sortedNums) {
    console.log(n);
  }
}

main();
