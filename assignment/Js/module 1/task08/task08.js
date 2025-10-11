const startYear = parseInt(prompt("Enter the start year:"));
const endYear = parseInt(prompt("Enter the end year:"));
const list = document.querySelector(".leapYearsList");

if (Number.isNaN(startYear) || Number.isNaN(endYear) || startYear > endYear) {
  list.innerHTML = "<li>Please enter valid years</li>";
} else {
  for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      const li = document.createElement("li");
      li.textContent = year;
      list.appendChild(li);
    }
  }

  if (list.children.length === 0) {
    list.innerHTML = "<li>No leap years found in this range.</li>";
  }
}
