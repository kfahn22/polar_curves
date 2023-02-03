// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// Resources for butterfly equations
// Paul Bourke.net (also has 3d version)



// http://paulbourke.net/geometry/chrysanthemum/

//r = 5 (1 + sin(11 u / 5)) - 4 sin4(17 u / 3) sin8(2 cos(3 u) - 28 u)  . . . where 0 <= u <= 21 pi
// and in Cartesian coordinates
// (5,2) (4,3)

const flower = [];
let angle = 0;
let beta = 0;
const p = 4;
const q = 3;
const innerRadius = 10;
const outerRadius = 150;
let flowerColors = ['#e8b3ff', '#b300b3', '#660066', '#ba1aff', '#a100e6', '#8f00cc', '#6b0099','#4f2669'];

function setup() {
  createCanvas(600, 600, WEBGL);
}

function draw() {
  background(flowerColors[6]);
  angleMode(DEGREES);
  rotateX(angle);
  angle += 0.01;
  
  noFill();
  
  // Equations for chrysanthemum curve
  let sc = 10;
  let phi = p * beta;
  let theta = q * beta;
  
  let r = 5 * (1 + sin(11 * beta / 5)) - 4 * pow(sin(17 * beta / 3), 4) + pow(sin(2 * cos(3 * beta) - 28 * beta), 8)
  x =  r * cos(theta) * (sc + cos(phi));
  y = -r * sin(theta) * (sc + cos(phi));
  z =  r * sin(phi);
  flower.push(createVector(x, y, z));

  // So that it stops
  if (beta > 12 * PI) {
  //if (beta > 21 * PI) {
    noLoop();
  }

  beginShape();
  for (let v of flower) {
    strokeWeight(1);
    stroke(255);
    vertex(v.x, v.y, v.z);
  }
  endShape();
  beta += 0.01;
}

function mousePressed() {
  save('chysanthemum.jpg');
}

// function setGradient(x, y, w, h, c1, c2, axis) {
//   noFill();

//   if (axis === Y_AXIS) {
//     // Top to bottom gradient
//     for (let i = y; i <= y + h; i++) {
//       let inter = map(i, y, y + h, 0, 0.7);
//       let c = lerpColor(c1, c2, inter);
//       stroke(c);
//       line(x, i, x + w, i);
//     }
//   } else if (axis === X_AXIS) {
//     // Left to right gradient
//     for (let i = x; i <= x + w; i++) {
//       let inter = map(i, x, x + w, 0, 1);
//       let c = lerpColor(c1, c2, inter);
//       stroke(c);
//       line(i, y, i, y + h);
//     }
//   }
// }