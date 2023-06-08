class GoldenSpiral {
    constructor(_x, _y, _a, _b, _e, _col, _sc) {
        this.x = _x;
        this.y = _y;
        this.a = 1;
        this.b = 0.8;
        this.e = _e;
        this.col = _col;
        this.total = 15;
        this.points = [];
        this.sc = _sc;
    }

    sphericalSpiral()
    {for (let i = 0; i < this.total + 1; i += 1) {
        this.points[i] = [];
        const lat = map(i, 0, this.total, 0, PI);
        for (let j = 0; j < this.total + 1; j++)
        { 
            const lon = map(j, 0, this.total, 0, TWO_PI);
            // Equations for spherical  spiral curve from mathworld
            const x = this.a * pow(this.e, this.b*cos(lon)) * sin(lat);
            const y = this.a * pow(this.e, this.b*cos(lon)) * sin(lat);
            const z = this.a * cos(lat) ;
            let p = createVector(x, y, z);
            //console.log(p);
            if (this.points.length < 100) {
                this.points[i][j] = p;
            } else {
                break;
            }
        }
      }}


    show(angle) {
        noFill();
        push();
        beginShape();
        for (let i = 0; i < this.points.length; i++) {
          stroke(this.col);
          strokeWeight(2);
          sphere(this.points[i].x, this.points[i].y, this.points[i].z, 1);
        }
        endShape();
        pop();
    }
}

