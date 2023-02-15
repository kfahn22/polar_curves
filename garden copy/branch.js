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
    stroke(38,115,38, 180);
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
    this.wiggle(this.px, this.py, this.sc, this.num, 1, 40, 0);
    return createVector(this.px, this.py - (this.num-1) * 40);
   // return end;
  }

  lfBranch(adj, len) {
    let begin = this.stem();
    begin.y = begin.y + adj;
    this.wiggle(begin.x, begin.y, this.sc - 0.25, this.brnum, 1, len, -1);
    return createVector(begin.x -(this.brnum)*len, begin.y - (this.brnum) * len);
  }

  centerBranch() {
    let begin = this.stem(this.px, this.py);
    this.wiggle(begin.x, begin.y, this.sc - 0.25, this.ctnum, 1, 10, 0);
    return createVector(begin.x, begin.y - this.ctnum * 10);
  }

  rtBranch(adj, len) {
    let begin = this.stem(this.px, this.py);
    begin.y = begin.y + adj;
    this.wiggle(begin.x, begin.y, this.sc - 0.25, this.brnum, 1, len, 1);
    return createVector(begin.x  + (this.brnum)* len, begin.y - (this.brnum) * len);
  }

  show() {
    stroke(38,115,38,180);
    this.stem();
  }
}