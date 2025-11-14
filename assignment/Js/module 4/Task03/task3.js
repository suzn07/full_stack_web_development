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

    console.log(`Search results for "${query}":`);
    console.log(data);
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

      if (show.image?.medium) {
        const img = document.createElement("img");
        img.src = show.image.medium;
        img.alt = `${show.name} Poster`;
        article.appendChild(img);
      }
      const summary = document.createElement("div");
      summary.classList.add("summary");
      summary.innerHTML = show.summary || "No summary available.";
      article.appendChild(summary);

      resultsDiv.appendChild(article);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
