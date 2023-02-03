class Flower {
    constructor(_px, _py, _p, _q, _h, _c) {
        this.p = _p;
        this.q = _q;
        this.px = _px;
        this.py = _py;
        this.h = _h;
        this.c = _c;
        this.points = [];
    }

    // https://github.com/anuraghazra/CanvasFun/blob/master/LoveHearts/Heart.js
    // Reference for this function
    // We need to loop trhough flower once before creating object
    oneFlower() {
        // 7560 when angle mode radians
       let offset = 30;
        for (let beta = 0; beta < 361; beta += 1) {
            rotateZ(30*beta);
            let phi = this.p * beta;
            let theta = this.q * beta;
            let r = 5 * (1 + sin(11 * beta / 5)) - 4 * pow(sin(17 * beta / 3), 4) + pow(sin(2 * cos(3 * beta) - 28 * beta), 8);
            let x = r * cos(theta) * (this.h + cos(phi)) + offset;
            let y = -r * sin(theta) * (this.h + cos(phi)); + offset;
            let z = r * sin(phi) + offset;
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
        beginShape();
        for (let v of this.points) {
            // rotateY(25);
            stroke(0);
            //fill(this.c, 50)
            vertex(v.x, v.y, v.z);
        }
        endShape();
        pop();
    }
}