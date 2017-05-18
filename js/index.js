
$(function(){
	

    var clock = $('#clock'),
        alarm = clock.find('.alarm'),
        ampm = clock.find('.ampm');

    var digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');
    var digits = {};
    var positions = [
        'h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
    ];


    var digit_holder = clock.find('.digits');

    $.each(positions, function(){

        if(this == ':'){
            digit_holder.append('<div class="dots">');
        }
        else{

            var pos = $('<div>');

            for(var i=1; i<8; i++){
                pos.append('<span class="d' + i + '">');
            }

            digits[this] = pos;
            digit_holder.append(pos);
        }

    });

    var weekday_names = 'Esm Tei Kol Nel Re La Pü'.split(' '),
        weekday_holder = clock.find('.weekdays');

    $.each(weekday_names, function(){
        weekday_holder.append('<span>' + this + '</span>');
    });

    var weekdays = clock.find('.weekdays span');

    (function update_time(){

       

        var now = moment().format("hhmmssdA");

        digits.h1.attr('class', digit_to_name[now[0]]);
        digits.h2.attr('class', digit_to_name[now[1]]);
        digits.m1.attr('class', digit_to_name[now[2]]);
        digits.m2.attr('class', digit_to_name[now[3]]);
        digits.s1.attr('class', digit_to_name[now[4]]);
        digits.s2.attr('class', digit_to_name[now[5]]);

        var dow = now[6];
        dow--;

        if(dow < 0){
            dow = 6;
        }
        weekdays.removeClass('active').eq(dow).addClass('active');
        ampm.text(now[7]+now[8]);
        setTimeout(update_time, 1000);
		

    })();
    $('a.button').click(function(){
        clock.toggleClass('light dark');
    });
	$('a.nupp').click(function(){
	clock.toggleClass(move)
	.rotate(140)
	.end(); 
	});
	
	var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
};

$('#btnRotateRight').click(function() {
    rotation += 5;
    $('.display').rotate(rotation);
});

$('#btnRotateLeft').click(function() {
    rotation -= 5;
    $('.display').rotate(rotation);
});

});

