// Code base from Daniel Shiffman's Heart Curve coding challenge

// Seiffert curve equation from Wolfram Alpha
// https://mathworld.wolfram.com/SeiffertsSphericalSpiral.html

const scurve = [];
let s, k; // Define the amplitude (s) and parameter (k)
let sc = 20;
let n = 5;
let angle = 0;
let cnResult;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  // Calculate the Jacobi elliptic functions
  let x = cn(30);
  console.log(x);
}

function draw() {
  background(15, 16, 32);
  rotateZ(angle);
  // for (let i = 0; i < scurve.length; i++) {
  //   scurve[i].oneCurve();
  //   scurve[i].show();
  // }
  angle += 1;
}

function mousePressed() {
  save("ophiuride.jpg");
}
