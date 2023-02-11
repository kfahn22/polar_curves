class Plant {
    constructor(_px, _c) {
        this.tree = [];
        this.leaves = [];
        this.a = createVector(_px, height);
        this.b = createVector(_px, height - 100);
        this.root = new Branch(this.a,this.b);
        this.tree[0] = this.root;
        this.leaves = [];
        this.flowers = [];
        this.c = _c;
        this.c1 = _c[0];
        this.c2 = _c[1];
        this.c3 = _c[2];
    }

    addBraches() {
        // for (let i = 3 - 1; i >= 0; i--) {
        //     this.tree.push(this.tree[i].branchA());
        //     this.tree.push(this.tree[i].branchB());
        // }
        for (let i=1;i<3;i++) {
            this.tree[i] = new Branch(this.a, this.b);
        }
    }

    addLeaves() {
        for (var i = 0; i < 3; i++) {
            if (!this.tree[i] == 2) {
                let leaf = this.tree[i].end.copy();
                this.leaves.push(new Leaf(leaf.x, leaf.y, 4));
            }
        }
    }

    addFlowers() {
        let fl = this.tree[i].end.copy();
        this.flowers.push(new Flower(fl.x, fl.y, 6, _c))
    }

    grow() {
        for (var i = 0; i < 3; i++) {
            this.tree[i].addBranches();
            this.tree[i].show();
            if (!i == 2) {
                this.leaves[i].addEnds();
                this.leaves[i].show();
            } else {
                this.flowers[2].oneFlower();
                this.flowers[2].phyllotaxisCenter();
                this.flowers[2].show()
            }
        }
    }
}