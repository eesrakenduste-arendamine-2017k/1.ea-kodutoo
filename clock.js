function checkTime(i) {
    "use strict";
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

window.onload = function() {
    const secondP = document.getElementById('fixed');
    const text = secondP.innerText;
    const newText = text.split('').map(c => {
    const span = `<span>${c}</span>`;
    return span;
    }).join('');
    secondP.innerHTML = newText;
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
