// creates a cross like shape -- might be cool with blur or alpha 
// let r  = this.sc * (1 + 7/10 * cos(4 * beta))*(1 + 1/10 * cos(8*beta))*(5/10 + 0.06 * cos(40*beta)) * (1 + sin(4*beta));

class Leaf {
    constructor(_px, _py, _sc) {
        this.px = _px;
        this.py = _py;
        this.sc = _sc;
        this.ran = random(1);
        this.points = [];
    }

    // stem() {
    //     stroke(59, 93, 89);
    //     strokeWeight(4);
    //     noFill()
    //     beginShape();
    //     for (let i = 0; i < 5; i++) {
    //         let sp = 34;
    //         if (i % 2 == 0) {
    //             curveVertex(this.px + i * (sp + 2), this.py - i * (sp - 1));
    //         } else {
    //             curveVertex(this.px + i * (sp - 1), this.py - i * (sp + 2));
    //         }
    //     }
    //     endShape();
    // }

    // We need to loop trhough curve once before creating object
    oneLeaf() {
        // 7560 when angle mode radians
        for (let beta = 0; beta < 360; beta += 1) {
            //let r  = 90 * (1 + 7/10 * cos(4 * beta))*(1 + 1/10 * cos(12*beta))*(9/10 + 1/10 * cos(50*beta)) * (1 + sin(beta));
            let r = this.sc * (1 + 1 * cos(1 * beta)) * (1 + 2 / 10 * cos(7 * beta)) * (5 / 10 + 0.06 * cos(50 * beta)) * (1 + sin(beta));
            let x = r * cos(beta);
            let y = -r * sin(beta);
            let p = createVector(x, y);
            if (this.points.length < 360) {
                this.points[beta] = p;
            } else {
                break;
            }
        }

    }

    renderLeaf() {
        fill(59, 93, 89);
        push();
        translate(this.px, this.py);
        beginShape();
        for (let v of this.points) {
            vertex(v.x, v.y);
        }
        endShape();
        pop();
    }
}