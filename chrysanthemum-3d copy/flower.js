class Flower {
    constructor(_px, _py, _p, _q, _h, _c) {
        this.beta = 0;
        this.p = _p;
        this.q = _q;
        this.px = _px;
        this.py = _py;
        this.h = _h;
        this.c = color(255, 0, 255);
        this.points = [];
    }

    // https://github.com/anuraghazra/CanvasFun/blob/master/LoveHearts/Heart.js
    // Reference for this function
    // We need to loop trhough torus knot before creating object
    oneFlower() {
        // 630 when angle mode radians
        for (let beta = 0; beta < 7560; beta += 1) {
            let phi = this.p * beta;
            let theta = this.q * beta;
            let r = 5 * (1 + sin(11 * beta / 5)) - 4 * pow(sin(17 * beta / 3), 4) + pow(sin(2 * cos(3 * beta) - 28 * beta), 8);
            let x = r * cos(theta) * (this.h + cos(phi));
            let y = -r * sin(theta) * (this.h + cos(phi));
            let z = r * sin(phi);
            let p = createVector(x, y, z);
            if (this.points.length < 7560) {
                this.points[beta] = p;
            } else {
                break;
            }
        }
    }


    show() {
        push();
        noFill();
        translate(this.px, this.py);
        // translate(0, height/2);
        beginShape();
        for (let v of this.points) {
            //translate(v.x, v.y, v.z);
            //let col = color(this.c);
            stroke(255, 255, 255, 150);
            vertex(v.x, v.y, v.z);
        }
        endShape();
        pop();
    }
}