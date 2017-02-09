
// aken laetud
window.onload = function(){
    document.getElementById("clock").style.fontSize = "2000%";

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    // kohe kirjutame ka kellaaja
    clockContainer.innerHTML = getcurrentDate();

    window.setInterval(function(){
        clockContainer.innerHTML = getcurrentDate();
    }, 1000);

};

var getcurrentDate = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var day = currentDate.getDay();
    var month = currentDate.getMonth();
    var date = currentDate.getDate()+".";

    var clockString = (date).fontsize("7px") + (getMonthName(month)).fontsize("7px") + "  ( ".fontsize(9) + (getDayName(day)).fontsize("7px") + " )".fontsize("1000%") + "<br>" +
    addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds)
    return clockString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}
function getDayName(day){
    if(day==0){
        day="Puhapaev";
    }if(day==1){
        day="Esmaspaev";
    }if(day==2){
        day="Teisipaev";
    }if(day==3){
        day="Kolmapaev";
    }if(day==4){
        day="Neljapaev";
    }if(day==5){
        day="Reede";
    }if(day==6){
        day="Laupaev";
    }
    return day;
}function getMonthName(month){
    if(month==0){month="Jaanuar";}
    if(month==1){month="Veebruar";}
    if(month==2){month="Marts";}
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






