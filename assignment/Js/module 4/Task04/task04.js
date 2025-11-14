const form = document.getElementById("searchForm");
const resultsDiv = document.getElementById("results");
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const query = document.getElementById("query").value.trim();
  if (!query) {
    alert("Please enter a TV show name.");
  }

  const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    resultsDiv.innerHTML = "";
    if (data.length === 0) {
      resultsDiv.innerHTML = "<p>No results found.</p>";
      return;
    }
    data.forEach((item) => {
      const show = item.show;
      const article = document.createElement("article");
      const title = document.createElement("h2");
      title.textContent = show.name;
      article.appendChild(title);

      const link = document.createElement("a");
      link.href = show.url;
      link.textContent = "Click to See details";
      link.target = "_blank";
      article.appendChild(link);

      const img = document.createElement("img");
      img.src = show.image
        ? show.image.medium
        : "https://placehold.co/210x295?text=Not%20Found";
      img.alt = `${show.name} Poster`;
      article.appendChild(img);

      const summary = document.createElement("div");
      summary.classList.add("summary");
      summary.innerHTML = show.summary || "No summary";
      article.appendChild(summary);

      resultsDiv.appendChild(article);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
