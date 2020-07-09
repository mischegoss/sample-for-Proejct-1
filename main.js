
let currentLocation;
let currentCondition;
let currentActivity;
let userInput;

// Test to make sure JS file is working

console.log("This is working");
getTopNews()

//Grabbing DOM elements
var domElements = ["name", "location", "forecast", "activity", "news", "picture", "total", "death", "increase", "updated", "region"];

for (i = 0; i < domElements.length; i++) {
    this[domElements[i] + "Element"] = document.getElementById(domElements[i] + "-input")
    console.log(this[domElements[i] + "Element"]  )
}

// Getting location API using JQuery .getJSON()

$.getJSON('https://ipapi.co/json/', function(data){
  currentLocation = data.city
  currentRegion = data.region_code
  locationElement.textContent = currentLocation;
  regionElement.textContent = currentRegion;
  getCOVID(currentRegion)
  getForecast(currentLocation)
  
})

//getting Forecast using Weather API and changing the image to reflect the current conditions

function getForecast() {

fetch("https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=" + currentLocation + "&appid=d91f911bcf2c0f925fb6535547a5ddc9&units=imperial")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    forecastElement.textContent = "The current temperature is " + data.main.temp + " °F";
    currentCondition = data.weather[0].description
    let conditionForURL = currentCondition.replace(/\s+/g, ',').toLowerCase();
    pictureElement.src = "https://source.unsplash.com/featured/?" + conditionForURL;
    pictureElement.alt = currentCondition;

  })
}

//Get activity with JQuery

$.getJSON("https://cors-anywhere.herokuapp.com/https://www.boredapi.com/api/activity", function(data){
  currentActivity = data.activity;
  activityElement.textContent = currentActivity;
  
})


//Get Top News in US

function getTopNews() {
  const newsURL = 
  "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=2db8e4a853ea4d34a0f9405a0ff55811"

  fetch(newsURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      for (i = 0; i < 5; i++) {
        this["article" + i] = document.getElementById("article-" + i)
        this["article" + i].textContent = data.articles[i].title
        this["article" + i].href = data.articles[i].url;
        
        

      }
  
    })
  }

  $(document).ready(function(){
    $("#myModal").modal("show");
  });

 
$("#modalButton" ).click(function() {
 userInput = $("#userInput").val();
 nameElement.textContent = userInput;

});
 
function getCOVID() {
  let regionForURL = currentRegion.toLowerCase()
  let getCOVIDURL = "https://covidtracking.com/api/v1/states/" + regionForURL +"/current.json"
  
  $.getJSON(getCOVIDURL, function(data){
    deathElement.textContent = data.death
    totalElement.textContent = data.positive
    increaseElement.textContent = data.positiveIncrease
    updatedElement.textContent = data.date

  
  console.log(data)
  
})
}