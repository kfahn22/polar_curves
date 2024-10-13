class Stamen {
    constructor() {
        this.x = random(-8, 8);
        this.y = random(-8, 8);
        this.r = 4;
        this.num = 10;
    }

    show() {
        let c10 = color(77, 0, 102, 150);
        fill(c10)
        noStroke();
        circle(this.x, this.y, this.r);
    }
}