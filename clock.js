//aken laetud

window.onload = function(){

  var timeContainer = document.getElementById('time');

  timeContainer.innerHTML = getCurrentTime();
  window.setInterval(function(){
    timeContainer.innerHTML = getCurrentTime();
  }, 1000);

  var dateContainer = document.getElementById("date");

  dateContainer.innerHTML = getCurrentDate();
  window.setInterval(function(){
    dateContainer.innerHTML = getCurrentDate();
  }, 10000);

  var dayContainer = document.getElementById("day");

  dayContainer.innerHTML = getCurrentDay();
  window.setInterval(function(){
    dayContainer.innerHTML = getCurrentDay();
  }, 10000);

  //GAME CODE
  var canvas = document.getElementById("game");
  var ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth-50;
  canvas.height = window.innerHeight/4;

  var clockElement = document.getElementById("timepackage");
  var clockPos = window.innerWidth/2 - window.innerWidth/8;
  var stringPos = clockPos + "px";
  clockElement.style.left = stringPos;
  var CSS_COLOR_NAMES = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
  var player = {
    speed: 5,
    x: canvas.width/2,
    y: 90,
    canJump: true,
    imgPlayer: new Image()
  };
  var rainbow = {
    x: canvas.width/3,
    y: 10,
    imgRainbow: new Image()
  };
  var left = {
    x: canvas.width - ((canvas.width/2.5)),
    y: 11.5,
    imgLeft: new Image()
  };
  var right = {
    x: canvas.width - (canvas.width/3),
    y: 10,
    imgRight: new Image()
  };
  player.imgPlayer.src = "sprites/clockface.png";
  rainbow.imgRainbow.src = "sprites/rainbow.png";
  right.imgRight.src = "sprites/right.png";
  left.imgLeft.src = "sprites/left.png";

  var keysDown = {};
  addEventListener("keydown", function (e){
    keysDown[e.keyCode] = true;
  }, false);
  addEventListener("keyup", function (e){
    delete keysDown[e.keyCode];
  }, false);

  var FPS = 60;
  var jumpTimer = 0;
  var touchTimer = 0;
  var canTouch = true;
  setInterval(function() {
    update();
    render();
  }, 1000/FPS);

  var update = function() {
    if(37 in keysDown || 65 in keysDown){
      player.x -= player.speed;
    }
    if(39 in keysDown || 68 in keysDown){
      player.x += player.speed;
    }
    if(38 in keysDown && player.canJump || 87 in keysDown && player.canJump){
      player.canJump = false;
      jumpTimer += 20;
    }
    if(!player.canJump && jumpTimer > 10 ){
      player.y -= 5;
      jumpTimer -= 1;
    }else if(!player.canJump && jumpTimer>0){
      player.y += 5;
      jumpTimer -= 1;
    }else if(!player.canJump && jumpTimer <= 0){
      player.canJump = true;
      jumpTimer = 0;
    }
    if(
      canTouch &&
      player.x+54 >= (rainbow.x) &&
      player.x+54 <= (rainbow.x+rainbow.imgRainbow.width) &&
      player.y <= (rainbow.y + 30)
    ){
      canTouch = false;
      touchTimer += 20;
      document.body.style.backgroundColor = CSS_COLOR_NAMES[Math.round(Math.random()*(CSS_COLOR_NAMES.length-1))];
    }
    if(
      canTouch &&
      player.x+54 >= (left.x) &&
      player.x+54 <= (left.x+left.imgLeft.width) &&
      player.y <= (left.y + 30)
    ){
      canTouch = false;
      touchTimer += 20;
      clockPos -= 50;
      stringPos = clockPos + 'px';
      clockElement.style.left = stringPos;
    }
    if(
      canTouch &&
      player.x+54 >= (right.x) &&
      player.x+54 <= (right.x+right.imgRight.width) &&
      player.y <= (right.y + 30)
    ){
      canTouch = false;
      touchTimer += 20;
      clockPos += 50;
      stringPos = clockPos + 'px';
      clockElement.style.left = stringPos;
    }
    if(touchTimer > 0){
      touchTimer -= 1;
    }else if(touchTimer <= 0){
      canTouch = true;
    }
  };

  var render = function (){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      ctx.drawImage(rainbow.imgRainbow, rainbow.x, rainbow.y);
      ctx.drawImage(right.imgRight, right.x, right.y);
      ctx.drawImage(left.imgLeft, left.x, left.y);
      ctx.drawImage(player.imgPlayer, player.x, player.y);
  };
};

var getCurrentTime = function(){
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  var timeString = addZeroBefore(hours) + ":" + addZeroBefore(minutes) + ":" + addZeroBefore(seconds);

  return timeString;
};
function addZeroBefore(dateNumber){
  if(dateNumber < 10){
    dateNumber = '0' + dateNumber;
  }
  return dateNumber;
}
var getCurrentDate = function(){
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth();
  var dateString = day + "." + month;
  return dateString;
};
var getCurrentDay = function(){
  var day = "";
  switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
  }
  return day;
};
