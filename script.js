// console.log("hello");
       
       
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=c56b8c5094d7dabc849248635865a867"
var query5Day = "https://api.openweathermap.org/data/2.5/forecast?q=Seattle&appid=c56b8c5094d7dabc849248635865a867"
var citySelection = []  

    
 
   $.ajax({
   url: queryURL,
   method: "GET"
   }).then(function(response) {
   console.log(response);
   weatherOptions = [response.weather[0].description, response.main.temp, response.main.humidity, response.wind.speed, ]
   var humidity = (response.main.humidity)
   var windSpeed = (response.wind.speed)
   var currentDescr = response.weather[0].description
   var temp = (response.main.temp)
   var temp = ((response.main.temp)*1.8 - 459.67)
   console.log(temp);
   });

   $.ajax({
    url: query5Day,
    method: "GET"
    }).then(function(response) {
    // weather5Day = [response.main.temp, response.main.humidity ]
    console.log(response);

    
    });
   


   // weather conditions .weather[0].description, temperature .main.temp, humidity .main.humidity, wind speed .wind.speed, UV index

    // ajaxCall()
    // var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    // console.log(temp);
   

  