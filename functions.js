var currentColor = "darkblue";

function changeColor() {
    "use strict";
    if (currentColor === "darkblue") {
        document.getElementById("clock").style.color = "green";
        currentColor = "green";
    } else if (currentColor === "green") {
        document.getElementById("clock").style.color = "red";
        currentColor = "red";
    } else if (currentColor === "red") {
        document.getElementById("clock").style.color = "darkblue";
        currentColor = "darkblue";
    }
}

var currentFont = "'Audiowide', cursive";
function changeFont() {
    "use strict";
    if (currentFont === "'Audiowide', cursive") {
        document.getElementById("AuthorName").style["font-family"] = "'Barrio', cursive";
        currentFont = "'Barrio', cursive";
    } else if (currentFont === "'Barrio', cursive") {
        document.getElementById("AuthorName").style["font-family"] = "'Fjalla One', sans-serif";
        currentFont = "'Fjalla One', sans-serif";
    } else if (currentFont === "'Fjalla One', sans-serif") {
        document.getElementById("AuthorName").style["font-family"] = "'Audiowide', cursive";
        currentFont = "'Audiowide', cursive";
    }
}

function togglePlay() {
    "use strict";
    return document.getElementById("myAudio").paused ? document.getElementById("myAudio").play() : document.getElementById("myAudio").pause();
}