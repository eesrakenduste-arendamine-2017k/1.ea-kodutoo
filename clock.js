Number.prototype.pos = function(n) {
	for (var r = this.toString(); r.length < n; r = 0 + r);
	return r;
};
function updateClock() {
	var now = new Date();
	sec = now.getSeconds(),
	min = now.getMinutes(),
	hou = now.getHours(),
	mo = now.getMonth(),
	dy = now.getDate(),
	yr = now.getFullYear();
	var months = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];
	var tags = ["mon", "d", "y", "h", "m", "s"],
	corr = [dy, months[mo], yr, hou.pos(2), min.pos(2), sec.pos(2)];
	for (var i = 0; i < tags.length; i++)
	document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function startClock() {
	updateClock();
	window.setInterval("updateClock()", 1);
}
function black() {
    document.getElementById("timedate").style.color = "#000000";
}
function white() {
    document.getElementById("timedate").style.color = "#ffffff";
}

function play_audio(task) {
      if(task == 'play'){
           $(".nyancat").trigger('play');
      }
      if(task == 'stop'){
           $(".nyancat").trigger('pause');
           $(".nyancat").prop("currentTime",0);
      }
 }


