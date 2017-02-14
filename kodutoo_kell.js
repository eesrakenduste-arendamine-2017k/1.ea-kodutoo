function Clock() {
	
	var time = new Date();
	months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
	weekdays = new Array("Monday", "Tuesday", "Wendesday", "Thursday", "Friday", "Saturday", "Sunday");
	
	var hour = time.getHours();
	var minute = time.getMinutes();
	var second = time.getSeconds();
	
	var weekday = time.getDay()-1;
	
	var day = time.getDate();
	var month = time.getMonth();
	var year = time.getFullYear();
	
	if (hour < 10){
		hour = "0" + hour;
	}
	
	if (minute < 10){
		minute = "0" + minute;
	}
	
	if (second < 10){
		second = "0" + second;
	}
	
	if (day < 10){
		day = "0" + day;
	}
	
	var currentTime = hour + ":" + minute + ":" + second;
	var currentDate = day + "." + months[month] + "." + year;
	var currentWeekday = weekdays[weekday];
	
	var myClock = document.getElementById("HTMLtime");
	myClock.innerHTML = currentTime;
	
	var myDate = document.getElementById("HTMLdate");
	myDate.innerHTML = currentDate;
	
	var myWeekday = document.getElementById("HTMLweekday");
	myWeekday.innerHTML = currentWeekday;
		
	var Today = setTimeout(Clock, 1000);
	
}