window.onload = function () {

	function clockFunction() {
		var currentTime = new Date;
		//kell
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		//kuupäev
		var date = currentTime.getDate();
		var month = currentTime.getMonth();
		var year = currentTime.getFullYear();
		//nädalapäev
		var today = currentTime.getDay();
		//array
		var weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]
		
		document.getElementById("Clock").innerHTML = addZeroBefore(hours) + ":" + addZeroBefore(minutes) + ":" + addZeroBefore(seconds);
		document.getElementById("Date").innerHTML = addZeroBefore(date) + "/" + addZeroBefore(month) + "/" + year;
		document.getElementById("Day").innerHTML = weekDays[today];
	};
	
	//nullid
	function addZeroBefore(number) {
		if (number < 10) {
			return number = "0" + number
		}
		return number
	};
	
	clockFunction()
	setInterval(clockFunction, 1000);
	
	
	/*küljemenüü avamine ja sulgemine*/
	document.getElementById("openNav").addEventListener("click", openMenu)
	document.getElementById("closebutton").addEventListener("click", closeMenu)

	function openMenu() {
		document.getElementsByClassName("menu")[0].style.width = "250px"
		document.getElementsByClassName("dateAndTime")[0].style.marginLeft = "0px"
		document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	}
	function closeMenu() {
		document.getElementsByClassName("menu")[0].style.width = "0px"
			document.getElementsByClassName("dateAndTime")[0].style.marginLeft = "0px"
			document.getElementById("backgroundPic").style.marginLeft = "0px"
	}
	
	//Kuni hiir püsib lehel, näitab autori nime
	document.addEventListener("mouseover", nameFunction);
	document.addEventListener("mouseout", nameFunction2);
	function nameFunction(){
		document.getElementById("Name").style.visibility = "visible"
	};
	function nameFunction2(){
		document.getElementById("Name").style.visibility = "hidden"
	};
	
	
	/*MUUDETAVAD*/
	
	//1) kella ja kuupäeva suurus
	document.getElementById("fontSlider").addEventListener("input", slider)
	function slider() {
		document.getElementsByClassName("dateAndTime")[0].style.fontSize = this.value + "px"
	}
	
	//2) kella ja kuupäeva värvus
	document.getElementById("color").addEventListener("change", colorPicker)
	function colorPicker() {
		document.getElementsByClassName("dateAndTime")[0].style.color = this.value
	}
	
	//3) kella ja kuupäeva font
	document.getElementById("font").addEventListener("change", fontPicker)
	function fontPicker() {
		document.getElementsByClassName("dateAndTime")[0].style.fontFamily = this.value
	}

}
