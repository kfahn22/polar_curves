// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// https://www.wolframalpha.com/input?i=spherical+spiral&assumption=%22ClashPrefs%22+-%3E+%7B%22SpaceCurve%22%2C+%22SphericalSpiral%22%7D

const spiral = [];
let rx = 300;
let ry = 150;
let rz = 100;
let a = 0.9;
let w = 50;
let b = 10;
let angle = 0;
let n = 50;
let frames = 60;

function keyPressed() {
  if (key == "s") {
    const options = {
      units: "frames",
      delay: 0
    }
    saveGif("spiral.gif", frames, options);
  }
}


function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  colorMode(HSL);
  for (let i = 0; i < n; i++)
  {
    let br = (n-i)*5;
    let l = map(br, 0, 100, 40, 80);
    let c = color(288,100,l);
    spiral.push(new Spiral(a, b, w, rx, ry, rz, i*10, c));
  }
}

function draw() {
  background(240, 60, 40);
  rotateY(angle);
  rotateX(angle);
  strokeWeight(1);
  noFill();
  
  for (let i = 0 ; i < spiral.length; i++)
  {spiral[i].oneCurve();
  spiral[i].show();}
  angle += 360 / frames;
}

function mousePressed() {
  save('spiral.jpg');
}