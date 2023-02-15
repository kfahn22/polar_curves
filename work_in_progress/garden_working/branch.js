class Branch {
  constructor(_px, _py, _sc) {
    this.px = _px;
    this.py = _py;
    this.sc = _sc;
    this.sp = 0.5;
    this.adj = 10;
    this.num = 5;
  }

  // wiggle(px, py, num, sp, len, angle) {
  //   push();
  //   rotate(angle);
  //   beginShape();
  //   for (let i = 0; i < num; i++) {
  //     if (i % 2 == 0) {
  //       vertex(px + sp, py - i * len);
  //     } else {
  //       vertex(px - sp, py - i * len);
  //     }
  //   }
  //   endShape();
  //   pop();
  // }

  wiggle(px, py, sc, num, sp, len, mX) {
    stroke(0,77,26);
    strokeWeight(sc);
    push();
    translate(px, py);
    beginShape();
    for (let i = 0; i < num; i++) {
      if (i % 2 == 0) {
        vertex(mX * i *len + sp, - i * len);
      } else {
        vertex(mX * i * len - sp, - i * len);
      }
    }
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
    this.wiggle(begin.x, begin.y, this.sc - 0.5, 4, 1, 10, -1);
    return createVector(begin.x - 3 * this.adj, begin.y - 3 * this.adj);
  }

  centerBranch() {
    let begin = this.stem();
    this.wiggle(begin.x, begin.y, this.sc - 0.5, 6, 1, 15, 0);
    return createVector(begin.x, begin.y - 7 * this.adj);
  }

  rtBranch() {
    let begin = this.stem();
    this.wiggle(begin.x, begin.y, this.sc - 0.5, 4, 1, 10, 1);
    return createVector(begin.x  + 3 * this.adj, begin.y - 3 * this.adj);
  }

  show() {
    stroke(59, 93, 89);
    this.stem();
  }
}