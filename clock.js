function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function dayToName(day) {
    switch (day) {
        case 1:
            return "Esmaspäev";
        case 2:
            return "Teisipäev";
        case 3:
            return "Kolmapäev";
        case 4:
            return "Neljapäev";
        case 5:
            return "Reede";
        case 6:
            return "Laupäev";
        case 7:
            return "Pühapäev";
        default:
            return 0;
    }
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    var kp = today.getDate();
    var kuu = today.getMonth() + 1;
    var np = today.getDay();

    kuu = checkTime(kuu);
    kp = checkTime(kp);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s + " Kuupäev: " + kp + "." + kuu + " Nädalapäev: " + dayToName(np);
    var t = setTimeout(startTime, 500);
}
