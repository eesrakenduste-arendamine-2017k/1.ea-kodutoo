window.onload = function() {

	var clockContainer = document.getElementById("clock");
	var dateContainer = document.getElementById("date");
	var dayContainer = document.getElementById("day");
	clockContainer.innerHTML = getCurrentTime();
	dateContainer.innerHTML = getCurrentDate();
	dayContainer.innerHTML = getCurrentDay();

	window.setInterval(function(){
    	clockContainer.innerHTML = getCurrentTime();
	}, 1000);

	if (getCurrentTime()=="00:00:00"){
		dateContainer.innerHTML = getCurrentDate();
		//dateContainer.innerHTML = getCurrentDay();
	}

	window.addEventListener("keypress", function(e){
	  	console.log(e);
    });

};

var months = ["Jaanuar", "Veebruar", "Märts",
	"Aprill", "Mai", "Juuni",
	"Juuli", "August", "September",
	"Oktoober", "November", "Detsember"];

var days = ["Esmaspäev", "Teisipäev", "Kolmapäev",
	"Neljapäev", "Reede", "Laupäev", "Pühapäev"]



function getCurrentTime(){

	var currentDate = new Date();

	var hours = addZerobefore(currentDate.getHours());
	var minutes = addZerobefore(currentDate.getMinutes());
	var seconds = addZerobefore(currentDate.getSeconds());

	var dateString = hours + ":" + minutes + ":" + seconds;

	return dateString;
};

function getCurrentDate(){

	var currentDate = new Date();

	var month = currentDate.getMonth();
	var year = currentDate.getYear()+1900;
	var day = currentDate.getDate();

	return day+" "+months[month]+" "+year;
}

var getCurrentDay = function() {

	var currentDate = new Date();

	var dayOfWeek = currentDate.getDay();

	return days[dayOfWeek-1]
}

var clockPos = "right";

function changeClockPos(){
	if(clockPos == "right"){
		document.getElementById("clock").style["top"] = "0%";
		document.getElementById("clock").style["left"] = "0%";
		document.getElementById("clock").style["transform"] = "translate(0%, 0%)";
		clockPos = "left";
	} else if (clockPos == "left"){
		document.getElementById("clock").style["top"] = "0%";
		document.getElementById("clock").style["left"] = "100%";
		document.getElementById("clock").style["transform"] = "translate(-100%, 0%)";
		clockPos = "right";
	}
	return 0;
}

var textSize = "400%";

function changeTextSize(){
	if(textSize == "400%"){
		document.getElementById("date").style["font-size"] = "600%";
		document.getElementById("clock").style["font-size"] = "600%";
		document.getElementById("day").style["font-size"] = "600%";
		textSize = "600%";
	}else if(textSize == "600%"){
		document.getElementById("date").style["font-size"] = "100%";
		document.getElementById("clock").style["font-size"] = "100%";
		document.getElementById("day").style["font-size"] = "100%";
		textSize = "100%";
	}else if(textSize == "100%"){
		document.getElementById("date").style["font-size"] = "400%";
		document.getElementById("clock").style["font-size"] = "400%";
		document.getElementById("day").style["font-size"] = "400%";
		textSize = "400%";
	}
	return 0;
}

function addZerobefore(number) {
	if(number < 10) {
		number = "0" + number;
	}
	return number;
}
