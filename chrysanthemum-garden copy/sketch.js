// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// http://paulbourke.net/geometry/chrysanthemum/

let x = 200;
let y = 200;
let h = 4;
const Y_AXIS = 1;
const X_AXIS = 2;

let flowers = [];

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
  //gradient = createLinearGradient(120, 400);
  // add some colors
  // at 0% make it lightblue, then at 50% make it pink, and at 100% make it magenta
  let c1 = color(204, 255, 255);
  //let c2 = lerpColor(c1, c3, 0.5);
  let c3 = color(59, 93, 89);
  //gradient.colors(0, c1,  1, c3);
  // center of flower is 30px offset from center of circle
  let flh = 4*h;
  
  for (let i = 0; i < 25; i++) {
    flowers.push(new Flower(25*i + random(50), height*0.35 + random(80), 1, 1, random(h*.5, h), flh, random(flowerColors)));
  }
}

function draw() {
  angleMode(DEGREES);
  let c1 = color(204,255,255);
  let c2 =color(102,255,153);
  //let c3 = color(0,102,0);
  let c3 = color(0,51,0);
  setGradient(0, 0, 600, 200, c1, c2, Y_AXIS);
  setGradient(0, 200, 600, 400, c2, c3, Y_AXIS);
  //backgroundGradient(gradient)


background(204, 255, 255, 100);
  for (let i = 0; i < 25; i++) {
    flowers[i].oneFlower();
    flowers[i].oneLeaf();
    flowers[i].show();
  }
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
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