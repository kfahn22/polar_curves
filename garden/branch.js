class Branch {
  constructor(_px, _py, _sc) {
    this.px = _px;
    this.py = _py;
    this.sc = _sc;
    this.sp = 0.5;
    this.adj = 8;
    this.num = random(3,5);
    this.brnum = this.num - 2;
    this.ctnum = this.num;
  }

  wiggle(px, py, sc, num, sp, len, mX) {
    stroke(0,77,26, 180);
    strokeWeight(sc);
    push();
    translate(px, py);
    beginShape();
    for (let i = 0; i < num-1; i++) {
      if (i % 2 == 0) {
        vertex(mX * i *len + sp, - i * len);
      } else {
        vertex(mX * i * len - sp, - i * len);
      }
    }
    vertex(mX * num *len, -num * len);
    endShape();
    pop();
  }

  stem() {
    this.wiggle(this.px, this.py, this.sc, this.num, 1, 30, 0);
    return createVector(this.px, this.py - (this.num-1) * 30);
   // return end;
  }

  lfBranch() {
    let begin = this.stem();
    this.wiggle(begin.x, begin.y, this.sc - 0.25, this.brnum, 1, 10, -1);
    return createVector(begin.x -(this.brnum)* 10, begin.y - (this.brnum) * 10);
  }

  centerBranch() {
    let begin = this.stem();
    this.wiggle(begin.x, begin.y, this.sc - 0.25, this.ctnum, 1, 20, 0);
    return createVector(begin.x, begin.y - this.ctnum * 20);
  }

  rtBranch() {
    let begin = this.stem();
    this.wiggle(begin.x, begin.y, this.sc - 0.25, this.brnum, 1, 10, 1);
    return createVector(begin.x  + (this.brnum)* 10, begin.y - (this.brnum) * 10);
  }

  show() {
    stroke(59, 93, 89,180);
    this.stem();
  }
}