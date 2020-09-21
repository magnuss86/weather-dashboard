// console.log("hello");
       
       
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=c56b8c5094d7dabc849248635865a867"
var citySelection = []   
    
 {
   $.ajax({
   url: queryURL,
   method: "GET"
   }).then(function(response) {
   console.log(response.weather[0].description);
    
   })};

    // ajaxCall()
       

  