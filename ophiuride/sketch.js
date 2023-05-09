// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// Ophiuride curve equation from Wolfram Alpha
let flowerColors = [
  [232,179,255],
  [179,0,179],
  [102,0,102],
  [186,26,255],
  [161,0,230],
  [143,0,204],
  [107,0,153],
  [79,38,105],
  [255,149,140],
  [238,133,181]
];
const innerRadius = 10;
const outerRadius = 300;
const ophcurve = [];
let theta = - 70; //PI/2;
const Y_AXIS = 1;
const X_AXIS = 2;
let a = 1.5;
let b = 0.2;
let sc = 30;
let oph1;
let n = 220;


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  let c1 = color(253, 245, 191, 180);
  let c2 = color(180,126,179, 150);
  //let c1 = color(255, 213, 255, 100);
  let c3 = color(146, 209, 195, 75);
  let c4 = color(17,157,164, 50);
  // let c1 = color(239, 195, 245, 180);
  // let c2 = color(250, 166, 255, 100);
  // let c3 = color(115, 83, 186, 60);
  // let c4 = color(47, 25, 95, 20);
  for (let i = 0; i < 0.15*n; i++)
  {
    ophcurve.push(new Ophiuride(random(175, 225), random(175, 225), 1.5, b, 50, random(-180,180), c1, 2));
  }
  for (let i = 0.15*n + 1; i < n*0.5; i++)
  {
    ophcurve.push(new Ophiuride(random(175, 225), random(175, 225), 1.0, b, 100, random(-180,180), c2, 3));
  }
  for (let i = n*0.5 + 1; i < n*0.8; i++)
  {
    ophcurve.push(new Ophiuride(random(175, 225), random(175, 225), 1.0, b, 150, random(-180,180), c3, 6));
  }
  for (let i = n*0.8 + 1; i < n; i++)
  {
    ophcurve.push(new Ophiuride(random(175, 225), random(175, 225), 1.0, b, 300, random(-180,180), c4, 8));
  }
 
}

function draw() {
  //background(15,16,32);
  //background(253,245,191);
  background(10,9,8);
  for (let i = ophcurve.length-1; i > 0; i--)
  {
    ophcurve[i].oneCurve();
    ophcurve[i].show();
}
}

function mousePressed() {
  save('ophiuride.jpg');
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 0.7);
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
