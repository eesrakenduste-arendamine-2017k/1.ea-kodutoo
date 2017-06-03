//avalikud muutujad
var first,last;

// aken laetud
window.onload = (function(){
	'use strict';

	var date = new Date();
	var toYear = date.getFullYear();
	var toMonth = date.getMonth() +1;
	var toDate = date.getDate();

	var toDay = date.getDay();

	var toHour = date.getHours();
	var toMunit = date.getMinutes();
	var toSecond = date.getSeconds();
	var days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
	document.getElementById("fullDayId").innerHTML = toDate + " / " + toMonth + " / " + toYear;
	var currentTime = document.getElementById("timeId").innerHTML = toHour + " : " + toMunit;
	// setInterval(currentTime, 1000);
	document.getElementById("dayId").innerHTML = (days[toDay]);

	addAuthor("Kristel Roosimaa");

}());

function backgroundImage() {
		var a = ["",]//teeb massiivi url
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundImage = "url('http://wall.rimbuz.com/wp-content/uploads/4K-Wallpaper-Download-HD.jpg')";
		//loosi randomiga var a-st var random_link = links[math.random*links.length-1]
}



function addAuthor(name){
	first = document.createElement("span");
	first.innerHTML = name.split(" ")[0];
	last = document.createElement("span");
	last.innerHTML = name.split(" ")[1];

	var p = document.createElement("p");
	p.appendChild(first);
	p.innerHTML += " ";
	p.appendChild(last);

	document.body.appendChild(p);

}
