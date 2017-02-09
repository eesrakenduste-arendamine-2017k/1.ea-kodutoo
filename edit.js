function fontBiggest() {
    document.getElementById("clock").style.fontSize = "3000%";
};
function fontBigger() {
    document.getElementById("clock").style.fontSize = "2500%";
};
function fontDefault() {
    document.getElementById("clock").style.fontSize = "2000%";
};
function fontSmaller() {
    document.getElementById("clock").style.fontSize = "1500%";
};
function fontSmallest() {
    document.getElementById("clock").style.fontSize = "1000%";
};
function colorRed() {
    document.getElementById('clock').style.color = 'maroon';
};
function colorBlack() {
    document.getElementById('clock').style.color = 'black';
};
function colorGreen() {
    document.getElementById('clock').style.color = 'darkgreen';
};
function colorBlue() {
    document.getElementById('clock').style.color = 'dodgerblue';
};
function colorWhite() {
    document.getElementById('clock').style.color = 'white';
};
function bgRedH() {
    document.getElementById("bg").innerHTML="<style>#grad1{ background: linear-gradient(to bottom, maroon, black);</style>";
    document.getElementById("ba").innerHTML="<style>.btn-dark{background-color: maroon;};</style>";
    document.getElementById("bb").innerHTML="<style>.btn-dark:hover {background-color: #3b0000 !important;</style>";
};
function bgRed() {
    var x=document.getElementById("bg").innerHTML="<style>#grad1{ background: linear-gradient(to bottom, maroon, black);</style>";
    var z=document.getElementById("ba").innerHTML="<style>.btn-dark{background-color: maroon;};</style>";
    var y=document.getElementById("bb").innerHTML="<style>.btn-dark:hover {background-color: #3b0000 !important;</style>";

    return x,z,y;
};
function bgGrayH() {
    document.getElementById("bg").innerHTML="<style>#grad1{ background: linear-gradient(to bottom, #262626, black);</style>";
    document.getElementById("ba").innerHTML="<style>.btn-dark{background-color: #262626;};</style>";
    document.getElementById("bb").innerHTML="<style>.btn-dark:hover {background-color: #171717 !important;</style>";
};
function bgGray() {
    document.getElementById("bg").innerHTML="<style>#grad1{ background: linear-gradient(to bottom, #262626, black);</style>";
    document.getElementById("ba").innerHTML="<style>.btn-dark{background-color: #262626;};</style>";
    document.getElementById("bb").innerHTML="<style>.btn-dark:hover {background-color: #171717 !important;</style>";
};
function bgGreenH() {
    document.getElementById('bg').innerHTML='<style>#grad1{ background: linear-gradient(to bottom, darkgreen, black);};</style>';
    document.getElementById('ba').innerHTML='<style>.btn-dark{background-color: darkgreen;};</style>';
    document.getElementById('bb').innerHTML='<style>.btn-dark:hover {background-color: #004600 !important;</style>';
};
function bgGreen() {
    document.getElementById('bg').innerHTML='<style>#grad1{ background: linear-gradient(to bottom, darkgreen, black);};</style>';
    document.getElementById('ba').innerHTML='<style>.btn-dark{background-color: darkgreen;};</style>';
    document.getElementById('bb').innerHTML='<style>.btn-dark:hover {background-color: #004600 !important;</style>';
};
function bgBlueH() {
    document.getElementById('bg').innerHTML='<style>#grad1{ background: linear-gradient(to bottom, dodgerblue, black);</style>';
    document.getElementById('ba').innerHTML='<style>.btn-dark{background-color: dodgerblue;};</style>';
    document.getElementById('bb').innerHTML='<style>.btn-dark:hover {background-color: #1d57ad !important;</style>';
};
function bgBlue() {
    document.getElementById('bg').innerHTML='<style>#grad1{ background: linear-gradient(to bottom, dodgerblue, black);</style>';
    document.getElementById('ba').innerHTML='<style>.btn-dark{background-color: dodgerblue;};</style>';
    document.getElementById('bb').innerHTML='<style>.btn-dark:hover {background-color: #1d57ad !important;</style>';
};
function bgWhiteH() {
    document.getElementById('bg').innerHTML='<style>#grad1{ background: linear-gradient(to bottom, white, black);</style>';
    document.getElementById('ba').innerHTML='<style>.btn-dark{background-color: white;};</style>';
    document.getElementById('bb').innerHTML='<style>.btn-dark:hover {background-color: #9a9a9a !important;</style>';
};
function bgWhite() {
    document.getElementById('bg').innerHTML='<style>#grad1{ background: linear-gradient(to bottom, white, black);</style>';
    document.getElementById('ba').innerHTML='<style>.btn-dark{background-color: white;};</style>';
    document.getElementById('bb').innerHTML='<style>.btn-dark:hover {background-color: #9a9a9a !important;</style>';
};
function bgChosen() {
    x;
    z;
    y;
};
function show(id) {
    document.getElementById(id).style.visibility = "visible";
};
function hide(id) {
    document.getElementById(id).style.visibility = "hidden";
};





