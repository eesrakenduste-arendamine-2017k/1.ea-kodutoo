
// aken laetud
window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    // kohe kirjutame ka kellaaja
    clockContainer.innerHTML = getCurrentDateTime();
	document.getElementById('date').innerHTML = getCurrentDate();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);

    // e on ise määratud muutuja nimi
    window.addEventListener("keypress", function(e){
        console.log(e);

        if (e.charCode == 13) {
            console.log('Keegi vajutas Enter klahvi');
        }
    });



	document.getElementById("changeColor").addEventListener('click', changeColor);
	document.getElementById("resetColor").addEventListener('click', resetColor);

};
var moveClock = function(){
  //var movePosition = teatud arv pixleid right, left
  //olene mis key press, position=relative tuleb panna

};

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();


    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes);

    return dateString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}

var  getCurrentDate = function(){
	var currentDate = new Date();

	var weekdays = currentDate.getDay();
	var days = currentDate.getDate();
	var months = currentDate.getMonth();

	switch(weekdays){
		case 0:
			weekdays="Pühapäev";
			break;
		case 1:
			weekdays="Esmaspäev";
			break;
		case 2:
			weekdays="Teisipäev";
			break;
		case 3:
			weekdays="Kolmapäev";
			break;
		case 4:
			weekdays="Neljapäev";
			break;
		case 5:
			weekdays="Reede";
			break;
		case 6:
			weekdays="Laupäev";
			break;

	}

	switch(months){
		case 0:
			months="Jaanuar";
			break;
		case 1:
			months="Veebruar";
			break;
		case 2:
			months="Märts";
			break;
		case 3:
			months="Aprill";
			break;
		case 4:
			months="Mai";
			break;
		case 5:
			months="Juuni";
			break;
		case 6:
			months="Juuli";
			break;
		case 7:
			months="August";
			break;
		case 8:
			months="September";
			break;
		case 9:
			months="Oktoober";
			break;
		case 10:
			months="November";
			break;
		case 11:
			months="Detsember";
			break;
	}
	var fullDate = weekdays+ ', ' + days + '. ' + months;

	return fullDate;
};

function changeColor(){

    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById("clock").style.color = color;

}
function resetColor(){

    
    var color = '#FFFFFF';
    
    document.getElementById("clock").style.color = color;

}

function zoomFont(multiplier) {
  if (document.getElementById("clock").style.fontSize == "") {
    document.getElementById("clock").style.fontSize = "7.5vh";
  }
  document.getElementById("clock").style.fontSize = 
  parseFloat(document.getElementById("clock").style.fontSize) + (multiplier * 0.2) + "vh";
}
function resetFont() {
	var fontSize = '7.5vh';
    
    document.getElementById("clock").style.fontSize = fontSize;

}

function addEventCalendar(){
	
	var input = document.getElementById("saveLocal");
	localStorage.setItem("local", input.value);
	
	
	
	
	
}

function GetEventCalendar(){
	
	var storedValue = localStorage.getItem("local");
	
}



