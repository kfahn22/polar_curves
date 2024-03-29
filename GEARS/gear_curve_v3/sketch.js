// Code base from Daniel Shiffman's Heart Curve coding challenge

// Gear curve equation from Wolfram Alpha
// https://mathworld.wolfram.com/GearCurve.html

const gcurve = [];
let a = 1;
let b = 10;
let sc = 30;
let n = 2;
let h = 180;
let l = 40; 
let alpha = 100;

function setup() {
  createCanvas(600, 600);
  colorMode(HSL, 360, 100, 100, 100);
  angleMode(DEGREES);
  for (let i = 0; i < 4; i++) {
    gcurve.push(new Gear(width / 2, height / 2, a, b, sc + i * 10, 30, 3));
  }
  // let c2 = color(250, 166, 255, 150);
  // let c3 = color(115, 83, 186, 75);
  // let c4 = color(47, 25, 95, 50);
  
  // for (let i = 0; i < 0.15 * n; i++) {
  //   gcurve.push(
  //     new Gear(width / 2, height / 2, a, b, sc, 30, c1, 2)
  //   );
  // }
  // for (let i = 0.15 * n + 1; i < n * 0.4; i++) {
  //   gcurve.push(
  //     new Gear(width / 2, height / 2, a, b, random(20, 150), 30, c2, 2)
  //   );
  // }
  // for (let i = n * 0.4 + 1; i < n * 0.8; i++) {
  //   gcurve.push(
  //     new Gear(width / 2, height / 2, a, b, random(20, 150), 30, c3, 2)
  //   );
  // }
  // for (let i = n * 0.8 + 1; i < n; i++) {
  //   gcurve.push(
  //     new Gear(width / 2, height / 2, a, b, random(20, 120), 30, c4, 2)
  //   );
  // }
}

function draw() {
  background(280, 100, 80, 100);
  // let c1 = color(h, 100, 50, alpha);
 

  for (let i = 0 ; i < gcurve.length; i++)
  { gcurve[i].oneCurve();
    gcurve[i].show();
   }
  //sc = resetScale(sc);
  // h += 6;
  // l += 5;
  // alpha -= 3;
  //sc += 10;
}

function mousePressed() {
  save("gear.jpg");
}

function resetScale(sc, i) {
  if (sc == 200) {
    sc = 20;
    //gcurve[0] = [];
  }
  return sc;
}
