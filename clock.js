"use strict";
function Clock() {

    // References to HTML.
    var clockHTML = document.getElementById("clock-display");
    var dateHTML = document.getElementById("date-display");


    // Date only returns the number, data is displayed with the lists.
    var week_day = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
    var months = [];


    // Changes the color of the clock to one of the colors in the list.
    // When it reaches the end, it returns to the beginning of the list.
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


    // Print out the time and date data.
    setInterval(function () {
        // Date variables.
        var date = new Date();
        var month_day = date.getDate();
        var month = date.getMonth();
        var week_day = date.getDay();

        // Time variables
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();

        clockHTML.innerHTML = (addZeroBefore(hour) + ":" + addZeroBefore(minutes) + ":" + addZeroBefore(seconds));
        dateHTML.innerHTML = month_day + ".";
    }, 1000);
}


var clock = new Clock();