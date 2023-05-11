// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// Seifert curve equations from https://www.wolframalpha.com/input/?i=seiffert%27s+spherical+spiral
// Not right b/c I am not using elliptical sn and cn functions
// http://math.soimeme.org/~arunram/Resources/EllipticFunctionsAsTrigonometry.html

const spherical = [];
let angle = 0;
let frames = 60;
let a = 0.21;
let n = 15;

function keyPressed() {
  if (key == "s") {
    const options = {
      units: "frames",
      delay: 0
    }
    saveGif("spherical_fan.gif", frames, options);
  }
}

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
  colorMode(HSL);
  let r = width/8;
  for (let i = 0; i < n; i++)
  {
    c = color(264, 100, (n-i)*8);
    spherical.push(new Spherical(0, 0, a, r + i*8, i*45, c));}
}

function draw() {
  background(150, 50, 40);
  rotateY(angle);
  rotateX(angle);
  noFill();
  for (let i = 0; i < spherical.length; i++)
  {spherical[i].oneCurve();
  spherical[i].show();}
  angle += 360 / frames;
  }

function mousePressed() {
  save('fan.jpg');
}