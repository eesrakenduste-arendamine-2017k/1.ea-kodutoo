window.onload = function(){

    var clockContainer = document.getElementById('clock');
	var dateContainer = document.getElementById('date');

    clockContainer.innerHTML = getCurrentTime();
	dateContainer.innerHTML = getCurrentDate();
    window.setInterval(function(){
		
        clockContainer.innerHTML = getCurrentTime();
		dateContainer.innerHTML = getCurrentDate();
		clockTransformEvent();
		document.addEventListener("click", changeBackground);
	
    }, 1000);

};

//shift+left/right arrow = zoom in/out
//up/down/left/right = move clock
function clockTransformEvent(){
	
	var clockContainer = document.getElementById('clock');
	var dateContainer = document.getElementById('date');
	var allContainer = document.getElementById('container');
	var posX = allContainer.style.left;
	var posY = allContainer.style.top;
	var clockStyle = window.getComputedStyle(clockContainer, null).getPropertyValue('font-size');
	var dateStyle = window.getComputedStyle(dateContainer, null).getPropertyValue('font-size');
	var clockFontSize = parseFloat(clockStyle);
	var dateFontSize = parseFloat(dateStyle);
	document.addEventListener('keydown', function(event) {
		if(event.keyCode == 37 && event.shiftKey == true) {
			clockFontSize -= 10;
			dateFontSize -= 10;
			clockContainer.style.fontSize = clockFontSize+"px";
			dateContainer.style.fontSize = dateFontSize+"px";
		}
		else if(event.keyCode == 39 && event.shiftKey == true) {
			clockFontSize += 10;
			dateFontSize += 10;
			clockContainer.style.fontSize = clockFontSize+"px";
			dateContainer.style.fontSize = dateFontSize+"px";
		}
		else if(event.keyCode == 37){
			posX = Number(posX) - 10;
			allContainer.style.left = posX+"px";
		}
		else if(event.keyCode == 39){
			posX = Number(posX) + 10;
			allContainer.style.left = posX+"px";
		}
		else if(event.keyCode == 38){
			posY = Number(posY) - 10;
			allContainer.style.top = posY+"px";
		}
		else if(event.keyCode == 40){
			posY = Number(posY) + 10;
			allContainer.style.top = posY+"px";
		}
	})
	
};

//Change background if clicked element has parent element with id 'colors'
function changeBackground(e){
	var body = document.getElementsByTagName("BODY")[0];
	var target = e.target
	if(target.parentElement.getAttribute('id') == "colors"){
		body.style.backgroundColor = target.style.backgroundColor;
	}
};

function createColors(){
	
	var x = document.getElementById('colors');
	if(!x.hasChildNodes()){
		for(var i=0;i<=255;i+=55){
			
			var div = document.createElement("div");
			div.style.width = "20px";
			div.style.height = "20px";
			div.style.backgroundColor = "rgb("+i+", 0, 0)";
			div.style.cssFloat = "left";
			div.style.border = "solid black";
			document.getElementById("colors").appendChild(div);
			
			div = document.createElement("div");
			div.style.width = "20px";
			div.style.height = "20px";
			div.style.backgroundColor = "rgb(255, "+i+", 0)";
			div.style.cssFloat = "left";
			div.style.border = "solid black";
			document.getElementById("colors").appendChild(div);
			
			div = document.createElement("div");
			div.style.width = "20px";
			div.style.height = "20px";
			div.style.backgroundColor = "rgb(255, 255, "+i+")";
			div.style.cssFloat = "left";
			div.style.border = "solid black";
			document.getElementById("colors").appendChild(div);

			div = document.createElement("div");
			div.style.width = "20px";
			div.style.height = "20px";
			div.style.backgroundColor = "rgb(0, "+i+", "+i+")";
			div.style.cssFloat = "left";
			div.style.border = "solid black";
			document.getElementById("colors").appendChild(div);
		}

	}
	x = document.getElementById('colors');
	if(x.style.display === 'none'){
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
	
};

var getCurrentDate = function(){

	var currentDate = new Date();
	var day = currentDate.getDay();
	var date = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	var weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var dateString = weekDays[day] + " " + date + "/" + month + "/" + year;
	
	return dateString;
};

var getCurrentTime = function(){
    var currentDate = new Date();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();

    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);
		
    return dateString;
};

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
};