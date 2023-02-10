// Code base from Daniel Shiffman's Heart Curve and Phyllotaxis coding challenges
// https://thecodingtrain.com/challenges/134-heart-curve

// Chrysantemum curve formula from Paul Bourke
// http://paulbourke.net/geometry/chrysanthemum/


let fh = 4.5; // scale for flower
const Y_AXIS = 1;
const X_AXIS = 2;

let flowers = [];

// 80%, 60%, 40%
let flowerColors = [
  [
    [255, 153, 153],
    [255, 51, 51],
    [204,0,0]
  ],
  [
    [255,187,153],
    [255,119,51],
    [204,68,0]
  ],
  [
    [255, 221,153],
    [255,187,51],
    [204,136,0]
  ],
  [
    [255, 153, 204],
    [255, 51, 153],
    [204,0,102]
  ],
  [
    [255,214,153],
    [255,173,51],
    [204,122,0]
  ],
  [
    [230,179,204],
    [204,102,151],
    [153, 51,100]
  ],
  [
    [255, 153, 255],
    [255, 51, 255],
    [204,0,204]
  ],
  [
    [255,235,153],
    [255,214,51],
    [204,163,0]
  ],
  [
    [255, 153, 187],
    [255,51,119],
    [204,0,68]
  ],
  [
    [255, 153, 204],
    [255, 51, 153],
    [204,0,102]
  ],
  [
    [255, 214, 153],
    [255, 173, 51],
    [204,122, 0]
  ],
]


function setup() {
  createCanvas(600, 400);
  let lf = 7 * fh;  // scale for leaves

  for (let i = 0; i < 18; i++) {
    flowers.push(new Flower(30 * (i+1) + random(26), height * 0.34 + random(100), 1, 1, random(fh * .75, fh), lf, random(flowerColors)));
  }
  // randomize the order of the flowers
  shuffle(flowers, true);
}

function draw() {
  angleMode(DEGREES);
  let c1 = color(153,235, 255);
  let c2 = color(153,255,221);
  let c3 = color(0, 51, 0);
  setGradient(0, 0, 600, 200, c1, c2, Y_AXIS);
  setGradient(0, 200, 600, 400, c2, c3, Y_AXIS);

  //Add flowers
  for (let i = 0; i < 18; i++) {
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

function mousePressed() {
  save('chrysanthemum_garden.jpg');
}