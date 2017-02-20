window.onload = function() {

	var clockContainer = document.getElementById("clock");
	var dateContainer = document.getElementById("date");
	//var dayContainer = document.getElementById("day");
	clockContainer.innerHTML = getCurrentTime();
	dateContainer.innerHTML = getCurrentDate();
	//dayContainer.innerHTML = getCurrentDay();

	window.setInterval(function(){
    	clockContainer.innerHTML = getCurrentTime();
	}, 1000);

	if (getCurrentDateTime()=="00:00:00"){
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

/*var days = ["Esmaspäev", "Teisipäev", "Kolmapäev",
	"Neljapäev", "Reede", "Laupäev", "Pühapäev"]
*/
var currentDate = new Date();

var getCurrentTime = function() {

	var hours = addZerobefore(currentDate.getHours());
	var minutes = addZerobefore(currentDate.getMinutes());
	var seconds = addZerobefore(currentDate.getSeconds());

	var dateString = hours + ":" + minutes + ":" + seconds;

	return dateString;
};

var getCurrentDate = function() {

	var month = currentDate.getMonth();
	var year = currentDate.getYear()+1900;
	var day = currentDate.getDate();

	return day+" "+months[month]+" "+year;
}
/*
var getCurrentDay = function() {
	var dayOfWeek = currentDate.getDay();

	return days[dayOfWeek-1]
}
*/
var changeBgColor = function(color) {
	document.bgColor=color;
}

function addZerobefore(number) {
	if(number < 10) {
		number = "0" + number;
	}
	return number;
}
