
// aken laetud
window.onload = function(){

    var clockContainer = document.getElementById('clocks');
    console.log(clockContainer);

    // kohe kirjutame ka kellaaja
    clockContainer.innerHTML = getCurrentDateTime();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);


};

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var dateDay = currentDate.getDate();

    var m = new Date();
      var month = new Array();
      month[0] = "Jaanuar";
      month[1] = "Veebruar";
      month[2] = "Märts";
      month[3] = "Aprill";
      month[4] = "Mai";
      month[5] = "Juuni";
      month[6] = "Juuli";
      month[7] = "August";
      month[8] = "September";
      month[9] = "Oktoober";
      month[10] = "November";
      month[11] = "Detsember";
    var dateMonth = month[m.getMonth()];

    var d = new Date();
      var weekday = new Array(7);
      weekday[0] =  "Pühapäev";
      weekday[1] = "Esmaspäev";
      weekday[2] = "Teisipäev";
      weekday[3] = "Kolmapäev";
      weekday[4] = "Neljapäev";
      weekday[5] = "Reede";
      weekday[6] = "Laupäev";

    var weekDay = weekday[d.getDay()];

    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + ' | ' +addZeroBefore(dateDay) + ' ' + dateMonth + ' | ' +weekDay ;


    return dateString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}
