// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// http://paulbourke.net/geometry/chrysanthemum/


// https://github.com/antiboredom/p5.patgrad

const flowers = [];
const stamens = [];
let angle = 0;
let beta = 0;
const p = 4;
const q = 3;
let gradient;
let c1,c2;
let flowerColors = [
  [[255, 179, 235], [255, 77, 207], [77, 0, 57]],
  [[204, 204, 255], [77, 77, 207], [0, 0, 153]],
  [[255, 204, 179], [255, 119, 51], [179, 60, 0]],
  [[255, 240, 179], [255, 214, 51], [179, 143, 0]],
  [[224, 179, 255], [184, 77, 255], [92, 0, 255]],
  [[255, 179, 179], [255,102, 102], [179, 0, 0]],
]


function setup() {
  createCanvas(600, 600);
  let c = color(random(200, 255), 0, random(200, 255));
  // center of flower is 30px offset from center of circle
  for (let i = 0; i < 10; i++) {
    flowers.push(new Flower(70 + i*100, 275, 5, 2, 3, random(flowerColors)));
    stamens.push(new Stamen());
  }
}

function draw() {
  angleMode(DEGREES);
  //blendMode(MULTIPLY);
  background(204,255,255, 100);
  for (let i = 0; i < 2; i++) {
    //fillGradient(gradient);
    fill(204,0,153, 100)
    push();
    noStroke();
    translate(100+i*100, 275);
    //ellipse(0, 0, 80, 80);
    pop();
    flowers[i].oneFlower();
    flowers[i].show();
  }
  for (let i = 0; i < 10; i++) {
    push();
    noStroke();
    translate(100+i*100, 50);
    pop();
    stamen[i].show();
  }
}

function mousePressed() {
  save('chysanthemum.jpg');
}