// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// Resources for butterfly equations
// Paul Bourke.net (also has 3d version)



// http://paulbourke.net/geometry/chrysanthemum/

//r = 5 (1 + sin(11 u / 5)) - 4 sin4(17 u / 3) sin8(2 cos(3 u) - 28 u)  . . . where 0 <= u <= 21 pi
// and in Cartesian coordinates


const flower = [];
const d = [];
let a = 0;
const Y_AXIS = 1;
const X_AXIS = 2;
const innerRadius = 10;
const outerRadius = 150;

function setup() {
  createCanvas(800, 450);
}

function draw() {
  //background(59);
  
  let c1 = color('#FECEF1');
  let c2 = color('#bf1363');
  let c3 = color(255);
  let c4 = color('#eec0c6');
  let c5 = color('#e58c8a');
  let c6 = color('#91171f');
  let c7 = color('#ff4d80');
  let c8 = color('#ff3e41');
  let c9 = color('#df367c');
  let c10 = color('#883955');
  
  //let col = setGradient(0, 0, 800, 450, c2, c1, Y_AXIS);
  let gradient = createRadialGradient(innerRadius, outerRadius, width/2, height/2);
  //gradient.colors(0, c1, 0.25, c2, 0.75, c3);
  gradient.colors(0, c7, 0.2, c8, 0.4, c6, 0.6, c9, 0.8, c10);
  backgroundGradient(gradient);
  translate(width / 2, height /2);
  noFill();
  
  // Equations for butterfly curve
  let sc = 10;
  let r = 5 * (1 +sin(11 * a / 5)) - 4 * pow(sin(17 * a / 3), 4) + pow(sin(2 *cos(3 * a) - 28 * a), 8)
  const x = sc * r * cos(a);
  const y = -sc * r * sin(a);
  flower.push(createVector(x, y));

  // So that it stops
  if (a > 21 * PI) {
    noLoop();
  }
  
  beginShape();
  for (let v of flower) {
    strokeWeight(1);
    stroke(255);
    vertex(v.x, v.y);
  }
  endShape();
  a += 0.01;
}

function mousePressed() {
  save('chysanthemum.jpg');
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
