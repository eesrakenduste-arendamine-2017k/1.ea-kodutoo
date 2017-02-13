"use strict";

var currentColor = "blue";
function changeColor() { 
        if(currentColor == "blue"){ 
           document.getElementById("clock").style.color = "green";
           currentColor = "green";
        } 
        else if(currentColor == "green"){
           document.getElementById("clock").style.color = "red";
           currentColor = "red";
        }
        else if(currentColor == "red"){
            document.getElementById("clock").style.color = "blue";
            currentColor = "blue";
        }
    }