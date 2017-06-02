 // show clock
window.onload = function(){

    var clockDiv = document.getElementById('clock');
    var dateDiv = document.getElementById('date');
    var body = document.getElementsByTagName("BODY")[0];
    var dayColor = "white";
    var nightColor = "black";
    var fontFamily = "Arial";
    var dayFontColor = "black";
    var nightFontColor = "white";
    dayNightColor(getDayNight(), dayColor, nightColor, dayFontColor, nightFontColor);
    document.getElementById("sidebar").addEventListener("click", openCustom);
    window.setInterval(function(){
        clockDiv.innerHTML = getCurrentTime();
        dateDiv.innerHTML = getCurrentDate();
        /*change day/night and their font colors*/
        document.addEventListener('click', function(e) {
            if (e.target.className == "day") {
                dayColor = window.getComputedStyle(document.getElementById(e.target.id), null).backgroundColor;
            }
            if (e.target.className == "night") {
                nightColor = window.getComputedStyle(document.getElementById(e.target.id), null).backgroundColor;
            }
            if (e.target.className == "dayf") {
                dayFontColor = window.getComputedStyle(document.getElementById(e.target.id), null).backgroundColor;
            }
            if (e.target.className == "nightf") {
                nightFontColor = window.getComputedStyle(document.getElementById(e.target.id), null).backgroundColor;
            }
            /*change font family*/
            if (e.target.className == "fontFam"){
                fontFamily = e.target.innerHTML;
            }

        });

        dayNightColor(getDayNight(), dayColor, nightColor, dayFontColor, nightFontColor, fontFamily);


	}, 1000);
};

function dayNightColor(day, dayColor, nightColor, dayFontColor, nightFontColor, fontFamily){
    var clockDiv = document.getElementById('clock');
    var dateDiv = document.getElementById('date');
    var body = document.getElementsByTagName("BODY")[0];
    clockDiv.style.fontFamily = fontFamily;
    dateDiv.style.fontFamily = fontFamily;

    if(day){
        body.style.backgroundColor = dayColor;
        clockDiv.style.color = dayFontColor;
        dateDiv.style.color = dayFontColor;
    }else{
        body.style.backgroundColor = nightColor;
        clockDiv.style.color = nightFontColor;
        dateDiv.style.color = nightFontColor;
    }
}

var getCurrentTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return dateString;
};

var getCurrentDate = function(){
    var currentDate = new Date();

    var day = currentDate.getDay();
    var date = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var dateString = weekday[day] + '/' + date + '/' + month + '/' + year;

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
     var day = "";
     if (hours >= 18 || hours <= 6){
         var day = false;
     } else {
         var day = true;
     }
     return day;
 };

function openCustom(evt, name) {
    var tablinks = document.getElementsByClassName("tablinks")[0];
    var customize = document.getElementById('customize');
    console.log(customize.style.display);
    if (customize.style.display === "none" || customize.style.display === "") {
        customize.classList.add("slidein");
        customize.style.display = "block";
        window.setTimeout(function(){customize.classList.remove("slidein")}, 550);
    } else {
        customize.classList.add("slideout");
        window.setTimeout(function(){
            customize.classList.remove("slideout")
            customize.style.display = "none";}, 550);
    }
}

