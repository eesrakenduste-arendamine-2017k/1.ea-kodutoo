Number.prototype.pad = function(n) {
	for (var r = this.toString(); r.length < n; r = 0 + r);
	return r;
};

function updateClock() {
	var now = new Date();
	sec = now.getSeconds(),
	min = now.getMinutes(),
	hou = now.getHours(),
	mo = now.getMonth(),
	dy = now.getDate(),
	yr = now.getFullYear();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var tags = ["mon", "d", "y", "h", "m", "s"],
	corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2)];
	for (var i = 0; i < tags.length; i++)
	document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
	updateClock();
	window.setInterval("updateClock()", 1);
}

//Clock font color
function white() {
    document.getElementById("timedate").style.color = "#ffffff";
}

function black() {
    document.getElementById("timedate").style.color = "#000000";
}

function gray() {
    document.getElementById("timedate").style.color = "#8c8c8c";
}

function blue() {
    document.getElementById("timedate").style.color = "#66b3ff";
}

function purple() {
    document.getElementById("timedate").style.color = "#b366ff";
}

//Clock fonts
function roboto() {
    document.getElementById("timedate").style.fontFamily = "Roboto,sans-serif";
}

function OpenSansCondensed() {
    document.getElementById("timedate").style.fontFamily = "Open Sans Condensed,sans-serif";
}

function Sacramento() {
    document.getElementById("timedate").style.fontFamily = "Sacramento,cursive";
}

function PTSerif() {
    document.getElementById("timedate").style.fontFamily = "PT Serif,serif";
}

function Inconsolata() {
    document.getElementById("timedate").style.fontFamily = "Inconsolata,monospace";
}

function Quicksand() {
    document.getElementById("timedate").style.fontFamily = "Quicksand,sans-serif";
}

function DancingScript() {
    document.getElementById("timedate").style.fontFamily = "Dancing Script,cursive";
}

function PoiretOne() {
    document.getElementById("timedate").style.fontFamily = "Poiret One,cursive";
}

//Clock font size

function size175() {
    document.getElementById("timedate").style.fontSize = "175px";
}

function size150() {
    document.getElementById("timedate").style.fontSize = "150px";
}

function size125() {
    document.getElementById("timedate").style.fontSize = "125px";
}

function size100() {
    document.getElementById("timedate").style.fontSize = "100px";
}

function size75() {
    document.getElementById("timedate").style.fontSize = "75px";
}

function size50() {
    document.getElementById("timedate").style.fontSize = "50px";
}

//Mute audio

var audio = document.getElementById('music');

document.getElementById('mute').addEventListener('click', function (e) {
	e = e || window.event;
	audio.muted = !audio.muted;
	e.preventDefault();
}, false);



