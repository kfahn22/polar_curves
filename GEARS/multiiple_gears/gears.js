class Gears {
  constructor(_px, _py, _sp, _sc) {
    this.px = _px;
    this.py = _py;
    this.a = 1; // as a increase tends toward a circle
    this.b = 10; // as b decreases the spokes get longer and start to curve
    this.spokes = _sp; // number of spokes between
    this.n = 15; // number of gears to draw
    this.sc = _sc; // scale: 20
    this.angle = 0;
    this.sw = 1.5; // strokeweight
    this.col = color(random(200, 255), 100, random(200, 255));
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
          random(2), // change to 1 if you want a more consistent look
          random(10), // change to 10 for a more consistent look
          this.spokes,
          this.sc + 10 * i,
          color(random(255), 0, random(255))
        )
      );
    }
  }

  showCurves(angle) {
    //push();
    for (let i = 0; i < this.n; i++) {
      this.gcurves[i].oneCurve();
      this.gcurves[i].show(angle);
    }
    //pop();
  }
}
