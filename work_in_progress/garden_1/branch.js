class Branch {
  constructor(_px, _py) {
    this.px = _px;
    this.py = _py;
    //this.begin = createVector(this.px, this.py);
    this.end = createVector(width / 2, height - 100);
    this.finished = false;
    this.num = 6;
    this.points = [];
    this.rand = random(1);
  }

  show(i) {
    stroke(59, 93, 89);
    //console.log(this.begin);
    // if (i == 1) {
    //   this.branch(-51, 0.05);
    // } else if (i == 2) {
    //   this.branch(-1, 0.07);
    // } else if (i == 3) {
    //   this.branch(48, 0.06);
    // }
    this.stem();
   this.branch(1);
   this.branch(-1);
   //this.branch();
    //line(this.begin.x, this.begin.y, this.end.x, this.end.y);
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
        curveVertex(this.px + (sp), this.py - i * 40);
      } else {
        curveVertex(this.px - (sp), this.py - i * 40);
      }
      if (i == int(this.num * 0.75)) {
        branchStart = createVector(this.px, this.py - int(this.num * 0.75) * 20);
      } else if (i == this.num) {
        branchEnd = createVector(this.px, this.py - this.num * 40);
      }
    }
    endShape();
    pop();
    return branchStart;
  }


  //    stem() {
  //     stroke(59, 93, 89);
  //     strokeWeight(4);
  //     noFill()
  //     beginShape();
  //     for (let i = 0; i < this.num; i++) {
  //         let sp = 30;

  //       if (i % 2 == 0) {
  //             curveVertex(this.begin.x + 1, this.begin.y - i*sp);
  //         } else {
  //             curveVertex(this.begin.x - 1, this.begin.y - i*sp);
  //        }
  //        if (i == this.num) {
  //          this.end = createVector(this.begin.x, this.begin.y - i*sp);
  //        }
  //     }
  //     endShape();

  //  }
  branch(sign) {
    let brEnd = [];
    let sp = 1;
    stroke(59, 93, 89);
    strokeWeight(3);
    noFill()
    let br = this.stem();

    push();
    beginShape();
    curveVertex(br.x, br.y);
    for (let i = 0; i < 5; i++) {
      if (i % 2 == 0) {
        curveVertex(br.x + sign*15 * i + 2*sp, br.y - 15 * i );
      } else {
        curveVertex(br.x + sign*15 * i - sp, br.y - 15 * i );
      }
      if (i == 4 && sign == 1) {
        brEnd.push(createVector(br.x + sign*15 * i + 2*sp, br.y - 15 * i));
      } else if (i == 4 && sign == -1) {
        brEnd.push(createVector(br.x + sign*15 * i + 2*sp, br.y - 15 * i));
      }
    }
    endShape();
    pop();
    return brEnd[0];

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