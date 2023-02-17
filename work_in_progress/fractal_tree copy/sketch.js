// Fractal Trees - Object Oriented
// Coding Train / Daniel Shiffman
// https://thecodingtrain.com/challenges/15-object-oriented-fractal-trees

// https://youtu.be/fcdNSZ9IzJM
// Code from challenge: https://editor.p5js.org/codingtrain/sketches/JDT5wrxVj

let tree = [];
let leafCoord = [];
let leaves = [];
let count = 0;

function setup() {
  createCanvas(400, 400);
  let a = createVector(width / 2, height);
  let b = createVector(width / 2, height - 100);
  let root = new Branch(a, b);

  tree[0] = root;
  for (let i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
  count++;

  if (count === 6) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        let leaf = tree[i].end.copy();
        leafCoord.push(leaf);
        leaves.push(new Leaf(leafCoord.x, leafCoord.y), 4);
      }
    }
  }
}

function mousePressed() {
  for (let i = tree.length - 1; i >= 0; i--) {
    if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
    }
    tree[i].finished = true;
  }
  count++;

  if (count === 6) {
    for (var i = 0; i < tree.length; i++) {
      if (!tree[i].finished) {
        let leaf = tree[i].end.copy();
        leafCoord.push(leaf);
        leaves.push(new Leaf(leafCoord.x, leafCoord.y, 4));
      }
    }
  }
 
}

function draw() {
  background(51);

  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
  }

  for (var i = 0; i < leaves.length; i++) {
    leaves[i].oneLeaf();
    leaves[i].renderLeaf();
  }

}