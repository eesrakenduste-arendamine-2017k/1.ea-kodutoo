<?php require("../header.php"); ?>
	
	<!-- Container for clock -->
	<div id="clock" class="clock"></div>
	<div id="date" class="date"></div>

	<!-- Button to open sidebar -->
	<button class="glyphicon glyphicon-menu-hamburger" onclick="openNav()"></button>

	<!-- Sidebar content -->
	<div id="Sidebar" class="sidenav">
	  	<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
	  	<div class="heading">Background</div>
	  	<button class="backgroundColorBlock" id="Black"></button>
	  	<button class="backgroundColorBlock" id="Gray"></button>
		<button class="backgroundColorBlock" id="Maroon"></button>
		<button class="backgroundColorBlock" id="Khaki"></button>
		<button class="backgroundColorBlock" id="Green"></button>
		<button class="backgroundColorBlock" id="Sea"></button>
		<button class="backgroundColorBlock" id="Blue"></button>
		<button class="backgroundColorBlock" id="Purple"></button>
		<button class="backgroundColorBlock" id="Cloudy"></button>
		<button class="backgroundColorBlock" id="White"></button>
		<div class="heading">Text</div>
		<button class="textColorBlock" id="White"></button>
		<button class="textColorBlock" id="Black"></button>
		<script>
		//Background color picker
		$("button.backgroundColorBlock").click(function() {
	    	//Get the background color of the clicked color block by using the this object
	    	var $backgroundColor = $(this).css("background");
	    	//Set the body's background-color to the received background-color
	    	$("body").css("background", $backgroundColor);
	   	});
	   	
		//Text color picker
		$("button.textColorBlock").click(function() {
	    	//Get the background color of the clicked color block by using the this object
	    	var $textColor = $(this).css("backgroundColor");
	    	//Set the body's background-color to the received background-color
	    	$(".clock").css("color", $textColor);
			$(".date").css("color", $textColor);
			$("button.glyphicon.glyphicon-menu-hamburger").css("color", $textColor);
   		});
		</script>
	  	<div class="author">Created by:<br>Rauno Tegelmann</div>
	</div>

<?php require("../footer.php"); ?>