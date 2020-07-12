
let currentLocation;
let currentCondition;
let currentCountry;
let currentActivity;
let userInput;

// Test to make sure JS file is working

console.log("This is working");
getTopNews()

//Grabbing DOM elements
var domElements = ["location", "news", "picture", "total", "death", "increase", "updated", "region"];

for (i = 0; i < domElements.length; i++) {
    this[domElements[i] + "Element"] = document.getElementById(domElements[i] + "-input")
    console.log(this[domElements[i] + "Element"]  )
}

// Getting location API using JQuery .getJSON()

$.getJSON('https://ipapi.co/json/', function(data){
  currentLocation = data.city;
  currentRegion = data.region_code;
  currentCountry = data.country;
  regionElement.textContent = currentRegion;
  getCOVID(currentCountry, currentRegion);

  
})



//Get Top COVID News

function getTopNews() {
  const newsURL = 
  "https://gnews.io/api/v3/search?q=covid&token=672f4bdf76c091ef3a5381267aa41020"
  fetch(newsURL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data)
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
 
function getCOVID( ) {
 let getCOVIDURL;

  if(currentCountry == "US") {
  let regionForURL = currentRegion.toLowerCase()
  getCOVIDURL = "https://covidtracking.com/api/v1/states/" + regionForURL +"/current.json"

  } else {
    getCOVIDURL = "https://covidtracking.com/api/v1/states/" + fl +"/current.json"
  }
  
  $.getJSON(getCOVIDURL, function(data){
    deathElement.textContent = data.death
    totalElement.textContent = data.positive
    increaseElement.textContent = data.positiveIncrease
    updatedElement.textContent = data.date

  
  
})
}