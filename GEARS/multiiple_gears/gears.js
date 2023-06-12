class Gears {
  constructor(_px, _py) {
    this.px = _px;
    this.py = _py;
    this.a = 1; // as a increase tends toward a circle
    this.b = 10; // as b decreases the spokes get longer and start to curve
    this.spokes = 8; // number of spokes between
    this.n = 10; // number of gears to draw
    this.sc = 1.5; // scale: 20
    this.angle = 0;
    this.sw = 1.5; // strokeweight
    this.col = color(random(200, 255), 100, random(200,255));
    this.gcurves = [];
    this.a = 30;
  }

  addGears() {
    let j = 0;
    for (let i = 0; i < this.n; i++) {
      this.gcurves.push(
        new Gear(
          this.px,
          this.py,
          this.a,
          this.b,
          this.spokes + j,
          this.sc + 10 * i,
          color(random(255), 0, random(255))
        )
      );
      if (i % 4 == 0) {
        j += int(random(5));
      }
    }
  }

  showCurves(angle) {
    push();
    // rotate(this.a);
    console.log(this.gcurves.length);
    for (let i = 0; i < this.n; i++) {
      this.gcurves[i].oneCurve();
      this.gcurves[i].show(angle);
    }
    pop();
  }
}
