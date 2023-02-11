// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// http://paulbourke.net/geometry/chrysanthemum/

//r = 5 (1 + sin(11 u / 5)) - 4 sin4(17 u / 3) sin8(2 cos(3 u) - 28 u)  . . . where 0 <= u <= 21 pi
// and in Cartesian coordinates
// (5,2) (4,3)

const flowers = [];
let angle = 0;
let beta = 0;
const p = 4;
const q = 3;
let flowerColors = ['#e8b3ff', '#b300b3', '#660066', '#ba1aff', '#a100e6', '#8f00cc', '#6b0099', '#4f2669'];

function setup() {
  createCanvas(600, 600, WEBGL);
  let c1 = color('#b300b3');
  let c2 = color('#ba1aff');
  let c3 = color('#660066');
  let c4 = color('#a100e6');
  flowers.push(new Flower(0, 0, 5, 2, 10, c1));
  flowers.push(new Flower(0, 25, 5, 2, 14, c3));
  flowers.push(new Flower(0, 50, 5, 2, 18, c2));
  //flowers.push(new Flower(0, 60, 5, 2, 12, c4));
}

function draw() {
  angleMode(DEGREES);
  background(flowerColors[6]);
  background(255, 0, 0);
  rotateX(60);
  //rotateY(20);
  //angle += 0.01;
  noFill();

  for (let i = 0; i < flowers.length; i++) {
    flowers[i].oneFlower();
    flowers[i].show();
  }
}

function mousePressed() {
  save('chysanthemum.jpg');
}