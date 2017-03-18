(function(){
  "use strict";



var Clock = (function() {

    var exports = function(element) {
        this._element = element;
        var html = '';
        for (var i = 0; i < 6; i++) {
            html += '<span>&nbsp;</span>';
        }
        this._element.innerHTML = html;
        this._slots = this._element.getElementsByTagName('span');
        this._tick();
    };

    exports.prototype = {

        _tick: function() {
            var time = new Date();
            this._update(this._pad(time.getHours()) + this._pad(time.getMinutes()) + this._pad(time.getSeconds()));
            var self = this;
            setTimeout(function() {
                self._tick();
            }, 1000);
        },

        _pad: function(value) {
            return ('0' + value).slice(-2);
        },

        _update: function(timeString) {

            var i = 0,
                l = this._slots.length,
                value, slot, now;
            for (; i < l; i++) {

                value = timeString.charAt(i);
                slot = this._slots[i];
                now = slot.dataset.now;

                if (!now) {
                    slot.dataset.now = value;
                    slot.dataset.old = value;
                    continue;
                }

                if (now !== value) {
                    this._flip(slot, value);
                }
            }
        },

        _flip: function(slot, value) {

            // setup new state
            slot.classList.remove('flip');
            slot.dataset.old = slot.dataset.now;
            slot.dataset.now = value;

            // force dom reflow
            slot.offsetLeft;

            // start flippin
            slot.classList.add('flip');
        }
    };
    return exports;
}());

var i = 0,
    clocks = document.querySelectorAll('.clock'),
    l = clocks.length;
for (; i < l; i++) {
    new Clock(clocks[i]);
}


function typeWriter(text, n) {
    if (n < (text.length)) {
        $('.text').html(text.substring(0, n + 1));
        n++;
        setTimeout(function() {
            typeWriter(text, n)
        }, 80);
    } else {
        printJoke();
    }

}
var jokes = [
    "Two bytes meet.  The first byte asks, “Are you ill?”  The second byte replies, “No, just feeling a bit off.”",
    "Eight bytes walk into a bar.  The bartender asks, “Can I get you anything?” “Yeah,” reply the bytes.  “Make us a double.”",
    "Q. How did the programmer die in the shower? A. He read the shampoo bottle instructions: Lather. Rinse. Repeat.",
    "How many programmers does it take to change a light bulb? None – It’s a hardware problem",
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25.",
    "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
    "A programmer walks to the butcher shop and buys a kilo of meat.  An hour later he comes back upset that the butcher shortchanged him by 24 grams.",
    "“Knock, knock.” “Who’s there?” very long pause…. “Java.”",
    "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science.",
    "Programming is like sex: One mistake and you have to support it for the rest of your life.",
    "There are three kinds of lies: Lies, damned lies, and benchmarks.",
    "All programmers are playwrights, and all computers are lousy actors.",
    "Have you heard about the new Cray super computer?  It’s so fast, it executes an infinite loop in 6 seconds.",
    "The generation of random numbers is too important to be left to chance.",
    "“I just saw my life flash before my eyes and all I could see was a close tag…”",
    "The computer is mightier than the pen, the sword, and usually, the programmer."
];

function getRandomJoke() {

    var rand = Math.floor(Math.random() * 15) + 1;
    return rand;
}

function printJoke() {
    var randomJoke = getRandomJoke();
    typeWriter(jokes[randomJoke], 0);
}
$(document).ready(function() {

    var randomJoke = getRandomJoke();
    typeWriter(jokes[randomJoke], 0);

    $(".theme").click(function(){

        if($(this).data("theme") == "dark"){
          $(".clock, .button").removeClass("light");
          $(".clock, .button").addClass("dark");
        }
        if($(this).data("theme") == "light"){
          $(".clock, .button").removeClass("dark");
          $(".clock, .button").addClass("light");
        }
    });
    $(".position").click(function(){
      if($(this).data("position") == "right"){
        $(".clock").removeClass("left");
        $(".clock").addClass("right");
      }
      if($(this).data("position") == "left"){
        $(".clock").removeClass("right");
        $(".clock").addClass("left");
      }
    });
    $( ".toolsToggle" ).click(function() {
      $( "#tools" ).slideToggle( "fast", function() {
        // Animation complete.
      });
    });
});


var colors = new Array(
    [182, 216, 192], [254, 220, 186], [220, 247, 243], [255, 252, 221], [172, 206, 192], [218, 218, 189]);

var step = 0;

var colorIndices = [0, 1, 2, 3];

var gradientSpeed = 0.002;

function updateGradient() {

    if ($ === undefined) return;

    var c0_0 = colors[colorIndices[0]];
    var c0_1 = colors[colorIndices[1]];
    var c1_0 = colors[colorIndices[2]];
    var c1_1 = colors[colorIndices[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    $('body').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });

    step += gradientSpeed;
    if (step >= 1) {
        step %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //pick two new target color indices
        //do not pick the same as the current one
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

    }
}

setInterval(updateGradient, 10);

})();
