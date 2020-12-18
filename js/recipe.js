(() => {
    let shoppingBtn = document.querySelectorAll(".shoppingBtn");
    let shoppingListClicked = ( event) =>{
        //console.log(data.hits)   
        console.log(event.CurrentTarget.CurrentTarget.getAttribute("data_ingredients"))

        /*
            for (let i = 0; i < 6; i++){
                
                let titleData = document.querySelector("#shoppinglist"+i).getAttribute("data_ingredients") ;
                titleData = data.hits[i].recipe.label;
                //console.log(titleData)
                
            };   */
             
    } 
    shoppingBtn.forEach((element) => {
            
      
        element.addEventListener("click", shoppingListClicked) 
              
            
    })  
    

    /* function getDataApi(event) {
        event.preventDefault();

        sendApiRequest();
        //useApiData(data);

        
    };
   */
    

    //let data = "";
    /* let button = ""; */

    // An asynchronous function to fetch data from the API
    function sendApiRequest(event) {
        event.preventDefault();

        let search = document.querySelector(".searchterm").value;
        let APP_ID = "fa8bb951";
        let API_KEY = "ccdd9cf1b905e47fc65d52b9957442ce";
        
        fetch("https://api.edamam.com/search?app_id="+APP_ID+"&app_key="+API_KEY+"&q="+search)

      .then((response) => {

        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }

        return response.json();


        }).then((data) => {
            useApiData(data)
           // addDataAttributes(data)
           // shoppingListClicked(data, event)
      
          })
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
        
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
       
        };      
      

    };
   
  
   // console.log(document.querySelector("#shoppinglist1"))

  


    document.getElementById("submit").addEventListener("click", sendApiRequest);

})();