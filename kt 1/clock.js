var lng = "eng";


window.onload = function() {

    var clockContainer = document.getElementById('clock');
    var monthContainer = document.getElementById('month');
    var dayContainer = document.getElementById('day');

    var clockColor = document.getElementById('clockColor');


    //console.log(clockContainer);

    clockContainer.innerHTML = getCurrentTime();
    monthContainer.innerHTML = getCurrentMonth();
    dayContainer.innerHTML = getCurrentDay();

    window.setInterval(function() {

        clockContainer.innerHTML = getCurrentTime();
        monthContainer.innerHTML = getCurrentMonth();
        dayContainer.innerHTML = getCurrentDay();

    }, 1000);

    // e on ise m22ratud muutuja nimi
    window.addEventListener("keypress", function(e) {
        console.log(e);

        if (e.charCode == 13) {
            console.log("Keegi vajutas @Enter");
        }
    });

};

var getCurrentTime = function() {
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var timeString = addZeroBefore(hours) + ":" + addZeroBefore(minutes) + ":" + addZeroBefore(seconds) + "<br>";

    return timeString;
};

var getCurrentMonth = function() {

    var currentDate = new Date();

    var day = currentDate.getDate();

    var monthNamesEng = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var monthNamesEst = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni",
        "Juuli", "August", "September", "Oktoober", "November", "Detsember"
    ];

    var monthNamesRus = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];

    var month;

    if (lng == "eng") {
        month = monthNamesEng[currentDate.getMonth()];
    }else if (lng == "est") {
        month = monthNamesEst[currentDate.getMonth()];
    }else if(lng == "rus"){
        month = monthNamesRus[currentDate.getMonth()];

    }

    var dateString = day + ' ' + month + "<br>";

    return dateString;
};

var getCurrentDay = function() {
    var currentDate = new Date();

    var weekDay = currentDate.getDay();
    var weekDaysEng = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var weekDaysEst = ['Pühapäev', 'Esmaspäev', 'Teisipäev', 'Kolmapäev', 'Neljapäev', 'Reede', 'Laupäev'];
    var weekDaysRus = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    var week;
    if (lng == "eng") {
      week = weekDaysEng[weekDay];
    }else if(lng == "est"){
      week = weekDaysEst[weekDay];
    }else if(lng == "rus"){
      week = weekDaysRus[weekDay];
    }

    var weekString = week;

    return weekString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}

function changeClockColor() {
    clock.style.color = getRandomColor();
}

function changeDateColor() {
    month.style.color = getRandomColor();
}

function changeDayColor() {
    day.style.color = getRandomColor();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeLngEst() {
  lng = "est";
  toast('','EST',3);
}
function changeLngEng() {
  lng = "eng";
  toast('','ENG',3);
}
function changeLngRus() {
  lng = "rus";
  toast('','RUS',3);

}

function changeMode() {
  var dayNight = document.getElementById('dayMode');

  // console.log(dayNight.value);
  if(dayNight.value == "Day"){
    dayNight.value = "Night";

    /*color change */

    document.body.style.background = "white";
    clock.style.color = "black";
    day.style.color = "black";
    month.style.color = "black";

    clockColor.style.color = "black";
    dateColor.style.color = "black";
    dayColor.style.color = "black";
    color.style.color = "black";
    clockColor.style.background = "white";
    dateColor.style.background = "white";
    dayColor.style.background = "white";
    color.style.background = "white";

    lngEst.style.background = "white";
    lngRus.style.background = "white";
    lngEng.style.background = "white";
    lngEst.style.color = "black";
    lngRus.style.color = "black";
    lngEng.style.color = "black";

    dayMode.style.color = "black";
    dayMode.style.background = "white";
    mode.style.color = "black";
    mode.style.background = "white";

  }else{
    dayNight.value = "Day";


    document.body.style.background = "black";
    clock.style.color = "white";
    day.style.color = "white";
    month.style.color = "white";

    clockColor.style.color = "white";
    dateColor.style.color = "white";
    dayColor.style.color = "white";
    color.style.color = "white";
    clockColor.style.background = "black";
    dateColor.style.background = "black";
    dayColor.style.background = "black";
    color.style.background = "black";

    lngEst.style.background = "black";
    lngRus.style.background = "black";
    lngEng.style.background = "black";
    lngEst.style.color = "white";
    lngRus.style.color = "white";
    lngEng.style.color = "white";

    dayMode.style.color = "white";
    dayMode.style.background = "black";
    mode.style.color = "white";
    mode.style.background = "black";  }
   }
