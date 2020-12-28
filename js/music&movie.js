// Initial Values
const log = console.log;

// Selecting elements from the DOM
const searchButton = document.querySelector('#search');
const resultDiv = document.querySelector('.movie_details');
const moviesContainer = document.querySelector('#movies-poster');

// Global Variables
let isPersonGood = false;
const movieApi = {
  key: "bcb29f3520fa123edbf8a41e0ae3636f",
  base: "https://api.themoviedb.org",
  image_base: "https://image.tmdb.org/t/p/w300/",
  path: "/search/movie",
  query: ["horror", "comedy"]
};

// Query videos based on person being good or not
let searchVideo = (data) => {
  let index = parseInt(Math.floor(Math.random() * data.results.length));
  log(index)

  for (let i = 0; i < data.results.length; i++) {
    let movieTitle = document.createElement("h2");
    movieTitle.innerHTML = data.results[index].title;

    let movieDescription = document.createElement("p");
    movieDescription.innerHTML = "<strong> Description: </strong>" + data.results[index].overview;

    let dateReleased = document.createElement("p");
    dateReleased.innerHTML = "<strong>  </strong>" + data.results[index].release_date;

    moviesContainer.style.backgroundImage = "url(" + movieApi.image_base + data.results[index].poster_path + ")";
    resultDiv.appendChild(movieTitle);
    resultDiv.appendChild(movieDescription);
    resultDiv.appendChild(dateReleased);
    break;
  }
}

const apiCall = (event) => {
  event.preventDefault();
  moviesContainer.innerHTML = "";
  resultDiv.innerHTML = "";
  if (isPersonGood === true) {
    fetch(`${movieApi.base}/3${movieApi.path}?api_key=${movieApi.key}&query=${movieApi.query[1]}`)

      .then((response) => {
        log(response);

        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        response.json().then(function (data) {
          searchVideo(data)
        });
      }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });

  } else if (isPersonGood === false) {
    fetch(`${movieApi.base}/3${movieApi.path}?api_key=${movieApi.key}&query=${movieApi.query[0]}`)

      .then((response) => {
        log(response);

        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        response.json().then(function (data) {
          searchVideo(data)
        });
      }
      )
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  }
}
searchButton.addEventListener("click", apiCall)
