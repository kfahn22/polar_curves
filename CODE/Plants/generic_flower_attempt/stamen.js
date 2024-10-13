class Stamen {
    constructor(_r) {
        this.x = 0;
        this.y = 0;
        this.r = _r;
    }

    phyllotaxis()
    {
        push();
        noStroke();
        fill(77, 0, 102, 200);
        for (let i = 0; i < 60; i++) {
            let a = i * 137.5;
            let r = c * sqrt(i);
            let x = r * cos(a);
            let y = r * sin(a);
            ellipse(x, y, c + 1.3, c + 1.3);
        }
        start += 0.1;
        pop();
    }

    show() {
        noStroke();
        fill(102, 0, 102, 150),
        circle(this.x, this.y, this.r);
        this.phyllotaxis();
    }
}