// https://mathworld.wolfram.com/GearCurve.html
// https://help.tc2000.com/m/69445/l/755460-hyperbolic-functions-table

class Gear {
  constructor(_px, _py, _a, _b, _sc, _rot, _c, _st) {
    this.px = _px;
    this.py = _py;
    this.a = 1;
    this.b = 10;
    this.m = 6;
    this.sc = 1;
    this.points = [];
    this.rot = PI/2;
    this.st = _st;
    this.c = _c;
    this.col = color(255);
  }

  hyperbolicTan(theta) {
    let e = 2.71828;
    let l = pow(e, 2*theta);
    return (l - 1)/ (l + 1);
  }
  // We need to loop through curve once before creating object
  oneCurve() {
    for (let beta = 0; beta < TWO_PI; beta += 1) {
      // Equations for gear curve
      let theta = 3 * beta;
      let phi = 2 * beta;
      let r =
        this.a +
        (1 / this.b) * this.hyperbolicTan(this.b * sin(this.m * beta));
      let x = this.sc * r * sin(theta) * cos(phi);
      let y = this.sc * r * cos(theta) * cos(phi);
      let z = this.sc * r * sin(phi);
      let p = createVector(x, y, z);
      if (this.points.length < 360) {
        console.log(p);
        this.points[beta] = p;
      } else {
        break;
      }
    }
  }

  show(rot) {
    push();
   // translate(this.px, this.py);
    rotate(this.rot);
    beginShape();
    for (let v of this.points) {
      translate(v.x, v.y, v.z);
      fill(this.col);
      sphere(5);
    }
    endShape();
    pop();
  }
}
