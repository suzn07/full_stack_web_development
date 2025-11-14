const form = document.getElementById("jokesForm");
const results = document.getElementById("results");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = document.getElementById("query").value.trim();

  results.innerHTML = "";

  if (!query) {
    results.innerHTML = "<p>Please enter a search term.</p>";
    return;
  }
  fetch(`https://api.chucknorris.io/jokes/search?query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.result.length === 0) {
        results.innerHTML = "<p>No jokes found.</p>";
        return;
      }
      data.result.forEach((joke) => {
        const article = document.createElement("article");
        const p = document.createElement("p");
        p.textContent = joke.value;
        article.appendChild(p);
        results.appendChild(article);
      });
    })
    .catch((error) => {
      results.innerHTML = `<p>Error fetching jokes: ${error}</p>`;
    });
});
