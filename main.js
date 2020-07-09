
let currentLocation;
let currentCondition;

// Test to make sure JS file is working

console.log("This is working");

//Grabbing DOM elements
var domElements = ["name", "location", "forecast", "quote", "news", "picture"];

for (i = 0; i < domElements.length; i++) {
    this[domElements[i] + "Element"] = document.getElementById(domElements[i] + "-input")
    console.log(this[domElements[i] + "Element"]  )
}

// Getting location API using JQuery .getJSON()

$.getJSON('https://ipapi.co/json/', function(data){
  currentLocation = data.city
  locationElement.textContent = currentLocation;
  getForecast(currentLocation)
})

//getting Forecast using Weather API and changing the image to reflect the current conditions

function getForecast() {

fetch("http://api.openweathermap.org/data/2.5/weather?q=" + currentLocation + "&appid=d91f911bcf2c0f925fb6535547a5ddc9&units=imperial")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    forecastElement.textContent = "The current temperature is " + data.main.temp + " °F";
    currentCondition = data.weather[0].description
    currentCondition.replace(/\s+/g, ',').toLowerCase();
    pictureElement.src = "https://source.unsplash.com/featured/?" + currentCondition;
    pictureElement.srcset = "https://source.unsplash.com/featured/?" + currentCondition;

  })
}