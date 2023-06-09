// Code base from Daniel Shiffman's Heart Curve coding challenge

// Ophiuride curve equation from Wolfram Alpha
// https://mathworld.wolfram.com/Ophiuride.html

const ophcurve = [];
// let theta = -70; //PI/2;
// let a = 1.5;
// let b = 0.2;
// let sc = 10;
let n = 20;
let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);

  for (let i = 0; i < n; i++)
  {ophcurve.push(
    new Ophiuride(30*i)
  );}
 
}

function draw() {
   background(0);
  // rotateX(angle);
  // rotateY(angle);
   rotateZ(angle);
 
  for (let i = ophcurve.length - 1; i > 0; i--) {
    ophcurve[i].oneCurve();
    ophcurve[i].showSphere();
  }

  angle += 1;
}
// function mousePressed() {
//   save('ophiuride.jpg');
// }
