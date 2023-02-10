class Leaf {
    constructor(_px, _py, _sc) {
        this.px = _px;
        this.py = _py;
        this.sc = _sc;
        this.points = [];
    }

    // We need to loop trhough curve once before creating object
    oneLeaf() {
        // 7560 when angle mode radians
        for (let beta = 0; beta < 360; beta += 1) {
            let r  = 90 * (1 + 9/10 * cos(8 * beta))*(1 + 1/10 * cos(24*beta))*(9/10 + 1/10 * cos(200*beta)) * (1 + sin(beta));
            let x = this.sc * r * cos(beta);
            let y = -this.sc * r * sin(beta);
            let p = createVector(x, y);
            if (this.points.length < 360) {
                this.points[beta] = p;
            } else {
                break;
            }
        }

    }

    show() {
        push();
        //noFill();
        translate(this.px, this.py);
        beginShape();
        for (let v of this.points) {
            stroke(59,93,89, 100);
            strokeWeight(1);
            vertex(v.x, v.y);
        }
        endShape();
        pop();
    }
}