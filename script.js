var nineAm = moment().format('9')
var tenAm = moment().format('10')
var elevenAm = moment().format('11')
var twelvePm = moment().format('12')
var onePm = moment().format('13')
var twoPm = moment().format('14')
var threePm = moment().format('15')
var fourPm = moment().format('16')
var fivePm = moment().format('17')

// setting up current day variable
var currentDay = $("<h1>");
currentDay.text(moment().format('dddd, MMMM Do YYYY'));
$("#currentDay").append(currentDay);

//hard code for now to test
var currentTime = moment().format('9')
//  var currentTime = moment().format('h')
 console.log(currentTime);

 if (currentTime > nineAm) {
     console.log("In the past");
     $("#9am").addClass("past col-sm-8");
 } else if (currentTime == nineAm) {
  console.log("in the present");
  $("#9am").addClass("present col-sm-8");
} else if (currentTime < nineAm) {
     console.log("in the future");
      $("#9am").addClass("future col-sm-8 ");
  }

 if (currentTime > tenAm) {
    console.log("In the past");
    $("#10am").attr("class", "past");
  } else if (currentTime == tenAm) {
    console.log("in the present");
    $("#10am").attr("class", "present");
  } else if (currentTime < tenAm) {
    console.log("in the future");
    $("#10am").attr("class", "future");
  }
  if (currentTime > elevenAm) {
    console.log("In the past");
    $("#11am").attr("class", "past");
  } else if (currentTime == elevenAm) {
    console.log("in the present");
    $("#11am").attr("class", "present");
  } else if (currentTime < elevenAm) {
    console.log("in the future");
    $("#11am").attr("class", "future");
  }

  if (currentTime > twelvePm) {
    console.log("In the past");
    $("#12pm").attr("class", "past");
  } else if (currentTime == twelvePm) {
    console.log("in the present");
    $("#12pm").attr("class", "present");
  } else if (currentTime < twelvePm) {
    console.log("in the future");
    $("#12pm").attr("class", "future");
  }

  if (currentTime > onePm) {
    console.log("In the past");
    $("#1pm").attr("class", "past");
  } else if (currentTime == onePm) {
    console.log("in the present");
    $("#1pm").attr("class", "present");
  } else if (currentTime < onePm) {
    console.log("in the future");
    $("#1pm").attr("class", "future");
  }

  if (currentTime > twoPm) {
    console.log("In the past");
    $("#2pm").attr("class", "past");
  } else if (currentTime == twoPm) {
    console.log("in the present");
    $("#2pm").attr("class", "present");
  } else if (currentTime < twoPm) {
    console.log("in the future");
    $("#2pm").attr("class", "future");
  }

  if (currentTime > threePm) {
    console.log("In the past");
    $("#3pm").attr("class", "past");
  } else if (currentTime == threePm) {
    console.log("in the present");
    $("#3pm").attr("class", "present");
  } else if (currentTime < threePm) {
    console.log("in the future");
    $("#3pm").attr("class", "future");
  }

  if (currentTime > fourPm) {
    console.log("In the past");
    $("#4pm").attr("class", "past");
  } else if (currentTime == fourPm) {
    console.log("in the present");
    $("#4pm").attr("class", "present");
  } else if (currentTime < fourPm) {
    console.log("in the future");
    $("#4pm").attr("class", "future");
  }

  if (currentTime > fivePm) {
    console.log("In the past");
    $("#5pm").attr("class", "past");
  } else if (currentTime == fivePm) {
    console.log("in the present");
    $("#5pm").attr("class", "present");
  } else if (currentTime < fivePm) {
    console.log("in the future");
    $("#5pm").attr("class", "future");
  }


