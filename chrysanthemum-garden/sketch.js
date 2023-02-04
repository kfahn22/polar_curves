// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// http://paulbourke.net/geometry/chrysanthemum/


// https://github.com/antiboredom/p5.patgrad

const flowers = [];
const stamens = [];
const ferns = [];
let angle = 0;
let beta = 0;
const p = 4;
const q = 3;
let gradient;
let c1, c2;
let flowerColors = [
  [
    [255, 179, 235],
    [255, 77, 207],
    [77, 0, 57]
  ],
  [
    [204, 204, 255],
    [77, 77, 207],
    [0, 0, 153]
  ],
  [
    [255, 204, 179],
    [255, 119, 51],
    [179, 60, 0]
  ],
  [
    [255, 240, 179],
    [255, 214, 51],
    [179, 143, 0]
  ],
  [
    [224, 179, 255],
    [184, 77, 255],
    [92, 0, 255]
  ],
  [
    [255, 179, 179],
    [255, 102, 102],
    [179, 0, 0]
  ],
  [
    [255, 153, 255],
    [255, 77, 255],
    [153, 0, 153]
  ],
  [
    [153, 230, 255],
    [51, 204, 255],
    [0, 153, 204]
  ],
  [
    [179, 179, 255],
    [77, 77, 255],
    [0, 0, 179]
  ],
  [
    [255, 153, 230],
    [255, 51, 204],
    [128, 0, 96]
  ],
]


function setup() {
  createCanvas(600, 400);
  // center of flower is 30px offset from center of circle
  for (let i = 0; i < 40; i++) {
    flowers.push(new Flower(random(width-50), 200+random(50), 1, 1, 12, random(flowerColors)));
    //ferns.push(new Fern(width-50, 200+random(50), 50, 200));
   // stamens.push(new Stamen());
  }
}

function draw() {
  angleMode(DEGREES);
  //blendMode(MULTIPLY);
  background(204, 255, 255, 100);
  for (let i = 0; i < 1; i++) {
   // push();
    flowers[i].oneFlower();
    flowers[i].show();
    //ferns[i].show()
   // pop();
  }
 
  // for (let i = 0; i < 10; i++) {
  //   push();
  //   noStroke();
  //   translate(80+i*50, 50);
  //   pop();
  //   stamen[i].show();
  // }
}

function mousePressed() {
  save('chysanthemum.jpg');
}