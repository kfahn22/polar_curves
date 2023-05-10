// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// https://www.wolframalpha.com/input?i=concho-spiral

const slinky = [];
let theta = 0;
const Y_AXIS = 1;
const X_AXIS = 2;
let R = 50;
let a = 0.5;
let w = 1;
let h = 1;
let c = 0.5;
let mu = 1.05;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(59);
  //rotateY(90);
  let c1 = color('#FECEF1');
  let c2 = color('#324998');
  let c3 = color('#F063A4');
  //let col2 = setGradient(0, 0, 800, 450, c2, c1, Y_AXIS);
  
  //translate(width / 2, 200);
  //stroke(255, 255, 255, 50);
  strokeWeight(1);
  noFill();

  // Equations for slinky curve
  // const x = (R + a * cos(w*theta)) * cos(theta);
  // const y = (R + a * cos(w*theta)) * sin(theta);
  // const z = h * theta + a * sin(w*theta);
  // concho spiral
  const x = a * pow(mu, theta) * cos(theta);
  const y =  a * pow(mu, theta) * sin(theta);
  const z = c * pow(mu, theta);
  slinky.push(createVector(x, y, z));

  // So that it stops
  if (theta > 100) {
    noLoop();
  }
  
  beginShape();
  for (let v of slinky) {
    strokeWeight(2);
    stroke(255, 255, 255, 50);
    vertex(v.x, v.y, v.z);
  }
  endShape();
  theta += 1;
}

function mousePressed() {
  save('slinky.jpg');
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
