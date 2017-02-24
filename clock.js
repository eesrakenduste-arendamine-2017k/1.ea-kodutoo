window.onload = function() {

	var clockContainer = document.getElementById("clock");
	var dateContainer = document.getElementById("date");
	var dayContainer = document.getElementById("day");
	var timezoneContainer = document.getElementById("timezone");
	var toTimezoneContainer = document.getElementById("toTimezone");
	clockContainer.innerHTML = getCurrentTime();
	dateContainer.innerHTML = getCurrentDate();
	dayContainer.innerHTML = getCurrentDay();
	timezoneContainer.innerHTML = getTimezone();

	window.setInterval(function(){
		clockContainer.innerHTML = getCurrentTime();
		timezoneContainer.innerHTML = getTimezone();
		if (getCurrentTime()=="00:00:00"){
			dateContainer.innerHTML = getCurrentDate();
			dayContainer.innerHTML = getCurrentDay();
		}
	}, 1000);

	timezoneContainer.addEventListener("click", function(){
		dateContainer.innerHTML = getCurrentDate();
		dayContainer.innerHTML = getCurrentDay();
	});

};

var textSize = "400%";
var clockPos = "right";
var months = ["Jaanuar", "Veebruar", "Märts",
	"Aprill", "Mai", "Juuni",
	"Juuli", "August", "September",
	"Oktoober", "November", "Detsember"];
var days = ["Esmaspäev", "Teisipäev", "Kolmapäev",
	"Neljapäev", "Reede", "Laupäev", "Pühapäev"];
var gmtTimezone = getTimezoneOffset();

function askTimezone() {
	var timezone = prompt("Sisesta GMT ajatsoon");
	for(i=-12; i<=12; i++) {
		if (timezone == i) {
			gmtTimezone = timezone;
		}
	}
	return null;
}

function getDate(offset) {
	var date = new Date();
	if (offset != null) {
		var milliseconds = 3600000 * offset + date.getTime();
		date = new Date(milliseconds);
	}
	return date;
}

function getCurrentDay() {
	var currentDate = getDate(gmtTimezone);
	var dayOfWeek = currentDate.getUTCDay();
	return days[dayOfWeek-1];
}

function getCurrentDate(){
	var currentDate = getDate(gmtTimezone);
	var month = currentDate.getUTCMonth();
	var year = currentDate.getUTCFullYear();
	var day = currentDate.getUTCDate();
	return day+" "+months[month]+" "+year;
}

function getCurrentTime(){
	var currentDate = getDate(gmtTimezone);
	var hours = addZerobefore(currentDate.getUTCHours());
	var minutes = addZerobefore(currentDate.getUTCMinutes());
	var seconds = addZerobefore(currentDate.getUTCSeconds());
	var dateString = hours + ":" + minutes + ":" + seconds;
	return dateString;
};

function getTimezoneOffset() {
	var currentDate = getDate();
	var offset = currentDate.getTimezoneOffset()/-60;
	return offset;
}

function getTimezone() {
	var dateString = "(GMT" + checkPosVsNeg(gmtTimezone) + ")";
	return dateString;
}

function changeClockPos(){
	if(clockPos == "right"){
		document.getElementById("time").style["top"] = "0%";
		document.getElementById("time").style["left"] = "0%";
		document.getElementById("time").style["transform"] = "translate(0%, 0%)";
		clockPos = "left";
	} else if (clockPos == "left"){
		document.getElementById("time").style["top"] = "0%";
		document.getElementById("time").style["left"] = "100%";
		document.getElementById("time").style["transform"] = "translate(-200%, 0%)";
		clockPos = "right";
	}
	return 0;
}

function changeTextSize(){
	if(textSize == "400%"){
		document.getElementById("date").style["font-size"] = "600%";
		document.getElementById("time").style["font-size"] = "600%";
		document.getElementById("day").style["font-size"] = "600%";
		textSize = "600%";
	}else if(textSize == "600%"){
		document.getElementById("date").style["font-size"] = "100%";
		document.getElementById("time").style["font-size"] = "100%";
		document.getElementById("day").style["font-size"] = "100%";
		textSize = "100%";
	}else if(textSize == "100%"){
		document.getElementById("date").style["font-size"] = "400%";
		document.getElementById("time").style["font-size"] = "400%";
		document.getElementById("day").style["font-size"] = "400%";
		textSize = "400%";
	}
	return 0;
}

function checkPosVsNeg(number) {
	if (number < 0) {
		number = "&#8722;" + addZerobefore(number*-1);
		return number;
	} else {
		number = "+" + addZerobefore(number);
		return number;
	}
}

function addZerobefore(number) {
	if(number < 10 && number > -10) {
		number = "0" + parseInt(number);
	}
	return number;
}
