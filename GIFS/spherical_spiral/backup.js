const spiral = [];
let theta = -30;
let rx = 200;
let ry = 300;
let rz = 100;
let a = 0.6;
let w = 25;
let b = 20;
let angle = 0;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(59);
  rotateY(angle);
  rotateX(angle);
 
  strokeWeight(1);
  noFill();

  // Equations for spherical spiral
  const x = (rx * cos(w*theta)) / sqrt(a*a * theta*theta + b);
  const y = (ry * sin(w*theta)) / sqrt(a*a * theta*theta + b);
  const z = -(a * rz * theta ) / sqrt(a*a * theta*theta + b) ;
  if (theta < 30)
  {spiral.push(createVector(x, y, z));
}
  
  beginShape();
  for (let v of spiral) {
    strokeWeight(2);
    stroke(255, 255, 255, 10);
    vertex(v.x, v.y, v.z);
  }
  endShape();
  theta += 1;
  angle += 1;
}

function mousePressed() {
  save('spiral.jpg');
}

