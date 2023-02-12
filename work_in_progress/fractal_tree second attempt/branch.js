class Branch {

  constructor(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;
  }

  show(i) {
    stroke(59, 93, 89);
    //   if (i % 2 != 0)
    //  { this.branch(60);}
    if (i == 1) {
      this.branch(-60, 0.45);
    } else if (i == 2) {
      this.branch(0, 0.8);
    } else if (i == 3) {
      this.branch(60, 0.45);
    }
    let half = createVector()
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }

  // stem() {
  //     stroke(59, 93, 89);
  //     strokeWeight(4);
  //     noFill()
  //     beginShape();
  //     for (let i = 0; i < 5; i++) {
  //         let sp = 34;
  //         if (i % 2 == 0) {
  //             curveVertex(this.px + i * (sp + 2), this.py - i * (sp - 1));
  //         } else {
  //             curveVertex(this.px + i * (sp - 1), this.py - i * (sp + 2));
  //         }
  //     }
  //     endShape();
  // }

  branchA() {
    stroke(59, 93, 89);
    strokeWeight(4);
    noFill()
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / 6);
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    line(this.end.x, this.end.y, newEnd.x, newEnd.y);
    // beginShape();
    // curveVertex(this.begin.x, this.begin.y, newEnd.x, newEnd.y);
    // // curveVertex(0.5*newEnd.x+1, 0.5*newEnd.y-2, newEnd.x, newEnd.y);
    // endShape();
    // let b = new Branch(this.end, newEnd);
    return newEnd;
  }

  branch(angle, multfact) {
    stroke(59, 93, 89);
    strokeWeight(4);
    noFill()
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(angle);
    dir.mult(multfact);
    let newEnd = p5.Vector.add(this.end, dir);
    line(this.end.x, this.end.y, newEnd.x, newEnd.y);
    // beginShape();
    // curveVertex(this.begin.x, this.begin.y, newEnd.x, newEnd.y);
    // // curveVertex(0.5*newEnd.x+1, 0.5*newEnd.y-2, newEnd.x, newEnd.y);
    // endShape();
    // let b = new Branch(this.end, newEnd);
    return newEnd;
  }
  branchB() {
    let dir = p5.Vector.sub(this.end, this.begin);
    //dir.rotate(angle);
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let b = new Branch(this.end, newEnd);
    return newEnd;
  }
  branchC() {
    let dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 4);
    dir.mult(0.67);
    let newEnd = p5.Vector.add(this.end, dir);
    let b = new Branch(this.end, newEnd);
    return newEnd;
  }

}