<?php
	require("../functions.php");
	$clockType = 1;
?>

<!DOCTYPE html>
<html>
	<head>
	
	<link rel="stylesheet" type="text/css" href="../CSS/Stylesheet.css">
	<link rel="import" type="text/html" href="../Scripts/Scripts.html">
	
	</head>

	<body onload="startTime(), changeBGImage()">
		<div class="buttons">
			<form method="post">
				<button id="wp" type="button" onclick="changeBGImage()"class="WPButton" > Vaheta Tausta</button>
				<div class="ClockContainerouter">
					<div class="ClockContainerinner">
						<canvas class="kell2" id="canvasTest" width="480" height="138" align="Center"> </canvas>
						<div draggable="true" id="txtClock" onclick="changeClockColor()" class="kell"></div>
						<div id="kuupäev" class="kuupaev"></div>
					</div>
				</div>
			</form>
		</div>
	</body>
</html>