
// aken laetud
window.onload = function(){

    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);
	var dateContainer = document.getElementById('date');
	console.log(dateContainer);
	
    // kohe kirjutame ka kellaaja
    clockContainer.innerHTML = getCurrentTime();
    dateContainer.innerHTML = getCurrentDate();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentTime();
    }, 1000);

 

};

var getCurrentTime = function(){
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
	var day = currentDate.getDay();
	var month = currentDate.getMonth();
	var year = currentDate.getFullYear();
	var date = currentDate.getDate();
	
    var dateString = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + '<br>';

	
    return dateString;
};

var getCurrentDate = function(){
	var currentDate = new Date();
	
	var day = currentDate.getDay();
	var month = currentDate.getMonth();
	var year = currentDate.getFullYear();
	var date = currentDate.getDate();
	
	var dateString = myDays(day) + '<br>' + addZeroBefore(date) + "." + 
	myMonths(month) + '<br>' + addZeroBefore(year);
	
	return dateString;
	
};

function myDays(day){
    if(day==0){day="puhapaev";}
	if(day==1){day="esmaspaev";}
	if(day==2){day="teisipaev";}
	if(day==3){day="kolmapaev";}
	if(day==4){day="neljapaev";}
	if(day==5){day="reede";}
	if(day==6){day="laupaev";}
    return day;
}

function myMonths(month){
    if(month==0){month="jaanuar";}
    if(month==1){month="veebruar";}
    if(month==2){month="marts";}
    if(month==3){month="aprill";}
    if(month==4){month="mai";}
    if(month==5){month="juuni";}
    if(month==6){month="juuli";}
    if(month==7){month="august";}
    if(month==8){month="september";}
    if(month==9){month="oktoober";}
    if(month==10){month="november";}
    if(month==11){month="detsember";}
    return month;
}

function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function myFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


/*var imgSrcs = ["http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-11.jpg", "http://www.technocrazed.com/wp-content/uploads/2015/12/beautiful-wallpaper-download-12.jpg", "http://s1.picswalls.com/wallpapers/2015/12/12/beautiful-backgrounds_12441478_294.jpg"];
setInterval(function() {
    $("body").css("background", "url(" + imgSrcs[imgSrcs.push(imgSrcs.shift())-1] + ")");
}, 5000);
*/

/*
for(var i = 0; i < links.length; i++){
 	links[i].href = "#";
}
*/
