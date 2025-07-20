// Get HTML Elements
const jokeEl = document.querySelector(".joke");
const jokeBtn = document.querySelector(".get-joke");

// Get a Joke
async function getJoke() {
  const url = "https://icanhazdadjoke.com/";
  const headers = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const response = await fetch(url, headers);
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }

    const json = await response.json();

    return json.joke;
  } catch (error) {
    console.log(error.message);
  }
}

// Intial Joke render on load
(async function () {
  const joke = await getJoke();
  jokeEl.innerHTML = joke;
})();

// New Joke on btnl Click
jokeBtn.addEventListener("click", async () => {
  const joke = await getJoke();
  jokeEl.innerHTML = joke;
});
