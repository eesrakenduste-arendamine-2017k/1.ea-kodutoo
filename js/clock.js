//Get the time for clock
var getCurrentTime = function(){
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
	
    var timeString = addZeroBefore(hours) + ' : ' + addZeroBefore(minutes) + ' : ' + addZeroBefore(seconds);
	
    return timeString;
};

//Add zeros
function addZeroBefore(timeNumber) {
    if (timeNumber < 10) {
        timeNumber = '0' + timeNumber;
    }

    return timeNumber;
}