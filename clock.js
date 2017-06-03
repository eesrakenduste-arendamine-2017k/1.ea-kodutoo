//avalikud muutujad
var first,last;

// aken laetud
window.onload = (function(){
	'use strict';

	var now = new Date();
	var toYear = now.getFullYear();
	var toMonth = now.getMonth() +1;
	var toDate = now.getDate();

	var toDay = now.getDay();

	var toHour = now.getHours();
	var toMunit = now.getMinutes();
	var toSecond = now.getSeconds();
	var days = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
	document.getElementById("fullDayId").innerHTML = toDate + " / " + toMonth + " / " + toYear;
	var currentTime = document.getElementById("timeId").innerHTML = toHour + " : " + toMunit + " : " +toSecond;
	setInterval(currentTime, 1000);
	document.getElementById("dayId").innerHTML = (days[toDay]);

	addAuthor("Kristel Roosimaa");

}());

function changeFont(font){
		document.getElementById("output-text").style.fontFamily = font.value;
	}

	function randomize() {
	  document.getElementById("output-text").style.color = randomColors();
		document.getElementById("h3").style.color = randomColors();

	}


	function randomColors() {
	  return '#' + Math.floor(Math.random() * 16777215).toString(16);
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
