let h = 15;
let a = 0;
let n = 0;
let start = 0;
let c = 1.8;
// j = 1, k = 1, l = 10, m = 3
// j, k, l = 0 polar rose
class Chrystanthemum {
    constructor(_px, _py, _p, _q, _sc, _j, _k, _l, _m) {
        this.px = _px;
        this.py = _py;
        this.p = _p;
        this.q = _q;
        this.sc = _sc;
        this.points = [];
        this.j = _j; // 4
        this.k = _k; // 17
        this.l = _l; // 28
        this.m = _m; // 3
        // this.j = 4;
        // this.k = 5;
        // this.l = 0;  // l = 0 
        // this.m = 0;
        // this.n = 0;
    }

    // https://github.com/anuraghazra/CanvasFun/blob/master/LoveHearts/Heart.js
    // Reference for this function
    // We need to loop trhough flower once before creating object
    oneFlower() {
        // 7560 when angle mode degrees; 21PI in radians
       // formula for chrysanthemum flower
       // let r = 5 * (1 + sin(11 * beta / 5)) - 4 * pow(sin(17 * beta / 3), 4) + pow(sin(2 * cos(3 * beta) - 28 * beta), 8);
        for (let beta = 0; beta < 7560; beta += 1) {
            let r = 5 * (1 + sin(11 * beta / 5)) - this.j * pow(sin(this.k * beta / 3), 4) + pow(sin(2 * cos(this.m * beta) - this.l * beta), 8);
            let x = this.sc * r * cos(beta);
            let y = -this.sc * r * sin(beta);
            let p = createVector(x, y);
            if (this.points.length < 7560) {
                this.points[beta] = p;
            } else {
                break;
            }
        }

    }

    phyllotaxisCenter()
    {
        push();
        noStroke();
        fill(77, 0, 102, 200);
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

    show() {
        push();
        noFill();
        translate(this.px, this.py);
        beginShape();
        for (let v of this.points) {
            stroke(255, 255, 255, 100);
            strokeWeight(1);
            vertex(v.x, v.y);
        }
        endShape();
        pop();
        this.phyllotaxisCenter();
    }
}