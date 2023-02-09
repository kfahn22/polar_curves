

let a = 0;
let n = 0;
let start = 0;
let c = 1.8;

class Flower {
    constructor(_px, _py, _p, _q, _sc, _c) {
        this.px = _px;
        this.py = _py;
        this.p = _p;
        this.q = _q;
        this.sc = _sc;
        this.points = [];
        this.flowerPoints = [];
        this.leafPoints = [];
        this.c = _c;
        this.c1 = _c[0];
        this.c2 = _c[1];
        this.c3 = _c[2];
    }

    // https://github.com/anuraghazra/CanvasFun/blob/master/LoveHearts/Heart.js
    // Reference for this function
    // We need to loop trhough flower once before creating object
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

    phyllotaxisCenter()
    {
        push();
        noStroke();
        fill(this.c3, 200);
        for (let i = 0; i < 60; i++) {
            let a = i * 137.5;
            let r = c * sqrt(i);
            let x = r * cos(a);
            let y = r * sin(a);
            ellipse(x, y, c + 1.3, c + 1.3);
        }
        start += 0.1;
        pop();
    }

    oneLeaf() {
        for (let beta = 0; beta < 360; beta += 1) {
            //let r  = 90 * (1 + 7/10 * cos(4 * beta))*(1 + 1/10 * cos(12*beta))*(9/10 + 1/10 * cos(50*beta)) * (1 + sin(beta));
            let r = this.sc * (1 + 7 / 10 * cos(4 * beta)) * (1 + 1 / 10 * cos(12 * beta)) * (5 / 10 + 0.06 * cos(40 * beta)) * (1 + sin(beta));
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
        push();
        noFill();
        translate(this.px, this.py);
        beginShape();
        for (let v of this.flowerPoints) {
            fill(this.c1, 50)
            stroke(this.c2, 50);
            strokeWeight(1);
            vertex(v.x, v.y);
        }
        endShape();
        this.phyllotaxisCenter();
        pop();

        

        push();
        translate(this.px + 100, this.py + 100);
        beginShape();
        for (let v of this.leafPoints) {
            stroke(59,93,89, 100);
            strokeWeight(1);
            vertex(v.x, v.y);
        }
        endShape();
        pop();
    }
}