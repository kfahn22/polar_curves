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
let q = 5;
let frames = 60;

function keyPressed() {
  if (key == "s") {
    const options = {
      units: "frames",
      delay: 0,
    };
    saveGif("GIF/oph.gif", frames, options);
  }
}

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
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
  p += 0.1/frames;
  q += 0.1/frames;
  angle += 360/frames;
}
// function mousePressed() {
//   save('ophiuride.jpg');
// }
