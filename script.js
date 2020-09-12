var nineAm = moment("0900").format('HHmm');
var tenAm = moment("1000").format("HHmm");
var elevenAm = moment("1100").format("HHmm");
var twelvePm = moment("1200").format("HHmm");
var onePm = moment("1300").format("HHmm");
var twoPm = moment("1400").format("HHmm");
var threePm = moment("1500").format("HHmm");
var fourPm = moment("1600").format("HHmm");
var fivePm = moment("1700").format("HHmm");


// local storage

// var todos = $("<textarea>");
// var todoList = JSON.parse(localStorage.getItem("todoList")) || [];



// setting up current day variable
var currentDay = $("<h1>");
currentDay.text(moment().format("dddd, MMMM Do YYYY"));
$("#currentDay").append(currentDay);

//hard code for now to test
 var currentTime = moment().format('HHmm');


if (currentTime > nineAm) {
  console.log("In the past");
  $("#9am").addClass("past col-sm-8");
} else if (currentTime == nineAm) {
  console.log("in the present");
  $("#9am").addClass("present col-sm-8");
} else if (currentTime < nineAm) {
  console.log("in the future");
  $("#9am").addClass("future col-sm-8");
}

if (currentTime > tenAm) {
  console.log("In the past");
  $("#10am").addClass("past col-sm-8");
} else if (currentTime == tenAm) {
  console.log("in the present");
  $("#10am").addClass("present col-sm-8");
} else if (currentTime < tenAm) {
  console.log("in the future");
  $("#10am").addClass("future col-sm-8");
}

if (currentTime > elevenAm) {
  console.log("In the past");
  $("#11am").addClass("past col-sm-8");
} else if (currentTime == elevenAm) {
  console.log("in the present");
  $("#11am").addClass("present col-sm-8");
} else if (currentTime < elevenAm) {
  console.log("in the future");
  $("#11am").addClass("future col-sm-8");
}

if (currentTime > twelvePm) {
  console.log("In the past");
  $("#12pm").addClass("past col-sm-8");
} else if (currentTime == twelvePm) {
  console.log("in the present");
  $("#12pm").addClass("present col-sm-8");
} else if (currentTime < twelvePm) {
  console.log("in the future");
  $("#12pm").addClass("future col-sm-8");
}

if (currentTime > onePm) {
  console.log("In the past");
  $("#1pm").addClass("past col-sm-8");
} else if (currentTime == onePm) {
  console.log("in the present");
  $("#1pm").addClass("present col-sm-8");
} else if (currentTime < onePm) {
  console.log("in the future");
  $("#1pm").addClass("future col-sm-8");
}

if (currentTime > twoPm) {
  console.log("In the past");
  $("#2pm").addClass("past col-sm-8");
} else if (currentTime == twoPm) {
  console.log("in the present");
  $("#2pm").addClass("present col-sm-8");
} else if (currentTime < twoPm) {
  console.log("in the future");
  $("#2pm").addClass("future col-sm-8");
}

if (currentTime > threePm) {
  console.log("In the past");
  $("#3pm").addClass("past col-sm-8");
} else if (currentTime == threePm) {
  console.log("in the present");
  $("#3pm").addClass("present col-sm-8");
} else if (currentTime < threePm) {
  console.log("in the future");
  $("#3pm").addClass("future col-sm-8");
}

if (currentTime > fourPm) {
  console.log("In the past");
  $("#4pm").addClass("past col-sm-8");
} else if (currentTime == fourPm) {
  console.log("in the present");
  $("#4pm").addClass("present col-sm-8");
} else if (currentTime < fourPm) {
  console.log("in the future");
  $("#4pm").addClass("future col-sm-8");
}

if (currentTime > fivePm) {
  console.log("In the past");
  $("#5pm").addClass("past col-sm-8");
} else if (currentTime == fivePm) {
  console.log("in the present");
  $("#5pm").addClass("present col-sm-8");
} else if (currentTime < fivePm) {
  console.log("in the future");
  $("#5pm").addClass("future col-sm-8");
}

var saveButton = $(".saveBtn");
saveButton.on("click", function() {
  console.log("you clicked a save button");

  var timeKey = $(this).attr("time");
  var userInput = $(this).siblings("textarea.description").val();
  
  localStorage.setItem(timeKey,userInput);

});

$("#9am").val(localStorage.getItem("9am"));
$("#10am").val(localStorage.getItem("10am"));
$("#11am").val(localStorage.getItem("11am"));
$("#12pm").val(localStorage.getItem("12pm"));
$("#1pm").val(localStorage.getItem("1pm"));
$("#2pm").val(localStorage.getItem("2pm"));
$("#3pm").val(localStorage.getItem("3pm"));
$("#4pm").val(localStorage.getItem("4pm"));
$("#5pm").val(localStorage.getItem("5pm"));
