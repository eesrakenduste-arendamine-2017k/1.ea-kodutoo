window.onload = function () {

	function clockFn() {
		var currentTime = new Date;
		var hours = zeros(currentTime.getHours());
		var minutes = zeros(currentTime.getMinutes());
		var seconds = zeros(currentTime.getSeconds());
		var date = zeros(currentTime.getDate());
		var month = zeros(currentTime.getMonth());
		var year = currentTime.getFullYear();
		var today = currentTime.getDay();

		var weekDays = [
			"Pühapäev",
			"Esmaspäev",
			"Teisipäev",
			"Kolmapäev",
			"Neljapäev",
			"Reede",
			"Laupäev"
		]

		document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;
		document.getElementById("todaysDate").innerHTML = date + "-" + month + "-" + year;
		document.getElementById("day").innerHTML = weekDays[today];

		/*taustapilt vahetub vastavalt kellaajale*/
		if (hours >= 8 && hours <= 20) {
			document.getElementById("backgroundPic").style.backgroundImage = "url('background/back5.jpg')";
		} else {
			document.getElementById("backgroundPic").style.backgroundImage = "url('background/back1.jpg')";
		}
	};
	/*nullide lisamine*/
	function zeros(number) {
		if (number < 10) {
			return number = "0" + number

		}
		return number
	};
	clockFn() /*et alguses oleva 5 ms laadimise asemel oleks kohe kell */
	setInterval(clockFn, 500);
	/* fondi värvi muutmine */
	document.getElementById("colorPicker").addEventListener("change", picker)
	function picker() {
		document.getElementsByClassName("dateAndTime")[0].style.color = this.value
	}
	/* fondi suuruse muutmine */
	document.getElementById("fontSlider").addEventListener("input", slider)
	function slider() {
		document.getElementsByClassName("dateAndTime")[0].style.fontSize = this.value + "px"
	}
	/* tausta läbipaistvuse muutmine */
	document.getElementById("opacitySlider").addEventListener("input", slaid)
	function slaid() {
		document.getElementById("backgroundPic").style.opacity = this.value / 100
	}

	/*autori nimi ilmub space klahvile vajutades kolmeks sekundiks ekraanile */
	window.addEventListener("keypress", function (e) { ;
		if (e.charCode == 32) {
			document.getElementById("authorName").style.visibility = "visible"
		}
		setTimeout(function () {
			document.getElementById("authorName").style.visibility = "hidden"
		}, 3000)
	});
    /*küljemenüü avamine ja sulgemine*/
	document.getElementById("openNav").addEventListener("click", openMenu)
	document.getElementById("closebutton").addEventListener("click", closeMenu)

	function openMenu() {
		document.getElementsByClassName("menu")[0].style.width = "200px"
			document.getElementsByClassName("dateAndTime")[0].style.marginLeft = "100px"
			document.getElementById("backgroundPic").style.marginLeft = "200px"

	}
	function closeMenu() {
		document.getElementsByClassName("menu")[0].style.width = "0px"
			document.getElementsByClassName("dateAndTime")[0].style.marginLeft = "0px"
			document.getElementById("backgroundPic").style.marginLeft = "0px"
	}

}
