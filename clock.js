"use strict";
window.onload = function () {

    function Clock() {

        // References to HTML.
        var clockHTML = document.getElementById("clock-display");
        var dateHTML = document.getElementById("date-display");


        // Date only returns the number, data is displayed with the lists.
        var week_names = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
        var month_names = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];


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
            return input < 10 ? "0" + input : input;
        };


        // Function to display time.
        var showTime = function () {
            // Time variables
            var date = new Date();
            var hour = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();

            clockHTML.innerHTML = (addZeroBefore(hour) + ":" + addZeroBefore(minutes) + ":" + addZeroBefore(seconds));
        };


        // Displays date once - automatically triggered.
        (function () {
            var date = new Date();
            var month_day = date.getDate();
            var month = date.getMonth();
            var week_day = date.getDay();
            dateHTML.innerHTML = month_day + ". " + month_names[month] + ", " + week_names[week_day] + ".";
            showTime(); // Avoids time-delay between HTML and time showing.
        })();


        // Uses the time-display function every second to display... the time.
        setInterval(function () {
            showTime();
        }, 1000);

    }

    function Background() {
        var background_images = ["102511.jpg", "thumb-192-223587.jpg", "wp1853050.jpg"];
        var counter = 0;

        window.addEventListener("keypress", function (e) {
            if (e.keyCode == 32) {
                document.body.style.backgroundImage = background_images[counter];
                counter++;
                if (counter == background_images.length) {
                    counter = 0;
                }
            }

        })

    }

    var clock = new Clock();
    var background = new Background();
};

