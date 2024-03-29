class Ophiuride {
  constructor(_rot, _p, _q) {
    this.a = 1;
    this.b = 1;
    this.sc = 3;
    this.points = [];
    this.rot = _rot;
    this.p = _p;
    this.q = _q;
    this.alpha = 225;
    this.distFromCenter = [];
  }

  // We need to loop through curve once before creating object
  oneCurve() {
    for (let beta = 0; beta < 90; beta += 1) {
      let phi = this.p * beta;
      let theta = this.q * beta;
      // Equations for ophiuride curve
      //let r = (this.b * sin(1.0*theta) - this.a * cos(1*theta)) * tan(1*theta);
      let r =
        (this.b * pow(sin(1.0 * theta), 1) - this.a * pow(cos(1 * theta)), 1) *
        tan(theta);
      let x = this.sc * r * cos(theta) * cos(phi);
      let y = this.sc * r * sin(theta) * cos(phi);
      let z = -this.sc * r * sin(phi);
      let v = createVector(x, y, z);
      if (this.points.length < 45) {
        this.points[beta] = v;
      } else {
        break;
      }
    }
  }

  findDist() {
    let d;
    for (let v of this.points) {
      let center = createVector(width / 2, height / 2);
      let v1 = createVector(v.x, v.y);
      d = p5.Vector.dist(v1, center);
      console.log(d);
      this.distFromCenter.push(d);
    }
  }

  showSphere() {
    noStroke();
    push();
    rotate(this.rot);

    beginShape();
    for (let i = 0; i < this.points.length; i++) {
      let v = this.points[i];
      translate(v.x, v.y, v.z);
      colorMode(HSL);
      //let c = color(250 + i, 100, 45 + i, this.alpha);
      let c = color(310 - i, 100, 95 - 0.6*i);
      let col = color(c);
      fill(col);
      sphere(1 + i * 0.05);
      //sphere(2);
      //box(3);
    }
    endShape();
    pop();

    pop();
  }

  reset() {
    this.points = [];
  }

  // getCurl(x, y, f) {
  //   const delta = 0.01;
  //   let n1 = this.noise.noise3D(x + delta, y, f);
  //   let n2 = this.noise.noise3D(x - delta, y, f);
  //   const cy = -(n1 - n2) / (delta * 2);

  //   n1 = this.noise.noise3D(x, y + delta, f);
  //   n2 = this.noise.noise3D(x, y - delta, f);
  //   const cx = (n1 - n2) / (delta * 2);

  //   return createVector(cx, cy);
  // }

  // update(f) {
  //   let curl = this.getCurl(
  //     this.pos.x * this.noiseScale,
  //     this.pos.y * this.noiseScale,
  //     f
  //   );
  //   this.pos.add(curl.mult(this.noiseForce));
  //   this.alpha -= this.fadeRate;
  //   this.lightness -= this.fadeRate * 100;
  // }
}
