window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    clockContainer.innerHTML = getCurrentDateTime();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);

    var dateContainer = document.getElementById('date');
    console.log(dateContainer);

    dateContainer.innerHTML = getCurrentDate();

    window.setInterval(function(){
        dateContainer.innerHTML = getCurrentDate();
    }, 1000);
};

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);


    return dateString;
};

var getCurrentDate = function(){
    var currentDate = new Date();

    var year = currentDate.getFullYear();
    var month = currentDate.getMonth();
    var months = new Array('Jaanuar', 'Veebruar', 'Märts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember');
    var d = currentDate.getDate();
    var day = currentDate.getDay();
    var days = new Array ('Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev');

    var dateStringdate  = days[day]+' '+months[month]+' '+d+' '+year;
    document.getElementById("date").innerHTML = dateStringdate;

    return dateStringdate;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}

var currentSize = 20;
function fontsmall () {
	if(currentSize <= 15){
		alert("Väiksemaks ei saa");
	}
	else {
	currentSize -= 5;
	document.getElementById("main").style.fontSize = currentSize + "px";
	console.log(currentSize);
	}
}
function fontbig() {
	if(currentSize >= 40){
		alert("Suuremaks ei saa");
	}
	else {
		currentSize += 5;
		document.getElementById("main").style.fontSize = currentSize + "px";
		console.log(currentSize);
	}
}    
var tops = 14;
function clockup () {
	if(tops <= 0){
		alert("Rohkem üles ei saa");
	}
	else {
	tops -= 5;
	document.getElementById("main").style.marginTop = tops + "%";
	console.log(tops);
	}
}
function clockdown () {
	if(tops >= 30){
		alert("Rohkem alla ei saa");
	}
	else {
	tops += 5;
	document.getElementById("main").style.marginTop = tops + "%";
	console.log(tops);
	}
}
var a = "0px 2px 25px rgba(144, 244, 253, .6)";
function addshadow () {
	document.getElementById("clock").style.textShadow = a;
	console.log(a);
}
var b = "";
function offshadow () {
	document.getElementById("clock").style.textShadow = b;
	console.log(b);
}
