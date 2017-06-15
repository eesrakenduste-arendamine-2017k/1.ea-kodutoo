window.onload = function(){

	var clockDiv = document.getElementById('clock');
	var dateDiv = document.getElementById('date');
	
	changeVideo();
	
	clockDiv.innerHTML = getCurrentDateTime();
	dateDiv.innerHTML = getCurrentDate();
	
	document.getElementById("author").addEventListener("click", function(){
	alert("Cleven Lehispuu");
	});
	
	document.getElementById("party").addEventListener("click", function(){
		
		if (document.getElementById('clock').style.background === ''){
			var partyInterval = window.setInterval(function(){party()}, 1000);
		}else{
			clearInterval(partyInterval);
			partyOff();
		}
	});

	window.setInterval(function(){
		clockDiv.innerHTML = getCurrentDateTime();
	}, 1000);
	
};


function party(){
	r=Math.round(Math.random()*255);
	g=Math.round(Math.random()*255);
	b=Math.round(Math.random()*255);

	document.getElementById('clock').style.background = 'rgba('+r+','+g+','+b+', 0.2)';
};

function partyOff(){
	document.getElementById('clock').style.background = '';
};



var getCurrentDateTime = function(){
   var currentDate = new Date();

   var hours = currentDate.getHours();
   var minutes = currentDate.getMinutes();
   var seconds = currentDate.getSeconds();

   var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);

   return dateString;
};

function changeVideo(){
	var currentDate = new Date();
	var hours = currentDate.getHours();
	
	var video = document.getElementById('vid');
	var source = document.getElementById('source');
	
	if(hours < 12){
		video.pause()
		source.setAttribute('src', 'liblikas.mp4');
		video.load();
		video.play();
	}
}

function addZeroBefore(dateNumber) {
   if (dateNumber < 10) {
       dateNumber = '0' + dateNumber;
   }

   return dateNumber;
};

var  getCurrentDate = function(){
	var currentDate = new Date();

	var day = currentDate.getDay();
	var date = currentDate.getDate();
	var month = currentDate.getMonth();

	switch(day){
		case 0:
			day="Pühapäev";
			break;
		case 1:
			day="Esmaspäev";
			break;
		case 2:
			day="Teisipäev";
			break;
		case 3:
			day="Kolmapäev";
			break;
		case 4:
			day="Neljapäev";
			break;
		case 5:
			day="Reede";
			break;
		case 6:
			day="Laupäev";
			break;
	}

	switch(month){
		case 0:
			month="jaanuar";
			break;
		case 1:
			month="veebruar";
			break;
		case 2:
			month="märts";
			break;
		case 3:
			month="aprill";
			break;
		case 4:
			month="mai";
			break;
		case 5:
			month="juuni";
			break;
		case 6:
			month="juuli";
			break;
		case 7:
			month="august";
			break;
		case 8:
			month="september";
			break;
		case 9:
			month="oktoober";
			break;
		case 10:
			month="november";
			break;
		case 11:
			month="detsember";
			break;
	}

	return day+ ', ' + date + '. ' + month;
};