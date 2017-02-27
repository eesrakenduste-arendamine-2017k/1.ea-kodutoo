// aken laetud
window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    // kohe kirjutame ka kellaaja
    clockContainer.innerHTML = getCurrentDate();
	
	document.querySelector("#nupud").addEventListener("click", function(event){
		hide(event);
	});
	document.querySelector(".nupp").addEventListener("click", function(event){
		show(event);
	});
    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDate();
    }, 1000);


};

var getCurrentDate = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var day = currentDate.getDay();
	var month = currentDate.getMonth();
	var date = currentDate.getDate();



    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + '<br>' + getDayName(day) + '<br>' + date + '.\n' + getMonthName(month);

    return dateString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}

function getDayName(day){
    if(day===0){
        day="Puhapäev";
    }if(day==1){
        day="Esmaspäev";
    }if(day==2){
        day="Teisipäev";
    }if(day==3){
        day="Kolmapäev";
    }if(day==4){
        day="Neljapäev";
    }if(day==5){
        day="Reede";
    }if(day==6){
        day="Laupäev";
    }
    return day;
}

function getMonthName(month){
    if(month===0){month="Jaanuar";}
    if(month==1){month="Veebruar";}
    if(month==2){month="Märts";}
    if(month==3){month="Aprill";}
    if(month==4){month="Mai";}
    if(month==5){month="Juuni";}
    if(month==6){month="Juuli";}
    if(month==7){month="August";}
    if(month==8){month="September";}
    if(month==9){month="Oktoober";}
    if(month==10){month="November";}
    if(month==11){month="Detsember";}
    return month;
}

function textbigger(){
	document.getElementById("clock").style.fontSize="150px";
};

function textmedium(){
	document.getElementById("clock").style.fontSize="115px";
};

function textsmaller(){
	document.getElementById("clock").style.fontSize="75px";
};

function textToRed(){
	document.getElementById("clock").style.color="red";
	document.querySelector(".nimi").style.color="red";
};

function textToGreen(){
	document.getElementById("clock").style.color="green";
	document.querySelector(".nimi").style.color="green";
};

function textToWhite(){
	document.getElementById("clock").style.color="white";
	document.querySelector(".nimi").style.color="white";
};

function textToBlack(){
	document.getElementById("clock").style.color="black";
	document.querySelector(".nimi").style.color="black";
};

function background1(){
	document.body.style.background="url(car.jpg) no-repeat center center fixed";
	document.body.style.backgroundSize="cover";
};

function background2(){
	document.body.style.background="url(white.jpg) no-repeat center center fixed";
};

function background3(){
	document.body.style.background="url(background.jpg) no-repeat center center fixed";
};

function show(event) {
	console.log(event.target);
    document.getElementById("nupp").style.visibility = "visible";
    document.getElementById("nupud").style.visibility = "visible";
};
function hide(event) {
	console.log(event.target);
	if(event.target.id == "nupud"){
    document.getElementById("nupp").style.visibility = "hidden";
	document.getElementById("nupud").style.visibility = "hidden";
	}
};

