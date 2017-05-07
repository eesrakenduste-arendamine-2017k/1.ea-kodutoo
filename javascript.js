var d = new Date();
window.onload = function()
{


    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var weekday = new Array(7);
    weekday[0] = "Monday";
    weekday[1] = "Tuesday";
    weekday[2] = "Wednesday";
    weekday[3] = "Thursday";
    weekday[4] = "Friday";
    weekday[5] = "Saturday";
    weekday[6] = "Sunday";

	document.getElementById("kuupaev").innerHTML = d.getDate() + "." + monthNames[d.getMonth()] + "." + d.getFullYear();
	document.getElementById("nadalapaev").innerHTML = weekday[d.getDay()];


	    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    // kohe kirjutame ka kellaaja
    clockContainer.innerHTML = getCurrentDateTime();

    window.setInterval(function()
    {
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);
}

var getCurrentDateTime = function()
{
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return dateString;
};

function addZeroBefore(dateNumber)
{
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}

function changeFontSize(element,step)
{
	step = parseInt(step,10);
	var el = document.getElementById(element);
	var curFont = parseInt(el.style.fontSize,10);
	el.style.fontSize = (curFont+step) + 'px';
	return;
}
//http://www.vijayjoshi.org/2009/04/02/changing-font-size-on-a-page-with-javascript-for-better-user-experience/



function log() {
	document.getElementById("log").innerHTML = document.body.style.backgroundImage;
}

function changeFontColor()
{
	if(document.getElementById("parent").style.color == "rgb(0, 0, 0)"){
		document.getElementById("parent").style.color = "rgb(255, 0, 0)";
	} else if(document.getElementById("parent").style.color == "rgb(255, 0, 0)"){
		document.getElementById("parent").style.color = "rgb(0, 255, 0)";
	} else if(document.getElementById("parent").style.color == "rgb(0, 255, 0)"){
        document.getElementById("parent").style.color = "rgb(0, 0, 255)";
    } else {
        document.getElementById("parent").style.color = "rgb(0, 0, 0)";
    }
}
function changeBackgroundPicture() {
    var allbg = document.getElementById('allofit');
    if(allbg.className == "bgimage"){
            allbg.className = "bgimageother";
        }else{
            allbg.className = "bgimage";
        }
}
