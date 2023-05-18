class Spiral {
  constructor( _a, _b, _w, _rx, _ry, _rz, _rot, _c) {
    this.a = _a;
    this.b = _b;
    this.w = _w;
    this.rx = _rx;
    this.ry = _ry;
    this.rz = _rz;
    this.points = [];
    this.rot = _rot;
    this.st = 1;
    this.c = _c;
    this.total = 9;
    this.col = color(this.c);
  }

  // We need to loop through curve once before creating object
  oneCurve() {
    let p;
    for (let i = 0; i < this.total + 1; i += 1) {
      this.points[i] = [];
      const lat = map(i, 0, this.total, 0, 180);
      for (let j = 0; j < this.total + 1; j++)
      { 
          const lon = map(j, 0, this.total, 0, 360);
          // Equations for spherical  spiral curve from mathworld
          const x = (this.rx * cos(this.w*lon) * sin(lat)) / sqrt(this.a*this.a * lon*lon + this.b);
        const y = (this.ry * cos(this.w*lon) * sin(lat)) / sqrt(this.a*this.a * lon*lon + this.b);
        const z = -(this.a * this.rz * lon ) * cos(lat) / sqrt(this.a*this.a * lon*lon + this.b) ;
          if (i % 1 == 0) // 5
          {p = createVector(x, y, z);}
          //console.log(p);
          if (this.points.length < 100) {
              this.points[i][j] = p;
          } else {
              break;
          }
      }
    }
}

show() {
    push();
    
    //translate(this.px, this.py);
    rotate(this.rot);
    for (let i = 0; i < this.total; i++) {
      fill(255,255,204);
      stroke(255,255,26, 10);
      beginShape(TRIANGLE_STRIP);
      for (let j = 0; j < this.total + 1; j++) {
        const v1 = this.points[i][j];
        vertex(v1.x, v1.y, v1.z);
        const v2 = this.points[i + 1][j];
        vertex(v2.x, v2.y, v2.z);
      }
      endShape();
    }
    pop();
  }
}
