//Ootan kuni leht on täielikult laetud
window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    //Kuvan kohe kellaaja
    clockContainer.innerHTML = getCurrentDateTime();
	
	//Värskendan kellaaega iga 1s tagant
    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);

};

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
	var day = currentDate.getDay();
	var month = currentDate.getMonth();
	var year = currentDate.getYear();
	
    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return dateString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}