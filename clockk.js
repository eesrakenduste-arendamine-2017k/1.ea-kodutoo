// show clock
window.onload = function(){

   var clockDiv = document.getElementById('clock');
 var daytimeContainer = document.getElementById('daytime');

 console.log(clockDiv);
  window.addEventListener('mousemove', function (){
    var value = Math.random() * 0xFF | 0;
    var grayscale = (value << 16) | (value << 8) | value;
    var color = '#' + grayscale.toString(16);

    document.body.style.backgroundColor=color;
  })
   // let's write the timestamp
   clockDiv.innerHTML = getCurrentDateTime();

   window.setInterval(function(){
        clockDiv.innerHTML = getCurrentDateTime();

   if(getDayNight()){
     clockDiv.className = 'day';
   }else{
     clockDiv.className = 'night';
   }
 }, 1000);
};
function changeBackgroundImage(){
  //var images = ["'url('1.jpg')'", "'url('2.jpg')'", "'url('3.jpg')'"];
  document.body.style.backgroundImage = "url('1.jpg')";
  //console.log(images[0]);

  /*if(document.body.style.backgroundImage == ""){
    document.body.style.backgroundImage = "url('2.jpg')";
  } /*else if (document.body.style.backgroundImage == "url('2.jpg')") {
    document.body.style.backgroundImage = "url('3.jpg')";
  } else {
    document.body.style.backgroundImage = "url('1.jpg')";
    console.log(document.body.style.backgroundImage);
  }*/

}
function cancelBackgroundImage(){
  document.body.style.backgroundImage = '';
}
var getCurrentDateTime = function(){
   var currentDate = new Date();

   var hours = currentDate.getHours();
   var minutes = currentDate.getMinutes();
   var seconds = currentDate.getSeconds();

   var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

   return dateString;
};

function addZeroBefore(dateNumber) {
   if (dateNumber < 10) {
       dateNumber = '0' + dateNumber;
   }

   return dateNumber;
};
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd
}

if(mm<10) {
    mm='0'+mm
}

today = dd+'/'+mm+'/'+yyyy;
document.write(today);

var getDayNight = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
  console.log(hours)
    var day = "";
    if (hours >= 18 || hours <= 6){
        var day = false;
    } else {
        var day = true;
    }
    return day;
};
