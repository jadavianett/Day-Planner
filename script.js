var nineAm = moment().format('09:00:00 am')
var tenAm = moment().format('10:00:00 am')
var elevenAm = moment().format('11:00:00 am')
var twelvePm = moment().format('12:00:00 pm')
var onePm = moment().format('01:00:00 pm')
var twoPm = moment().format('02:00:00 pm')
var threePm = moment().format('03:00:00 pm')
var fourPm = moment().format('04:00:00 pm')
var fivePm = moment().format('05:00:00 pm')

// setting up current day variable 
var currentDay = $("<h1>");
currentDay.text(moment().format('dddd, MMMM Do YYYY')); 
$("#currentDay").append(currentDay);

var currentTime = moment().format('08:00:00 am')
//  var currentTime = moment().format('h')
 console.log(currentTime); 

 if (currentTime > nineAm) {
     console.log("In the past");
     $("#9am").attr("class", "past");
 } else if (currentTime == nineAm) {
     console.log("in the present");
     $("#9am").attr("class", "present");
 } else if (currentTime < nineAm) {
     console.log("in the future");
     $("#9am").attr("class", "future");
 }

 