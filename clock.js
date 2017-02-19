// aken laetud
window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

	var dateContainer = document.getElementById('date');
    console.log(dateContainer);

    // kohe kirjutame ka kellaaja
    clockContainer.innerHTML = getCurrentTime();
	  dateContainer.innerHTML = getCurrentDate();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentTime();
    }, 1000);

	window.setInterval(function(){
        dateContainer.innerHTML = getCurrentDate();
    }, 1000);


};

var getCurrentTime = function(){
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    var timeString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return timeString;
};

function addZeroBefore(timeNumber) {
    if (timeNumber < 10) {
        timeNumber = '0' + timeNumber;
    }

    return timeNumber;
}

var getCurrentDate = function(){
    var currentDate = new Date();

    var day = currentDate.getDay();
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
	var year = currentDate.getFullYear();

    var dateString = numberToDay(day) + '</br>' + numberToMonth(month)+ ' ' + date + '</br>' + year;

    return dateString;
};

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
