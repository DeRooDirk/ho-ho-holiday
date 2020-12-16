(() => {

    document.getElementById("submit").addEventListener("click", getDataApi);  
    

    function getDataApi(event) {
        event.preventDefault();

        sendApiRequest();
        
    };



    // An asynchronous function to fetch data from the API
    async function sendApiRequest() {
        let search = document.querySelector(".searchterm").value;
        let APP_ID = "fa8bb951";
        let API_KEY = "ccdd9cf1b905e47fc65d52b9957442ce";
        let response = await fetch("https://api.edamam.com/search?app_id="+APP_ID+"&app_key="+API_KEY+"&q="+search);
        console.log(response);

        let data = await response.json();
        console.log(data);

        useApiData(data);
    };

    // Function to use the data from the API
    function useApiData(data){
        for (let i = 0; i < 6; i++){
            document.querySelector("#recipeimage"+i).src = data.hits[i].recipe.image;
            document.querySelector("#title"+i).innerHTML = data.hits[i].recipe.label;
            document.querySelector("#source"+i).innerHTML = "Source: "+data.hits[i].recipe.source;
            document.querySelector("#url"+i).innerHTML = "Click here for the complete recipe";
            document.querySelector("#ingredients"+i).innerHTML = data.hits[i].recipe.ingredientLines;
            document.querySelector("#url"+i).href = data.hits[i].recipe.url;
            document.querySelector("#shoppinglist"+i).innerHTML = "Add to shopping list";

            document.querySelector("#shoppinglist"+i).addEventListener("click", addToShoppingList); 
        };        
    };

    function addToShoppingList(){
        let ingredients = [];

        console.log("ingredients");
    };

})();