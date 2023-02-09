class Flower {
    constructor(_px, _py, _p, _q, _h, _c) {
        this.p = 1;
        this.q = 1;
        this.px = _px;
        this.py = _py;
        this.h = 1;
        this.sc = 6;
        this.c1 = _c[0];
        this.c2 = _c[1];
        this.c3 = _c[2];
        this.flowerPoints = [];
        this.leafPoints = [];
    }

    // https://github.com/anuraghazra/CanvasFun/blob/master/LoveHearts/Heart.js
    // Reference for this function
    // We need to loop trhough flower once before creating object
    oneFlower() {
        // 7560 when angle mode radians
        let offset = 30;
        for (let beta = 0; beta < 7560; beta += 1) {
            let phi = this.p * beta;
            let theta = this.q * beta;
            let r = this.sc * (1 + sin(11 * beta / 5)) - 4 * pow(sin(17 * beta / 3), 4) + pow(sin(2 * cos(3 * beta) - 28 * beta), 8);
            let x =  r * cos(theta) * (this.h + cos(phi));
            let y = - r * sin(theta) * (this.h + cos(phi));
            let p = createVector(x, y);
            if (this.flowerPoints.length < 7560) {
                this.flowerPoints[beta] = p;
            } else {
                break;
            }
        }

    }

    // From PHyllotaxis coding challenge
    // Code for: https://youtu.be/KWoJgHFYWxY
    center() {
        let n = 0;
        let c = 4;
        let start = 0;
        push();
        // translate(this.px,this.py);
        rotate(n * 0.3);
        for (let i = 0; i < n; i++) {
            let a = i * 137.5;
            let r = c * sqrt(i);
            let x = r * cos(a);
            let y = r * sin(a);
            fill(0);
            // strokeWeight(1);
            ellipse(x, y, c + 1, c + 1);
        }
        n += 5;
        start += 0.1;
        pop();
    }

    oneLeaf() {
        // 7560 when angle mode radians
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
        noStroke();
        fill(0, 102, 0, 200);
        rect(this.px, this.py, 3, 200);
        pop();
        push();
        translate(this.px + 30, this.py);
        beginShape();
        for (let v of this.flowerPoints) {
            fill(this.c1, 50)
            stroke(this.c2, 50);
            strokeWeight(0.1);
            vertex(v.x, v.y);
        }
        endShape();
        pop();
        push();
        translate(this.px + 100, this.py - 100);
        beginShape();
        for (let v of this.leafPoints) {
            fill(59,93,89);
            stroke(59,93,89);
            vertex(v.x, v.y);
        }
        endShape();
        pop();

        fill(this.c3, 255);
        this.center();
    }
}