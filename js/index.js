$(function() {
  setInterval(function() {
    var seconds = new Date().getTime() / 1000;
    var time = new Date(),
      hours = time.getHours(),
      min = time.getMinutes(),
      sec = time.getSeconds(),
      millSec = time.getMilliseconds(),
      millString = millSec.toString().slice(0, -2),
      day = time.getDay(),
      ampm = hours >= 12 ? 'PM' : 'AM',
      month = time.getMonth(),
      date = time.getDate(),
      year = time.getFullYear(),
      monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];



    //nulli lisamine minutile ja sekundile
    if (sec <= 9) sec = "0" + sec;
    if (min <= 9) min = "0" + min;

    $('#hours').text(hours);
    $('#min').text(":" + min + ":");
    $('#sec').text(sec);
    //$("#test").text(day);
    // $('#millSec').text(millString);
    $('.days:nth-child(' + (day + 1) + ')').addClass('active');
    $("#month").text(monthShortNames[month]);
    $('#date').text(date);
    $('#year').text(year);




  }, 100);




});
function myFunction()
{   
    var colors = ["green", "black","yellow","Blue","Orange"],
    selectedColor = colors[Math.floor(Math.random()*colors.length)]
    $("body").css("background-color", selectedColor);
}

function nameMove() {

  var top = Math.floor(Math.random() * 90);
  var bot = Math.floor(Math.random() * 90);
  var left = Math.floor(Math.random() * 90);
  var right = Math.floor(Math.random() * 90);
  var top_pos = top + "%";
  var bot_pos = bot + "%";
  var left_pos = left + "%";
  var right_pos = right + "%";
  console.log(top_pos, bot_pos, left_pos, right_pos);
  document.getElementById('name').style.position="absolute";
  document.getElementById("name").style.top=top_pos;
  document.getElementById("name").style.bottom=bot_pos;
  document.getElementById("name").style.left=left_pos;
  document.getElementById("name").style.right=right_pos;
}
