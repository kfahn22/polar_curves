// Code base from Daniel Shiffman's Heart Curve coding challenge

// Hypocycloid curve equation from Wolfram Alpha
// https://mathworld.wolfram.com/Hypocycloid.html

const hcurve = [];
let a = 9;
let b = 3;
const sc = 5;
let theta = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  // if a/b is irrational, curve won't close
  // let b = b * sqrt(2);
  //b = b * PI;
  let d = a - b;
  let c = color(255, 0, 0);
  hcurve.push(new Hypocycloid(width / 2, height / 2, a, b, sc));
}

function draw() {
  background(15, 16, 32);
  fill(255, 0, 0);

  hcurve[0].oneCurve(theta);
  hcurve[0].show();
  theta += 5;
}

function mousePressed() {
  save("hypocycloid.jpg");
}
