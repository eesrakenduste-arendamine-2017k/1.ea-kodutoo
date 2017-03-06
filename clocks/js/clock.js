/*** clocks ***/

function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + sec;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
		
}

window.setInterval(function(){
  startTime()
}, 1000);

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

/*** play/pause audio ***/
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay(){
	if(isPlaying) {
		myAudio.pause()
	} else {
		myAudio.play();
	}
		
}

myAudio.onplaying = function() {
	isPlaying = true;
}
	
myAudio.onpause = function(){
	isPlaying = false;
	
}

 /**** slideshow ****/
 
jQuery.fn.rbtSlider = function(opt){
        return this.each(function() {
            var slider = $(this);
            if (opt.height) slider.css('height', opt.height);
            slider.find('.slItem').first().addClass('active');
            if (opt.dots) {
                var count = slider.find('.slItem').length;
                slider.append(
                    $('<div/>', {
                        class: 'slDots',
                        html: $('<div/>', {
                            class: 'slDotsSingle active'
                        })
                    })                                  
                );
                for (var i = 1; i < count; i++) {
                    slider.find('.slDotsSingle.active').clone().removeClass('active').appendTo($(this).find('.slDots'));    
                }
                slider.find('.slDotsSingle').on('click', function(){
                    curIndex = $(this).parents('.slDots').find('.active').removeClass('active').index() + 1;
                    index = $(this).addClass('active').index() + 1;
                    if (index != curIndex) {
                        if (index > curIndex) nav('next', index);
                        else nav('prev', index);
                    }
                });
            }
            if (opt.arrows) {
                slider.append(
                    $('<div/>', {
                        class: 'ctrlPrev',
                        html: '&lsaquo;'
                    }).on('click', function(){
                        nav('prev');
                    })
                ).append(
                    $('<div/>', {
                        class: 'ctrlNext',
                        html: '&rsaquo;'
                    }).on('click', function(){
                        nav('next');
                    })
                );
            }
            if (opt.auto) {
                var time = setInterval(function(){nav('next')}, opt.auto * 1000);
                slider.on('mouseover', function() {
                    clearInterval(time);
                }).on('mouseleave', function() {
                    time = setInterval(function(){nav('next')}, opt.auto * 1000);
                });
            }

            function nav(side, index) {
                if (index) {
                    nextItem = slider.find('.slItem').eq(index - 1);
                } else {
                    if (side == 'prev') {
                        if (slider.find('.slItem.active').prev().length) nextItem = slider.find('.slItem.active').prev();  
                        else nextItem = slider.find('.slItem').last();
                    } else {
                        if (slider.find('.slItem.active').next().length) nextItem = slider.find('.slItem.active').next();
                        else nextItem = slider.find('.slItem').first();
                    }    
                    slider.find('.slDots > .active').removeClass('active').parent().find('.slDotsSingle').eq(nextItem.index()).addClass('active');
                }
                nextItem.addClass(side + 'Item').delay(50).queue(function(){
                    slider.find('.slItems > .active').addClass(side).delay(700).queue(function(){
                        $(this).removeClass(side +' active').dequeue();
                    });

                    $(this).addClass(side).delay(700).queue(function(){
                        $(this).removeClass(side + ' ' + side + 'Item').addClass('active').clearQueue();
                    });

                    $(this).dequeue();
                });
            }
        });
    };
	
/*** change clock's color ***/
	
var color = "white";	

function changeColor() {
	if(color === "white") {
		document.getElementById("clock").style.color = "black";
		color = "black";
	} else if (color === "black"){
		document.getElementById("clock").style.color = "lightblue";
		color = "lightblue";
	} else if (color === "lightblue") {
		document.getElementById("clock").style.color = "orange";
		color = "orange";
	} else {
		return color="white";
	}
}