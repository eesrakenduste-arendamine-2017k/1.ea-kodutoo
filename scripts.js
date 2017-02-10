var pilt = 0;
var pildikood = new Array("pilt1.jpg", "pilt2.jpg", "pilt3.jpg", "pilt4.jpg", "pilt5.jpg");

function starting(){						 
//document.getElementById("taust").style.backgroundColor = pildikood[pilt]; 
document.getElementById("taust").style.backgroundImage = "url(" + pildikood[pilt] + ")";
}

function renderTime() {
	
	//kuupäev
	var mydate = new Date();
	var year = mydate.getFullYear();
	var day = mydate.getDay();
	var month = mydate.getMonth();
	var daym = mydate.getDate();
	var dayarray = new Array("Pühapäev,", "Esmaspäev,", "Teisipäev,", "Kolmapäev,", "Neljapäev,", "Reede,", "Laupäev,");
	var montharray = new Array("jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember");
	
	
	//aeg
	var currentTime = new Date();
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
	var s = currentTime.getSeconds();
	
		if(h==24) {
			h=0;
		} 
		else if(h > 12){
			h = h - 0;
		}
		
		if(h < 10) {
			h = "0" + h;
		}
		
		if(m < 10) {
			m = "0" + m;
		}
		
		if(s < 10) {
			s = "0" + s;
		}
		
		var myClock = document.getElementById("clockDisplay");
		
		myClock.textContent = "" + dayarray[day] + "\n " + daym + ". " + montharray[month] + " " + year + "\n  " + h + ":" + m + ":" + s;
		myClock.innerText = "" + dayarray[day] + "\n " + daym + ". " + montharray[month] + " " + year + "\n  " + h + ":" + m + ":" + s;
		
		setTimeout("renderTime()", 1000);
}
// change to arial
function changeFont() {
	document.getElementById("taust").style.fontFamily = "arial";
}
//change to  Impact
function changeFont2() {
	document.getElementById("taust").style.fontFamily = "Impact";
}
//change font to Courier New
function changeFont3() {
	document.getElementById("taust").style.fontFamily = "Courier New";
}



function changeNew(){
	pilt++;
	if(pilt > pildikood.length) {
		pilt = 0;
	}
	//document.getElementById("taust").style.backgroundColor = pildikood[pilt]; vana funktsioon taustavärvidega
	document.getElementById("taust").style.backgroundImage = "url(" + pildikood[pilt] + ")";
}

function changeBack() {
	pilt--;
	if(pilt < 0) {
		pilt = pildikood.length;
	}
	//document.getElementById("taust").style.backgroundColor = pildikood[pilt];	 vana funktsioon taustavärviga
	document.getElementById("taust").style.backgroundImage = "url(" + pildikood[pilt] + ")";
}

var currentSize = 80;


function fontSmaller () {
	if(currentSize <= 10){
		alert("Kella suurus on liiga väike!");
	}
	else {
	currentSize -= 7;
	document.getElementById("clockDisplay").style.fontSize = currentSize + "px"; 
	console.log(currentSize);
	}
}

function fontBigger() {
	if(currentSize >= 129){
		alert("Kella suurus on liiga suur!");
	} 
	else {
		currentSize += 7;
		document.getElementById("clockDisplay").style.fontSize = currentSize + "px";
		console.log(currentSize);
	}	
}






//var pildikood = new Array("#d3d3d3", "#bdbdbd", "#a8a8a8", "#939393", "#7e7e7e", "#545454", "#2a2a2a", "#151515", "#000000");
/*function starting(){						 
document.getElementById("taust").style.backgroundColor = pildikood[pilt];
} */


/*
document.getElementById("taust").style.backgroundColor = "#b3ff99";	

var pilt = 0;
var pildikood = new Array("#b3ff99", "#c2c2d6", "#b3cccc");
	function backgroundEdasi(){
		pilt = pilt+1;
		if (pilt > 2) {
			pilt = 0;
		}
		document.getElementById("taust").style.backgroundColor = pildikood[pilt];
		return pilt;
		
	}
	function backgroundTagasi() {
		pilt = pilt - 1;
		if (pildikood < 0) {
			pildikood = 2;
		}
		document.getElementById("taust").style.backgroundColor = pildikood[pilt;];
		return pilt;
	}
	
*/





//tasutapilt test
/*function changeImage(){
		document.body.background = "pilt1.jpg";
			}
*/


	
	
/*	
	//aeg
	var currenttime = new Date();
	var h = currentTime.getHours().toString();
	var m = currentTime.getMinutes().toString();
	var s = currentTime.getSeconds().toString();
	
		if(h==24) {
			h=0;
		} 
		else if(h > 12){
			h = h - 0;
		}
		
		if(h.length < 2) {
			h = "0" + h;
		}
		
		if(m.length < 2) {
			m = "0" + m;
		}
		
		if(s.length < 2) {
			s = "0" + s;
		}
		
		var myClock = document.getElementById("clockDisplay");
		
		myClock.textContent = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year + " | " + h + ":" + m + ":" + s;
		myClock.innerText = "" + dayarray[day] + " " + daym + " " + montharray[month] + " " + year + " | " + h + ":" + m + ":" + s;
		
		setTimeout("renderTime()", 1000);
}

renderTime();	
*/