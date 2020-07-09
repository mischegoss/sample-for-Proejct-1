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
  console.log(locationElement)
  locationElement.textContent = data.city;
})