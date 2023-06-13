// Code base from Daniel Shiffman's Heart Curve coding challenge

// Gear curve equation from Wolfram Alpha
// https://mathworld.wolfram.com/GearCurve.html

const knobs = [];
const num = 2;
let angle = 0;
const spokes = 8; // number of spokes on the gears
const scale = 0.1;

function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  colorMode(RGB);
 
    knobs.push(new Gears(width/2, height/2, spokes, scale));
    //knobs.push(new Gears(70, 70, spokes, scale));
  
  for (let i = 0; i < knobs.length; i++) {
    knobs[i].addGears();
  }
}

function draw() {
  colorMode(RGB);
  background(0);
  rotateZ(angle);
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
