// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// Resources for butterfly equations
// Paul Bourke.net (also has 3d version)



// http://paulbourke.net/geometry/chrysanthemum/

//r = 5 (1 + sin(11 u / 5)) - 4 sin4(17 u / 3) sin8(2 cos(3 u) - 28 u)  . . . where 0 <= u <= 21 pi
// and in Cartesian coordinates
// (5,2) (4,3)

const flowers = [];
let angle = 0;
let beta = 0;
const p = 4;
const q = 3;
let flowerColors = ['#e8b3ff', '#b300b3', '#660066', '#ba1aff', '#a100e6', '#8f00cc', '#6b0099','#4f2669'];

function setup() {
  createCanvas(600, 600, WEBGL);
  flowers.push(new Flower(0, 0, 5, 2, 10));
}

function draw() {
  angleMode(DEGREES);
  background(flowerColors[6]);
  rotateX(angle);
  angle += 0.01;
  noFill();
  
  flowers[0].oneFlower();
  flowers[0].show();

  beta += 1;
}

function mousePressed() {
  save('chysanthemum.jpg');
}