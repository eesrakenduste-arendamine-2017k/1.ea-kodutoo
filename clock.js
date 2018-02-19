//setInterval(function(){
//	var date = new Date();
//	var format = [
//	(date.getHours()<10 ? "0"+date.getHours():date.getHours()),
//	(date.getMinutes()<10 ? "0"+date.getMinutes():date.getMinutes()),
//	(date.getSeconds()<10 ? "0"+date.getSeconds():date.getSeconds())
//	].join(":");
//	document.getElementById('clock').innerHTML = format;
//}, 10) ;
// Avalikud muutujad
let clockContainer // = null

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  console.log(clockContainer)

  startClock()

	document
    .querySelector('#size-up')
    .addEventListener('click', sizeUp)

	document
    .querySelector('#size-down')
    .addEventListener('click', sizeDown)
	
	document
    .querySelector('#collor-blue')
    .addEventListener('click', collorBlue)
	
	document
    .querySelector('#collor-red')
    .addEventListener('click', collorRed)
	
	document
    .querySelector('#position-left')
    .addEventListener('click', positionLeft)
	
	document
    .querySelector('#position-right')
    .addEventListener('click', positionRight)
}

function sizeUp () {
  console.log('+')
  clockContainer.style.fontSize = '100px'
}
function sizeDown () {
  console.log('-')
  clockContainer.style.fontSize = '50px'
}
function collorBlue () {
  console.log('-')
  clockContainer.style.backgroundColor = "blue"
}
function collorRed () {
  console.log('-')
  clockContainer.style.backgroundColor = "red"
}
function positionLeft () {
  console.log('-')
  clockContainer.style.left = '49%'
}
function positionRight () {
  console.log('-')
  clockContainer.style.left = '51%'
}

function startClock () {
  updateClock()

  window.setInterval(function () {
    updateClock()
  }, 1000)
}

function updateClock() {
  const date = new Date()

  clockContainer.innerHTML = date   
}