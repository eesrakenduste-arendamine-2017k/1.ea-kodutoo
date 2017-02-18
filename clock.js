(function(){
	"use strict";
	
	var Clock = function(){
		
        if(Clock.instance){
            return Clock.instance;
        }
		
        Clock.instance = this;		

		this.init();
	};

	Clock.prototype = {
		
        init: function(){
	
			//document.querySelector('#date').innerHTML = displayDate();
			document.querySelector('#date').innerHTML = displayDate();
			setInterval(function(){
				document.querySelector('#clock').innerHTML = displayTime();
				
				}, 0);

        },		
		
	}
	
	
	// abifunktsioonid
	var displayTime = function(){	
	
		var currentDate = new Date();
	
		var hours = currentDate.getHours();
		var minutes = currentDate.getMinutes();
		var seconds = currentDate.getSeconds();
		
		var time = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);	
	
		function addZeroBefore(dateNumber){ 
			if(dateNumber < 10) {
			dateNumber = '0' + dateNumber;}
			return dateNumber;	
		}
		
		return time;
	}
	
	var displayDate = function(){
		
		var currentDate = new Date();
		
		var month = currentDate.getMonth();
		var date = currentDate.getDate();	
		var day = currentDate.getDay();	

		switch(day) {
			case 0:
				day = "pühapäev";
				break;
			case 1:
				day = "esmaspäev";
				break;
			case 2:
				day = "teisipäev";
				break;
			case 3:
				day = "kolmapäev";
				break;				
			case 4:
				day = "neljapäev";
				break;
			case 5:
				day = "reede";
				break;
			case 6:
				day = "laupäev";
				break;			
		}
		
		switch(month) {
			case 0:
				month = "jaanuar";
				break;
			case 1:
				month = "veebruar";
				break;
			case 2:
				month = "märts";
				break;
			case 3:
				month = "aprill";
				break;				
			case 4:
				month = "mai";
				break;
			case 5:
				month = "juuni";
				break;
			case 6:
				month = "juuli";
				break;
			case 7:
				month = "august";
				break;		
			case 8:
				month = "september";
				break;
			case 9:
				month = "oktoober";
				break;
			case 10:
				month = "november";
				break;
			case 11:
				month = "detsember";
				break;				
		}
		
		var date = day + ", " + date + "." + " " + month; 
		
		return date;
		
	}
	

	var refresh2;
	var audio = document.getElementById("mp3");

	function myFunction2(){

		if(document.querySelector('#muuda2').innerHTML != 'halt'){
		
			document.getElementById("bgvid").playbackRate=1.5;
			document.querySelector('#muuda2').innerHTML = "halt";

			var b = document.querySelector("#bgvid"); 
			b.setAttribute("src", "jump.mp4");
			$("#bgvid").css('opacity', 0).animate( { opacity: 1 }, 'slow', 'swing');

			document.getElementById("mp3").play();
			
			refresh2 = setInterval(function(){
				myFunction();
				}, 150);

			/*$("mp3").animate({
				volume: 1
			  }, 500, function() {
				// Animation complete.
			  });
			*/
		} else if(document.querySelector('#muuda2').innerHTML == "halt") {
			//$("mp3").animate({volume: 0}, 500);
			//document.getElementById("mp3").pause();
			document.getElementById("mp3").pause();
			document.querySelector('#muuda2').innerHTML = "jump_around.exec";
			document.getElementById("mp3").currentTime = 0;
			clearInterval(refresh2);

			var x = document.querySelector("#bgvid"); 
			x.setAttribute("src", "bgvid.mp4");
			$("#bgvid").css('opacity', 0).animate( { opacity: 1 }, 'slow', 'swing');

			document.getElementById("bgvid").playbackRate=0.75;
		}
	}
	
	
	var color = 1;
	var colors = [
		"blur(7.5px) brightness(50%) opacity(60%) contrast(100%) sepia(1) hue-rotate(290deg) saturate(6)",
		"blur(7.5px) brightness(50%) opacity(60%) contrast(100%) sepia(1) hue-rotate(190deg) saturate(6)",
		"blur(7.5px) brightness(50%) opacity(60%) contrast(100%) sepia(1) hue-rotate(315deg) saturate(6)",
		"blur(7.5px) brightness(50%) opacity(60%) contrast(100%) sepia(1) hue-rotate(335deg) saturate(6)",
		"blur(7.5px) brightness(50%) opacity(60%) contrast(100%) sepia(1) hue-rotate(135deg) saturate(6)"
	];

	var ran = Math.round(Math.random()*5);

	

	function myFunction(){	
		switch(color) {
		case 1:
			document.getElementById("container").style["filter"] = colors[1];
			color=2;
			break;
		case 2:
			document.getElementById("container").style["filter"] = colors[2];
			color=3;
			break;
		case 3:
			document.getElementById("container").style["filter"] = colors[3];
			color=4;
			break;
		case 4:
			document.getElementById("container").style["filter"] = colors[4];
			color=5;
			break;			
		case 5:
			document.getElementById("container").style["filter"] = colors[0];
			color=1;
			break;
		}
	}



	
	function myFunction3(){
		document.getElementById("mp3").pause();
			document.querySelector("#bgvid").removeAttribute("src");
			document.querySelector("#bgvid").setAttribute("src", "bgvid.mp4");
			$("#bgvid").css('opacity', 0).animate( { opacity: 1 }, 'slow', 'swing');

			document.getElementById("mp3").currentTime = 0;
			clearInterval(refresh2);
			document.getElementById("bgvid").playbackRate=0.75;
			document.querySelector('#muuda2').innerHTML = "jump_around.exec";
	}
	


    window.onload = function(){
        var clock = new Clock();
        window.clock = clock;
		document.getElementById("muuda2").addEventListener("click", myFunction2);
		document.getElementById("muuda").addEventListener("click", myFunction);
		document.getElementById("mp3").addEventListener("ended", myFunction3);
		var myVideo = document.getElementById("bgvid"); 
		myVideo.playbackRate=0.50;


		var arr;
		$.getJSON('//ipinfo.io/json', function(data) {
		  arr = JSON.parse(JSON.stringify(data, null, 2));
		  console.log(arr.ip)
		  document.querySelector('#ip').innerHTML = arr.ip;
		  document.querySelector('#riik').innerHTML = arr.country;
		  document.querySelector('#maakond').innerHTML = arr.region;
		  document.querySelector('#linn').innerHTML = arr.city;
		  document.querySelector('#teenusep').innerHTML = arr.org;
		 
		});



	  $.simpleWeather({
		location: 'Tallinn, Estonia',
		woeid: '845743',
		unit: 'c',
		success: function(weather) {

		  document.querySelector('#ilm').innerHTML='tallinnas on '+weather.temp+'°'+weather.units.temp;

		},
		error: function(error) {
		  $("#weathers").html('<p>'+error+'</p>');
		}
	  });
		
	document.getElementById("container").style["filter"] = colors[ran];


    };


})();