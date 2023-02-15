class Branch {
  constructor(_px, _py) {
    this.px = _px;
    this.py = _py;
    //this.begin = createVector(this.px, this.py);
    this.end = createVector(width / 2, height - 250);
    this.finished = false;
    this.num = 8;
    this.points = [];
    this.rand = random(0.5, 0.95);
  }

  show(i) {
    stroke(59, 93, 89);
    this.stem();
    this.rtBranch();
    this.lfBranch();
  }

  stem() {
    let branchStart;
    stroke(59, 93, 89);
    // Draw stem with a slight bit of curve
    push();
    noFill();
    stroke(0, 102, 0, 200);
    strokeWeight(4);
    // strokeWeight(this.sc + 1);
    let sp = 1;
    beginShape();
    curveVertex(this.px, this.py);
    for (let i = 0; i < this.num; i++) {
      if (i % 2 == 0) {
        curveVertex(this.px + (sp), this.py - i * 20);
      } else {
        curveVertex(this.px - (sp), this.py - i * 20);
      }
      if (i == int(this.num * this.rand)) {
        branchStart = createVector(this.px, this.py - int(this.num * this.rand) * 20);
      }
    }
    curveVertex(this.px - (sp), this.py - (this.num + 1)* 20);
   // curveVertex(this.end.x, this.end.y);
    endShape();
    pop();
    return branchStart;
  }

  lfBranch() {
    let brEnd;
    let brNum = 4;
    let sp = 1;
    stroke(59, 93, 89);
    strokeWeight(3);
    noFill()
    let br = this.stem();
    push();
    beginShape();
    curveVertex(br.x, br.y);
    for (let i = 0; i < brNum; i++) {
      if (i % 2 == 0) {
        curveVertex(br.x - 15 * i + 2 * sp, br.y - 15 * i);
      } else {
        curveVertex(br.x - 15 * i - sp, br.y - 15 * i);
      }
      if (i == brNum -2 ) {
        brEnd = createVector(br.x - 15 * i + 2 * sp, br.y - 15 * i);
      }
    }
    endShape();
    pop();
    return brEnd;

  }
  rtBranch() {
    let brEnd;
    let brNum = 4;
    let sp = 1;
    stroke(59, 93, 89);
    strokeWeight(3);
    noFill()
    let br = this.stem();
    push();
    beginShape();
    curveVertex(br.x, br.y);
    for (let i = 0; i < brNum; i++) {
      if (i % 2 == 0) {
        curveVertex(br.x + 15 * i + 2 * sp, br.y - 15 * i);
      } else {
        curveVertex(br.x + 15 * i - sp, br.y - 15 * i);
      }
      if (i == brNum - 2) {
        brEnd = createVector(br.x + 15 * i + 2 * sp, br.y - 15 * i);
      }
    }
    endShape();
    pop();
    return brEnd;

  }
  // branch(angle, multfact) {
  //   let ends = [];
  //   stroke(59, 93, 89);
  //   strokeWeight(4);
  //   noFill()
  //   let newEnd;
  //   ends[0] = this.end;
  //   let dir = p5.Vector.add(this.end, this.begin);
  //   dir.rotate(angle);
  //   for (let i = 1; i < this.num; i++) {
  //     // let d = dir.mult(multfact + i*0.15);
  //     let d = dir.mult(multfact * i);

  //     ends.push(p5.Vector.sub(ends[i - 1], d));
  //     //line(this.end.x, this.end.y, newEnd.x, newEnd.y);
  //     // if (this.rand > 0.5) {
  //     //   ends[i].x + 1;
  //     //   ends[i].y - 2;
  //     // } else {
  //     //   ends[i].x - 1;
  //     //   ends[i].y + 2;
  //     //   //newEnd = e;
  //     // }
  //   }
  //   beginShape();
  //   curveVertex(this.end.x, this.end.y);
  //   for (let i = 0; i < ends.length; i++) {
  //     curveVertex(ends[i].x, ends[i].y);
  //   }
  //   endShape();
  //   return ends[this.num - 1];
  //   // return newEnd;
  // }

}