var valueCounter = {
  "time": 0,
  "date": 0,
  "font": 0
};

var color = color;


// aken laetud
window.onload = function(){

  var timeContainer = document.getElementById('time');
  console.log(timeContainer);

  // kohe kirjutame ka kellaaja
  timeContainer.innerHTML = getCurrentTime();

  window.setInterval(function(){
    timeContainer.innerHTML = getCurrentTime();
  }, 1000);

  var dateContainer = document.getElementById('date');
  console.log(dateContainer);

  dateContainer.innerHTML = getCurrentDate();
  
  window.setInterval(function(){
    dateContainer.innerHTML = getCurrentDate();
  }, 1000);




  window.addEventListener("click", function(e) {
    console.log(e);
      if(e.target.nodeName == "HTML" || e.target.id == "container" || e.target.nodeName == "BODY"){
        changeBackground();
      }
  });

  time.addEventListener("click", function() {changeValue(colors, time, "time");} );
  date.addEventListener("click", function() {changeValue(colors, date, "date");} );

  clock.addEventListener("mouseover", function() {showDispaly(clock);} );
  clock.addEventListener("mouseout", function() {hideDispaly(clock);} );

  time.addEventListener("mouseover", function() {pointer(time);} );
  date.addEventListener("mouseover", function() {pointer(date);} );

  author.addEventListener("click", function() {changeFont("font");} );
  author.addEventListener("mouseover", function() {pointer(author);} );
  author.addEventListener("mouseover", function() {showDispaly(author);} );
  author.addEventListener("mouseout", function() {hideDispaly(author);} );

};



var colors =["blue", "maroon", "red", "orange", "yellow", "green", "lime", "white"];
var backgroundImages = ["url(backgrounds/1.jpg)", "url(backgrounds/2.png)", "url(backgrounds/3.png)", "url(backgrounds/4.png)", "url(backgrounds/5.png)", "url(backgrounds/6.png)", "url(backgrounds/7.png)",
"url(backgrounds/8.png)", "url(backgrounds/9.jpg)", "url(backgrounds/10.jpg)", "url(backgrounds/11.png)", "url(backgrounds/13.png)", "url(backgrounds/16.png)",
"url(backgrounds/17.png)", "url(backgrounds/19.png)", "url(backgrounds/22.png)", "url(backgrounds/23.png)", "url(backgrounds/24.png)", "url(backgrounds/25.png)",
"url(backgrounds/26.png)", "url(backgrounds/27.png)", "url(backgrounds/28.png)"];

var fonts = ['Special Elite', 'myFirstFont', 'myFirstBoldFont', 'Iceland', 'VT323', 'Codystar', 'Graduate', 'Sancreek', 'Stint Ultra Expanded', 'Orbitron', 'Monoton', 'Fontdiner Swanky', 'Diplomata SC', 'Rock Salt', 'Domine'];



var counter = 0;

function changeBackground() {

  console.log("siin");

  for(var i=0; i<backgroundImages.length; i++);
    document.body.style.backgroundImage = backgroundImages[counter];
    counter += 1;
    if (counter == backgroundImages.length) {
      counter = 0;
    }
}

function changeValue(list, object, type) {
  for(var i=0; i<list.length; i++);
    object.style.color = list[valueCounter[type]];
    valueCounter[type] += 1;
    if (valueCounter[type] == list.length) {
      valueCounter[type] = 0;
    }
}

function changeFont(type) {
  for(var i=0; i<fonts.length; i++);
    container.style.fontFamily = fonts[valueCounter[type]];
    valueCounter[type] += 1;
    if (valueCounter[type] == fonts.length) {
      valueCounter[type] = 0;
    }
}

function showDispaly(object) {
  object.style.backgroundColor = "black";
}

function hideDispaly(object) {
  object.style.backgroundColor = "transparent";
}

function pointer(object) {
  object.style.cursor = "pointer";
}



var months = ['jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];
var weekdays =['pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev'];

var getCurrentTime = function(){
  var currentDate = new Date();

  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();

  var timeString = addZeroBefore(hours) + ':' + addZeroBefore(minutes);

  return timeString;
};

var getCurrentDate = function(){
  var currentDate = new Date();

  var day = currentDate.getDay();
  var date = currentDate.getDate();
  var month = currentDate.getMonth();
  var year = currentDate.getFullYear();

  var dateString = weekdays[day] + ', ' + date + '. ' + months[month] + ' ' + year;

  return dateString;
};

function addZeroBefore(number) {
  if (number < 10) {
    number = '0' + number;
  }

  return number;
}

