class Chrystanthemum {
    constructor(_px, _py, _p, _q, _sc) {
        this.px = _px;
        this.py = _py;
        this.p = _p;
        this.q = _q;
        this.sc = _sc;
        this.points = [];
    }

    // https://github.com/anuraghazra/CanvasFun/blob/master/LoveHearts/Heart.js
    // Reference for this function
    // We need to loop trhough flower once before creating object
    oneFlower() {
        // 7560 when angle mode radians
        for (let beta = 0; beta < 361; beta += 1) {
            let r = 5 * (1 + sin(11 * beta / 5)) - 4 * pow(sin(17 * beta / 3), 4) + pow(sin(2 * cos(3 * beta) - 28 * beta), 8);
            let x = this.sc * r * cos(beta);
            let y = -this.sc * r * sin(beta);
            let p = createVector(x, y);
            if (this.points.length < 361) {
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
            stroke(255, 255, 255, 100);
            //fill(this.c, 50)
            vertex(v.x, v.y);
        }
        endShape();
        pop();
    }
}