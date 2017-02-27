
window.onload = function(){

// tausta värvi muutmine, vajutades ükskõik kuhu

  window.onclick = myFunction;
  function myFunction(){
  var randcol= "";
  var allchar="0123456789ABCDEF";
  for(var i=0; i<6; i++){
     randcol += allchar[Math.floor(Math.random()*16)];

  }

   document.body.style.backgroundColor= "#"+randcol;

  }

  // nime küsimine, tervitus vastavalt kellaajale

    var name = prompt("Please enter your name: ");


    var today = new Date();
    var now = today.getHours();
    var greeting = document.getElementById("greeting");
    var message;



    if (now < 12){
      message = "Good morning";
    } else if (now < 18){
      message = "Good afternoon";
    } else {
      message = "Good evening";
    }

    greeting.innerHTML = message + " " + name;


// kellaaeg
    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);


    clockContainer.innerHTML = getCurrentDateTime();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);

// nooleklahvide vajutused

      document.onkeydown = checkKey;

  function checkKey(e) {

      e = e || window.event;

      if (e.keyCode == '38') {
          // up arrow
      }
      else if (e.keyCode == '40') {
          // down arrow
      }
      else if (e.keyCode == '37') {
         // left arrow
      }
      else if (e.keyCode == '39') {
         // right arrow
      }

  }


};

var getCurrentDateTime = function(){
    var currentDate = new Date();

    var day = currentDate.getDate();
    var month = currentDate.getUTCMonth();
    var year = currentDate.getFullYear();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
    var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December")

    var dateString =  addZeroBefore(day) + "/" + addZeroBefore(month + 1) + "/" + year + "    " + addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

    return dateString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}