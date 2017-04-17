//avalikud muutujad
var firstname;
var lastName;
var clockContainer = document.getElementById('clock');
var clockContainer2 = document.getElementById('clock2');
var clockContainer3 = document.getElementById('clock3');
var clockContainer4 = document.getElementById('clock4');
var clockContainer5 = document.getElementById('clock5');
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
    }, 1000);

    // e on ise määratud muutuja nimi
    window.addEventListener("keypress", function(e){
        //console.log(e);

        if (e.charCode == 13) {
            //console.log('Keegi vajutas Enter klahvi');
        }
    });

    var londonBtn = document.getElementById("londonBtn");
    londonBtn.addEventListener('click', function(){
        clockContainer5.style.display = "none";
    });
    var newyorkBtn = document.getElementById("newyorkBtn");
    newyorkBtn.addEventListener('click', function(){
        clockContainer4.style.display = "none";
    });
    var moscowBtn = document.getElementById("moscowBtn");
    moscowBtn.addEventListener('click', function(){
        clockContainer3.style.display = "none";
    });
    var tokyoBtn = document.getElementById("tokyoBtn");
    tokyoBtn.addEventListener('click', function(){
        clockContainer2.style.display = "none";
    });
    var tallinnBtn = document.getElementById("tallinnBtn");
    tallinnBtn.addEventListener('click', function(){
        clockContainer.style.display = "none";
    });

    //addAuthor("Tõnu Trubetsky");
    window.addEventListener('mousemove', function(){
        //10-40
        //var first = document.querySelectorAll('span')[0];
        //console.log(firstname);

        //console.log(Math.round(10+(Math.random()*5)));
        //firstname.style.fontSize = Math.round(10+(Math.random()*30))+"px";

        //var lastName = document.querySelectorAll('span')[1];

        //var randomRGB = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
        //lastName.style.color = randomRGB;
    });

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

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var randomRGB = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
    var randomRGB2 = "rgb("+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+")";
    clockContainer.style.backgroundColor = randomRGB;
    clockContainer.style.color = randomRGB2;

    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return dateString;
};

var londonTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours()-2;
    if (hours<0){
      hours = hours + 24;
    }
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var randomRGB = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
    var randomRGB2 = "rgb("+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+")";
    clockContainer5.style.backgroundColor = randomRGB;
    clockContainer5.style.color = randomRGB2;

    var dateString2 = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return dateString2;
};

var newyorkTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours()-7;
    if (hours<0){
      hours = hours + 24;
      console.log(hours);
    }
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var randomRGB = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
    var randomRGB2 = "rgb("+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+")";
    clockContainer4.style.backgroundColor = randomRGB;
    clockContainer4.style.color = randomRGB2;

    var dateString3 = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return dateString3;
};

var tokyoTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours()+6;
    if(hours>23){
      hours = hours - 24;
      //console.log(hours);
    }
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var randomRGB = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
    var randomRGB2 = "rgb("+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+","+Math.round(Math.random()*127)+")";
    clockContainer2.style.backgroundColor = randomRGB;
    clockContainer2.style.color = randomRGB2;

    var dateString4 = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return dateString4;
};

var moscowTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var randomRGB = "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+")";
    var randomRGB2 = "rgb("+Math.round(Math.random()*200)+","+Math.round(Math.random()*200)+","+Math.round(Math.random()*200)+")";
    clockContainer3.style.backgroundColor = randomRGB;
    clockContainer3.style.color = randomRGB2;

    var dateString5 = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return dateString5;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}

/*function addAuthor(name){

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

    document.body.appendChild(p);
}*/

/*
for(var i = 0; i < links.length; i++){
 	links[i].href = "#";
}
*/
