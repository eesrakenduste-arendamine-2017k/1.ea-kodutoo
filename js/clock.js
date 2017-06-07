

window.onload = function(){

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


var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var timeString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) /*+ ':' + addZeroBefore(seconds)*/;
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
	var day0 = currentDate.getDay();
	var day = new Array(7);
	day[0] = "Sunday";
	day[1] = "Monday";
	day[2] = "Tuesday";
	day[3] = "Wednesday";
	day[4] = "Thursday";
	day[5] = "Friday";
	day[6] = "Saturday";
	
	//return date in format
	var dateString = day[currentDate.getDay()] + ', ' + month[currentDate.getMonth()] + ' ' + day0;
	return dateString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}