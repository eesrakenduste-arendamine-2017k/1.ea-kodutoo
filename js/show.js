//Ootan kuni leht on täielikult laetud
window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    var dateContainer = document.getElementById('date');
    console.log(dateContainer);

    //Kuvan kohe
    clockContainer.innerHTML = getCurrentTime();
    dateContainer.innerHTML = getCurrentDate();
	
	//Värskendan iga 1s tagant
    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentTime();
    }, 1000);

    window.setInterval(function(){
        dateContainer.innerHTML = getCurrentDate();
    }, 1000);
};	