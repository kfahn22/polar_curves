// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// Equations from:
// https://mathworld.wolfram.com/topics/PlaneCurves.html
// cannibus curve

let l;
let x = 0;
let y = 0;
let sc = 40;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  l = new Leaf(0, 0,40);
}

function draw() {
  background(204, 255, 255, 100);
  translate(width/2, height*7/8);
  stroke(59,93,89)
  strokeWeight(1);
  fill(59,93,89);
  l.oneLeaf();
  l.show();
}
function mousePressed() {
  save('leaf.jpg');
 }