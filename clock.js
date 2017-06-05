window.onload = function(){

	var clockDiv = document.getElementById('clock');
	var dateDiv = document.getElementById('date');
	
	clockDiv.innerHTML = getCurrentDateTime();
	dateDiv.innerHTML = getCurrentDate();
	
	document.getElementById("author").addEventListener("click", function(){
	alert("Cleven Lehispuu");
	});
	
	window.setInterval(function(){
		clockDiv.innerHTML = getCurrentDateTime();
		party();
	}, 1000);
	
};


function party(){
	r=Math.round(Math.random()*255);
	g=Math.round(Math.random()*255);
	b=Math.round(Math.random()*255);

	document.getElementById('clock').style.background = 'rgba('+r+','+g+','+b+', 0.2)';
	console.log('rgba('+r+','+g+','+b+',0.4)');
};



var getCurrentDateTime = function(){
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

var  getCurrentDate = function(){
	var currentDate = new Date();

	var weekdays = currentDate.getDay();
	var days = currentDate.getDate();
	var months = currentDate.getMonth();

	switch(weekdays){
		case 0:
			weekdays="Pühapäev";
			break;
		case 1:
			weekdays="Esmaspäev";
			break;
		case 2:
			weekdays="Teisipäev";
			break;
		case 3:
			weekdays="Kolmapäev";
			break;
		case 4:
			weekdays="Neljapäev";
			break;
		case 5:
			weekdays="Reede";
			break;
		case 6:
			weekdays="Laupäev";
			break;

	}

	switch(months){
		case 0:
			months="Jaanuar";
			break;
		case 1:
			months="Veebruar";
			break;
		case 2:
			months="Märts";
			break;
		case 3:
			months="Aprill";
			break;
		case 4:
			months="Mai";
			break;
		case 5:
			months="Juuni";
			break;
		case 6:
			months="Juuli";
			break;
		case 7:
			months="August";
			break;
		case 8:
			months="September";
			break;
		case 9:
			months="Oktoober";
			break;
		case 10:
			months="November";
			break;
		case 11:
			months="Detsember";
			break;
	}
	var fullDate = weekdays+ ', ' + days + '. ' + months;

	return fullDate;
};