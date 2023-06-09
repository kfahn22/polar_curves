class Ophiuride {
  constructor(_rot, _p, _q) {
    this.a = 1;
    this.b = 1;
    this.sc = 5;
    this.points = [];
    this.rot = _rot;
    this.p = _p;
    this.q = _q;
    this.e = 2.18;
  }

  // We need to loop through curve once before creating object
  oneCurve() {
    for (let beta = 0; beta < 90; beta += 1) {
      let phi = this.p * beta;
      let theta = this.q * beta;
      // Equations for ophiuride curve
      //let r = (this.b * sin(1.0*theta) - this.a * cos(1*theta)) * tan(1*theta);
      let r = (this.b * sin(1.0 * theta) - this.a * cos(1 * theta)) * this.e;
      let x = this.sc * r * cos(theta) * cos(phi);
      let y = this.sc * r * sin(theta) * cos(phi);
      let z = -this.sc * r * sin(phi);
      let v = createVector(x, y, z);
      if (this.points.length < 90) {
        this.points[beta] = v;
      } else {
        break;
      }
    }
  }

  showSphere() {
    let i = 0;
    noStroke();
    push();
    rotate(this.rot);

    push();
    beginShape();
    for (let v of this.points) {
      translate(v.x, v.y, v.z);
      colorMode(HSL);
      let c = color(250 + i, 100, 45 + i);
      let col = color(c);
      fill(col);
      //sphere(1 + i * 0.05);
      sphere(2);
      //box(3);

      i += 0.5;
    }
    endShape();
    pop();
    pop();
  }

  reset() {
    this.points = [];
  }

  getCurl(x, y, f) {
    const delta = 0.01;
    let n1 = this.noise.noise3D(x + delta, y, f);
    let n2 = this.noise.noise3D(x - delta, y, f);
    const cy = -(n1 - n2) / (delta * 2);

    n1 = this.noise.noise3D(x, y + delta, f);
    n2 = this.noise.noise3D(x, y - delta, f);
    const cx = (n1 - n2) / (delta * 2);

    return createVector(cx, cy);
  }

  update(f) {
    let curl = this.getCurl(
      this.pos.x * this.noiseScale,
      this.pos.y * this.noiseScale,
      f
    );
    this.pos.add(curl.mult(this.noiseForce));
    this.alpha -= this.fadeRate;
    this.lightness -= this.fadeRate * 100;
  }
}
