class Ophiuride {
  constructor(_px, _py, _a, _b, _sc, _rot, _c, _st) {
    this.px = _px;
    this.py = _py;
    this.a = 1.5;
    this.b = 0.2;
    this.sc = 5;
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
      let phi = 3 * beta;
      let theta = 7 * beta;
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

  showSphere() {
    push();
    rotate(this.rot);
    noStroke();
    let i = 0;
    push();
    beginShape();
    for (let v of this.points) {
      translate(v.x, v.y, v.z);
      colorMode(HSL);
      let c = color(250 + i, 100, 45 + i);
      let col = color(c);
      fill(col);
      sphere(2);
      i += 0.5;
    }
    endShape();
    pop();
    pop();
  }
}
