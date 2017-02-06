<?php require("../header.php"); ?>
	
	<!-- Container for clock/date -->
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
		<button class="backgroundColorBlock" id="Semolina"></button>
		<button class="backgroundColorBlock" id="White"></button>
		<div class="heading">Text</div>
		<button class="textColorBlock" id="White"></button>
		<button class="textColorBlock" id="Black"></button>
		<div class="heading">Shadow</div>
		<button class="btn-shadow" id="ShadowYes"><span class="glyphicon glyphicon-ok"></span></button>
		<button class="btn-shadow" id="ShadowNo"><span class="glyphicon glyphicon-remove"></span></button>
		<div class="heading">Font</div>
		<button class="btn-default" id="Bungee"><span class="glyphicon glyphicon-font"></span></button>
		<button class="btn-default" id="Bahiana"><span class="glyphicon glyphicon-font"></span></button>
		<button class="btn-default" id="Indie"><span class="glyphicon glyphicon-font"></span></button>
		<button class="btn-default" id="Montserrat"><span class="glyphicon glyphicon-font"></span></button>
		<button class="btn-default" id="Pacifico"><span class="glyphicon glyphicon-font"></span></button>
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
	    	var $textColor = $(this).css("backgroundColor");
	    	$(".clock").css("color", $textColor);
			$(".date").css("color", $textColor);
			$("button.glyphicon.glyphicon-menu-hamburger").css("color", $textColor);
   		});

		//Text font picker
		$("button.btn-default").click(function() {
	    	var $font = $(this).css("font-family");
	    	$(".clock").css("font-family", $font);
			$(".date").css("font-family", $font);
   		});

		//Shadow enabler
		$("button.btn-shadow").click(function() {
	    	var $shadow = $(this).css("text-shadow");
	    	$(".clock").css("text-shadow", $shadow);
   		});
		</script>
	</div>

<?php require("../footer.php"); ?>