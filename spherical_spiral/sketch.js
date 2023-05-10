// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4


// Seifert curve equations from https://www.wolframalpha.com/input/?i=seiffert%27s+spherical+spiral
// http://math.soimeme.org/~arunram/Resources/EllipticFunctionsAsTrigonometry.html
const spherical = [];
let angle = 0;
let theta = 0;
const Y_AXIS = 1;
const X_AXIS = 2;
let r = 140;
let a = 0.21;


function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background('#F063A4');
  rotateY(angle);
  rotateX(angle);
  let c1 = color('#FECEF1');
  let c2 = color('#324998');
  let c3 = color('#F063A4');
  //let col2 = setGradient(0, 0, 800, 450, c2, c1, Y_AXIS);
  
  //translate(width / 2, 200);
  //stroke(255, 255, 255, 50);
  strokeWeight(1);
  noFill();

  // Equations for spherical curve
  const x = r * sin(theta/(pow(a, 2))) * cos(a*theta);
  const y = r * sin(theta/(pow(a, 2))) * sin(a*theta);
  const z = r * cos(theta/(pow(a, 2)));
  spherical.push(createVector(x, y, z));
  // const x = r *  cos(a*theta) / (sqrt(1 + pow(cos(theta), 2)));
  // const y = r * sin(a*theta) / sqrt(1 + cos(theta) * cos(theta)); 
  // const z = r * cos(a*theta) * sin(theta) / sqrt(1 + cos(theta) * cos(theta)); 
  // spherical.push(createVector(x, y, z));
  //So that it stops

  // theta = 8, 12 x 16
  if (theta < 880) {
    theta += 8;
  }
  
  stroke(255, 255, 255, 10);
  beginShape();
  for (let v of spherical) {
    strokeWeight(0.5);
    vertex(v.x, v.y, v.z);
  }
  endShape();
  
  angle += 1;
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
