let v;

class Sunburst {
  constructor(_x, _y, _c) {
    this.pos = createVector(_x, _y);
    this.ran = p5.Vector.random2D();
    this.c = _c;
    // this.c2 = _c[1];
    // this.c3 = _c[2];
   // this.col = [_c[0], _c[1], _c[2]];
  }

  update() {
    v = this.ran.mult(random(25, 40));
    this.pos.add(v);
  }

  show() {
    push();
    let c = color('rgba(0, 0, 255, 50)');
    stroke(c);
    strokeWeight(4);
    translate(this.pos.x, this.pos.y);
    for (let i = 0; i < 10; i++) {
      line(0, 0, v.x, v.y);
    }
    pop();
  }
}
