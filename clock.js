 // show clock
window.onload = function(){

    var clockDiv = document.getElementById('clock');
	var daytimeContainer = document.getElementById('daytime');
    
	console.log(clockDiv);

    // let's write the timestamp
    clockDiv.innerHTML = getCurrentDateTime();

    window.setInterval(function(){
         clockDiv.innerHTML = getCurrentDateTime();

		if(getDayNight()){
			clockDiv.className = 'day';
		}else{
			clockDiv.className = 'night';
		}
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

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
};

 var getDayNight = function(){
     var currentDate = new Date();

     var hours = currentDate.getHours();
	 console.log(hours)
     var day = "";
     if (hours >= 18 || hours <= 6){
         var day = false;
     } else {
         var day = true;
     }
     return day;
 };
 
 //style properties
 
