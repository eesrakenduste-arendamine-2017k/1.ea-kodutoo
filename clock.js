

window.onload = function() {

  var clockContainer = document.getElementById("clock");
  console.log(clockContainer);
  clockContainer.innerHTML = getCurrentDateTime();

  window.setInterval(function(){
    clockContainer.innerHTML = getCurrentDateTime();
  }, 1000);

  window.addEventListener("keypress", function(e){
        console.log(e);
    });
    /*var body = document.getElementByTag("body");
    var bgBlack = document.getElementById("bgBlack");
    bgBlack.addEventListener("click", function(){
      body.setAttribute("bgcolor", "black");
    });*/
};

var getCurrentDateTime = function() {
  var currentDate = new Date();

  var hours = addZerobefore(currentDate.getHours());
  var minutes = addZerobefore(currentDate.getMinutes());
  var seconds = addZerobefore(currentDate.getSeconds());

  var dateString = hours + ":" + minutes + ":" + seconds;

  return dateString;
};

function addZerobefore(number) {
  if(number < 10) {
    number = "0" + number;
  }
  return number;
}
