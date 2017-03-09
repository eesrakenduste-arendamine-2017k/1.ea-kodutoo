function changeColor() {
  var colors = ["yellow", "darkgreen", "darkred", "darkblue", "black"];
  var i = parseInt(Math.random()*(colors.length));
  document.getElementById("clock").style.color = colors[i];

}

function changeFont() {
  var fonts = ["Barrio, cursive", "Fjalla One", "Poiret One, cursive"];
  var s = parseInt(Math.random()*(fonts.length));
  document.getElementById("author").style["font-family"] = fonts[s];

}

function changeback() {
  var background = ["hsla(20, 100%, 60%, 0.5)", "hsla(400, 100%, 60%, 0.38)", "hsla(143, 37%, 64%, 0.38)"];
  var a = parseInt(Math.random()*(background.length));
  document.body.style.backgroundColor = background[a];

}
