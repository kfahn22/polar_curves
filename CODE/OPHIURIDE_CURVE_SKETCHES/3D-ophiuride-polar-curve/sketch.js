// Code base from Daniel Shiffman's Heart Curve coding challenge

// Ophiuride curve equation from Wolfram Alpha
// https://mathworld.wolfram.com/Ophiuride.html
// (p, q) = (3,7) and n=20 yields a nice "flower-like" curve
// p > q, n = 20, yields rounder, ball shaped collection of curves
// The system is somewhat chaotic in the sense that small changes in parameters
// yield very different curves
let ophcurve = [];
let n = 20;
let angle = 0;
let p = 3;
let q = 7;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  // for (let i = 0; i < n; i++) {
  //   ophcurve.push(new Ophiuride(30 * i, p, q));
  // }
}

function draw() {
  background(0);
  rotateX(angle);
  // rotateY(angle); //
  rotateZ(angle);
  for (let i = 0; i < n; i++) {
    ophcurve.push(new Ophiuride(30 * i, p, q));
  }
  for (let i = ophcurve.length - 1; i > 0; i--) {
    ophcurve[i].oneCurve();
    ophcurve[i].showSphere();
    ophcurve[i].reset();
  }
  ophcurve = [];
  //p += 0.01;
  //q += 0.001;
  angle += 1;
}
// function mousePressed() {
//   save('ophiuride.jpg');
// }
