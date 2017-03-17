var weekdayContainer;
window.onload = function(){
	
// Kella konteiner
	var clockContainer = document.getElementById('clock');
	console.log(clockContainer);
	clockContainer.addEventListener("mouseover",randomColors);

// Lehe laadimisel kuvatakse kellaaeg (funktsioon getCurrentTime() ) konteineri sisse
	clockContainer.innerHTML = getCurrentTime();

// Kuupäeva konteiner : Luuakse muutuja ja edastatakse see konsooli ?
	var dateContainer = document.getElementById('date');
	console.log(dateContainer);
	dateContainer.addEventListener("mouseover",randomColors);


	weekdayContainer = document.getElementById('p2ev');
	console.log(weekdayContainer);
	weekdayContainer.addEventListener("mouseover",randomColors);

// change CSS Class konteiner
	changeClassContainer = document.getElementById("taust");
	changeClassContainer.addEventListener("click", changeClass);


// Lehe laadimisel kuvatakse kuupäev (funktsioon getCurrentDate() ) konteineri sisse
	dateContainer.innerHTML = getCurrentDate();


// Lehel oleva kella konteineri sisu uuendamine iga 1000 ms (1s) tagant
	window.setInterval(function (){
		clockContainer.innerHTML = getCurrentTime();
	}, 1000);

// Lehele lisatakse lutikas, mis salvestab klahvivajutused
	window.addEventListener("keypress", function(e){
		console.log(e);
	});
};

// Change CSS Class
   function changeClass() {
	var taust = document.getElementById("taust");
	if (taust.className == "Grid klots") {
		taust.className += " change--css--yellow";
    } else {
    	taust.className = "Grid klots";
    }
	}

// Fondi värvide valik
var fontColor = ["red", "blue", "black", "yellow", "pink", "purple", "grey", "green", "orange"];

// Vaheta värve juhuslikus järjekorras
function randomColors() {
    var v2rv = document.getElementsByClassName("randomcolor");
    var i;
    for (i = 0; i < v2rv.length; i++) {
        v2rv[i].style.color = fontColor[Math.floor(Math.random() * fontColor.length)];
    }
}

// KUva kuupäev
function showDate() {
	var date = document.getElementById("date");
	date.innerHTML = getCurrentDate();
}

var weekdayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function whatDay (weekdayNumber) {	
	return weekdayName[weekdayNumber];
}

// Hangi kuupäev + lisa 0 + nädalapäev
var getCurrentDate = function(){
	var currentDate = new Date();
	
	var days = currentDate.getDate();
	var months = currentDate.getMonth()+1;
	var years = currentDate.getFullYear();
	var weekdayNumber = currentDate.getDay();

	weekdayContainer.innerHTML =whatDay(weekdayNumber);

	var dateString = addZeroBefore(days) + "." + addZeroBefore(months) + "." + years;
	return dateString;

	function addZeroBefore (dateNumber) {
		if (dateNumber < 10){
			dateNumber = "0" + dateNumber;
		}
		return dateNumber;
	}
}

// Hangi kellaaeg + lisa 0
var getCurrentTime = function(){
	var currentDate = new Date();
	
	var hours = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	var seconds = currentDate.getSeconds();

	var dateString = addZeroBefore(hours) + ":" + addZeroBefore(minutes) + ":" + addZeroBefore(seconds);
	return dateString;

	function addZeroBefore (dateNumber) {
		if (dateNumber < 10){
			dateNumber = "0" + dateNumber;
		}
		return dateNumber;
	}
}

// Kasutajalt sisendi küsimine ja selle kuvamine #taust div'i
$(document).ready(function () {
    var input = document.getElementById('searchTxt');

    // Listen key event
    input.addEventListener("keydown", function(event) {
        // Enter key
        console.log(event.key);
      
        if (event.key === "Enter") {
            loadImage(input.value)
            $("#taust").html(input.value);
              console.log($("#taust"));
            input.value = "";
        }
    });

// JQuery api flickr'ist piltide laadimiseks
    function loadImage(keyword) {
        $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
            tags: keyword,
            tagmode: "any",
            format: "json"
        }, function (data) {
            var rnd = Math.floor(Math.random() * data.items.length);
            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");
            $('body').css('background-image', "url('" + image_src + "')");
        });
    }
   

});
