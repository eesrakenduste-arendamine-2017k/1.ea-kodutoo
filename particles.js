/*
PARTICLES.JS
Provides simple and passive JavaScript particles
that use the HTML5 canvas.
Built for personal reasons, might be of some
use to others.
 - Mihkel Põder, 2017
*/
var particles = [];
var amountOf;
var mainCanvas;
var maxSize = 35;
var opacityCoef = 0.75;
var defaultaX = 1.2;
var defaultX = 1;
var defaultSpeed = 1;
var particlesUpdateAllowed = true;

class Particle {
  constructor() {
    this.ax = Math.random() * defaultaX;
    this.ay = Math.random()*4;
    this.x = defaultX;
    this.y = self.innerHeight + 120;
    this.r = Math.floor((Math.random() * maxSize) + 1);
    this.opacity = Math.random()*opacityCoef;
  }
}

function particles_setUp(amount) {
  mainCanvas = document.getElementById("mainCanvas");
  mainCanvas.width = self.innerWidth;
  mainCanvas.height = self.innerHeight;
  amountOf = amount;
  for (a = 0; a<amount; a++) {
    particles.push(new Particle());
  }
}


function particles_remove() {
  particles.splice(-1);
  amountOf -= 1;
}

function particles_add() {
  particles.push(new Particle());
  amountOf += 1;
}

function particles_Update() {
  if (particlesUpdateAllowed){
    for (a = 0; a<amountOf; a++) {
    particles[a].opacity = particles[a].opacity * 0.995;
    particles[a].r = particles[a].r * 0.998;
    var directionx = Math.floor((Math.random()*2)+1);
    var directiony = Math.floor((Math.random()*2)+1);
    switch (directionx) {
      case 1:
      particles[a].ax += Math.random()*0.1;
      break;
      case 2:
      particles[a].ax -= Math.random()*0.1;
      break;
    }
    particles[a].x += particles[a].ax;
    particles[a].y -= particles[a].ay;
    if (particles[a].x < 0) {
      particles[a].x += 2;
      particles[a].ax = particles[a].ax * -0.5;
    }
    if (particles[a].x > self.innerWidth) {
      particles[a].x -= 2;
      particles[a].ax = particles[a].ax * -0.5;
    }
    if (particles[a].y < -60 || particles[a].opacity < 0.02) {
      particles[a].ay = (Math.random()*4) * defaultSpeed;
      particles[a].ax = (Math.random() * defaultaX) * defaultSpeed;
      particles[a].y = self.innerHeight + 120;
      particles[a].x = defaultX;
      particles[a].r = Math.floor((Math.random() * maxSize) + 1);
      particles[a].opacity = Math.random()*opacityCoef;
    }

  }
}
}

function particles_Render() {
  particles_Update();
  var current_drawable = mainCanvas.getContext("2d");
  current_drawable.clearRect(0,0,mainCanvas.width,mainCanvas.height);
  for (a = 0; a<amountOf; a++) {
    var currentOpacity = particles[a].opacity;
    current_drawable.globalAlpha = particles[a].opacity;
    current_drawable.fillStyle = "rgba(255,255,255, 0.2)";
    current_drawable.strokeStyle = "rgba(255,255,255, 0)";
    current_drawable.opacity = particles[a].opacity;
    current_drawable.beginPath();
    current_drawable.arc(particles[a].x, particles[a].y, particles[a].r, 0, 2*Math.PI);
    current_drawable.stroke();
    current_drawable.fill();
    //console.log("Rendered particle "+a+" with x/y "+particles[a].x+"/"+particles[a].y+".");
  }

}
