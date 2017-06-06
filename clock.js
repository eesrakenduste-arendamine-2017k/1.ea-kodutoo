//window.addEventListener('load', init, false);

/*window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    var dateContainer = document.getElementById('date');
    console.log(dateContainer);

    clockContainer.innerHTML = getCurrentDateTime();
    dateContainer.innerHTML = getCurrentDate();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);

    window.setInterval(function(){
        dateContainer.innerHTML = getCurrentDate();
    }, 1000);

};
*/


/*var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return dateString;
};  */

/* ====== CLOCK ====== */

var body = ('body');
var hour, min, colon;

function date() {
	var currentTime = new Date();
	var theday = currentTime.getDay();
	var thedate = currentTime.getDate();
	var themonth = currentTime.getMonth();
	
	switch(theday) {
		case 0: theday = 'Sunday'; break;
		case 1: theday = 'Monday'; break;
		case 2: theday = 'Tuesday'; break;
		case 3: theday = 'Wednesday'; break;
		case 4: theday = 'Thursday'; break;
		case 5: theday = 'Friday'; break;
		case 6: theday = 'Saturday'; break;
	}

	switch(themonth) {
		case 0: themonth = 'January'; break;
		case 1: themonth = 'February'; break;
		case 2: themonth = 'March'; break;
		case 3: themonth = 'April'; break;
		case 4: themonth = 'May'; break;
		case 5: themonth = 'June'; break;
		case 6: themonth = 'July'; break;
		case 7: themonth = 'August'; break;
		case 8: themonth = 'September'; break;
		case 9: themonth = 'October'; break;
		case 10: themonth = 'November'; break;
		case 11: themonth = 'December'; break;
	}

	document.getElementById("day").innerHTML = theday;
	document.getElementById("month").innerHTML = themonth;
	document.getElementById("date").innerHTML = thedate;
}

function clock() {
	var currentTime = new Date();
	var thehour = currentTime.getHours();
	var theminute = currentTime.getMinutes();

	
	if (thehour < 10) {
		thehour = "0" + thehour
	}
	
	if (theminute < 10) {
		theminute = "0" + theminute
	}

	document.getElementById("hour").innerHTML = thehour;
	document.getElementById("min").innerHTML = theminute;


	// Update the minute
	var miliseconds = (60 - currentTime.getSeconds()) * 1000;
	updateMinute = setTimeout(clock, miliseconds);
}

/*function blink() {
	toggleClass("on", colon);
}*/


/* ====== INITIALIZE ====== */
