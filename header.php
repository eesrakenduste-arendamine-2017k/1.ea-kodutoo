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

		    //Kuvan kohe kellaaja
		    clockContainer.innerHTML = getCurrentDateTime();
			
			//Värskendan kellaaega iga 1s tagant
		    window.setInterval(function(){
		        clockContainer.innerHTML = getCurrentDateTime();
		    }, 1000);

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
		}
		</script>
		<script>
		function openNav() {
    		document.getElementById("mySidenav").style.width = "250px";
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
				margin-top: 100px;
				font-size: 250px;
			}
			
			body{
				background: #212121;
			}
			.author{
				font-family: 'Bahiana', cursive;
				color: #ededed;
				font-size: 20px;
				margin-bottom: 5px;
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
			    padding-top: 60px; /* Place content 60px from the top */
			    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
			}

			/* The navigation menu links */
			.sidenav a {
			    padding: 8px 8px 8px 32px;
			    text-decoration: none;
			    font-size: 25px;
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
			    right: 25px;
			    font-size: 36px;
			    margin-left: 50px;
			}

			/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
			#main {
			    transition: margin-left .5s;
			    padding: 20px;
			}

			/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
			@media screen and (max-height: 450px) {
			    .sidenav {padding-top: 15px;}
			    .sid
			 }

		</style> 
		
	</head>
	<body>