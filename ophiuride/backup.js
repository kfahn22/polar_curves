// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// Ophiuride curve equation from Wolfram Alpha

const ocurve = [];
let theta = - 70; //PI/2;
const Y_AXIS = 1;
const X_AXIS = 2;
let a = 1.5;
let b = 0.2;

function setup() {
  createCanvas(800, 450);
  angleMode(DEGREES);
}

function draw() {
  background(59);
  let c1 = color('#FECEF1');
  let c2 = color('#324998');
  let c3 = color('#F063A4');
  //let col2 = setGradient(0, 0, 800, 450, c2, c1, Y_AXIS);
  
  translate(width / 2, height * 4.5/8);
  //stroke(255, 255, 255, 50);
  strokeWeight(1);
  noFill();

  // Equations for ophiuride curve
  let sc = 30;
  let r = ( b * sin(theta) -  a * cos(theta) ) * tan(theta);
  const x = sc * r * cos(theta);
  const y = -sc * r * sin(theta);
  ocurve.push(createVector(x, y));

  // So that it stops
  if (theta > 85) {
    noLoop();
  }
  
  beginShape();
  for (let v of ocurve) {
    strokeWeight(2);
    stroke(255);
    vertex(v.x, v.y);
  }
  endShape();
  theta += 2;
}

function mousePressed() {
  save('ophiuride.jpg');
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 0.7);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
