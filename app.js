var clock = document.getElementById('clock');
var dateMonth = document.getElementById('dateMonth');


function hexClock() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var milliseconds = time.getMilliseconds();

  if (hours < 10) {
    hours = '0' + hours;
  }

  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  if (milliseconds < 100) {
    milliseconds = '0' + milliseconds;
  }

  var clockStr = hours + ' : ' + minutes + ' : ' + seconds + ' . ' + milliseconds;

  clock.textContent = clockStr;

}


  function getCurrentDay() {
  var currentDate = new Date();

  var day = currentDate.getDay();
  var date = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();



	var dateString = numberToDay(day) + ', ' + numberToMonth(month) + ' ' + date + ', ' + year;


console.log(dateString);

  dateMonth.innerText = dateString;

}

getCurrentDay();

//Change number of day to day name
 function numberToDay(dayNumber){

	var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	dayNumber = days[dayNumber];

	return dayNumber;
}

//Change the number of month to month name
function numberToMonth(monthNumber){

	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	monthNumber = months[monthNumber];

	return monthNumber;
}

function changeBackgroundColor() {
 var colors = ['red', 'yellow', 'blue', 'green', 'pink', 'grey', 'purple', 'white', 'brown', 'orange'];
  document.body.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}

function clockSize() {
var sizeTimeValue = document.getElementById("sizeTime").value;
  document.getElementById("clock").style.fontSize = sizeTimeValue + "px";
}

function clockFont() {
var fontValue = document.getElementById("clockFont").value;
  document.getElementById("clock").style.fontFamily = fontValue;
}

function dateFont() {
var dateFontValue = document.getElementById("dateFont").value;
  document.getElementById("dateMonth").style.fontFamily = dateFontValue;
}

function selectFont() {
  var element = document.getElementById("selectFont");
  var selected = element.options[element.selectedIndex].text;
    document.getElementById("clock").style.fontFamily = selected;
}

function selectDateFont() {
  var element = document.getElementById("selectDateFont");
  var selected = element.options[element.selectedIndex].text;
    document.getElementById("dateMonth").style.fontFamily = selected;
}



setInterval(function() {
  hexClock();
}, 100);
