//aken laetud

window.onload = function(){
	
	var clockContainer = document.getElementById('clock');
	
	clockContainer.innerHTML = getCurrentDateTime();
	
	window.setInterval(function(){
		
		clockContainer.innerHTML = getCurrentDateTime();
	},1000
	
	);
}



var getCurrentDateTime = function(){
	var currentDate = new Date();
	
	var hours = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	var seconds = currentDate.getSeconds();
	
	var dateString = addZeroBefore(hours)+ ':' + addZeroBefore(minutes)+ ":" + addZeroBefore(seconds);
	
	return dateString;
}


function addZeroBefore(dateNumber) {
	
	if(dateNumber<10){
		
		dateNumber = '0'+dateNumber;
	}
	
	return dateNumber;
}

var i = 0;
function change() {
  var doc = document.getElementById("clock");
  var color = ["#F5A9BC", "#9FF781", "#BE81F7", "#F78181"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 1000);

var imageOffset = 50;
var increment = 5;
var windowWidth = window.innerWidth;
function moving_Image() {
	//console.log(document.getElementById("clock").style.left);
 if(parseInt(document.getElementById("clock").style.left)<10){
	increment = 5;
 }	
 
 if(parseInt(document.getElementById("clock").style.left)>100){
	increment = -5;
 }	
 
 
 

	 imageOffset = imageOffset+increment;
		 
	 document.getElementById("clock").style.left = imageOffset + "%";

}