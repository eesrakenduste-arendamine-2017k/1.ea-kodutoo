<?php require("../header.php"); ?>
	
	<!-- Container for clock -->
	<div id="clock" class="clock"></div>
	<div id="date" class="date"></div>

	<!-- Button to open sidebar -->
	<span class="glyphicon glyphicon-menu-hamburger" onclick="openNav()"></span>

	<!-- Sidebar content -->
	<div id="mySidenav" class="sidenav">
	  	<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
	  	<a href="#">Color</a>
	  	<a href="#">Language</a>
	  	<a href="#">12/24hrs</a>
	  	<div class="author">Created by:<br>Rauno Tegelmann</div>
	</div>

<?php require("../footer.php"); ?>