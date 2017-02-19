var playaudio = document.getElementById("playaudio");
var audio = new Audio('neverygongivyaup.mp3');

playaudio.onclick = function playPause(){
		if(audio.paused){
		    audio.play();
			playaudio.innerHTML = "Playing";
	    } else {
		    audio.pause();
			playaudio.innerHTML = "Paused";
	    }
	};

function colorFireBrick() {
    document.getElementById('clock').style.color = 'FireBrick';
};
function colorDarkSlateGray() {
    document.getElementById('clock').style.color = 'DarkSlateGray';
};
function colorGoldenRod() {
    document.getElementById('clock').style.color = 'GoldenRod';
};
function colorMidnightBlue() {
    document.getElementById('clock').style.color = 'MidnightBlue';
};
function colorNavajoWhite() {
    document.getElementById('clock').style.color = 'NavajoWhite';
};
function colorBlack() {
    document.getElementById('clock').style.color = 'Black';
};

function fontDefault() {
    document.getElementById("clock").style.fontSize = "2000%";
};

function fontAldrich() {
    document.getElementById("clock").style.fontFamily = "Aldrich, cursive";
};
function fontArbutus() {
    document.getElementById("clock").style.fontFamily = "Arbutus, sans-serif";
};
function fontImpact() {
    document.getElementById("clock").style.fontFamily = "Impact, sans-serif";
};
function fontTahoma() {
    document.getElementById("clock").style.fontFamily = "Tahoma, sans-serif";
};
function fontVerdana() {
    document.getElementById("clock").style.fontFamily = "Verdana, sans-serif";
};
function fontOldenburg(){ 
    document.getElementById("clock").style.fontFamily = "Oldenburg, monospace";
};
