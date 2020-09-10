
var currentDay = $("<h1>");
currentDay.text(moment().format('dddd, MMMM Do YYYY')); 
$("#currentDay").append(currentDay);

var eventPassed = 