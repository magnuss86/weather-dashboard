// console.log("hello");
       
       
var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=c56b8c5094d7dabc849248635865a867`
var query5Day = "https://api.openweathermap.org/data/2.5/forecast?q=Seattle&appid=c56b8c5094d7dabc849248635865a867"
var citySelection = []  
var cityName 
var cityLat
var cityLon
cityLat = $("city-lat")
cityLon = $("city-lon")
    
$("#find-city").on('click', function(cityLocate){
  cityLocate.preventDefault()
  cityName = $('#city-input').val()
  // console.log($('#city-input').val());
    // var $windSpeed = $("city-wind-speed")
    var $date = $('#date')
  
  
   
 

// API call for current weather conditions

   $.ajax({
   url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=c56b8c5094d7dabc849248635865a867`,
   method: "GET"
   }).then(function(response) {
   console.log(response);
    

   var weatherOptions = [response.weather[0].description, response.main.temp, response.main.humidity, response.wind.speed ];
   var humidity = response.main.humidity;
   var windSpeed = response.wind.speed;
   var currentDescr = response.weather[0].description;
   var temp = response.main.temp.toFixed(0);
   var cityLat = response.coord.lat;
   var cityLon = response.coord.lon;
   var mainIcon = response.weather[0].icon
 
  console.log(windSpeed);
   
   $('#city-name').text("City: " + response.name);
   $("#date").text(moment().format("M-D-Y")); 
   $("#city-temperature").text("Temp: " + temp)
   $("#city-humidity").text("Humidity: " + humidity + "%");
   $("#image-1").text(mainIcon)
   $("#city-wind-speed").text("Wind Speed: " + windSpeed.toFixed(0));

  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&units=imperial&appid=c56b8c5094d7dabc849248635865a867`,
    method: "GET"
    }).then(function(response) {
    console.log(response);
    var uvIndex = response.daily[0].uvi;
    $("#city-uv-index").text("UV Index: " + uvIndex);

    //set humidity response return 

    var humidity1 = response.daily[1].humidity;
    var humidity2 = response.daily[2].humidity;
    var humidity3 = response.daily[3].humidity;
    var humidity4 = response.daily[4].humidity;
    var humidity5 = response.daily[5].humidity;

    // print humiduty response for five days

    $("#card-1-humid").text("Humidity: " + humidity1 + "%");
    $("#card-2-humid").text("Humidity: " + humidity2 + "%");
    $("#card-3-humid").text("Humidity: " + humidity3 + "%");
    $("#card-4-humid").text("Humidity: " + humidity4 + "%");
    $("#card-5-humid").text("Humidity: " + humidity5 + "%");

    // temperature variable response
      var temp1 = response.daily[1].temp.max.toFixed(0)
      var temp2 = response.daily[2].temp.max.toFixed(0)
      var temp3 = response.daily[3].temp.max.toFixed(0)
      var temp4 = response.daily[4].temp.max.toFixed(0)
      var temp5 = response.daily[5].temp.max.toFixed(0)

      // print temp response for five days

      $("#card-1-temp").text("Temp: " + temp1);
      $("#card-2-temp").text("Temp: " + temp2);
      $("#card-3-temp").text("Temp: " + temp3);
      $("#card-4-temp").text("Temp: " + temp4);
      $("#card-5-temp").text("Temp: " + temp5);

      $("#card-1-date").text(moment().add(1, "d")); 
      $("#card-2-date").text(moment().add(2, "d")); 
      $("#card-3-date").text(moment().add(3, "d")); 
      $("#card-4-date").text(moment().add(4, "d")); 
      $("#card-5-date").text(moment().add(5, "d")); 
      // var imgIcon = [

      // ]
      // (moment().format("M-D-Y"))
      // moment().add(1, "d"); 
    var date = response.daily[1].dt;
        // date = moment.unix(date).format("MM/DD/YYYY");
        // date = moment().format("MMM Do YY");
  //   console.log(date);
  //   console.log(humidity);
  // console.log(date);
    



  

  


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

 
   
})





//LOCAL STORAGE
//Lives in the browser window 
  //each URL gets 10mb of storage space on the local computer

  //Local Storage is an object
  //it accepts key- value pairs (like a dictionary)
    // the value must always be a string

  //local storage lives on the window object
  //so save it to a variable
  // var ls = window.localStorage

  //LS has 4 methods built into it
    // .getItem() ---> parse
    // .setItem() --> stringify
    //.remove() -->  give a key (deletes one item)
    //.clear() ---> drops the bomb (delete all storage for the URL)

  
  //Also have two additional methods 
  // for adding to LS
    //JSON.stringify()
      // ex --> LS.setItem('key', JSON.stringify(value))

  //for taking items out of local storage
    //JSOn.parse()
      // --> ex
        // var retrievedValue = JSON.parse(LS.getItem('key'))

    // var LS = window.localStorage;
    
    // var magnusFaveSongs = ['Twist n Shout', 'Yellow Submarine', 'She Loves You']

    // var franksFaveSongs = [ 'Somthing', 'Shes So Heavy', 'Eight days A Week']


    // LS.setItem('magnusList', JSON.stringify(magnusFaveSongs))
    // LS.setItem('franksList', JSON.stringify(franksFaveSongs))




    // var magnusChoices = JSON.parse(LS.getItem('magnusList'))

    // var beatlesEl = document.getElementById('the-fab-four')
      
    // for(var i = 0; i < magnusChoices.length; i++){
    //     var newLi = document.createElement('li')
    //     newLi.innerHTML = magnusChoices[i]
    //     beatlesEl.appendChild(newLi)
    //   }

    // console.log('var frankslist ---->', JSON.parse(LS.getItem('franksList')))

    // console.log('W/o parsing--->', LS.getItem('franksList'))