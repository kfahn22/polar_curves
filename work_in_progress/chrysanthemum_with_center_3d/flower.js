let h = 15;
let a = 0;
let n = 0;
let start = 0;
let c = 1.8;

class Chrystanthemum {
    constructor(_px, _py, _p, _q, _sc) {
        this.px = _px;
        this.py = _py;
        this.p = _p;
        this.q = _q;
        this.sc = _sc;
        this.pt1 = [];
        this.pt2 = [];
    }

    // https://github.com/anuraghazra/CanvasFun/blob/master/LoveHearts/Heart.js
    // Reference for this function
    // We need to loop through flower once before creating object
    oneFlower() {
        // 7560 when angle mode 
        for (let beta = 0; beta < 720; beta += 1) {
            let phi = this.p * beta;
            let theta = this.q * beta;
            let r = 5 * (1 + sin(11 * beta / 5)) - 4 * pow(sin(17 * beta / 3), 4) + pow(sin(2 * cos(3 * beta) - 28 * beta), 8);
            let x = r * cos(theta) * (this.sc * cos(phi));
            let y = -r * sin(theta) * (this.sc * cos(phi));
            let z = r * sin(phi);
            let p = createVector(x, y, z);
            if (this.pt1.length < 720) {
                this.pt1[beta] = p;
            } else {
                break;
            }
        }

    }

    phyllotaxisCenter() {
        push();
        noStroke();
        fill(77, 0, 102, 200);
        for (let i = 0; i < 60; i++) {
            let beta = i * 137.5;
            let phi = this.p * beta;
            let theta = this.q * beta;
            let r = c * sqrt(i);
            let x = r * cos(theta) * (this.sc * cos(phi));
            let y = r * sin(theta) * (this.sc * cos(phi));
            let z = r * sin(phi);
            let p = createVector(x, y, z);
            this.pt2[i].push(p);
        }
        start += 0.1;
        pop();
    }

    show() {
        push();
        noFill();
        translate(this.px, this.py);
        beginShape();
        for (let v of this.pt1) {
            stroke(255, 255, 255, 100);
            strokeWeight(1);
            vertex(v.x, v.y, v.z);
        }
        endShape();
        pop();

        push();
        beginShape();
        for (let v of this.pt2) {
            fill(255,0,0);
            translate(v.x, v.y, v.z);
            sphere(5);

        }
        endShape();
        pop();
       
    }
}