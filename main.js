// Test to make sure JS file is working

console.log("This is working");

//Grabbing DOM elements
var domElements = ["name", "location", "forecast", "quote", "news", "picture"];

for (i = 0; i < domElements.length; i++) {
    domElements[i] = document.getElementById(domElements[i] + "-input")
    console.log( domElements[i])
}



