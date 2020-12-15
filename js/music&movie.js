// Initial Values
const INITIAL_SEARCH_VALUE = 'spiderman';
const log = console.log;

// Selecting elements from the DOM
const searchButton = document.querySelector('#search');;
const searchInput = document.querySelector('#exampleInputEmail1');
const moviesContainer = document.querySelector('#movies-container');
const moviesSearchable = document.querySelector('#movies-searchable');

const movieApi = {
    key : "bcb29f3520fa123edbf8a41e0ae3636f",
    url : "https://api.themoviedb.org'"
}

const searchVideo = (event) => {
    event.preventDefault();
    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=bcb29f3520fa123edbf8a41e0ae3636f&query=spider`)
        .then((response) => {
            log(response)

          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }

        // Examine the text in the response
        response.json().then(function(data) {
          console.log(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  
}
searchButton.addEventListener("click", searchVideo)