class GoldenSpiral {
    constructor(_x, _y, _a, _b, _e, _col, _sc) {
        this.x = _x;
        this.y = _y;
        this.a = _a;
        this.b = _b;
        this.e = _e;
        this.col = _col;
        //this.flip = _flip;
        this.points = [];
        this.sc = _sc;
    }

    spiral() {
        for (let theta = 0; theta < 20; ) {
            const x = this.a * pow(this.e, this.b*theta) * cos(theta);
            const y = this.a * pow(this.e, this.b*theta) * sin(theta);
            //const z = this.a * pow(this.e, this.b*theta) * sin(theta);
            //let p = createVector(x,y,z);
            let p = createVector(x,y);
            this.points.push(p);
            theta +=0.01;
        }
    }

    show(angle) {
        noFill();
        push();
        translate(this.x, this.y);
        rotate(angle);
        scale(this.sc);
        // if (this.flip == true) {
        //     scale(-1)*this.mult;
        // }
        beginShape(LINES);
        for (let i = 0; i < this.points.length; i++) {
          stroke(this.col);
          strokeWeight(1);
          vertex(this.points[i].x, this.points[i].y);
          //vertex(this.points[i].x, this.points[i].y, this.points[i].z);
        }
        endShape();
        pop();
    }
}

