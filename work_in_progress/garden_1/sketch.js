// Fractal Trees - Object Oriented
// Coding Train / Daniel Shiffman
// https://thecodingtrain.com/challenges/15-object-oriented-fractal-trees

// https://youtu.be/fcdNSZ9IzJM
// Code from challenge: https://editor.p5js.org/codingtrain/sketches/JDT5wrxVj

let tree = [];
let leaves = [];
let flower = [];
let h = 400;
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
  createCanvas(400, 400);
  angleMode(DEGREES);
  // let a = createVector(width / 2, h);
  // let b = createVector(width / 2, h - 100);

  for (i = 0; i < 2; i++) {
    tree.push(new Branch(200, height));
  }

  let lfBranchTip = tree[0].branch(1);
  let rtBranchTip = tree[0].branch(-1);
  // branchTips.push(tree[0].branch(1));
  // branchTips.push(tree[0].branch(-1));
  console.log(lfBranchTip.x);
  console.log(rtBranchTip.x);
  // end.push(tree[2].branch(0, 0.2));
  // end.push(tree[3].branch(60, 0.2));
  // //console.log(end[0]);
  //leaves.push(new Leaf(260, 260, 4));
 leaves.push(new Leaf(lfBranchTip.x, lfBranchTip.y, 10));
  // //flower.push(new Flower(end[1].x, end[1].y, 4, random(flowerColors)));
  leaves.push(new Leaf(rtBranchTip.x, rtBranchTip.y, 10));
}

function draw() {
  background(51);
  let c1 = color(153, 235, 255);
  let c2 = color(153, 255, 221);
  let c3 = color(0, 51, 0);
  setGradient(0, 0, 400, 200, c1, c2, Y_AXIS);
  setGradient(0, 200, 400, 400, c2, c3, Y_AXIS);
  for (var i = 0; i < tree.length; i++) {
    //tree[i].branch(1);
    tree[i].show(i);

  }
  for (let i = 0; i < 1; i++) {
    leaves[i].oneLeaf();
    if (i % 2 == 0) {
      leaves[i].renderLeaf(30);
    } else {
      leaves[i].renderLeaf(-80);
    }
  }
  //   flower[0].oneFlower();
  //   flower[0].show();
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