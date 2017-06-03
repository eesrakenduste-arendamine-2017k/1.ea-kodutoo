// aken laetud
window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    var dateContainer = document.getElementById('date');
    console.log(dateContainer);

    // kohe kirjutame ka kellaaja
    clockContainer.innerHTML = getCurrentDateTime();

    dateContainer.innerHTML = getCurrentDate();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);

    window.setInterval(function(){
        dateContainer.innerHTML = getCurrentDate();
    }, 1000);


};

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
//väljastan kellaaja tundides, minutites ja sekundites
    var timeString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return timeString;
};

var getCurrentDate = function(){
  var currentDate = new Date();

  var date = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();
  var day = new Array(7);
  day[0] = "Pühapäev";
  day[1] = "Esmaspäev";
  day[2] = "Teisipäev";
  day[3] = "Kolmapäev";
  day[4] = "Neljapäev";
  day[5] = "Reede";
  day[6] = "Laupäev";
//väljastan nädalapäeva ja kuupäeva
  var dateString = day[currentDate.getDay()] + ' ' + addZeroBefore(date) + '.' + addZeroBefore(month) + '.' + year;
  return dateString;
};

//lisan 0 üksiku numbri ette
function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}

//muudab tausta värvi value rippmenüü valikus antud nimetuse value-ks
//värvid võtsin Pantone lehelt
document.getElementById("color").addEventListener("change", colorChange);
 	function colorChange() {
 	  document.body.style.backgroundColor = this.value
}

//järgmised kaks funktsiooni suurendavad/vähendavad kella fondi suurust iga nupu vajutuse korral 10px võrra suuremaks/väiksemaks
function increaseFont(){
  Eclock =  document.getElementById('clock');
  style = window.getComputedStyle(Eclock, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  Eclock.style.fontSize = (currentSize + 10)+'px';
}

function decreaseFont(){
  Eclock =  document.getElementById('clock');
  style = window.getComputedStyle(Eclock, null).getPropertyValue('font-size');
  currentSize = parseFloat(style);
  Eclock.style.fontSize = (currentSize - 10)+'px';
}

//järgmine funktsioon laseb htmlis teatud lingil(a) olevat helifaili mängida ja uuesti pausida
var myaudio = document.getElementById("myaudio");
var isPlaying = false;

function clickPlay() {
  if (isPlaying) {
    myaudio.pause();
  } else {
    myaudio.play();
  }
}
myaudio.onplaying = function() {
  isPlaying = true;
};
myaudio.onpause = function() {
  isPlaying = false;
};
