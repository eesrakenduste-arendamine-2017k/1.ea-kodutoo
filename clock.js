/*
CLOCK.JS
The backbone of the homework, pretty procedural in nature,
the object-oriented part of the homework is provided by
PARTICLES.JS, which manages the particles shown on the screen.
*/

var prevSeconds;
var menuOpen;
var menuID;
var menuButton;
var menuContent;
var blurArea;
var mainClock;
var mainDate;
var menuOptions;
var menuAbout;
var menuZones;
var menuMain;
var allowMenu = true;
var timerMax = 60*5;
var timerCurrent;
var lastDate;
var framesPS = 0;
var prevFPS = 20;
var minParticles = 20;
var maxParticles = 900;
var startParticles = 600;
var currentParticles;
var minFPS = 35;
var loopTimer = 20; //20
var optionBG;
var optionparticles;

function startUp() {
  menuID = document.getElementById("guide_menu");
  menuButton = document.getElementById("guide_text");
  menuContent = document.getElementById("menu_contents");
  blurArea = document.getElementById("blurarea");
  mainClock = document.getElementById("time");
  mainDate = document.getElementById("date");
  menuOptions = document.getElementById("options");
  menuAbout = document.getElementById("about");
  menuZones = document.getElementById("timezones");
  menuMain = document.getElementById("mainmenu");
  menuWarning = document.getElementById("menu_warning");
  fpsOutput = document.getElementById("fps");
  optionBG = document.getElementById("option_bg");
  optionparticles = document.getElementById("option_particles");
  optionfgcolor = document.getElementById("option_textc");
  optionparticles.innerHTML = "ON";
  optionBG.innerHTML = "ON";
  optionfgcolor.innerHTML = "OFF";
  menu("main");
  //alert("I done did it");
  particles_setUp(startParticles);
  currentParticles = startParticles;
  lastDate = new Date();
  startScript();
}

function menu(location) {
  menuMain.style.opacity = "0";
  menuAbout.style.opacity = "0";
  menuZones.style.opacity = "0";
  menuOptions.style.opacity = "0";
  menuMain.style.display = "none";
  menuAbout.style.display = "none";
  menuZones.style.display = "none";
  menuOptions.style.display = "none";
  menuWarning.style.opacity = "0";
  switch (location) {
    case "options":
    menuOptions.style.display = "block";
    menuOptions.style.opacity = "1";
    //menuOptions.style.opacity = 1;
    break;
    case "about":
    menuAbout.style.display = "block";
    menuAbout.style.opacity = "1";
    break;
    case "zones":
    menuZones.style.display = "block";
    menuZones.style.opacity = "1";
    break;
    case "main":
    menuMain.style.display = "block";
    menuMain.style.opacity = "1";
    break;
  }
}

function toggleMenu() {
  if (allowMenu)
  {
    if (menuOpen) {
    menuOpen = false;
    menuButton.innerHTML = "keyboard_arrow_up";
    menuID.style.height = "";
    menuID.style.background = "";
    menuContent.style.display = "none";
    mainClock.style.opacity = "1";
    mainDate.style.opacity = "1";
    menu("main");
  } else {
    menuOpen = true;
    menuButton.innerHTML = "keyboard_arrow_down";
    menuID.style.height = "100%";
    menuID.style.background = "rgba(255,255,255,0.75)";
    menuContent.style.display = "block";
    mainClock.style.opacity = "0";
    mainDate.style.opacity = "0";
  }
} else {
  timerCurrent = timerMax;
}
}

function startScript() {
  requestAnimationFrame(startScript);
  var currentDate = new Date();
  var clockf = mainClock;
  var datef = mainDate;
  if (prevSeconds !== currentDate.getSeconds()) {
    clockf.innerHTML = timestring();
    datef.innerHTML = datestring();
  }
  var debug = false;
  if (debug) {
    datef.innerHTML = currentDate.getSeconds() + "<br>" + prevSeconds;
  }
  prevSeconds = currentDate.getSeconds();
  if (timerCurrent > 0) {
    menuWarning.style.opacity = "1";
    timerCurrent = timerCurrent - 1;
  }
  if (timerCurrent < 1) {
    menuWarning.style.opacity = "0";
  }
  prevFPS = parseInt(framesPS);
  framesPS = parseInt(Math.floor(1000/(currentDate - lastDate)));
  if (isNaN(prevFPS) === false) {framesPS = (framesPS + prevFPS) / 2;}
  if (optionparticles.innerHTML == "ON") {particles_Render();}
  lastDate = currentDate;
  optimize();
  fpsOutput.innerHTML = framesPS + " <br> " + currentParticles;
}

/*var to = setInterval(function() {
  startScript();
}, loopTimer);*/

function optimize() {
  if (framesPS < minFPS - 2 && currentParticles > minParticles) {
    particles_remove();
    currentParticles -= 1;
  }
  if (framesPS > minFPS + 3 && currentParticles < maxParticles) {
    particles_add();
    currentParticles += 1;
  }
}

function timestring() {
  var current = new Date();
  var hr = format(current.getHours());
  var min = format(current.getMinutes());
  var sec = format(current.getSeconds());
  BgMan(current.getHours());
  return hr + ":" + min + ":" + sec;
}

function format(input) {
  var out = "";
  if (input < 10) {
    out = "0" + input;
  } else {
    out = input;
  }
  return out;
}



function datestring() {
  var current = new Date();
  var day = format(current.getDate());
  var workday = "";
  switch (current.getDay()) {
    case 0:
      workday = "pühapäev";
      break;
    case 1:
      workday = "esmaspäev";
      break;
    case 2:
      workday = "teisipäev";
      break;
    case 3:
      workday = "kolmapäev";
      break;
    case 4:
      workday = "neljapäev";
      break;
    case 5:
      workday = "reede";
      break;
    case 6:
      workday = "laupäev";
      break;
  }
  var month = "";
  switch (current.getMonth()) {
    case 11:
      month = "detsember";
      break;
    case 0:
      month = "jaanuar";
      break;
    case 1:
      month = "veebruar";
      break;
    case 2:
      month = "märts";
      break;
    case 3:
      month = "aprill";
      break;
    case 4:
      month = "mai";
      break;
    case 5:
      month = "juuni";
      break;
    case 6:
      month = "juuli";
      break;
    case 7:
      month = "august";
      break;
    case 8:
      month = "september";
      break;
    case 9:
      month = "oktoober";
      break;
    case 10:
      month = "november";
      break;
  }
  var year = current.getFullYear();
  return workday + ", " + day + ". " + month + " " + year;
}

function BgMan(input) {
  if (optionBG.innerHTML == "ON") {
  var date = new Date();
  var currentHour = date.getHours();
  switch (currentHour) {
    case 0:
    case 1:
    case 2:
    case 3:
      document.body.style.backgroundColor = "rgb(49,27,27)";
      break;
    case 4:
    case 5:
    case 6:
    case 7:
      document.body.style.backgroundColor = "rgb(26, 87, 101)";
      break;
    case 8:
    case 9:
    case 10:
    case 11:
      document.body.style.backgroundColor = "rgb(3,167,175)";
      break;
    case 12:
    case 13:
    case 14:
    case 15:
      document.body.style.backgroundColor = "rgb(255,120,1)";
      break;
    case 16:
    case 17:
    case 18:
    case 19:
      document.body.style.backgroundColor = "rgb(225,1,80)";
      break;
    case 20:
    case 21:
    case 22:
    case 23:
      document.body.style.backgroundColor = "rgb(138,1,78)";
      break;
  }
} else {document.body.style.backgroundColor = "rgb(3,167,175)";}
}

function getReadableState(value) {
  if (value) {
    return "ON";
  } else if (!value) {
    return "OFF";
  }
}

function setDefaultOptions() {

}

function changeOption(value) {
  switch (value) {
    case "bg.time":
    if (optionBG.innerHTML == "ON") {
      optionBG.innerHTML = "OFF";
    } else {
      optionBG.innerHTML = "ON";
    }
    break;
    case "bg.particles":
    if (optionparticles.innerHTML == "ON") {
      optionparticles.innerHTML = "OFF";
      document.getElementById("mainCanvas").style.display = "none";
      if (currentParticles > 0) {
        particlesUpdateAllowed = false;
      }
    } else {
      optionparticles.innerHTML = "ON";
      document.getElementById("mainCanvas").style.display = "block";
      particlesUpdateAllowed = true;
  }
    break;
    case "fg.color":
      if (optionfgcolor.innerHTML == "ON") {
        optionfgcolor.innerHTML = "OFF";
        mainClock.style.color = "snow";
        mainDate.style.color = "snow";
        return true;
      } else {
        optionfgcolor.innerHTML = "ON";
        mainClock.style.color = "rgb(60, 60, 60)";
        mainDate.style.color = "rgb(60, 60, 60)";
        return true;
      }
    break;
  }

}
