(() => {

    document.getElementById("submit").addEventListener("click", getDataApi);   

    function getDataApi(event) {
        event.preventDefault();

        getSearchValue();

        sendApiRequest();
        
    };

    // Get the search item
    function getSearchValue() {
        let search = document.querySelector(".searchterm").value;
        console.log(search);
    };

    // An asynchronous function to fetch data from the API
    async function sendApiRequest() {
        let APP_ID = "fa8bb951";
        let API_KEY = "ccdd9cf1b905e47fc65d52b9957442ce";
        let response = await fetch("https://api.edamam.com/search?app_id="+APP_ID+"&app_key="+API_KEY+"&q=pizza");
        console.log(response);

        let data = await response.json();
        console.log(data);

        useApiData(data);
    };

    // Function to use the data from the API
    function useApiData(data){
        
    };

})();