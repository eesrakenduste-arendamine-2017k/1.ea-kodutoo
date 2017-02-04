<!DOCTYPE html>
<html lang="en">
	<head>
		<title>Clock</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Bootstrap -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<!-- Clock font -->
		<link href="https://fonts.googleapis.com/css?family=Bahiana" rel="stylesheet">

		<script>
		//Ootan kuni leht on täielikult laetud
		window.onload = function(){

		    var clockContainer = document.getElementById('clock');
		    console.log(clockContainer);

		    var dateContainer = document.getElementById('date');
		    console.log(dateContainer);

		    //Kuvan kohe
		    clockContainer.innerHTML = getCurrentTime();
		    dateContainer.innerHTML = getCurrentDate();
			
			//Värskendan iga 1s tagant
		    window.setInterval(function(){
		        clockContainer.innerHTML = getCurrentTime();
		    }, 1000);

		    window.setInterval(function(){
		        dateContainer.innerHTML = getCurrentDate();
		    }, 1000);

		};

		var getCurrentTime = function(){
		    var currentTime = new Date();

		    var hours = currentTime.getHours();
		    var minutes = currentTime.getMinutes();
		    var seconds = currentTime.getSeconds();
			
		    var timeString = addZeroBefore(hours) + ' : ' + addZeroBefore(minutes) + ' : ' + addZeroBefore(seconds);
			
		    return timeString;
		};

		var getCurrentDate = function(){
			var currentDate = new Date();

			var day = currentDate.getDay();
			var date = currentDate.getDate();
			var month = currentDate.getMonth();
			var year = currentDate.getFullYear();

			var dateString = numberToDay(day) + '<br />' + date + ' ' + ' ' + numberToMonth(month) + ' ' + year;

			return dateString;
		}

		function addZeroBefore(timeNumber) {
		    if (timeNumber < 10) {
		        timeNumber = '0' + timeNumber;
		    }

		    return timeNumber;
		}

		function numberToDay(dayNumber){

			var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
			dayNumber = days[dayNumber];

			return dayNumber;
		}

		function numberToMonth(monthNumber){

			var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			monthNumber = months[monthNumber];

			return monthNumber;
		}

		function dateToEnglish(dateNumber){
			if (dateNumber > 3) {
				dateNumber = dateNumber + 'th';
			}
			if (dateNumber = 3) {
				dateNumber = dateNumber + 'rd';
			}
			if (dateNumber = 2) {
				dateNumber = dateNumber + 'nd';
			}
			if (dateNumber = 1) {
				dateNumber = dateNumber + 'st';
			}

			return dateNumber;
		}

		</script>
		<script>
		function openNav() {
    		document.getElementById("mySidenav").style.width = "300px";
		}
		</script>
		<script>
		/* Set the width of the side navigation to 0 */
		function closeNav() {
		    document.getElementById("mySidenav").style.width = "0";
		}
		</script>

		<style>

			.clock{
				font-family: 'Bahiana', cursive;
				color: #ededed;
				text-align: center;
				font-size: 17em;
			}

			.date{
				font-family: 'Bahiana', cursive;
				color: #ededed;
				text-align: center;
				font-size: 2.5em;
			}
			
			body{
				background: #212121;
			}

			.author {
			    font-family: 'Bahiana', cursive;
			    position: relative;
			    color: #9e0000;
			    font-size: 2.5em;
			    margin-top: 7.5em;
			    margin-left: 0.5em;
			}

			span.glyphicon.glyphicon-menu-hamburger {
			    color: #ededed;
			    position: fixed;
			    margin-left: 25px;
			    margin-top: 25px;
			    font-size: 35px;
			}

			/* The side navigation menu */
			.sidenav {
			    height: 100%; /* 100% Full-height */
			    width: 0; /* 0 width - change this with JavaScript */
			    position: fixed; /* Stay in place */
			    z-index: 1; /* Stay on top */
			    top: 0;
			    left: 0;
			    background-color: #111; /* Black*/
			    overflow-x: hidden; /* Disable horizontal scroll */
			    overflow-y: hidden;
			    padding-top: 5em; /* Place content 60px from the top */
			    transition: 5.25s; /* 0.5 second transition effect to slide in the sidenav */
			}

			/* The navigation menu links */
			.sidenav a {
			    padding: 8px 8px 8px 32px;
			    font-family: 'Bahiana', cursive;
			    text-decoration: none;
			    font-size: 2.5em;
			    margin-left: 0em;
			    color: #818181;
			    display: block;
			    transition: 0.3s
			}

			/* When you mouse over the navigation links, change their color */
			.sidenav a:hover, .offcanvas a:focus{
			    color: #f1f1f1;
			}

			/* Position and style the close button (top right corner) */
			.sidenav .closebtn {
			    position: absolute;
			    top: 0;
			    right: 0.5em;
			    font-size: 2.5em;
			    margin-left: 1em;
			}

		</style> 
		
	</head>
	<body>