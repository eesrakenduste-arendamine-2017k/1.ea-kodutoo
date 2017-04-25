var handH;
var handM;
var handS;

window.onload = function(){
	handH = document.getElementById("hourH");
	handM = document.getElementById("minuteH");
	handS = document.getElementById("secondH");
	ticTac();
	//setInterval(ticTac, 1000);
}

function ticTac(){
	var timeNow = new Date();
	var hour = timeNow.getHours();
	var minute = timeNow.getMinutes();
	var second = timeNow.getSeconds();
	
	//keeran sekundiseierit
	handS.style.transform = "rotate(" + (second * 6) + "deg)";
	
	handM.style.transform = "rotate(" + (minute * 6 + second / 10) + "deg)";
	handH.style.transform = "rotate(" + (hour * 30 + minute / 2) + "deg)";
	
	requestAnimationFrame(ticTac);//setTimeOut(ticTac, 1000/60);
}