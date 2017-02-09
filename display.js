var esimene = document.getElementById("big");
	var teine = document.getElementById("small");
	/*function remove() {
		esimene.removeChild(teine);
		}
	function bringBack() {
		esimene.appendChild(teine);
	}
	*/
	var condition = false;
	
	function display() {
		if (condition == false) {
			esimene.removeChild(teine);
			document.getElementById("clockDisplay").style.fontSize = "129px";
			condition = true;
			
		}
		else if (condition == true) {
			esimene.appendChild(teine);
			document.getElementById("clockDisplay").style.fontSize = "80px";
			condition = false;
		}
	}
	
	