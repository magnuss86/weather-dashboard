// console.log("hello");
       
       
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c56b8c5094d7dabc849248635865a867`
var query5Day = "https://api.openweathermap.org/data/2.5/forecast?q=Seattle&appid=c56b8c5094d7dabc849248635865a867"
var citySelection = []  
var cityName 
    
$("#find-city").on('click', function(cityLocate){
  cityLocate.preventDefault()
  cityName = $('#city-input').val()
  // console.log($('#city-input').val());
    // var $windSpeed = $("city-wind-speed")
    var $date = $('#date')
  //   var $temp = $('')
  
  
  


   $.ajax({
   url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c56b8c5094d7dabc849248635865a867`,
   method: "GET"
   }).then(function(response) {
   console.log(response);
    

   var weatherOptions = [response.weather[0].description, response.main.temp, response.main.humidity, response.wind.speed ]
   var humidity = response.main.humidity
   var windSpeed = response.wind.speed
   var currentDescr = response.weather[0].description
   var temp = response.main.temp
   temp = ((response.main.temp)*1.8 - 459.67)
  //  console.log(temp);
  console.log(windSpeed);
   
   $('#city-name').text("City: " + response.name)
   $("#date").text("Date: " + response.dt)
   $("#city-temperature").text("Temp: " + temp)
   $("#city-humidity").text("Humidity: " + humidity + "%")
  // //  console.log(humidity);
  $("#city-wind-speed").text("Wind Speed: " + windSpeed)


  })
  


   //WHAT dod we want to do
    //1. we get the response then we want to use the response object to 
    //2. we want to set up two columns 
      // - the first
        // -25% of screen to the left
        // -search on top
          //title on top
          //input/ submit button
        // -history below
      // the second
        //- takes up 75% of screen to the right
        //two rows
          //first row -
            // city name, date, clouds
            //Temperature in degrees Fahrenheit
            //%humidity
            // Wind speed mph
            // UV index (possible warning if its at a certain level)
          // second row 
            //- 5day Forcast :
            // 5 cards describing each day
              //in the cards:
                //date
                //an icon t visually describe forecase
                //temp F
                //% humidity







   });

  //  $.ajax({
  //   url: query5Day,
  //   method: "GET"
  //   }).then(function(response) {
  //   // weather5Day = [response.main.temp, response.main.humidity ]
  //   console.log(response);

    
  //   });
   


   // weather conditions .weather[0].description, temperature .main.temp, humidity .main.humidity, wind speed .wind.speed, UV index

    // ajaxCall()
    // var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    // console.log(temp);
   

  