//avalikud muutujad
var firstname;
var lastName;

var clockContainer = document.getElementById('clock');
var clockContainer2 = document.getElementById('clock2');
var clockContainer3 = document.getElementById('clock3');
var clockContainer4 = document.getElementById('clock4');
var clockContainer5 = document.getElementById('clock5');
var clockContainer6 = document.getElementById('clock6');
//var clockContainers = document.getElementsById('clock', 'clock2', 'clock3', 'clock4', 'clock5', 'clock6');

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";


// aken laetud
window.onload = function(){
    //console.log(clockContainer);

    // kohe kirjutame ka kellaaja
    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
        clockContainer2.innerHTML = tokyoTime();
        clockContainer3.innerHTML = moscowTime();
        clockContainer4.innerHTML = newyorkTime();
        clockContainer5.innerHTML = londonTime();
        clockContainer6.innerHTML = sydneyTime();
    }, 1000);

    clockContainer6.style.display = "none";
    clockContainer5.style.display = "none";
    clockContainer4.style.display = "none";
    clockContainer3.style.display = "none";
    clockContainer2.style.display = "none";
    //clockContainer.style.display = "none";

    // e on ise määratud muutuja nimi
    window.addEventListener("keypress", function(e){
        //console.log(e);

        if (e.charCode == 13) {
            //console.log('Keegi vajutas Enter klahvi');
        }
    });
    addAuthor("Tõnu Trubetsky");

    /*
    window.addEventListener('mousemove', function(){
        //10-40
        //var first = document.querySelectorAll('span')[0];
        //console.log(firstname);
        var value = Math.random() * 0xFF | 0;
        var grayscale = (value << 16) | (value << 8) | value;
        var color = '#' + grayscale.toString(16);
        //console.log(Math.round(10+(Math.random()*5)));
        //firstname.style.fontSize = Math.round(10+(Math.random()*30))+"px";
        /*var elements = document.getElementsByClassName("city");
        var names = '';
        for(var i=0; i<elements.length; i++) {
            names += elements[i].name;
        }
        console.log();
        elements.style.display = "none";

        clockContainer6.style.display = "none";
        clockContainer5.style.display = "none";
        clockContainer4.style.display = "none";
        clockContainer3.style.display = "none";
        clockContainer2.style.display = "none";
        clockContainer.style.display = "none";
        //document.body.style.backgroundColor = color;

        //console.log(color);
        clockContainer.style.fontSize = Math.round(10+(Math.random()*30))+"px";
        clockContainer2.style.fontSize = Math.round(10+(Math.random()*30))+"px";
        clockContainer3.style.fontSize = Math.round(10+(Math.random()*30))+"px";
        clockContainer4.style.fontSize = Math.round(10+(Math.random()*30))+"px";
        clockContainer5.style.fontSize = Math.round(10+(Math.random()*30))+"px";

        //var lastName = document.querySelectorAll('span')[1];

        //var randomRGB = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
        //lastName.style.color = randomRGB;
    });*/

    window.addEventListener('dblclick', function(){
        var clockDiv = document.getElementById('clock');
        //console.log(clockDiv);
        if(clockDiv.className == "big"){
            clockDiv.className = "small";
        }else{
            clockDiv.className = "big";
        }
    });

};


document.getElementById("song").style.display = "none";
// mängib muusikat
function playMusic(){
       var audio = document.getElementById("audio");
       audio.play();
       document.getElementById("song").style.display = "";
       window.addEventListener('mousemove', function(){
         var value = Math.random() * 0xFF | 0;
         var grayscale = (value << 16) | (value << 8) | value;
         var color = '#' + grayscale.toString(16);
         document.body.style.backgroundColor = color;
       });

}
function stopMusic(){
       var audio = document.getElementById("audio");
       audio.pause();
       document.getElementById("song").style.display = "none";
       //audio.currentTime = 0;
       window.addEventListener('mousemove', function(){
         document.body.style.backgroundColor = "black";
       });

}

var getCurrentDateTime = function(){
    var currentDate = new Date();
    //console.log(currentDate);
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var tallinnBtn = document.getElementById("tallinnBtn");
    tallinnBtn.addEventListener('click', function(){
      tallinnBtn.style.backgroundColor = "White";
      document.getElementById("tallinnBtn").style.color = "black";
      clockContainer.style.display = "";
      clockContainer.style.backgroundColor = "Black";
      clockContainer.style.color = "white";

    });

    var clockRGB = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
    var clockRGB2 = "rgb("+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+")";
    clockContainer.style.backgroundColor = clockRGB;
    clockContainer.style.color = clockRGB2;
    var day = currentDate.getDate();
    var today = weekday[currentDate.getDay()];
    var thisMonth = month[currentDate.getDay()+1];

    var dateString = "Tallinn " + addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + " " + today + " " + day + " "+ thisMonth;

    return dateString;
};

var londonTime = function(){
    var currentDate = new Date();
    var hours = currentDate.getHours()-2;
    var day = currentDate.getDate();
    if (hours<0){
      hours = hours + 24;
      day = day -1;

    }
    console.log(day);
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();


    var londonBtn = document.getElementById("londonBtn");
    londonBtn.addEventListener('click', function(){
        londonBtn.style.backgroundColor = "White";
        document.getElementById("londonBtn").style.color = "black";
        clockContainer5.style.display = "";
        clockContainer5.style.backgroundColor = "Black";
        clockContainer5.style.color = "white";
    });

    var clockRGB = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
    var clockRGB2 = "rgb("+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+")";
    clockContainer5.style.backgroundColor = clockRGB;
    clockContainer5.style.color = clockRGB2;
    var today = weekday[currentDate.getDay()];
    var thisMonth = month[currentDate.getDay()+1];
    var dateString = "London " + addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + " " + today + " " + day + " "+ thisMonth;

    return dateString;
};

var newyorkTime = function(){
    var currentDate = new Date();
    var day = currentDate.getDate();
    var hours = currentDate.getHours()-7;

    if (hours<0){
      hours = hours + 24;
      day = day-1;
      //console.log(hours);
    }
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var today = weekday[currentDate.getDay()];
    var newyorkBtn = document.getElementById("newyorkBtn");
    newyorkBtn.addEventListener('click', function(){
      newyorkBtn.style.backgroundColor = "White";
      document.getElementById("newyorkBtn").style.color = "black";
      clockContainer4.style.display = "";
      clockContainer4.style.backgroundColor = "Black";
      clockContainer4.style.color = "white";
    });

    var clockRGB = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
    var clockRGB2 = "rgb("+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+")";
    clockContainer4.style.backgroundColor = clockRGB;
    clockContainer4.style.color = clockRGB2;
    var thisMonth = month[currentDate.getDay()+1];
    var dateString = "New York " + addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + " " + today + " " + day + " "+ thisMonth;

    return dateString;
};

var tokyoTime = function(){
    var currentDate = new Date();
    var hours = currentDate.getHours()+6;
    var today = weekday[currentDate.getDay()];
    var day = currentDate.getDate();

    if(hours>23){
      hours = hours - 24;
      day = day + 1;
      //console.log(hours);
    }

    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();



    var tokyoBtn = document.getElementById("tokyoBtn");
    tokyoBtn.addEventListener('click', function(){
      tokyoBtn.style.backgroundColor = "White";
      document.getElementById("tokyoBtn").style.color = "black";
      clockContainer2.style.display = "";
      clockContainer2.style.backgroundColor = "Black";
      clockContainer2.style.color = "white";
    });

    var clockRGB = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
    var clockRGB2 = "rgb("+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+")";
    clockContainer2.style.backgroundColor = clockRGB;
    clockContainer2.style.color = clockRGB2;
    var thisMonth = month[currentDate.getDay()+1];
    var dateString = "Tokyo " + addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + " " + today + " " + day + " "+ thisMonth;

    return dateString;
};

var moscowTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var day = currentDate.getDate();
    var today = weekday[currentDate.getDay()];

    var moscowBtn = document.getElementById("moscowBtn");
    moscowBtn.addEventListener('click', function(){
      clockContainer3.style.display = "";
      moscowBtn.style.backgroundColor = "White";
      document.getElementById("moscowBtn").style.color = "black";
      clockContainer3.style.backgroundColor = "Black";
      clockContainer3.style.color = "white";
    });

    var clockRGB = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
    var clockRGB2 = "rgb("+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+")";
    clockContainer3.style.backgroundColor = clockRGB;
    clockContainer3.style.color = clockRGB2;
    var thisMonth = month[currentDate.getDay()+1];
    var dateString = "Moscow " + addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + " " + today + " " + day + " "+ thisMonth;

    return dateString;
};

var sydneyTime = function(){
    var currentDate = new Date();
    //console.log(currentDate);
    var hours = currentDate.getHours()+7;
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var day = currentDate.getDate();
    if(hours>23){
      hours = hours - 24;
      day = day + 1;
    }
    console.log(day);
    var sydneyBtn = document.getElementById("sydneyBtn");
    sydneyBtn.addEventListener('click', function(){
      sydneyBtn.style.backgroundColor = "White";
      document.getElementById("sydneyBtn").style.color = "black";
      clockContainer6.style.display = "";
      clockContainer6.style.backgroundColor = "Black";
      clockContainer6.style.color = "white";

    });

    var clockRGB = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
    var clockRGB2 = "rgb("+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+")";
    clockContainer6.style.backgroundColor = clockRGB;
    clockContainer6.style.color = clockRGB2;

    var today = weekday[currentDate.getDay()];
    var thisMonth = month[currentDate.getDay()+1];
    var dateString = "Sydney " + addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + " " + today + " " + day + " "+ thisMonth;

    return dateString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}

function addAuthor(name){

    firstname = document.createElement('span');
    firstname.innerHTML = name.split(" ")[0];
    lastName = document.createElement('span');
    lastName.innerHTML = name.split(" ")[1];

    var p = document.createElement('p');
    p.appendChild(firstname);
    var space = document.createElement('span');
    space.innerHTML=" ";
    p.appendChild(space);
    p.appendChild(lastName);
    p.style.color = "white";

    document.body.appendChild(p);
}

/*
for(var i = 0; i < links.length; i++){
 	links[i].href = "#";
}
*/
