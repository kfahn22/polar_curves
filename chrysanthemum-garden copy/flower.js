let a = 0;
let n = 0;
let start = 0;

class Flower {
    constructor(_px, _py, _sc, _lfsc, _c) {
        this.px = _px;
        this.py = _py;
        this.a = createVector(this.px, height);
        this.b = createVector(this.px, this.py - this.adj);
        this.adj = 0;
        this.sc = _sc;
        this.lfsc = _lfsc;
        this.begin = this.a;
        this.end = this.b;
        this.points = [];
        this.flowerPoints = [];
        this.leafPoints = [];
        this.c = _c;
        this.c1 = _c[0];
        this.c2 = _c[1];
        this.c3 = _c[2];
        this.ran = random(1);
    }

    // Reference https://github.com/anuraghazra/CanvasFun/blob/master/LoveHearts/Heart.js
    // We need to loop through flower once before creating object
    oneFlower() {
        // 7560 when angle mode radians
        for (let beta = 0; beta < 7560; beta += 1) {
            let r = 5 * (1 + sin(11 * beta / 5)) - 4 * pow(sin(17 * beta / 3), 4) + pow(sin(2 * cos(3 * beta) - 28 * beta), 8);
            let x = this.sc * r * cos(beta);
            let y = -this.sc * r * sin(beta);
            let p = createVector(x, y);
            if (this.flowerPoints.length < 7560) {
                this.flowerPoints[beta] = p;
            } else {
                break;
            }
        }

    }

    phyllotaxisCenter() {
        let c = map(this.sc, 2, 4, 1, 1.8);
        let adj = map(this.sc, 4, 6, 0.5, 1.8);
        push();
        noStroke();
        fill(this.c3, 200);
        for (let i = 0; i < 60; i++) {
            let a = i * 137.5;
            let r = c * sqrt(i);
            let x = r * cos(a);
            let y = r * sin(a);
            ellipse(x, y, c + adj, c + adj);
        }
        start += 0.1;
        pop();
    }

    branchA() {
        this.adj = 10;
        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(PI / 6);
        dir.mult(0.67);
        let newEnd = p5.Vector.add(this.end, dir);
        let b = new Branch(this.end, newEnd);
        return b;
    }

    branchB() {
        let dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-PI / 4);
        dir.mult(0.67);
        let newEnd = p5.Vector.add(this.end, dir);
        let b = new Branch(this.end, newEnd);
        return b;
    }

    stem() {
        stroke(59, 93, 89);
        // Draw stem with a slight bit of curve
        push();
        noFill();
        stroke(0, 102, 0, 200);
        strokeWeight(this.sc + 1);
        let sp = 2;
        beginShape();
        for (let i = 0; i < 8; i++)
        {
            if (i % 2 == 2) {
              //  if (this.ran > 0.5) {
                curveVertex(this.px + i * (sp), this.py + i * 75);
            } else {
                curveVertex(this.px - i * (sp), this.py + i * 67);
            }
        }
        // curveVertex(this.px, this.py + 10);
        //    curveVertex(this.px + 2, this.py + 100);
        //    curveVertex(this.px - 2, this.py + 200);
        //    curveVertex(this.px + 2, this.py + 300);
        //    curveVertex(this.px, this.py + 400);}
        endShape();
        pop();
    }

    // formula adjusted from cannabis curve
    oneLeaf() {
        for (let beta = 0; beta < 360; beta += 1) {
            //let r  = 90 * (1 + 9/10 * cos(8 * a))*(1 + 1/10 * cos(24*a))*(9/10 + 1/10 * cos(200*a)) * (1 + sin(a));
            let r = this.lfsc * (1 + 1 * cos(1 * beta)) * (1 + 2 / 10 * cos(7 * beta)) * (5 / 10 + 0.06 * cos(50 * beta)) * (1 + sin(beta));
            //let r = this.lfsc * (1 + 7 / 10 * cos(4 * beta)) * (1 + 1 / 10 * cos(12 * beta)) * (5 / 10 + 0.06 * cos(40 * beta)) * (1 + sin(beta));
            let x = r * cos(beta);
            let y = -r * sin(beta);
            let p = createVector(x, y);
            if (this.leafPoints.length < 360) {
                this.leafPoints[beta] = p;
            } else {
                break;
            }
        }

    }

    show() {
        this.stem();
        //  this.branchA();
        // Draw leaves
        fill(0, 102, 0, 200);
        noStroke();
        push();
        translate(this.px, this.py + 50);
        for (let i = 1; i < 3; i++) {
            push();
            translate(0, i * 60);
            if (this.ran > 0.5) {
                //    if (i % 2 == 0) {
                rotate(60);
            } else {
                rotate(-60);
            }

            beginShape();
            for (let v of this.leafPoints) {
                vertex(v.x, v.y);
            }
            endShape();
            pop();

        }
        pop();


        // Draw flower
        push();
        noFill();
        translate(this.px, this.py);
        beginShape();
        for (let v of this.flowerPoints) {
            fill(this.c1, 50)
            stroke(this.c2, 50);
            strokeWeight(0.1);
            vertex(v.x, v.y);
        }
        endShape();
        this.phyllotaxisCenter();
        pop();


    }
}