// Code base from Daniel Shiffman's Heart Curve coding challenge
// https://thecodingtrain.com/challenges/134-heart-curve
// https://youtu.be/oUBAi9xQ2X4

// Seifert curve equations from https://www.wolframalpha.com/input/?i=seiffert%27s+spherical+spiral
// Not right b/c I am not using elliptical sn and cn functions
// http://math.soimeme.org/~arunram/Resources/EllipticFunctionsAsTrigonometry.html

const spherical = [];
let angle = 0;
let frames = 60;
let a = 0.21;
let n = 3;
let h = 400;
let r = h/3;

function keyPressed() {
  if (key == "s") {
    const options = {
      units: "frames",
      delay: 0
    }
    saveGif("spherical_fan.gif", frames, options);
  }
}

function setup() {
  createCanvas(2*h, h, WEBGL);
  angleMode(DEGREES);
  colorMode(HSL);
  
  //let r = width/16;
//   let c1 = color(220, 204, 255, 180); // pink
//   let c2 = color(224, 123, 224, 150); // br pink
//   let c3 = color(39, 93, 173, 75); // blue
  
//   let ran = int(random(3));
//   for (let i = 0; i < n*0.25; i++)
//  { 
  
//     spherical.push(new Spherical(0, 0, a, r + i, i*45, c2));
//   } 
//   for (let i = n*0.25; i < n*0.5; i++)
//   {
//     spherical.push(new Spherical(0, 0, a, r + i, i*45, c3));
//   }
//   for (let i = n*0.5 + 1; i < n; i++)
//   {
//     spherical.push(new Spherical(0, 0, a, r + i, i*45, c1));
//   }

 
   for (let i = 0; i < 5; i++)
  {
    c = color(280, 100, i*6.5);
    spherical.push(new Spherical(0, 0, a, r + i*10, i*45, color(280, 100, 50 + i*10)));
  }
}

function draw() {
  background(280, 100, 20);
  //background(66, 65, 63); //grey
  rotateY(angle);
  rotateX(angle);
  noFill();
  for (let i = 0; i < spherical.length; i++)
  {spherical[i].oneCurve();
  spherical[i].show();}
  angle += 360 / frames;
  }

function mousePressed() {
  save('fan.jpg');
}