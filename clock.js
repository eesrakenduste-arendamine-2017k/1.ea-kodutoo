window.onload = function(){
  var clock = document.getElementById('clock');

  writeDate();

  window.setInterval(function(){

    writeDate();

  }, 500);

  var months = new Array('jaanuar','veebruar','märts','aprill','mai','juuni','juuli','august','september','oktoober','november','detsember');
  var days = new Array('Pühapäev','Esmaspäev','Teisipäev','Kolmapäev','Neljapäev','Reede','Laupäev');
  var today = new Date();
  var day = today.getDay();
  var date = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();
  document.getElementById('date').innerHTML = days[day]+' '+date+'.'+months[month]+' '+year;

  window.addEventListener('keyup', function(event){
    console.log(event.which);
    if(event.which == 81){

      document.body.style.backgroundColor ='black';
      document.body.style.color ='black';
      document.body.style.textShadow ='0px 0px 15px green';
      document.body.style.transition = "all 2s";
    }
    if(event.which == 87){

      document.body.style.backgroundColor ='white';
      document.body.style.color ='black';
      document.body.style.textShadow ='0px 0px 0px green';
      document.body.style.transition = "all 1s";
    }
    if(event.which == 69){

      document.body.style.backgroundColor ='blue';
      document.body.style.textShadow ='0px 0px 15px green';
      document.body.style.color ='white';
      document.body.style.transition = "ease 3s";
    }
    if(event.which == 38 ){

      
      document.body.style.fontSize ='0.5em';

    }
    if(event.which == 40 ){
      document.body.style.fontSize ='1em';
    }
    if(event.which == 65 ){
        document.getElementById("date").style.textAlign ='left';
      }
    if(event.which == 68 ){
        document.getElementById("date").style.textAlign ='right';
      }
      if(event.which == 83 ){
          document.getElementById("date").style.textAlign ='center';
        }
      if(event.which == 90 ){
          document.getElementById("date").style.fontSize ='4em';
        }
      if(event.which == 88 ){
          document.getElementById("date").style.fontSize ='6em';
        }
      if(event.which == 67 ){
          document.getElementById("date").style.fontSize ='8em';
        }
  });
};

function writeDate(){
  var today = new Date();

  var hours = addZeroBefore(today.getHours());
  var minutes = today.getMinutes();

  var seconds= today.getSeconds();
  seconds = addZeroBefore(seconds);
  clock.innerHTML = hours + ':' + addZeroBefore(minutes) + ':' + seconds;
}

function addZeroBefore(number){

  if(number<10){
    number="0"+number;
  }

  return number;
}
