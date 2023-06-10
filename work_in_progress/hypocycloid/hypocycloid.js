class Hypocycloid {
  constructor(_px, _py, _a, _b, _sc) {
    this.px = _px;
    this.py = _py;
    this.a = _a; // radius of larger circle
    this.b = _b; // radius of smaller circle
    this.sc = _sc;
    this.points = [];
    this.col = color(255, 0, 0);
  }

  // We need to loop through curve once before creating object
  oneCurve(theta) {
    // let n = int(this.a / this.b);
    let d = this.a - this.b;
   // for (let theta = 0; theta < 2880; theta += 1) {
      // Equations for hypocycloid curve
      let x = this.sc * (d * cos(theta) - this.b * cos((d / this.b) * theta));
      let y = this.sc * (d * sin(theta) - this.b * sin((d / this.b) * theta));
      this.points.push(createVector(x, y));

    //   if (this.points.length < 6000) {
    //     //console.log(p);
    //     this.points[theta] = p;
    //   } else {
    //     break;
    //   }
   // }
  }

  show() {
    push();
    noFill();
    translate(this.px, this.py);
    // rotate(this.rot);
    beginShape();
    for (let v of this.points) {
    //   strokeWeight(this.st);
      stroke(this.col);
      vertex(v.x, v.y);
    }
    endShape();
    pop();
  }
}
