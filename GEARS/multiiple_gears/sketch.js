// Code base from Daniel Shiffman's Heart Curve coding challenge

// Gear curve equation from Wolfram Alpha
// https://mathworld.wolfram.com/GearCurve.html

const knobs = [];
let num = 1;
let angle = 0;

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  colorMode(RGB);
  for (let i = 0; i < num; i++) {
    knobs.push(
      new Gears(width/2, height/2)
    );
  }
  for (let i = 0; i < knobs.length; i++) {
    knobs[i].addGears();
  }
}

function draw() {
  colorMode(RGB)
  background(0);
  //rotateX(angle);
  // rotateY(angle);
  rotateZ(angle); // only use this if you want 2D rotating gear
  translate(-width / 2, -height / 2);
  for (let i = 0; i < knobs.length; i++) {
    // knobs[i].addGears();
    knobs[i].showCurves(angle);
  }
  angle += 0.5;
}

function mousePressed() {
  save("gear.jpg");
}
