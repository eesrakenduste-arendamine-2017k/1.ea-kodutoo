function date_time(id) {
    //"use strict";
    date = new Date;
    year = date.getFullYear();
    month = date.getMonth();
    months = new Array('jaanuar', 'veebruar', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember');
    d = date.getDate();
    day = date.getDay();
    days = new Array('pühapäev', 'esmaspäev', 'teisipäev', 'kolmapäev', 'neljapäev', 'reede', 'laupäev');
    h = date.getHours();
    if(h<10)
    {
        h = "0"+h;
    }
        m = date.getMinutes();
    if(m<10)
    {
        m = "0"+m;
    }
        s = date.getSeconds();
    if(s<10)
    {
        s = "0"+s;
    }
    result = ''+days[day]+'<br>'+d+'. '+months[month]+' '+year+'<br>'+h+':'+m+':'+s;
    document.getElementById(id).innerHTML = result;
    setTimeout('date_time("'+id+'");','1000');
    return true;
}

function XX() {
    first2 = document.getElementById("firstname").value;

    request = new XMLHttpRequest;
    request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+first2, true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400){
            data = JSON.parse(request.responseText).data.image_url;
            console.log(data);
           document.querySelector(".content").style = "background-image:url("+data+")";

        } else {
            console.log('reached giphy, but API returned an error');
        }
    };

    request.onerror = function() {
        console.log('connection error');
    };

    request.send();
}