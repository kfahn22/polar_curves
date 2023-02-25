// Code base from Daniel Shiffman's Heart Curve and Phyllotaxis coding challenges
// https://thecodingtrain.com/challenges/134-heart-curve
// https://thecodingtrain.com/challenges/30-phyllotaxis

// Chrysanthemum curve code from http://paulbourke.net/geometry/chrysanthemum/
//r = 5 (1 + sin(11 u / 5)) - 4 sin4(17 u / 3) sin8(2 cos(3 u) - 28 u)  . . . where 0 <= u <= 21 pi
// and in Cartesian coordinates

const chrysanthemums = [];
const innerRadius = 10;
const outerRadius = 150;

let flowerColors = [
  [232, 179, 255],
  [179, 0, 179],
  [102, 0, 102],
  [186, 26, 255],
  [161, 0, 230],
  [143, 0, 204],
  [107, 0, 153],
  [79, 38, 105]
];

let flowerParameters = [
  [0, 21, 8, 3],
  [0, 2, 4, 2],
  [3, 0, 28, 0],

];

function setup() {
  createCanvas(800, 450);
  angleMode(DEGREES);
  // j = 4, k = 17, l = 28, m = 3 for chrystanthemum curve
  // let j = int(random(0, 4));
  // let k = int(random(11, 17));
  // let l = int(random(0, 28));
  // let m = int(random(0, 3));
  let j = 0;  //int(random(0, 4));
  let k = 11;  //int(random(11, 17));
  let l = 3;  //int(random(0, 28));
  let m = 1;  //int(random(0, 3));
  for (i = 0; i < 1; i++) {
    chrysanthemums.push(new Chrystanthemum(0, 0, 3, 2, 12, j, k, l, m));
  }
}

function draw() {
  let c2 = color(flowerColors[1]);
  let c3 = color(flowerColors[2]);
  let c4 = color(flowerColors[6]);
  let c6 = color(flowerColors[5]);
  let c7 = color(flowerColors[7]);

  let gradient = createRadialGradient(innerRadius, outerRadius, width / 2, height / 2);
  gradient.colors(0, c2, 0.25, c3, 0.35, c4, 0.5, c6, 0.85, c7);
  backgroundGradient(gradient);
  translate(width / 2, height / 2);

  chrysanthemums[0].oneFlower();
  chrysanthemums[0].show();
}

function mousePressed() {
  save('chysanthemum.jpg');
}