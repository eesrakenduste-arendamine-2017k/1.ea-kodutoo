var kiirus=5;
var suurus=0.07;
var clockContainer;
var dayContainer;
var dateContainer;
var counter = 0;

window.onload = function(){
	//kuupäev
	dateContainer = document.getElementById('date');
    dateContainer.innerHTML = getCurrentDate();
	//nädalapäev
	dayContainer = document.getElementById('day');
    dayContainer.innerHTML = getCurrentDay();

	
	//kell
    clockContainer = document.getElementById('clock');
    clockContainer.innerHTML = getCurrentDateTime();
	
	    var d = new Date();
		//console.log( 1000-d.getMilliseconds());
		var ms = d.getMilliseconds();
		if(ms >900){
			ms = 900 + ms;
		}else{
			ms = 900 - ms;
		}

		window.setTimeout(startClock, ms);
   
};
function pulseSpeed() {
    console.log(kiirus = document.getElementById("speedSlider").value);
}

function pulseSize() {
	
    console.log(suurus = document.getElementById("sizeSlider").value/10);
}

var startClock = function(){
	 window.setInterval(function(){
		 
		
		if(counter%kiirus==0){
			//console.log(counter);
			//console.log(kiirus);
			//console.log(suurus);
			
			if(clockContainer.style.fontSize != parseInt(window.innerWidth*suurus)+"px"){
				clockContainer.style.fontSize = parseInt(window.innerWidth*suurus)+"px";	
			}else{
				clockContainer.style.fontSize = parseInt(window.innerWidth*0.07)+"px";
				dateContainer.style.fontSize = parseInt(window.innerWidth*0.07)+"px";
				dayContainer.style.fontSize = parseInt(window.innerWidth*0.07)+"px";
				document.getElementById('autor').style.fontSize = parseInt(window.innerWidth*0.07)+"px";
			}
		}
		counter++;
		clockContainer.innerHTML = getCurrentDay();
        clockContainer.innerHTML = getCurrentDateTime();
		dayContainer.style.color = document.getElementById('colorPicker').value;
    }, 100);
} 

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) 
					+ ':' + addZeroBefore(seconds);

    return dateString;
};

function getCurrentDay(){
	var d = new Date();
	var weekday = new Array(7);
	weekday[0] = "Pühapäev";
	weekday[1] = "Esmaspäev";
	weekday[2] = "Teisipäev";
	weekday[3] = "Kolmapäev";
	weekday[4] = "Neljapäev";
	weekday[5] = "Reede";
	weekday[6] = "Laupäev";

	var n = weekday[d.getDay()];
	return n;
}

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}

var getCurrentDate = function(){
    var currentDate = new Date();

    var days = currentDate.getDate();
    var months = currentDate.getMonth()+1;
    var years = currentDate.getYear()+1900;

    var dateString = addZeroBefore(days) + ':' + addZeroBefore(months) 
					+ ':' + addZeroBefore(years);

    return dateString;
};
