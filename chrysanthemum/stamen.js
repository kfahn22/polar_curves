class Stamen {
    constructor() {
        this.x = random(-7,7);
        this.y = random(-7,7);
        this.r = 3;
        this.num = 70;
    }

    show() {
        let c10 = color(77, 0, 102, 100);
        fill(c10)
        noStroke();
        for (let i = 0; i < this.num; i++) {
            circle(this.x, this.y, this.r);
        }
    }
}