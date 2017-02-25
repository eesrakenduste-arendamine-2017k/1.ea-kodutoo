// Font size

function Small(){
  document.getElementById('clock').style.fontSize = "40px";
  document.getElementById('date').style.fontSize = "30px";
}

function Normal(){
  document.getElementById('clock').style.fontSize = "90px";
  document.getElementById('date').style.fontSize = "60px";
}

function Large(){
  document.getElementById('clock').style.fontSize = "120px";
  document.getElementById('date').style.fontSize = "70px";
}

// Font color

function changeBlue(){
  document.getElementById('clock').style.color = "#8967EF";
  document.getElementById('date').style.color = "#8967EF";
}

function changeGreen(){
  document.getElementById('clock').style.color = "#55C82E";
  document.getElementById('date').style.color = "#55C82E";
}

function changeRed(){
  document.getElementById('clock').style.color = "#F83D3D";
  document.getElementById('date').style.color = "#F83D3D";
}

function changeWhite(){
  document.getElementById('clock').style.color = "#FFFFFF";
  document.getElementById('date').style.color = "#FFFFFF";
}

// Background

function changeBackground(){
  if(document.body.className == "Background1"){
    document.body.className = "Background2";
  } else {
    document.body.className = "Background1";
  }
}

// Menu

function openNav(){
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "100px";
}

function closeNav(){
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
