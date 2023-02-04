// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// Resources for butterfly equations
// Paul Bourke.net (also has 3d version)



// http://paulbourke.net/geometry/chrysanthemum/

//r = 5 (1 + sin(11 u / 5)) - 4 sin4(17 u / 3) sin8(2 cos(3 u) - 28 u)  . . . where 0 <= u <= 21 pi
// and in Cartesian coordinates

const chrysanthemums = [];
const flower = [];
const stamens = [];
//const d = [];
let a = 0;
const innerRadius = 10;
const outerRadius = 150;

//#d980ff //1
// #c94dff //2

let flowerColors = ['#e8b3ff', '#b300b3', '#660066', '#ba1aff', '#a100e6', '#8f00cc', '#6b0099', '#4f2669']

function setup() {
  createCanvas(800, 450);
  let c1 = color('#b300b3');

  for (i=0; i <25; i++)
  {
    stamens.push(new Stamen());
    chrysanthemums.push(new Chrystanthemum(0, 0, 5, 2, 12));
  }
}

function draw() {

  let c1 = color(flowerColors[0]);
  let c2 = color(flowerColors[1]);
  let c3 = color(flowerColors[2]);
  let c4 = color(flowerColors[6]);
  let c5 = color(flowerColors[4]);
  let c6 = color(flowerColors[5]);
  let c7 = color(flowerColors[7]);

  //let col = setGradient(0, 0, 800, 450, c2, c1, Y_AXIS);
  let gradient = createRadialGradient(innerRadius, outerRadius, width / 2, height / 2);
  //gradient.colors(0, c1, 0.25, c2, 0.75, c3);
  //gradient.colors(0, c2, 0.2, c3, 0.4, c4, 0.6, c5, 0.8, c6, 0.9, c7);
  gradient.colors(0, c2, 0.25, c3, 0.35, c4, 0.5, c6, 0.85, c7);
  backgroundGradient(gradient);
  translate(width / 2, height / 2);
  noFill();

  // Equations for chrysanthemum curve
  let sc = 12;
  let r = 5 * (1 + sin(11 * a / 5)) - 4 * pow(sin(17 * a / 3), 4) + pow(sin(2 * cos(3 * a) - 28 * a), 8)
  const x = sc * r * cos(a);
  const y = -sc * r * sin(a);
  flower.push(createVector(x, y));

  // So that it stops
  if (a > 21 * PI) {
    noLoop();
  }

  beginShape();
  for (let v of flower) {
    strokeWeight(1.5);
    stroke(255, 255, 255, 150);
    vertex(v.x, v.y);
  }
  endShape();
  //chrysanthemums[0].oneFlower();
  chrysanthemums[0].show();
  a += 0.01;
  for (i=0;i<25;i++)
  {
    stamens[i].show();
  }
}

function mousePressed() {
  save('chysanthemum.jpg');
}