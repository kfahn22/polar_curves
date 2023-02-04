// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// http://paulbourke.net/geometry/chrysanthemum/


// https://github.com/antiboredom/p5.patgrad

const flowers = [];
let angle = 0;
let beta = 0;
const p = 4;
const q = 3;
let gradient;
let c1,c2,c3,c4;



function setup() {
  createCanvas(600, 600);
  let c1 = color(236,179,255, 100);
  let c2 = color('#730099');
  gradient = createRadialGradient(0, 40)
  gradient.colors(0, c2, 0.75, c1);
 
  // center of flower is 30px offset from center of circle
  for (let i = 0; i < 2; i++) {
    flowers.push(new Flower(70 + i*100, 275, 5, 2, 3));
  }
}

function draw() {
  angleMode(DEGREES);
  background(204,255,255, 100);
  for (let i = 0; i < 2; i++) {
    gradient.colors(0, c1, 0.75, c2);
    fillGradient(gradient);
    push();
    noStroke();
    translate(100+i*100, 275);
    ellipse(0, 0, 80, 80);
    pop();
    flowers[i].oneFlower();
    flowers[i].show();
  }
}

function mousePressed() {
  save('chysanthemum.jpg');
}