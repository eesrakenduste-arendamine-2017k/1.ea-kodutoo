window.onload = function(){

    //kell
    var clockContainer = document.getElementById('clock');
    console.log(clockContainer);

    clockContainer.innerHTML = getCurrentDateTime();

    window.setInterval(function(){
        clockContainer.innerHTML = getCurrentDateTime();
    }, 1000);

    //tervitustekst
    var texts = [
      "Hello!"+"<br><br>",
      "Здравствуйте!"+"<br><br>",
      "Tere!"+"<br><br>" ,
      "Taaniel Kõmmus,"+"<br>"+"kell on..."
    ];
    changeText(texts);

    //Animatsioonid
    //*tekst
    var myName = document.getElementById("myName");
    myName.addEventListener('mouseover', function(){
      changeScaleUp(myName);
    });
    myName.addEventListener('mouseout', function(){
      changeScaleDown(myName);
    });

    //*kell
    clockContainer.addEventListener('mouseover', function(){
      changeScaleUp(clockContainer);
    });
    clockContainer.addEventListener('mouseout', function(){
      changeScaleDown(clockContainer);
    });

    //*teema valija
    var selectTheme = document.getElementById('selector');

    selectTheme.addEventListener("change", changeTheme);

    selectTheme.selectedIndex=sessionStorage.getItem("themeIndex");
    document.getElementById("theme").href=sessionStorage.getItem("theme");

    selectTheme.addEventListener('mouseover', function(){
        changeScaleUp(selectTheme);
      });

      selectTheme.addEventListener('mouseout', function(){
        changeScaleDown(selectTheme);
      });

    //*navi-bar
    var navi = document.getElementById('navi');

    navi.addEventListener('mouseover', function(){
        changeScaleUp(navi);
      });

    navi.addEventListener('mouseout', function(){
        changeScaleDown(navi);
      });

    var logos1 = document.getElementById('logos1');

      logos1.addEventListener('mouseover', function(){
          changeScaleUpRotate(logos1);
        });

        logos1.addEventListener('mouseout', function(){
          changeScaleDownRotate(logos1);
        });


    var logos2 = document.getElementById('logos2');

      logos2.addEventListener('mouseover', function(){
          changeScaleUpRotate(logos2);
        });

      logos2.addEventListener('mouseout', function(){
          changeScaleDownRotate(logos2);
        });

    var logos3 = document.getElementById('logos3');

        logos3.addEventListener('mouseover', function(){
          changeScaleUpRotate(logos3);
        });

        logos3.addEventListener('mouseout', function(){
          changeScaleDownRotate(logos3);
        });

    var logos4 = document.getElementById('logos4');

        logos4.addEventListener('mouseover', function(){
          changeScaleUpRotate(logos4);
        });

        logos4.addEventListener('mouseout', function(){
          changeScaleDownRotate(logos4);
        });

};

//kella funktsioon
var getCurrentDateTime = function(){
    var currentDate = new Date();

    var weekday = new Array(7);
      weekday[0] =  "Sunday";
      weekday[1] = "Monday";
      weekday[2] = "Tuesday";
      weekday[3] = "Wednesday";
      weekday[4] = "Thursday";
      weekday[5] = "Friday";
      weekday[6] = "Saturday";

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var day = currentDate.getDate();
    var dayname = weekday[currentDate.getDay()];
    var month = currentDate.getMonth()+1;
    var year = currentDate.getFullYear();

    var dateString =addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds) + '<br>' +
    addZeroBefore(day) + '.' + addZeroBefore(month) + '.' + year + '<br>' +
    dayname;

    return dateString;
};


function addZeroBefore(dateNumber) {
    if (dateNumber < 10) {
        dateNumber = '0' + dateNumber;
    }

    return dateNumber;
}

//teksti muutja
function changeText(texts) {
  var text = texts.splice(0, 1) [0];
  if (text) {
    myName.innerHTML = text;
    setTimeout(function () {
      changeText(texts);
    }, 2500);
  }
}

//teema vahetamise funktsioon
function changeTheme(){
  var selectTheme = document.getElementById('selector');
  var theme= selectTheme.options[selectTheme.selectedIndex].value;
  var changeTheme = document.getElementById('theme');
  var themeIndex = selectTheme.selectedIndex;
  changeTheme.href=theme;
  sessionStorage.setItem("theme", theme);
  sessionStorage.setItem("themeIndex", themeIndex);
}

//animatsioonide funktsioonid
function changeScaleUp(clockContainer){
  clockContainer.style.transform="scale(1.1)";
  clockContainer.style.transition= "transform .4s .1s ease-in-out";
}

function changeScaleDown(clockContainer){
  clockContainer.style.transform="scale(1)";
  clockContainer.style.transition= "transform .6s .2s ease-in-out";
}

function changeScaleUpRotate(logos1){
  logos1.style.transform="rotate(360deg) scale(1.2)";
  logos1.style.transition= "transform .4s .1s ease-in-out";
}

function changeScaleDownRotate(logos1){
  logos1.style.transform="rotate(0deg) scale(1)";
  logos1.style.transition= "transform .6s .2s ease-in-out";

}
