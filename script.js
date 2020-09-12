// setting time variables to compare current time to
var nineAm = $("#9am");
nineAm = 9;

var tenAm = $("#9am");
tenAm = 10;

var elevenAm = $("#10am");
elevenAm = 11;

var twelvePm = $("#12pm");
twelvePm = 12;

var onePm = $("#1pm");
onePm = 13;

var twoPm = $("#2pm");
twoPm = 14;

var threePm = $("#3pm");
threePm = 15;

var fourPm = $("#4pm");
fourPm = 16;

var fivePm = $("#5pm");
fivePm = 17;

// setting up current day variables
var currentDay = $("<h1>");
currentDay.text(moment().format("dddd, MMMM Do YYYY"));
$("#currentDay").append(currentDay);

//var to set up the current time variable
var currentTime = moment().hour();


//  if else statements to get the color to update depending on the time
if (currentTime > nineAm) {
  $("#9am").addClass("past col-sm-8");
} else if (currentTime == nineAm) {
  $("#9am").addClass("present col-sm-8");
} else if (currentTime < nineAm) {
  $("#9am").addClass("future col-sm-8");
}

if (currentTime > tenAm) {
  $("#10am").addClass("past col-sm-8");
} else if (currentTime == tenAm) {
  $("#10am").addClass("present col-sm-8");
} else if (currentTime < tenAm) {
  $("#10am").addClass("future col-sm-8");
}

if (currentTime > elevenAm) {
  $("#11am").addClass("past col-sm-8");
} else if (currentTime == elevenAm) {
  $("#11am").addClass("present col-sm-8");
} else if (currentTime < elevenAm) {
  $("#11am").addClass("future col-sm-8");
}

if (currentTime > twelvePm) {
  $("#12pm").addClass("past col-sm-8");
} else if (currentTime == twelvePm) {
  $("#12pm").addClass("present col-sm-8");
} else if (currentTime < twelvePm) {
  $("#12pm").addClass("future col-sm-8");
}

if (currentTime > onePm) {
  $("#1pm").addClass("past col-sm-8");
} else if (currentTime == onePm) {
  $("#1pm").addClass("present col-sm-8");
} else if (currentTime < onePm) {
  $("#1pm").addClass("future col-sm-8");
}

if (currentTime > twoPm) {
  $("#2pm").addClass("past col-sm-8");
} else if (currentTime == twoPm) {
  $("#2pm").addClass("present col-sm-8");
} else if (currentTime < twoPm) {
  $("#2pm").addClass("future col-sm-8");
}

if (currentTime > threePm) {
  $("#3pm").addClass("past col-sm-8");
} else if (currentTime == threePm) {
  $("#3pm").addClass("present col-sm-8");
} else if (currentTime < threePm) {
  $("#3pm").addClass("future col-sm-8");
}

if (currentTime > fourPm) {
  $("#4pm").addClass("past col-sm-8");
} else if (currentTime == fourPm) {
  $("#4pm").addClass("present col-sm-8");
} else if (currentTime < fourPm) {
  $("#4pm").addClass("future col-sm-8");
}

if (currentTime > fivePm) {
  $("#5pm").addClass("past col-sm-8");
} else if (currentTime == fivePm) {
  $("#5pm").addClass("present col-sm-8");
} else if (currentTime < fivePm) {
  $("#5pm").addClass("future col-sm-8");
}

// save button event listener to track which save button is clicked
var saveButton = $(".saveBtn");
saveButton.on("click", function () {
  var timeKey = $(this).attr("time");
  var userInput = $(this).siblings("textarea.description").val();
  localStorage.setItem(timeKey, userInput);
});

//getting local storage values for each time
$("#9am").val(localStorage.getItem("9am"));
$("#10am").val(localStorage.getItem("10am"));
$("#11am").val(localStorage.getItem("11am"));
$("#12pm").val(localStorage.getItem("12pm"));
$("#1pm").val(localStorage.getItem("1pm"));
$("#2pm").val(localStorage.getItem("2pm"));
$("#3pm").val(localStorage.getItem("3pm"));
$("#4pm").val(localStorage.getItem("4pm"));
$("#5pm").val(localStorage.getItem("5pm"));
