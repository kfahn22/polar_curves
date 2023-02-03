// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// Resources for butterfly equations
// Paul Bourke.net (also has 3d version)
// let u = a * 24 * PI / N;
// x = cos(u)*(pow(e, cos(u)) - 2 * cos(4*u) - pow(sin(u/12), 5)
// y = sin(u)*(pow(e, cos(u)) - 2 * cos(4*u) - pow(sin(u/12), 5)
// https://mathworld.wolfram.com/topics/PlaneCurves.html
// jwilson.coe.jga.edu
// r = pow(cos(5*theta), 2) + sin(3*theta) + 0.3
// r = sin(theta) + pow(sin(5/2*theta),3)
// paulmasson.github.io


// http://paulbourke.net/geometry/chrysanthemum/

//r = 5 (1 + sin(11 u / 5)) - 4 sin4(17 u / 3) sin8(2 cos(3 u) - 28 u)  . . . where 0 <= u <= 21 pi
// and in Cartesian coordinates

// x = r cos(u)
// y = r sin(u)
// from http://paulbourke.net/geometry/butterfly/
// int main(int argc,char **argv)
// {
//    int i;
//    double u;
//    XYZ p,plast;

//    for (i=0;i<N;i++) {
//       u = i * 24.0 * PI / N;
//       p.x = cos(u) * (exp(cos(u)) - 2 * cos(4 * u) - pow(sin(u / 12),5.0));
//       p.y = sin(u) * (exp(cos(u)) - 2 * cos(4 * u) - pow(sin(u / 12),5.0));
//       p.z = fabs(p.y) / 2;
//       colour = GetColour(u,0.0,24*PI,4);
//       if (i > 0) {
//          Do something with the line from plast to p
//       }
//       plast = p;
//    }
// }


const butterfly = [];
const N = 10000;
const Y_AXIS = 1;
const X_AXIS = 2;
let angle = 0;
let beta = 0;
const p = 1;
const q = 2;
const e = 2.71828;

function setup() {
  createCanvas(800, 450, WEBGL);
}

function draw() {
  background(59);
  rotateX(angle);
  angle += 0.01;
 // translate(width / 2, height * 4.5 / 8);
  noFill();
 
  const sc = 20;
  let theta = p * beta;
  let phi = q * beta;
  let r = pow(e, sin(beta)) - 2 * cos(4 * beta) + pow(sin((2 * beta - PI) / 24), 5);
  x =  r * cos(theta) * (sc + cos(phi));
  y = -r * sin(theta) * (sc + cos(phi));
  z =  r * sin(phi);
  butterfly.push(createVector(x, y, z));

  if (beta > 16 * PI) {
    noLoop();
  }

  beginShape();
  for (let v of butterfly) {
    strokeWeight(1.2);
    stroke(255);
    vertex(v.x, v.y, v.z);
  }
  endShape();
  beta += 0.01;
}

function mousePressed() {
  save('3d-butterfly_curve.jpg');
}