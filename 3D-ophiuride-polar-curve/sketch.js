// Code base from Daniel Shiffman's Heart Curve coding challenge

// Ophiuride curve equation from Wolfram Alpha
// https://mathworld.wolfram.com/Ophiuride.html

const ophcurve = [];
let theta = -70; //PI/2;
let a = 1.5;
let b = 0.2;
let sc = 10;
let n = 40;
let angle = 0;

function setup() {
  createCanvas(800, 400, WEBGL);
  angleMode(DEGREES);
  let c1 = color(122, 156, 198, 180);
  let c2 = color(156, 187, 204, 150);
  let c3 = color(179, 210, 178, 75);
  let c4 = color(189, 228, 167, 50);

  // ophcurve.push(
  //   new Ophiuride(0, 0, 1, 0.2, 50, random(-180, 180), c1, 2)
  // );
  for (let i = 0; i < 0.15 * n; i++) {
    ophcurve.push(
      new Ophiuride(
        random(175, 225),
        random(175, 225),
        1.5,
        b,
        50,
        20 * i,
        c1,
        2
      )
    );
  }
  for (let i = 0.15 * n + 1; i < n * 0.4; i++) {
    ophcurve.push(
      new Ophiuride(
        random(175, 225),
        random(175, 225),
        1.0,
        b,
        100,
        20 * i,
        c2,
        3
      )
    );
  }
  for (let i = n * 0.4 + 1; i < n * 0.8; i++) {
    ophcurve.push(
      new Ophiuride(
        random(175, 225),
        random(175, 225),
        1.0,
        b,
        150,
        20 * i,
        c3,
        9
      )
    );
  }
  for (let i = n * 0.8 + 1; i < n; i++) {
    ophcurve.push(
      new Ophiuride(
        random(175, 225),
        random(175, 225),
        1.0,
        b,
        300,
        20 * i,
        c4,
        12
      )
    );
  }
}

function draw() {
   background(0);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
 
  for (let i = ophcurve.length - 1; i > 0; i--) {
    ophcurve[i].oneCurve();
    ophcurve[i].showSphere();
  }

  // ophcurve[0].oneCurve();
  // ophcurve[0].showSphere();
  angle += 1;
}
// function mousePressed() {
//   save('ophiuride.jpg');
// }
