// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// https://www.wolframalpha.com/input?i=spherical+spiral&assumption=%22ClashPrefs%22+-%3E+%7B%22SpaceCurve%22%2C+%22SphericalSpiral%22%7D

const a = 1;
const b = 0.2;
const e = 2.718;
const n = 10;
let flip = false;
let angle = 0;
let spirals = [];
// let frames = 60;


// function keyPressed() {
//   if (key == "s") {
//     const options = {
//       units: "frames",
//       delay: 0
//     }
//     saveGif("spiral.gif", frames, options);
//   }
// }


function setup() {
  createCanvas(450, 450);
  colorMode(HSL);
  const w = width/2;
  const h = height/2;
 
  for (let i = 0; i < n; i++)
 { 
  spirals[i] = new GoldenSpiral(w + random(-200, 200), h + random(-200, 200), a*(1+i*0.15), b*(1 + 0.01), e, color(int(random(200, 280)), 100, int(random(40, 90)), 10 + i * 5), scale(random(-3, 3)));
  
}
//  for (let i = 11; i < 20; i++)
//  { spirals[i] = new GoldenSpiral(w + random(-2, 2), h + random(-2, 2), a*(1+i*0.15), b, e, color(103, 148, 0, 10 + i * 5));}
//  for (let i = 21; i < 30; i++)
//  { spirals[i] = new GoldenSpiral(w + random(-2, 2), h + random(-2, 2), a*(1+i*0.18), b, e, color(36, 123, 160, 100 + i * 5));}
}

function draw() {
  background(260, 100, 30);
 // translate(width/2, height/2);
//  rotateX(angle);
//  rotateY(angle);
  for (let i = 0; i < spirals.length; i++)
 { 
  spirals[i].spiral();
  spirals[i].show(i);
 }
// angle += 0.1;
}

function spiralOut(i) {
    const x = a * pow(e, b*(i-1)) * cos(i-1);
    const y = a * pow(e, b*(i-1)) * sin(i-1);
    return createVector(x,y); 
}

function flipDirection() {
  let ran = random(1);
  if (ran > 0.5) {
    flip = true;
  } else {
    flip = false;
  }
  return flip;
}

function mousePressed() {
  save('spiral.jpg');
}