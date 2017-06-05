window.onload = function (){

  var clockContainer = document.getElementById('clock');
  var backgroundImage = document.body.style.backgroundImage= "url('img_lights2.jpg')";
  console.log(clockContainer);

clockContainer.innerHTML = getCurrentDateTime();
  window.setInterval(function(){
      clockContainer.innerHTML = getCurrentDateTime();
  }, 1000);

};  var x=0;
window.addEventListener("dblclick",function(){
  var clockDiv = document.getElementById("clock");
  console.log(clockDiv);
  if(clockDiv.className == "big"){
    clockDiv.className = "small";}
    else{
    clockDiv.className = "big";
  }
});

window.addEventListener("keypress", function(e){
  console.log(e);
  if (e.charCode == 32){
    console.log("space");

    if (x==1){
      x=0;
      document.body.style.backgroundImage= "url('img_lights4.jpg')";}
      else{x=1;document.body.style.backgroundImage= "url('img_lights2.jpg')";}
  }
});
var z = 1;
function changeFormat(){
  console.log();
      if (z == 0){z=1;}
      else{z=0;}

};
var getCurrentDateTime = function(){
  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  if (z==1){var dateString = dayname+ "<br>" +currentDate.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit' })+ "<br>"+upper;};
  if (z==0){var dateString = dayname+ "<br>" +addZeroBefore(hours)+":"+addZeroBefore(minutes)+":"+addZeroBefore(seconds)+  "<br>"+upper;};
  return  dateString;

};
function addZeroBefore(dateNumber){
  if (dateNumber<10){
    dateNumber="0"+dateNumber;
  }
  return dateNumber;
}


var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[d.getDay()];
var dayname = n.fontsize(8);


var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) { dd='0'+dd;} 
if(mm<10) { mm='0'+mm;} 
today = dd+'/'+mm+'/'+yyyy;
var result = today.fontsize(8);
var upper = result.sup();
console.log(today);


