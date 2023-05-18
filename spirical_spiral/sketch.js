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
let n = 40;
let frames = 60;
const total = 15;

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
}

function draw() {
  background(240, 60, 40);
  rotateY(angle);
  rotateX(angle);
  fill(255,255,102);
  stroke(204,153,0);
  for (let i = 0; i < total + 1; i += 1) {
    spiral[i] = [];
    const lat = map(i, 0, total, 0, 180);
    for (let j = 0; j < total + 1; j++)
    { 
        const lon = map(j, 0, total, 0, 360);
        // Equations for spherical  spiral curve from mathworld
        const x = (rx * cos(w*lon) * sin(lat)) / sqrt(a*a * lon*lon + b);
        const y = (ry * cos(w*lon) * sin(lat)) / sqrt(a*a * lon*lon + b);
        const z = -(a * rz * lon ) * cos(lat) / sqrt(a*a * lon*lon + b) ;
        spiral[i][j] = createVector(x,y,z);
    }
  }

  
    for (let i = 0; i < total; i++) {
      fill(255,255,204);
      stroke(255,255,26, 10);
      beginShape(TRIANGLE_STRIP);
      for (let j = 0; j < total + 1; j++) {
        const v1 = spiral[i][j];
        vertex(v1.x, v1.y, v1.z);
        const v2 = spiral[i + 1][j];
        vertex(v2.x, v2.y, v2.z);
      }
      endShape();
    }
    angle += 0.05;
}

function mousePressed() {
  save('spiral.jpg');
}