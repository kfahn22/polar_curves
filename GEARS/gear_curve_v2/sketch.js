// Code base from Daniel Shiffman's Heart Curve coding challenge

// Gear curve equation from Wolfram Alpha
// https://mathworld.wolfram.com/GearCurve.html

const gcurve = [];
// a and b are parameters that control the shape of the curve
let a = 1; // as a increase tends toward a circle
let b = 10; // as b decreases the spokes get longer and start to curve
let spokes = 10; // number of spokes between
let n = 20; // number of gears to draw
let sc = 20; // scale: 20

function setup() {
  createCanvas(600, 600);
  colorMode(HSL, 360, 100, 100, 100);
  angleMode(DEGREES);
  for (let i = 0; i < n; i++) {
    gcurve.push(
      new Gear(width / 2, height / 2, a, b, spokes, sc + i * 10, 30, 3)
    );
  }
}

function draw() {
  background(280, 100, 80, 100);

  for (let i = 0; i < gcurve.length; i++) {
    gcurve[i].oneCurve();
    gcurve[i].show();
  }
}

function mousePressed() {
  save("gear.jpg");
}
