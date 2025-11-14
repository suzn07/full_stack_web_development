const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  const query = document.querySelector("#query").value.trim();
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
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
