
// aken laetud
window.onload = function(){
	document.getElementById("clock").style.fontSize ="200px";


    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    // kohe kirjutame ka kellaaja
    clockContainer.innerHTML = getCurrentDateTime();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);


};

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
	var date = currentDate.getDate();
	var month = currentDate.getMonth()+1;
	var day = currentDate.getDay();
	
	if (day == "1"){
		day = "E";
	}
	if (day == "2"){
		day = "T";
	}
	if (day == "3"){
		day = "K";
	}
	if (day == "4"){
		day = "N";
	}
	if (day == "5"){
		day = "R";
	}
	if (day == "6"){
		day = "L";
	}
	if (day == "0"){
		day = "P";
	}

    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + "<br>" + addZeroBefore(date) + '.' + addZeroBefore(month) + '.' + day;
    return dateString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}