window.onload = function() {

	var clockContainer = document.getElementById("clock");
	var dateContainer = document.getElementById("date");
	console.log(clockContainer);
	clockContainer.innerHTML = getCurrentDateTime();
	dateContainer.innerHTML = getCurrentDate();

	window.setInterval(function(){
    	clockContainer.innerHTML = getCurrentDateTime();
	}, 1000);

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

var getCurrentDateTime = function() {
	var currentDate = new Date();

	var hours = addZerobefore(currentDate.getHours());
	var minutes = addZerobefore(currentDate.getMinutes());
	var seconds = addZerobefore(currentDate.getSeconds());

	var dateString = hours + ":" + minutes + ":" + seconds;

	return dateString;
};

var getCurrentDate = function() {
	var currentDate = new Date();

	var month = currentDate.getMonth();
	var year = currentDate.getYear()+1900;
	var day = currentDate.getDate();
	var dayOfWeek = currentDate.getDay();

	return days[dayOfWeek-1]+": "+day+" "+months[month]+" "+year;
}

var changeBgColor = function(color) {
	document.bgColor=color;
}

function addZerobefore(number) {
	if(number < 10) {
		number = "0" + number;
	}
	return number;
}
