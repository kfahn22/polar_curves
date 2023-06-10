// https://mathworld.wolfram.com/SeiffertsSphericalSpiral.html
// https://paulmasson.github.io/math/docs/functions.html

class Seiffert {
  constructor(_px, _py, _rot) {
    this.px = _px;
    this.py = _py;
    this.points = [];
    this.rot = 30;
    // this.c = _c;
    this.col = color(255);
  }

  // We need to loop through curve once before creating object
  // 1163 sn
  oneCurve() {
    for (let s = 1; s < 10; s++) {
      for (let k = 1; k < 10; k++) {
        // Equations for Seiffert curve
        let r = sn(s, k);
        
        let theta = k * s;
        let x = r * cos(theta);
        let y = r * sin(theta);
        let z = cn(s, k); //1201
        let p = createVector(x, y, z);
        console.log(p)
        if (this.points.length < 360) {
          this.points.push(p);
        }
      }
    }
  }

  show(rot) {
    push();
    // translate(this.px, this.py);
    rotate(this.rot);
    beginShape();
    for (let v of this.points) {
      // translate(v.x, v.y, v.z);
      // fill(this.col);
      stroke(255, 0, 0);
      vertex(v.x, v.y, v.z);
    }
    endShape();
    pop();
  }
}
