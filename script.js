// console.log("hello");

// var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=c56b8c5094d7dabc849248635865a867`;
var query5Day =
  "https://api.openweathermap.org/data/2.5/forecast?q=Seattle&appid=c56b8c5094d7dabc849248635865a867";
var citySelection = [];

var cityLat;
var cityLon;
var ls = window.localStorage;
cityLat = $("city-lat");
cityLon = $("city-lon");

// ls.setItem('city save', JSON.stringify(citySelection))
var retrievedValue = JSON.parse(ls.getItem("city save")) || [];

// for (var i = 0; i < retrievedValue.length; i++) {
//   var newLi = $("<ul>");
//   newLi.text(retrievedValue[i]);
//   $("#col-three").append(newLi);
// }

function textBox(event) {
  event.preventDefault()
  console.log("textBox");
var cityName = $("#city-input").val();
apiCall(cityName)


}

function listItem(event) {
var cityName = event.target.textContent
apiCall(cityName)
console.log(listItem);
}

function apiCall(cityName) {

    
  
  $("#col-three").empty();
  citySelection.push(cityName);
  console.log(citySelection);
  // console.log($('#city-input').val());
  // var $windSpeed = $("city-wind-speed")
  var $date = $("#date");
  ls.setItem("city save", JSON.stringify(citySelection));
  var retrievedValue = JSON.parse(ls.getItem("city save"));



  // API call for current weather conditions

  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=c56b8c5094d7dabc849248635865a867`,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    var weatherOptions = [
      response.weather[0].description,
      response.main.temp,
      response.main.humidity,
      response.wind.speed,
    ];
    var humidity = response.main.humidity;
    var windSpeed = response.wind.speed;
    var currentDescr = response.weather[0].description;
    var temp = response.main.temp.toFixed(0);
    var cityLat = response.coord.lat;
    var cityLon = response.coord.lon;
    var mainIcon = response.weather[0].icon;

    console.log(windSpeed);

    $("#city-name").text("City: " + response.name);
    $("#date").text(moment().format("M-D-Y"));
    $("#city-temperature").text("Temp: " + temp);
    $("#city-humidity").text("Humidity: " + humidity + "%");
    $("#image-1").text(mainIcon);
    $("#city-wind-speed").text("Wind Speed: " + windSpeed.toFixed(0));

    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLat}&lon=${cityLon}&units=imperial&appid=c56b8c5094d7dabc849248635865a867`,
      method: "GET",
    }).then(function (response) {
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
      var temp1 = response.daily[1].temp.max.toFixed(0);
      var temp2 = response.daily[2].temp.max.toFixed(0);
      var temp3 = response.daily[3].temp.max.toFixed(0);
      var temp4 = response.daily[4].temp.max.toFixed(0);
      var temp5 = response.daily[5].temp.max.toFixed(0);

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
    });

    for (var i = 0; i < retrievedValue.length; i++) {
      var newLi = $("<ul>");
      newLi.text(retrievedValue[i]);
      $("#col-three").append(newLi);
    }
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
}
$("#find-city").on("click", textBox);
$("#col-three").on("click", listItem)
