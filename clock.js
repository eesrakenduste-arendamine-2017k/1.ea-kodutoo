/**
 * Created by AASA on 07.02.2017.
 */


function addZero(num) {
    return "0" + num;
}

function monthToName(month) {
    switch (month) {
        case 0: return "January";
        case 1: return "February";
        case 2: return "March";
        case 3: return "April";
        case 4: return "May";
        case 5: return "June";
        case 6: return "July";
        case 7: return "August";
        case 8: return "September";
        case 9: return "October";
        case 10: return "November";
        case 11: return "December";
    }
}

function dayToName(day) {
    switch (day) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
    }
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomColorItem(itemId) {
    document.getElementById(itemId).style.color = getRandomColor();
}

function getFontSize(element){
    return parseFloat(window.getComputedStyle(document.getElementById(element), null)
        .getPropertyValue("font-size"));
}
function clock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    var currentDay = dayToName(currentTime.getDay());
    var currentDate = currentTime.getDate();
    var currentYear = currentTime.getFullYear();
    var currentMonth = monthToName(currentTime.getMonth());

    if (currentHours < 10) {
        currentHours = addZero(currentHours);
    }
    if (currentMinutes < 10) {
        currentMinutes = addZero(currentMinutes);
    }
    if (currentSeconds < 10) {
        currentSeconds = addZero(currentSeconds);
    }


    document.getElementById("day").innerHTML = currentDay;
    document.getElementById("date").innerHTML = currentDate + ". " + currentMonth + " " + currentYear;
    document.getElementById("clockHour").innerHTML = currentHours;
    document.getElementById("clockMinute").innerHTML = currentMinutes;
    document.getElementById("clockSecond").innerHTML = currentSeconds;
}

var fontSizeClock = getFontSize("clock");
var fontSizeDate = getFontSize("dateContainer");

clock();
setInterval(clock, 1000);

document.body.addEventListener('click', function(e){
    e = window.event ||  e;
    if (this == e.target){
        this.style.backgroundColor = getRandomColor();
    }

});

document.addEventListener('keypress', function(e){
    console.log(parseFloat(window.getComputedStyle(document.getElementById("container"), null).getPropertyValue("width")));
    if (event.keyCode == 43){
        fontSizeDate += 1;
        fontSizeClock += 3;
    } else if (event.keyCode == 45){
        fontSizeDate -= 1;
        fontSizeClock -= 3;
    }
    document.getElementById("clock").style.fontSize = fontSizeClock + "px";
    document.getElementById("dateContainer").style.fontSize = fontSizeDate + "px";

})

