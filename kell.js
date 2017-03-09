// aken laetud
window.onload = function(){

    var clockContainer = document.getElementById('clock'); /*To access an HTML element*/
    console.log(clockContainer); /*For debugging purposes, you can use the console.log() method to display data.*/

    clockContainer.innerHTML = getCurrentDateTime();

    window.setInterval(function(){ /*The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).*/
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
 		day = "Mo";
 	}
 	if (day == "2"){
 		day = "Tu";
 	}
 	if (day == "3"){
 		day = "We";
 	}
 	if (day == "4"){
 		day = "Th";
 	}
 	if (day == "5"){
 		day = "Fr"
 	}
 	if (day == "6"){
 		day = "Sa";
 	}
 	if (day == "0"){
 		day = "Su";
 	}


    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + "<br>" +  addZeroBefore(date) + '.' + addZeroBefore(month) + '.' + day;

    return dateString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;

}
