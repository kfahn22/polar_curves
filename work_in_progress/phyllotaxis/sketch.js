// Daniel Shiffman
// https://thecodingtrain.com/challenges/30-phyllotaxis

// Code for: https://youtu.be/KWoJgHFYWxY

// Trying to get a spiral of flowers not successful yet

let n = 10;
// let c = 6;
// let num = 4;
//let points = [];
let flowers = [];

const Y_AXIS = 1;
const X_AXIS = 2;
let flowerColors = [
    [
        [255, 153, 153],
        [255, 51, 51],
        [204, 0, 0]
    ],
    [
        [255, 187, 153],
        [255, 119, 51],
        [204, 68, 0]
    ],
    [
        [255, 221, 153],
        [255, 187, 51],
        [204, 136, 0]
    ],
    [
        [255, 153, 204],
        [255, 51, 153],
        [204, 0, 102]
    ],
    [
        [255, 214, 153],
        [255, 173, 51],
        [204, 122, 0]
    ],
    [
        [230, 179, 204],
        [204, 102, 151],
        [153, 51, 100]
    ],
    [
        [255, 153, 255],
        [255, 51, 255],
        [204, 0, 204]
    ],
    [
        [255, 235, 153],
        [255, 214, 51],
        [204, 163, 0]
    ],
    [
        [255, 153, 187],
        [255, 51, 119],
        [204, 0, 68]
    ],
    [
        [255, 153, 204],
        [255, 51, 153],
        [204, 0, 102]
    ],
    [
        [255, 214, 153],
        [255, 173, 51],
        [204, 122, 0]
    ],
]

function setup() {
    createCanvas(600, 600);
    angleMode(DEGREES);
    for (let i = 0; i < n; i++) {
        let sc = map(i, 0, n, 0, 10);
        rotate((i+5) * 0.3);
        let a = i * 137.5;
        let r = sc * sqrt(i);
        let x = r * cos(a);
        let y = r * sin(a);
        flowers.push(new Flower(x, y, sc*0.1, random(flowerColors)));
    } 
    reverse(flowers);
}

function draw() {
    
    let c1 = color(153, 235, 255);
    let c2 = color(153, 255, 221);
    let c3 = color(0, 51, 0);
    background(c1);
    // setGradient(0, 0, 600, 200, c1, c2, Y_AXIS);
    // setGradient(0, 200, 600, 400, c2, c3, Y_AXIS);
  
    translate(width / 2, height / 2);
    for (let i = 0; i < flowers.length; i++) {
        flowers[i].oneFlower();
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