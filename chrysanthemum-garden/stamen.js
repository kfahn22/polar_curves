class Stamen {
    constructor() {
        this.x = random(-8, 8);
        this.y = random(-8, 8);
        this.r = 3;
    }

    show() {
        let c10 = color(51, 0, 38, 255);
        fill(c10)
        noStroke();
        circle(this.x, this.y, this.r);
    }
}