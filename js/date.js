//Get the current date
var getCurrentDate = function(){
	var currentDate = new Date();

	var day = currentDate.getDay();
	var date = currentDate.getDate();
	var month = currentDate.getMonth();
	var year = currentDate.getFullYear();

	var dateString = numberToDay(day) + '<br />' + date + ' ' + ' ' + numberToMonth(month) + ' ' + year;

	return dateString;
}

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