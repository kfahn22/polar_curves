class Stamen {
    constructor() {
        this.x = random(-4, 4);
        this.y = random(-4, 4);
        this.r = 2;
    }

    show() {
        let c10 = color(51, 0, 38, 255);
        fill(c10)
        noStroke();
        circle(this.x, this.y, this.r);
    }
}