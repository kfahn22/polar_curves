// Code base from Daniel Shiffman's Heart Curve coding challenge

// Ophiuride curve equation from Wolfram Alpha
// https://mathworld.wolfram.com/Ophiuride.html

const acurve = [];
let a = 1.5;
let b = 0.2;
let sc = 2;
let n = 120;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  let c1 = color(239, 195, 245, 180);
  let c2 = color(250, 166, 255, 150);
  let c3 = color(115, 83, 186, 75);
  let c4 = color(47, 25, 95, 50);
  for (let i = 0; i < 0.15 * n; i++) {
    acurve.push(
      new Atzema(
        random(275, 325),
        random(275, 325),
        1.5,
        b,
        50,
        random(-180, 180),
        c1,
        2
      )
    );
  }
  for (let i = 0.15 * n + 1; i < n * 0.4; i++) {
    acurve.push(
      new Atzema(
        random(275, 325),
        random(275, 325),
        1.0,
        b,
        100,
        random(-180, 180),
        c2,
        3
      )
    );
  }
  for (let i = n * 0.4 + 1; i < n * 0.8; i++) {
    acurve.push(
      new Atzema(
        random(275, 325),
        random(275, 325),
        1.0,
        b,
        150,
        random(-180, 180),
        c3,
        9
      )
    );
  }
  for (let i = n * 0.8 + 1; i < n; i++) {
    acurve.push(
      new Atzema(
        random(275, 325),
        random(275, 325),
        1.0,
        b,
        300,
        random(-180, 180),
        c4,
        12
      )
    );
  }
}

function draw() {
  background(15, 16, 32);
  for (let i = acurve.length - 1; i > 0; i--) {
    acurve[i].oneCurve();
    acurve[i].show();
  }
}

function mousePressed() {
  save("ophiuride.jpg");
}
