startTime();

var audio = new Audio('clock.mp3');
audio.loop = true;
audio.play();

var dayNames = ["ESMPASPÄEV", "TEISIPÄEV", "KOLMAPÄEV", "NELJAPÄEV", "REEDE", "LAUPÄEV", "PÜHAPÄEV"];

var newDate = new Date();

var DateString = '';
for (var i = 0; i < 7; i++) {
  if (i == newDate.getDay()) {
    DateString += "<span class='clock__date--curr'>" + dayNames[i] + "</span> ";
  } else {
    DateString += "<span>" + dayNames[i] + "</span> ";
  }
}
$('.clock__date').html(DateString);

function startTime() {
  var today = new Date();
  var h = checkTime(today.getHours());
  var m = checkTime(today.getMinutes());
  var s = checkTime(today.getSeconds());

  var TimeString = h + ':' + m + ':' + s;
  TimeString = '<span>' + TimeString.split('').join('</span><span>') + '</span>';
  $('.clock__time').html(TimeString);

  var t = setTimeout(function() {
    startTime()
  }, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i
  };
  return i;
}

$('.clock-toogle').click(function() {
  $('body').toggleClass('dark');
});








