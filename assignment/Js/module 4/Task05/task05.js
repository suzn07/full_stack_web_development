const apiUrl = "https://api.chucknorris.io/jokes/random";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    console.log("Chuck Norris Joke:");
    console.log(data.value);
  })
  .catch((error) => console.error("Error fetching joke:", error));
