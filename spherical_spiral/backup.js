// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4


// Seifert curve equations from https://www.wolframalpha.com/input/?i=seiffert%27s+spherical+spiral
// http://math.soimeme.org/~arunram/Resources/EllipticFunctionsAsTrigonometry.html

const spherical = [];
let angle = 0;
let theta = 0;
let r = 140;
let a = 0.21;


function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(45,17,21);
  rotateY(angle);
  rotateX(angle);
  
  
  //translate(width / 2, 200);
  //stroke(255, 255, 255, 50);
  strokeWeight(1);
  noFill();

  // Equations for spherical curve from mathworld
  const x = r * sin(theta/(pow(a, 2))) * cos(a*theta);
  const y = r * sin(theta/(pow(a, 2))) * sin(a*theta);
  const z = r * cos(theta/(pow(a, 2)));
  spherical.push(createVector(x, y, z));
  // https://chat.openai.com
  // const x = r *  cos(a*theta) / (sqrt(1 + pow(cos(theta), 2)));
  // const y = r * sin(a*theta) / sqrt(1 + cos(theta) * cos(theta)); 
  // const z = r * cos(a*theta) * sin(theta) / sqrt(1 + cos(theta) * cos(theta)); 
  // spherical.push(createVector(x, y, z));
  //So that it stops

  // theta = 8, 12 x 16
  if (theta < 880) {
    theta += 8;
  }
  
  stroke(244, 51, 171, 10);
  beginShape();
  for (let v of spherical) {
    strokeWeight(0.5);
    vertex(v.x, v.y, v.z);
  }
  endShape();
  
  angle += 1;
}

function mousePressed() {
  save('sphere.jpg');
}