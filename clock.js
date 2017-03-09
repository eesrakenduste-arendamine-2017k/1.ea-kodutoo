
var clockContainer = document.getElementById("clock");
var clockTime = document.getElementById("clockTime");
var clockDate = document.getElementById("clockDate");
var clicksContainer = document.getElementById("clicks");
var buttonMovement = document.getElementById("movement1");
var buttonStopMovement = document.getElementById("movement2");
var langEst = document.getElementById("language1");
var langEng = document.getElementById("language2");
	
window.onload = function() {
	clockTime.innerHTML = getCurrentTime();
	clockDate.innerHTML = getCurrentDate();
};

var langEstTimer;
var langEngTimer;
var defaultTimer;

defaultTimer = window.setInterval(function() {
	clockTime.innerHTML = getCurrentTime();
	clockDate.innerHTML = getCurrentDate();
}, 100);

langEst.onclick = function() {
	langEst.style.display = "none";
	langEng.style.display = "inline";
	clearInterval(defaultTimer);
	clearInterval(langEngTimer);
	langEstTimer = window.setInterval(function() {
		clockTime.innerHTML = getCurrentTime();
		clockDate.innerHTML = getCurrentDateEst();
	}, 100);
	buttonMovement.innerHTML = "Liiguta kella";
	buttonStopMovement.innerHTML = "Peata kell";
	authorPlaceholder.innerHTML = "Autor";
};

langEng.onclick = function() {
	langEst.style.display = "inline";
	langEng.style.display = "none";
	clearInterval(langEstTimer);
	langEngTimer = window.setInterval(function() {
		clockTime.innerHTML = getCurrentTime();
		clockDate.innerHTML = getCurrentDate();
	}, 100);
	buttonMovement.innerHTML = "Move Clock";
	buttonStopMovement.innerHTML = "Stop Clock";
	authorPlaceholder.innerHTML = "Author";
};
	

var getCurrentTime = function() {
	var currentDate = new Date();
	
	var hours = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	var seconds = currentDate.getSeconds();
	
	var timeString = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
	
	return timeString;
}

var getCurrentDate = function() {
	var currentDate = new Date();
	
	var days = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	
	var weekDay = currentDate.getDay();
	
	var dateString = addZero(days) + "/" + addZero(month) + "/" + year + ", " + getWeekDay(weekDay);
	
	return dateString;
}

var getCurrentDateEst = function() {
	var currentDate = new Date();
	
	var days = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	
	var weekDay = currentDate.getDay();
	
	var dateString = addZero(days) + "." + addZero(month) + "." + year + ", " + getWeekDayEst(weekDay);
	
	return dateString;
}



function getWeekDay(number) {
	var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	return weekDays[number];
}

function getWeekDayEst(number) {
	var weekDays = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
	
	return weekDays[number];
}

function addZero(number) {
	if (number < 10) {
		number = "0" + number;
	}
	return number;
}

var clicks = 0;

clockContainer.onclick = function() {
	var colors = ["#D2D6DB", "#E3AE57", "#F1684E", "#4EB1BA", "black"];
	clicks++;
	remainders = clicks % colors.length;
	
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
	
	// borderid (pikslitega.. paremaid lahendusi ei hammustanud läbi)
	
	var leftpx = clockContainer.style.left;
	var leftPx = parseInt(leftpx.slice(0, -2));
	
	var uppx = clockContainer.style.top;
	var upPx = parseInt(uppx.slice(0, -2));
	
	
	if(leftPx < 20) {
		left += amount;
		clockContainer.style.left = left + "px";
	}
	if(leftPx > 1050) {
		left -= amount;
		clockContainer.style.left = left + "px";
	}
	if(upPx < 10) {
		up += amount;
		clockContainer.style.top = up + "px";
	}
	if(upPx > 450) {
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
		
		if(leftPx > 1050) {
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
		
		if(upPx > 450) {
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

var movingClock;

buttonMovement.onclick = function() {
	buttonMovement.style.display = "none";
	buttonStopMovement.style.display = "inline";
	movingClock = setInterval(automaticClockMove, 2000);
};

buttonStopMovement.onclick = function() {
	buttonMovement.style.display = "inline";
	buttonStopMovement.style.display = "none";
	clearInterval(movingClock);
};


// autori nimi

var authorPlaceholder = document.getElementById("author1");
var authorName = document.getElementById("author2");

authorPlaceholder.onclick = function() {
	authorPlaceholder.style.display = "none";
	authorName.style.display = "inline";
};

authorName.onclick = function() {
	authorPlaceholder.style.display = "inline";
	authorName.style.display = "none";
};


// keele muutmine




































