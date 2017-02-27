window.onload = function(){

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
}

// kellaaeg

$(document).ready(function() {
				var clock = setInterval("getTime()",1000);
			});

				function getTime() {

					var secChange;
					var minChange;
					var hourChange;

					var tget = new Date();

					var seconds = tget.getSeconds();
					var minutes = tget.getMinutes();
					var hours = tget.getHours();

						hours = ((hours > 12) ? hours - 12 : hours);
						if (seconds === 0){
							secChange = 0;
						} else {
							secChange = seconds*6;
						}
						if (minutes === 0){
							minChange = 0;
						} else {
							minChange = minutes*6;
						}
						if (hours === 12){
							hourChange = 0;
						} else {
							hourChange = (hours*30) + (minutes/2);
						}
							var secArrow = "rotate(" + secChange + "deg)";
						$(".seconds").css({"-webkit-transform" : secArrow, "-moz-transform" : secArrow, "-o-transform" : secArrow, "-ms-transform" : secArrow, "transform" : secArrow});
							var minArrow = "rotate(" + minChange + "deg)";
						$(".minutes").css({"-webkit-transform" : minArrow, "-moz-transform" : minArrow, "-o-transform" : minArrow, "-ms-transform" : minArrow, "transform" : minArrow});
							var hourArrow = "rotate(" + hourChange + "deg)";
						$(".hours").css({"-webkit-transform" : hourArrow, "-moz-transform" : hourArrow, "-o-transform" : hourArrow, "-ms-transform" : hourArrow, "transform" : hourArrow});
				}

				// tausta muutmine vajutades background peale

				$(document).ready(function(){
				    var currentBackground = 0;

				    $("#knapp").click(function() {
				        removeAllBgClasses();
				        currentBackground = (currentBackground +1) % 4;
				        $('body').addClass("bg-"+currentBackground);
				    });


				    function removeAllBgClasses() {
				        $('body').removeClass("bg-0 bg-1 bg-2 bg-3");
				    }
				})

//kuupäev koos päeva nimetusega ja kuu nimetusega

  (function() {

  var current = new Date();

  var hours_hand = document.getElementById('hours'),
    minutes_hand = document.getElementById('minutes'),
    seconds_hand = document.getElementById('seconds'),
    d = document.getElementById('d'),
    m = document.getElementById('m'),
    y = document.getElementById('y');

  var DaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



  function display_date(moment) {

    var dayOfWeek = moment.getDay(),
      month = moment.getMonth(),
      year = moment.getFullYear(),
      day = moment.getDate();

    dayOfWeek = DaysOfWeek[dayOfWeek];
      month = Months[month];

    switch (day) {
      case 1:
        day = day + "st";
        break;
      case 2:
        day = day + "nd";
        break;
      case 3:
        day = day + "rd";
        break;
      case 21:
        day = day + "st";
        break;
      case 22:
        day = day + "nd";
        break;
      case 23:
        day = day + "rd";
        break;
      case 31:
        day = day + "st";
        break;
      default:
        day = day + "th";
    }

    d.innerHTML = dayOfWeek;
    m.innerHTML = day + " " + "of" + " " + month;
    y.innerHTML = year;

  }

  display_date(current);


  window.setInterval(function() {

    var now = new Date();

    clock(now);
    display_date(now);

  }, 1000);

});

//muudab teksti värvi vajutades tekstile

function myFunctiondmy() {
    var color = document.getElementById('dmy').style.color;
    if (color == "white")
        document.getElementById('dmy').style.color="#353241";
    else
        document.getElementById('dmy').style.color="white";
}
document.getElementById('dmy').onclick = function(e){
    myFunctiondmy();

};

function myFunctionname() {
    var color = document.getElementById('name').style.color;
    if (color == "white")
        document.getElementById('name').style.color="#353241";
    else
        document.getElementById('name').style.color="white";
}
document.getElementById('name').onclick = function(e){
    myFunctionname();

};

function myFunctiongreeting() {
    var color = document.getElementById('greeting').style.color;
    if (color == "white")
        document.getElementById('greeting').style.color="#353241";
    else
        document.getElementById('greeting').style.color="white";
}
document.getElementById('greeting').onclick = function(e){
    myFunctiongreeting();

};


// teksti suuruse muutmine (ainult autori tekst)

function AuthorSize() {
var sizeTimeValue = document.getElementById("sizeAuthor").value;
  document.getElementById("name").style.fontSize = sizeTimeValue + "px";
}
