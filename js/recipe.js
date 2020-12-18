(() => {
    let shoppingBtn = document.querySelectorAll(".shoppingBtn");

    let shoppingListClicked = (event) =>{
        console.log(event.currentTarget.getAttribute("data-title")) 
       
    } 
      
        shoppingBtn.forEach((element) => {
            
            element.addEventListener("click", shoppingListClicked)       
                
        }) 


    document.getElementById("submit").addEventListener("click", getDataApi);  
    

    function getDataApi(event) {
        event.preventDefault();

        sendApiRequest();
        //useApiData(data);

        
    };
    

    let data = "";
    /* let button = ""; */

    // An asynchronous function to fetch data from the API
    async function sendApiRequest() {
        let search = document.querySelector(".searchterm").value;
        let APP_ID = "fa8bb951";
        let API_KEY = "ccdd9cf1b905e47fc65d52b9957442ce";
        let response = await fetch("https://api.edamam.com/search?app_id="+APP_ID+"&app_key="+API_KEY+"&q="+search);
        //console.log(response);

        data = await response.json();
        //console.log(data);
        useApiData(data)
        //shoppingListClicked();
        
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

            let titleData = document.querySelector("#shoppinglist"+i).getAttribute("data_ingredients") ;
            titleData = data.hits[i].recipe.label;

            //console.log(titleData)

           
           
            

            //console.log(document.querySelector("#title"+i).getAttribute("data-title")) 

            



            /* button = document.querySelector("#shoppinglist"+i);
            button.disabled = true;
 */
            /* if(document.querySelector("#shoppinglist0").clicked == true){
                addToShoppingList(j); 
            } else {
                console.log("not clicked");
            };  */    
        };      
      

    };
  
   
   
  
    //shoppingBtn.addEventListener("click", shoppingListClicked())

    

    /* for (let j = 0; j < 6; j++){
        document.querySelector("#shoppinglist"+j).addEventListener("click", addToShoppingList(j)); 
        };

        if(document.querySelector("#shoppinglist"+j).clicked == true) */

    /* function addToShoppingList(j){

        let ingredients = [];

        console.log("ingredients");
        
        ingredients.push(data.hits[j].recipe.ingredientLines);

        console.log(ingredients);

    }; */

})();