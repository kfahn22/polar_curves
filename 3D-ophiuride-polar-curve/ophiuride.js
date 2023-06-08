class Ophiuride {
  constructor(_px, _py, _a, _b, _sc, _rot, _c, _st) {
    this.px = _px;
    this.py = _py;
    this.a = 1.5;
    this.b = 0.2;
    this.sc = 12;
    this.points = [];
    this.rot = _rot;
    this.st = _st;
    this.c = _c;
    this.col = color(this.c);
  }

  // We need to loop through curve once before creating object
  oneCurve() {
    for (let beta = -170; beta < 170; beta += 1) {
     //   for (let beta = -170; beta < 170; beta += 1) {
      let phi = 9 * beta;
      let theta = 2 * beta;
      // Equations for ophiuride curve
      let r = (this.b * sin(theta) - this.a * cos(theta)) * tan(theta);
      let x = this.sc * r * cos(theta) * cos(phi);
      let y = this.sc * r * sin(theta) * cos(phi);
      let z = -this.sc * r * sin(phi);
      let p = createVector(x, y, z);
      if (this.points.length < 90) {
        this.points[beta] = p;
      } else {
        break;
      }
    }
  }

  //   show() {
  //     push();
  //     noFill();
  //     translate(this.px, this.py);
  //     // translate(0, height/2);
  //     beginShape();
  //     for (let v of this.points) {
  //       translate(v.x, v.y, v.z);
  //       let col = color(this.c);
  //       stroke(col, 255);
  //       vertex(v.x, v.y, v.z);
  //     }
  //     endShape();
  //     pop();
  //   }

  showSphere() {
    push();
    rotate(this.rot);
    noStroke();
    // this adjustment only works for num = 5
    let n = 3;
    let adj = this.py / this.r;
    //translate(this.px, this.py-n*this.r,0);
    //translate(this.px, this.py, -10);
    push();
    beginShape();
    for (let v of this.points) {
      //let d = pow((v.x * v.x + v.y * v.y), 0.5);
      // let adjy = v.y / 2; // can add some really different looks this way
      translate(v.x, v.y, v.z);
      //translate(v.x+d, v.y-d, v.z); // straightens out the curve of spheres

      let col = color(this.c);
      fill(col);
      sphere(3);
    }
    endShape();
    pop();
    pop();
  }
//   show(rot) {
//     push();
//     noFill();
//     translate(this.px, this.py);
//     rotate(this.rot);
//     beginShape();
//     for (let v of this.points) {
//       strokeWeight(this.st);
//       stroke(this.col);
//       sphere(v.x, v.y, v.z);
//     }
//     endShape();
//     pop();
//   }
}
