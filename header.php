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
		<!-- JQuery -->
		<script src="http://code.jquery.com/jquery-1.11.0.min.js" type="text/javascript" charset="utf-8"></script>
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

			//Kell
			var getCurrentTime = function(){
			    var currentTime = new Date();

			    var hours = currentTime.getHours();
			    var minutes = currentTime.getMinutes();
			    var seconds = currentTime.getSeconds();
				
			    var timeString = addZeroBefore(hours) + ' : ' + addZeroBefore(minutes) + ' : ' + addZeroBefore(seconds);
				
			    return timeString;
			};

			//Kuupäev
			var getCurrentDate = function(){
				var currentDate = new Date();

				var day = currentDate.getDay();
				var date = currentDate.getDate();
				var month = currentDate.getMonth();
				var year = currentDate.getFullYear();

				var dateString = numberToDay(day) + '<br />' + date + ' ' + ' ' + numberToMonth(month) + ' ' + year;

				return dateString;
			}

			//Lisada nullid
			function addZeroBefore(timeNumber) {
			    if (timeNumber < 10) {
			        timeNumber = '0' + timeNumber;
			    }

			    return timeNumber;
			}

			//Päeva number päeva nimeks
			function numberToDay(dayNumber){

				var days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
				dayNumber = days[dayNumber];

				return dayNumber;
			}

			//Kuu number kuu nimeks
			function numberToMonth(monthNumber){

				var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				monthNumber = months[monthNumber];

				return monthNumber;
			}

			//Sidebar'i avamine
			function openNav() {
	    		document.getElementById("mySidenav").style.width = "300px";
			}


			//Sidebar'i sulgemine
			function closeNav() {
			    document.getElementById("mySidenav").style.width = "0";
			}

		</script>
		<style>

			.backgroundColorBlock {
		      width: 2.5vw;
		      height: 2.5vw;
		      display: inline-block;
		      margin-left: 0.5em;
		      margin-right: 0.5em;
		      margin-bottom: 0.5em;
		    }

		    .textColorBlock {
		      width: 2.5vw;
		      height: 2.5vw;
		      display: inline-block;
		      margin-left: 0.5em;
		      margin-right: 0.5em;
		      margin-bottom: 0.5em;
		    }

		    #Black {
		    	background-color: #000000;
		    }

		    #Gray {
		    	background-color: #212121;
		    }

		    #Cloudy {
		    	background-color: #dbdbdb;
		    }

		    #White {
		    	background-color: #ffffff;
		    }

		    #Maroon {
		     	background-color: #a50909;
		    }

		    #Khaki {
		    	background-color: #774d09;
		    }

		    #Green {
		    	background-color: #25822b;
		    }

		    #Sea {
		    	background-color: #258278;
		    }

		    #Blue {
		    	background-color: #283d91;
		    }

		    #Purple {
		    	background-color: #7d1684;
		    }

			.clock{
				font-family: 'Bahiana', cursive;
				color: #ededed;
				text-align: center;
				position: relative;
				font-size: 17.5vw;
			}

			.date{
				font-family: 'Bahiana', cursive;
				color: #ededed;
				text-align: center;
				font-size: 2.5vw;
			}
			
			body{
				background: #212121;
			}

			.heading {
				font-family: 'Bahiana', cursive;
				color: #9e0000;
				font-size: 2.5vw;
				margin-left: 0.5em;
				margin-bottom: 0.5em;
				margin-top: 0.5em;
			}

			.author {
			    font-family: 'Bahiana', cursive;
			    position: fixed;
			    color: #9e0000;
			    font-size: 2.5vw;
			    margin-top: 5.5em;
			    margin-left: 0.5em;
			}

			span.glyphicon.glyphicon-menu-hamburger {
			    color: #ededed;
			    position: absolute;
			    margin-left: 0.5em;
			    margin-top: 0.5em;
			    font-size: 3vw;
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
			    padding-top: 2.5em; /* Place content 60px from the top */
			    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
			}

			/* The navigation menu links */
			.sidenav a {
			    padding: 8px 8px 8px 32px;
			    font-family: 'Bahiana', cursive;
			    text-decoration: none;
			    font-size: 2.5em;
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