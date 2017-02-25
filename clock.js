window.onload = function(){

	// Variable for changing the background

	var backgroundchange = document.getElementById('backgroundchanger');
	backgroundchange.addEventListener('click', changeBackground);

	// Clock and Date

	var clockContainer = document.getElementById('clock');
	console.log(clockContainer);

	var dateContainer = document.getElementById('date');
	console.log(dateContainer);

	clockContainer.innerHTML = getCurrentDateTime();
	dateContainer.innerHTML = getCurrentDate();

	window.setInterval(function(){
		clockContainer.innerHTML = getCurrentDateTime();
	}, 1000);


};

var getCurrentDateTime = function(){
    var currentDateTime = new Date();

    var hours = currentDateTime.getHours();
    var minutes = currentDateTime.getMinutes();
    var seconds = currentDateTime.getSeconds();

    var timeString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return timeString;
};

var getCurrentDate = function(){
	var currentDate = new Date();

	var days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
	var months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");

	var month = currentDate.getMonth();
	var weekday = currentDate.getDay();
	var year = currentDate.getFullYear();
	var monthday = currentDate.getDate();

	var dateString = days[weekday] + ', ' + monthday + '.' + months[month] + ' ' + year;

	return dateString;
};

function addZeroBefore(timeNumber) {
    if (timeNumber < 10) {
        timeNumber = '0' + timeNumber;
    }

    return timeNumber;
}
