"use strict";

var currentColor = "darkblue";
function changeColor() { 
    if(currentColor == "darkblue"){ 
       document.getElementById("clock").style.color = "green";
       currentColor = "green";
    } 
    else if(currentColor == "green"){
       document.getElementById("clock").style.color = "red";
       currentColor = "red";
    }
    else if(currentColor == "red"){
        document.getElementById("clock").style.color = "darkblue";
        currentColor = "darkblue";
    }
}

var currentFont = "'Audiowide', cursive";
function changeFont() {
    if(currentFont == "'Audiowide', cursive"){
        document.getElementById("AuthorName").style["font-family"] = "'Barrio', cursive";
        currentFont = "'Barrio', cursive";
    }
    else if(currentFont == "'Barrio', cursive"){
        document.getElementById("AuthorName").style["font-family"] = "'Fjalla One', sans-serif";
        currentFont = "'Fjalla One', sans-serif";
    }

    else if(currentFont == "'Fjalla One', sans-serif"){
        document.getElementById("AuthorName").style["font-family"] = "'Audiowide', cursive";
        currentFont = "'Audiowide', cursive";
    }


}