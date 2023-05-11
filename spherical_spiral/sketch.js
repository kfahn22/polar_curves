// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4


// Seifert curve equations from https://www.wolframalpha.com/input/?i=seiffert%27s+spherical+spiral
// http://math.soimeme.org/~arunram/Resources/EllipticFunctionsAsTrigonometry.html

const spherical = [];
let angle = 0;
let a = 0.21;
let r = 140;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  let c1 = color(244, 51, 171);
  let c2 = color(203,4,165);
  let c3 = color(147, 70, 131);
  let c4 = color(101, 51, 77);
  spherical.push(new Spherical(0, 0, a, 25, 0, c1));
  spherical.push(new Spherical(0, 0, a, 50, 45, c2));
  spherical.push(new Spherical(0, 0, a, 100, 90, c3));
  spherical.push(new Spherical(0, 0, a, 150, 135, c4));
}

function draw() {
  background(45,17,21);
  rotateY(angle);
  rotateX(angle);
  noFill();
  for (let i = 0; i < 4; i++)
  {spherical[i].oneCurve();
  spherical[i].show();}
  angle += 1;
  }

function mousePressed() {
  save('fan.jpg');
}