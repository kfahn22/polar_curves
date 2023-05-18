
const points = [];
let r = 100;

function setup() {
  createCanvas(450, 450);


  for (let theta = -30; theta < 30; theta ++)
  {
    for (let omega = -30; omega < 30; omega ++)
    {
      let k = 1 + cos(theta);
      let l = 1 - cos(theta);
      let x = 0.5 * r * k * cos(omega) - 0.5 * r * l * cos((k/l) * omega);
      let y = 0.5 * r * k * sin(omega) - 0.5 * r * l * sin((k/l) * omega);
      let z = r * sin(theta) * cos((cos(theta) / l) * omega);
      points.push(x, y, z);
      console.log(points);
  }
  }
   
}

function draw() {
  background(59);
  
  stroke(255, 255, 255, 50);
  strokeWeight(2);
  noFill();
  push();
  beginShape();
  for (let p of points) {
    vertex(p.x, p.y, p.z);
  }
  endShape();
  pop();
}

function mousePressed() {
  save('helix.jpg');
}