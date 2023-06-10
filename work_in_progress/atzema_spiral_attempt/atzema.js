// https://mathworld.wolfram.com/AtzemaSpiral.html

class Atzema {
  constructor(_px, _py, _a, _b, _sc, _rot, _c, _st) {
    this.px = _px;
    this.py = _py;
    this.a = 1;
    this.b = _b;
    this.sc = _sc;
    this.points = [];
    this.rot = _rot;
    this.st = _st;
    this.c = _c;
    this.col = color(this.c);
  }

  // We need to loop through curve once before creating object
  oneCurve() {
    for (let theta =0; theta < 361; theta += 1) {
      // Equations for ophiuride curve
      let r = 1;
      let x = r * (sin(theta)/theta - 2*cos(theta) - theta * sin(theta));
      let y =
        r * (cos(theta) / theta - 2 * sin(theta) - theta * cos(theta));
      let p = createVector(x, y);
      if (this.points.length < 361) {
        this.points[theta] = p;
      } else {
        break;
      }
    }
  }

  show(rot) {
    push();
    noFill();
    translate(this.px, this.py);
    rotate(this.rot);
    beginShape();
    for (let v of this.points) {
      strokeWeight(this.st);
      stroke(this.col);
      vertex(v.x, v.y);
    }
    endShape();
    pop();
  }
}
