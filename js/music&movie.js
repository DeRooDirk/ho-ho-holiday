// Initial Values
const log = console.log;

// Selecting elements from the DOM
const searchButton = document.querySelector('#search');
const resultDiv = document.querySelector('.movie_details');
const moviesContainer = document.querySelector('#movies-poster');

let isPersonGood = false;

const movieApi = {
    key: "bcb29f3520fa123edbf8a41e0ae3636f",
    base: "https://api.themoviedb.org",
    image_base : "https://image.tmdb.org/t/p/w300/",
    path : "/search/movie"
};

const searchVideo = (event) => {
    event.preventDefault();
    moviesContainer.innerHTML="";
    resultDiv.innerHTML="";

    fetch(`${movieApi.base}/3${movieApi.path}?api_key=${movieApi.key}&query=horror`)
        .then((response) => {
            log(response);

            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
            }

        // Examine the text in the response
        response.json().then(function(data) {
          //console.log(data);
          //console.log(data.results[3].title);
          //console.log(data.results[1].overview);
          console.log(data.results);
          //console.log(data.results.length);
          if ( isPersonGood === false){
            let index = parseInt(Math.floor(Math.random()* data.results.length));
            log(index)

            for (let i = 0; i < data.results.length; i++){

                //console.log(data.results[index].name);
                let movieTitle = document.createElement("h2");
                movieTitle.innerHTML = data.results[index].title;

                let movieDescription = document.createElement("p");
                movieDescription.innerHTML = "<strong> Description: </strong>" + data.results[index].overview;

                let dateReleased = document.createElement("p");
                dateReleased.innerHTML = "<strong> Description: </strong>" + data.results[index].release_date;


                moviesContainer.style.backgroundImage = "url(" + movieApi.image_base + data.results[index].poster_path + ")";
                resultDiv.appendChild(movieTitle);
                resultDiv.appendChild(movieDescription);
                resultDiv.appendChild(dateReleased);
                break;

            



            }
          }

        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  
}
searchButton.addEventListener("click", searchVideo)
