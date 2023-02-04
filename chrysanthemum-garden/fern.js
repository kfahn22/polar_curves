// Barnsley Fern 
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/challenges/108-barnsley-fern
// https://youtu.be/JFugGF1URNo

// Code from Challenge: https://editor.p5js.org/codingtrain/sketches/G4V940Y8V


let x = 0;
let y = 0;

class Fern {
    constructor(_px, _py, _w, _h) {
        this.x = _px;
        this.y = _py;
        this.w = _w;
        this.h = _h;
    }

    drawPoint() {
        stroke(255);
        strokeWeight(2);
        let mx = map(x, -2.1820, 2.6558, 0, this.w);
        let my = map(y, 0, 9.9983, this.h, 0);
        point(mx, my);
    }

    nextPoint() {
        let nextX;
        let nextY;
        let r = random(1);

        if (r < 0.01) {
            nextY = 0.16 * y;
            nextX = 0;
        } else if (r < 0.86) {
            nextX = 0.85 * x + 0.04 * y;
            nextY = -0.04 * x + 0.85 * y + 1.6;
        } else if (r < 0.93) {
            nextX = 0.2 * x + -0.26 * y;
            nextY = 0.23 * x + 0.22 * y + 1.6;
        } else {
            nextX = -0.15 * x + 0.28 * y;
            nextY = 0.26 * x + 0.24 * y + 0.44;
        }
        x = nextX;
        y = nextY;
    }

    show() {
        for (let i = 0; i < 300; i++) {
            this.drawPoint();
            this.nextPoint();
        }
    }
}