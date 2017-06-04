var r;
var g;
var b;

window.onload = function(){
    var clockContainer = document.getElementById('clock');
    var greetContainer = document.getElementById('greet');
    console.log(clockContainer);
	
	addEventListener("keypress", colorClock);
	
    // kohe kirjutame ka kellaaja
    clockContainer.innerHTML = getCurrentDateTime();
	greetContainer.innerHTML = getGreeting();


    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
		greetContainer.innerHTML = getGreeting();
		colorTimeClock();
    }, 1000);
};

function colorClock(e){
	if(e.charCode == 32){
		r=Math.round(Math.random()*255);
		g=Math.round(Math.random()*255);
		b=Math.round(Math.random()*255);

		document.getElementById('clock').style.color = 'rgb('+r+','+g+','+b+')';
	}
}

function colorTimeClock(e){
	r=Math.round(Math.random()*255);
	g=Math.round(Math.random()*255);
	b=Math.round(Math.random()*255);

	document.getElementById('clock').style.color = 'rgb('+r+','+g+','+b+')';
}

function getGreeting(hours){
	var currentDate = new Date();
	var hours = currentDate.getHours();
	
	if(hours>5 && hours<12){
		var greetingString="Wakey wakey!";
		document.getElementById('html').style.backgroundImage = "url('wallpaperMorning.jpg')";
	} else if(hours>11 && hours<16){
		var greetingString="Have a great day!";
		document.getElementById('html').style.backgroundImage = "url('wallpaperAfternoon.jpg')";
	} else if(hours>15 && hours<23){
		var greetingString="Good evening!";
		document.getElementById('html').style.backgroundImage = "url('wallpaperEvening.jpg')";
	} else{
		var greetingString="Sleep tight!";
		document.getElementById('html').style.backgroundImage = "url('wallpaperNight.jpg')";

	}
	return greetingString;
}

var getCurrentDateTime = function(){
	var currentDate = new Date();
	
	var hours = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	var seconds = currentDate.getSeconds();
		
    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return dateString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}
