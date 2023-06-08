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
      this.col = color(this.c);
    }
  
    // We need to loop through curve once before creating object
    oneCurve(theta) {
      let p;
     for (let theta = 0; theta < 30; theta += 1) {
        // Equations for spherical curve from mathworld
        const x = (this.rx * cos(this.w*theta)) / sqrt(this.a*this.a * theta*theta + this.b);
        const y = (this.ry * sin(this.w*theta)) / sqrt(this.a*this.a * theta*theta + this.b);
        const z = -(this.a * this.rz * theta ) / sqrt(this.a*this.a * theta*theta + this.b) ;
        p = createVector(x, y, z);
        //console.log(p);
          if (this.points.length < 60) {
            this.points[theta] = p;
          } 
      }
    }
  
    show() {
      noFill();
      strokeWeight(3);
      push();
      rotate(this.rot);
      beginShape();
      for (let v of this.points) {
        stroke(this.col);
        vertex(v.x, v.y, v.z);
      }
      endShape();
      pop();
      push();
      noFill();
      rotate(this.rot+180);
      beginShape();
      for (let v of this.points) {
        stroke(this.col);
        vertex(-v.x, -v.y, -v.z);
      }
      endShape();
      pop();
    }
  }
  