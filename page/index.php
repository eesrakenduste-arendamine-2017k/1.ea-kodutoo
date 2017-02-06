<?php require("../header.php"); ?>
	
	<!-- Container for clock -->
	<div id="clock" class="clock"></div>
	<div id="date" class="date"></div>



	<!-- Button to open sidebar -->
	<span class="glyphicon glyphicon-menu-hamburger" onclick="openNav()"></span>

	<!-- Sidebar content -->
	<div id="mySidenav" class="sidenav">
	  	<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
	  	<div class="heading">Background color</div>
	  	<div class="backgroundColorBlock" id="Black"></div>
	  	<div class="backgroundColorBlock" id="Gray"></div>
		<div class="backgroundColorBlock" id="Maroon"></div>
		<div class="backgroundColorBlock" id="Khaki"></div>
		<div class="backgroundColorBlock" id="Green"></div>
		<div class="backgroundColorBlock" id="Sea"></div>
		<div class="backgroundColorBlock" id="Blue"></div>
		<div class="backgroundColorBlock" id="Purple"></div>
		<div class="backgroundColorBlock" id="Cloudy"></div>
		<div class="backgroundColorBlock" id="White"></div>
		<div class="heading">Text color</div>
		<div class="textColorBlock" id="White"></div>
		<div class="textColorBlock" id="Black"></div>
		<script>
			//Background color picker
			$(".backgroundColorBlock").click(function() {
		    	//Get the background color of the clicked color block by using the this object
		    	var $backgroundColor = $(this).css("background-color");
		    	//Set the body's background-color to the received background-color
		    	$("body").css("background-color", $backgroundColor);
	   		});
		</script>
		<script>
			//Text color picker
			$(".textColorBlock").click(function() {
		    	//Get the background color of the clicked color block by using the this object
		    	var $textColor = $(this).css("background-color");
		    	//Set the body's background-color to the received background-color
		    	$("body").css("background-color", $textColor);
	   		});
		</script>
	  	<div class="author">Created by:<br>Rauno Tegelmann</div>
	</div>

<?php require("../footer.php"); ?>