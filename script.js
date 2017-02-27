//aken laetud

window.onload = function() {

    var clockContainer = document.getElementById('clock');
    //var dateContainer = document.getElementByID('date');
    clockContainer.innerHTML = getCurrentDateTime();
    //	dateContainer.innerHTML = getCurrentDate();

    window.setInterval(function() {

            clockContainer.innerHTML = getCurrentDateTime();
        }, 1000

    );
	
		document.getElementById('clock').style.height= "20%";
       document.getElementById('clock').style.width= '20%';
	   document.getElementById('clock').style.fontSize= "50px";
       document.getElementById('clock').style.fontSize= '50px';
}

var getCurrentDate = function() {

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Pühapäev";
    weekday[1] = "Esmaspäev";
    weekday[2] = "Teisipäev";
    weekday[3] = "Kolmapäev";
    weekday[4] = "Neljapäev";
    weekday[5] = "Reede";
    weekday[6] = "Laupäev";

    var n = weekday[d.getDay()];
    var month = d.getMonth() + 1;
    var day = d.getDate();
		var year = d.getFullYear();
    //  var weekday = today.getDay();

    var dateString = addZeroBefore(day) + ' ' + addZeroBefore(month) + ' ' + year  + "</br>" + n;


    return dateString;
}

var getCurrentDateTime = function() {
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ":" + addZeroBefore(seconds) + "</br>" + getCurrentDate();

    return dateString;
}


function addZeroBefore(dateNumber) {

    if (dateNumber < 10) {

        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}

var i = 0;

function change() {
    var doc = document.getElementById("clock");
    var color = ["#F5A9BC", "#9FF781", "#BE81F7", "#F78181"];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}
setInterval(change, 1000);

var imageOffset = 50;
var increment = 5;
var windowWidth = window.innerWidth;

function moving_Image() {
    //console.log(document.getElementById("clock").style.left);
    if (parseInt(document.getElementById("clock").style.left) < 10) {
        increment = 5;
    }

    if (parseInt(document.getElementById("clock").style.left) > 100) {
        increment = -5;
    }




    imageOffset = imageOffset + increment;

    document.getElementById("clock").style.left = imageOffset + "%";
  

}



function show_update_profile2()
   {
	   document.getElementById('clock').style.height= "20%";
       document.getElementById('clock').style.width= '20%';
	   document.getElementById('clock').style.fontSize= "50px";
       document.getElementById('clock').style.fontSize= '50px';
	   
   }
   
function show_update_profile()
   {	document.getElementById('clock').style.height= "50%";
       document.getElementById('clock').style.width= '50%';
	   document.getElementById('clock').style.fontSize= "100px";
       document.getElementById('clock').style.fontSize= '100px';
   }

   function chBackcolor(color) {
   document.body.style.background = color;
}

