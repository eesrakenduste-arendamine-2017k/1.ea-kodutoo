
var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');
var playpausebtn = document.getElementById("playpausebtn");
//var fontChangeButton = document.getElementById("fontButton");
var audio = new Audio('shapeofyou.mp3');


function hexClock() {

  var time = new Date();

  var hours = time.getHours().toString();

  var minutes = time.getMinutes().toString();

  var seconds = time.getSeconds().toString();

  var dateDay = time.getDate();

  var months = new Array();
	months[0] = "January";
	months[1] = "February";
	months[2] = "March";
	months[3] = "April";
	months[4] = "May";
	months[5] = "June";
	months[6] = "July";
	months[7] = "August";
	months[8] = "September";
	months[9] = "October";
	months[10] = "November";
	months[11] = "December";
	var month = months[time.getMonth()];

	var weekday = new Array(7);
	weekday[0] =  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	var weekDay = weekday[time.getDay()];

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  if (dateDay.length < 2) {
    dateDay = '0' + dateDay;
  }

  var clockStr = hours + ':' + minutes + ':' + seconds + " " + dateDay + "." +  month + " " + weekDay;
  var hexColorStr = '#' + hours + minutes + seconds;

  clock.textContent = clockStr;
  hexColor.textContent = hexColorStr;
  document.body.style.backgroundColor = hexColorStr;
}

hexClock();
setInterval(hexClock, 1000);

playpausebtn.onclick = function playPause(){
		if(audio.paused){
		    audio.play();
			playpausebtn.innerHTML = "Pause music";
	    } else {
		    audio.pause();
			playpausebtn.innerHTML = "Play music";
	    }
	};
/*
  fontChangeButton.onclick = function changeFont(){
    if(document.body.style.font-family == Lato){
      document.body.style.font-family="Tahoma";
      fontChangeButton.innerHTML = "Change font-family";
    } else {
      document.body.style.font-family="Lato";
      fontChangeButton.innerHTML = "Change font-family";
    }
  };
*/


window.addEventListener('dblclick', function(){
       var clockDiv = document.getElementById('clock');
       console.log(clockDiv);
       if(clockDiv.className == "font1"){
           clockDiv.className = "font2";
       }else{
           clockDiv.className = "font1";
       }
   });
