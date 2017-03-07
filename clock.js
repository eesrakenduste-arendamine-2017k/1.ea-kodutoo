

var clockContainer = document.getElementById("clock");
var clicksContainer = document.getElementById("clicks");
	
window.onload = function() {
	clockContainer.innerHTML = getCurrentDateTime();
};

	window.setInterval(function() {
		clockContainer.innerHTML = getCurrentDateTime();
	}, 1000)

var getCurrentDateTime = function() {
	var currentDate = new Date();
	
	var hours = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	var seconds = currentDate.getSeconds();
	
	var days = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	
	var weekDay = currentDate.getDay();
	
	var dateString = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds)
	+ ", " + addZero(days) + "." + addZero(month) + "." + year + ", " + getWeekDay(weekDay);
	
	return dateString;
}

function getWeekDay(number) {
	var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	return weekDays[number];
}

function addZero(number) {
	if (number < 10) {
		number = "0" + number;
	}
	return number;
}

var clicks = 0;
clicksContainer.innerHTML = clicks;

clockContainer.onclick = function() {
	var colors = ["black", "white", "yellow", "red", "blue"];
	clicks++;
	remainders = clicks % colors.length;
	clicksContainer.innerHTML = remainders;
	
	clockContainer.style.color = colors[remainders];
	
};


//nooltega liigutamine

var leftpx = clockContainer.style.left;
var left = parseInt(leftpx.slice(0, -2));
var uppx = clockContainer.style.top;
var up = parseInt(uppx.slice(0, -2));
var amount = 3;

var arrowKeys = [false,false,false,false];

window.onkeydown = function(e) {
	if(e.keyCode >= 37 && e.keyCode <= 40) {
		arrowKeys[e.keyCode - 37] = true;
	}
};

window.onkeyup = function keyUp(e) {
	if(e.keyCode >= 37 && e.keyCode <= 40) {
		arrowKeys[e.keyCode - 37] = false;
	}
};

function moveClock() {
	if(arrowKeys[0]) {
		left -= amount;
	}
	if(arrowKeys[1]) {
		up -= amount;
	}
	if(arrowKeys[2]) {
		left += amount;
	}
	if(arrowKeys[3]) {
		up += amount;
	}
	
	clockContainer.style.left = left + "px";
	clockContainer.style.top = up + "px";
	
	// borderid
	
	var leftpx = clockContainer.style.left;
	var leftPx = parseInt(leftpx.slice(0, -2));
	
	var uppx = clockContainer.style.top;
	var upPx = parseInt(uppx.slice(0, -2));
	
	
	if(leftPx < 20) {
		left += amount;
		clockContainer.style.left = left + "px";
	}
	if(leftPx > 930) {
		left -= amount;
		clockContainer.style.left = left + "px";
	}
	if(upPx < 10) {
		up += amount;
		clockContainer.style.top = up + "px";
	}
	if(upPx > 550) {
		up -= amount;
		clockContainer.style.top = up + "px";
	}
}

setInterval(moveClock, 1);


//automaatne liikumine (proov!!!!!)

function moveLeft() {

	var amount = Math.floor((Math.random() * 3) + 1);
	//var amount = 1;
	var times = Math.floor(Math.random() * 100);
	
	var leftpx = clockContainer.style.left;
	var leftPx = parseInt(leftpx.slice(0, -2));
	
	for(var i = 0; i < times; i++) {
		
		if(leftPx < 20) {
			left += amount;
			clockContainer.style.left = left + "px";
		} else {
			left -= amount;
			clockContainer.style.left = left + "px";
		}
	}
}

function moveRight() {

	var amount = Math.floor((Math.random() * 3) + 1);
	//var amount = 1;
	var times = Math.floor(Math.random() * 100);
	
	var leftpx = clockContainer.style.left;
	var leftPx = parseInt(leftpx.slice(0, -2));
	
	for(var i = 0; i < times; i++) {
		
		if(leftPx > 930) {
			left -= amount;
			clockContainer.style.left = left + "px";
		} else {
			left += amount;
			clockContainer.style.left = left + "px";
		}
	}
}

function moveUp() {

	var amount = Math.floor((Math.random() * 3) + 1);
	//var amount = 1;
	var times = Math.floor(Math.random() * 100);
	
	var uppx = clockContainer.style.top;
	var upPx = parseInt(uppx.slice(0, -2));
	
	for(var i = 0; i < times; i++) {
		
		if(upPx < 10) {
			up += amount;
			clockContainer.style.top = up + "px";
		} else {
			up -= amount;
			clockContainer.style.top = up + "px";
		}
	}
}

function moveDown() {

	var amount = Math.floor((Math.random() * 3) + 1);
	//var amount = 1;
	var times = Math.floor(Math.random() * 100);
	
	var uppx = clockContainer.style.top;
	var upPx = parseInt(uppx.slice(0, -2));
	
	for(var i = 0; i < times; i++) {
		
		if(upPx > 550) {
			up -= amount;
			clockContainer.style.top = up + "px";
		} else {
			up += amount;
			clockContainer.style.top = up + "px";
		}
	}
}

function automaticClockMove() {
	var direction = Math.floor(Math.random() * 4);
	if(direction == 0) {
		moveLeft();
	}
	if(direction == 2) {
		moveRight();
	}
	if(direction == 1) {
		moveUp();
	}
	if(direction == 3) {
		moveDown();
	}
	
}

clicksContainer.onclick = function() {
	setInterval(automaticClockMove, 2000);
};































