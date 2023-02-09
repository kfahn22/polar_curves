// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// http://paulbourke.net/geometry/chrysanthemum/

// Note that this sketch is enery intensive!!

let x = 200;
let y = 200;
let h = 4;

let flowers = [];
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
  let flh = 4*h;
  
  for (let i = 0; i < 25; i++) {
    flowers.push(new Flower(25*i + random(50), height*0.5 + random(80), 1, 1, random(h*.5, h), flh, random(flowerColors)));
  }
 
    // f1 = new Flower(random(width), height/2 + random(30), 1, 1, h, flh, random(flowerColors));
    // f2 = new Flower(x, y, 1, 1, h, flh, random(flowerColors));
}

function draw() {
  angleMode(DEGREES);
  background(204, 255, 255, 100);
    // f1.oneFlower();
    // f1.oneLeaf();
    // f1.show();
    // f2.oneFlower();
    // f2.oneLeaf();
    // f2.show();
  for (let i = 0; i < 25; i++) {
    flowers[i].oneFlower();
    flowers[i].oneLeaf();
    flowers[i].show();
  }
}

// function mousePressed() {
//   save('chysanthemum.jpg');
// }