var night = 0;

function nightMode() {
    if (night == 0){
        document.getElementById('clock').style.color = 'White';
        document.getElementById('grad1').style.backgroundImage = "url('desktop_bg.jpg')";
        document.getElementById('moon').src = 'moonWhite.png';
        document.getElementById('smallClock').style.color = 'White';
        document.getElementById('medClock').style.color = 'White';
        document.getElementById('largeClock').style.color = 'White';
        document.getElementById('name').style.color = 'White';
        night = 1;
    } else {
        document.getElementById('clock').style.color = 'Black';
        document.getElementById('grad1').style.backgroundImage = "url('desktop_bg_white.jpg')";
        document.getElementById('moon').src ='moonBlack.png';
        document.getElementById('smallClock').style.color = 'Black';
        document.getElementById('medClock').style.color = 'Black';
        document.getElementById('largeClock').style.color = 'Black';
        document.getElementById('name').style.color = 'Black';
        night = 0;
    }
};
function clockSmall(){
    document.getElementById('clock').style.fontSize = '300%';
};
function clockMedium() {
    document.getElementById('clock').style.fontSize = '500%';
};
function clockLarge() {
    document.getElementById('clock').style.fontSize = '700%';
};
