"use strict";
function Clock() {

    // Changes the color of the clock to one of the colors in the list.
    // When it reaches the end, it returns to the beginning of the list.
    var clockHTML = document.getElementById("clock-display");   // Reference to the HTML that displays the clock.
    var colors = ["red", "blue", "purple", "black"];
    var counter = 0;
    clockHTML.addEventListener("click", function () {
        clockHTML.style.color = colors[counter];
        counter++;
        if (counter == colors.length) {
            counter = 0;
        }
    });


    // Adds a zero before the time.
    var addZeroBefore = function (input) {
        if (input < 10) {
            return "0" + input;
        } else {
            return input;
        }
    };


    // Print out the time.
    setInterval(function () {
        var date = new Date();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        clockHTML.innerHTML = (addZeroBefore(hour) + ":" + addZeroBefore(minutes) + ":" + addZeroBefore(seconds));
    }, 1000);
}


var clock = new Clock();