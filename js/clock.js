/* ====== INITIALIZE ====== */

window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    var dateContainer = document.getElementById('date');
    console.log(dateContainer);

	//var getColon = document.getElementById('colon');
	//console.log(colon);
	
    clockContainer.innerHTML = getCurrentDateTime();
    dateContainer.innerHTML = getCurrentDate();
	//getColon.innerHTML = colon;

	
    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);

    window.setInterval(function(){
        dateContainer.innerHTML = getCurrentDate();
    }, 1000);

};

/* ====== CLOCK ====== */

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

	//output time in correct format
    var timeString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);
    return timeString;
};


var getCurrentDate = function(){
	var currentDate = new Date();
	
	var date = currentDate.getDate();
	var month = new Array(12);
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	
	var day = new Array(7);
	day[0] = "Sunday";
	day[1] = "Monday";
	day[2] = "Tuesday";
	day[3] = "Wednesday";
	day[4] = "Thursday";
	day[5] = "Friday";
	day[6] = "Saturday";
	
	//return date in format
	var dateString = day[currentDate.getDay()] + ', ' + month[currentDate.getMonth()] + ' ' + date;
	return dateString;
};


function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}


/* ====== CUSTOMIZATIONS ====== */

//function to change background colour via drop-down menu. Colours from https://www.w3schools.com/cssref/css_colors.asp
document.getElementById("color").addEventListener("change", colorSelect);
 	function colorSelect() {
 	  document.body.style.backgroundColor = this.value
}


/* --- */

//Font colour changes, did slightly differently than background method for variety

function toRed(){
  document.getElementById('clock').style.color = "#B22222";
  document.getElementById('date').style.color = "#B22222";
}

function toGrey(){
  document.getElementById('clock').style.color = "#696969";
  document.getElementById('date').style.color = "#696969";
}

function toBlack(){
  document.getElementById('clock').style.color = "#000000";
  document.getElementById('date').style.color = "#000000";
}

function toWhite(){
  document.getElementById('clock').style.color = "#FFFFFF";
  document.getElementById('date').style.color = "#FFFFFF";
}


/* --- */

function Small(){
  document.getElementById('clock').style.fontSize = "80px";
}

function Default(){
  document.getElementById('clock').style.fontSize = "120px";
}

function Big(){
  document.getElementById('clock').style.fontSize = "160px";
}

function americanBig(){
  document.getElementById('clock').style.fontSize = "200px";
}
    