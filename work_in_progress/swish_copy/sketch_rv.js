// Random Vector
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/learning/nature-of-code/1.3-random-vector.html

// Random Vector: https://editor.p5js.org/codingtrain/sketches/qHKMdpRR
// Walker: https://editor.p5js.org/codingtrain/sketches/_HHLfcGx
let colorsCT = [
    "#2DC5F4",
    "#9253A1",
    "#A42963",
    "#EC015A",
    "#F063A4",
    "#F16164",
    "#F89E4F",
    "#FCEE21",
  ];
  
  let myColors = [
   
      [255, 153, 153, 50],
      [255, 51, 51, 50],
      [204, 0, 0, 50],
  
    // [
    //   [255, 187, 153, 50],
    //   [255, 119, 51, 50],
    //   [204, 68, 0, 50],
    // ],
    // [
    //   [255, 221, 153, 50],
    //   [255, 187, 51, 50],
    //   [204, 136, 0, 50],
    // ],
    // [
    //   [255, 153, 204, 50],
    //   [255, 51, 153, 50],
    //   [204, 0, 102, 50],
    // ],
    // [
    //   [255, 214, 153, 50],
    //   [255, 173, 51, 50],
    //   [204, 122, 0, 50],
    // ],
    // [
    //   [230, 179, 204, 50],
    //   [204, 102, 151, 50],
    //   [153, 51, 100, 50],
    // ],
    // [
    //   [255, 153, 255, 50],
    //   [255, 51, 255, 50],
    //   [204, 0, 204, 50],
    // ],
    // [
    //   [255, 235, 153, 50],
    //   [255, 214, 51, 50],
    //   [204, 163, 0, 50],
    // ],
    // [
    //   [255, 153, 187, 50],
    //   [255, 51, 119, 50],
    //   [204, 0, 68, 50],
    // ],
    // [
    //   [255, 153, 204, 50],
    //   [255, 51, 153, 50],
    //   [204, 0, 102, 50],
    // ],
    // [
    //   [255, 214, 153, 50],
    //   [255, 173, 51, 50],
    //   [204, 122, 0, 50],
    // ],
  ];
  
  //let sunburst = [];
  let sunburst;
  
  function setup() {
    createCanvas(400, 400);
    //colorMode(RGB, 255, 255, 255, 50);
    background(255);
  
    // sunburst = new Sunburst(random(30), random(30), random(colorsCT));
  }
  
  function draw() {
    // for (let i = 0; i < 5; i++) {
    //   sunburst.push(new Sunburst(random(50), random(50), random(myColors)));
    // }
   // let c = color('rgba(0, 0, 255, 50)');
    sunburst = new Sunburst(random(50), random(50));
    sunburst.update();
    sunburst.show();
    // for (let i = 0; i < 5; i++) {
    //   sunburst[i].update();
    //   sunburst[i].show();
    // }
    //translate(width / 2, height / 2);
  
    // let v = createVector(random(-100, 100), random(-100, 100));
    //   v = p5.Vector.random2D();
    //   v.mult(random(50, 100));
  
    //   strokeWeight(4);
    //   stroke(255,50);
    //   line(0, 0, v.x, v.y);
  }
  