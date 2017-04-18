window.onload = function() {
    const secondP = document.getElementById('fixed');
    const text = secondP.innerText;
    const newText = text.split('').map(c => {
    const span = `<span>${c}</span>`;
    return span;
    }).join('');
    secondP.innerHTML = newText;
}

var colors = ["#b8b894", "#6666ff", "#b3e6cc",
"#ffeee6", "#ff66a3", "#a6a6a6", "#cce6ff",
"#e8e8e8", "#3333ff", "#6699cc", "#ff3333",
"#ffff66", "#9fdfbf", "#ff471a", "#ffb84d",
"#ff6633", "#bfff80", "#ff8080", "#e6ff99"];

function changeColor() {
    "use strict";
    var col = document.getElementById("changecolor");
    col.style.backgroundColor = colors[Math.floor((Math.random()*19)+1)];
}

function checkTime(i) {
    "use strict";
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function dayToName(day) {
    "use strict";
    switch (day) {
        case 1:
            return "ESMASPÄEV";
        case 2:
            return "TEISIPÄEV";
        case 3:
            return "KOLMAPÄEV";
        case 4:
            return "NELJAPÄEV";
        case 5:
            return "REEDE";
        case 6:
            return "LAUPÄEV";
        case 7:
            return "PÜHAPÄEV";
        default:
            return 0;
    }
}

function startTime() {
    "use strict";
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var dt = today.getDate();
    var month = today.getMonth() + 1;
    var wd = today.getDay();

    month = checkTime(month);
    dt = checkTime(dt);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML = h + " : " + m + " : " + s;
    document.getElementById("dateAndDay").innerHTML = dt + "." + month + " " + dayToName(wd);
    var t = setTimeout(startTime, 500);
}

window.addEventListener('keyup', function(event){
    console.log(event.which);

    if(event.which == 68){
      document.body.style.backgroundColor ='#2a2e35';
    }

    if(event.which == 83 ){
      document.body.style.fontSize ='0.5em';
    }

    if(event.which == 77 ){
      document.body.style.fontSize ='1em';
    }

    if(event.which == 76 ){
      document.body.style.fontSize ='1.5em';
    }

    if(event.which == 37 ){
        document.getElementById("clock").style.left = '30%';
        document.getElementById("dateAndDay").style.left = '30%';
      }

    if(event.which == 39 ){
        document.getElementById("clock").style.left = '70%';
        document.getElementById("dateAndDay").style.left = '70%';
      }

    if(event.which == 40 ){
        document.getElementById("clock").style.left = '50%';
        document.getElementById("dateAndDay").style.left = '50%';
      }

});

