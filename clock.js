"use strict";
function Clock() {

    var addZeroBefore = function (input) {
        if (input < 10) {
            return "0" + input;
        } else {
            return input;
        }
    };

    setInterval(function () {
        var date = new Date();
        var hour = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        console.log(addZeroBefore(hour) + ":" + addZeroBefore(minutes) + ":" + addZeroBefore(seconds));
    }, 1000);
}


var clock = new Clock();