let flower;

class FlowerPlant {
  constructor(_px, _py, _sc, _brHeight1, _brHeight2, _c) {
    this.px = _px;
    this.py = _py;
    this.sc = _sc;
    this.lfsc = this.sc * 4;
    this.c = _c;
    this.branch = new Branch(this.px, height, this.sc);
    this.num = 5;
    this.leaves = [];
    this.brHeight1 = _brHeight1;
    this.brHeight2 = _brHeight2;
    this.j = int(random(0, 4));
    this.k = int(random(5, 17));
    this.l = int(random(0, 28));
    this.m = int(random(0, 3));
  }

  addBranches() {
    let lfBranchTip = this.branch.lfBranch(this.brHeight1, 5, -1.2, 0.25);
    let lfBranchTip2 = this.branch.lfBranch(this.brHeight2, 7, -0.95, 0.25);
    let rtBranchTip = this.branch.rtBranch(this.brHeight1, 4, 1.15, 0.25);
    let rtBranchTip2 = this.branch.rtBranch(this.brHeight2, 6, 0.9, 0.15);
    let ctBranchTip = this.branch.centerBranch();
    this.leaves.push(new Leaf(lfBranchTip.x, lfBranchTip.y, this.lfsc));
    this.leaves.push(new Leaf(rtBranchTip.x, rtBranchTip.y, this.lfsc));
    this.leaves.push(new Leaf(lfBranchTip2.x, lfBranchTip2.y, this.lfsc));
    this.leaves.push(new Leaf(rtBranchTip2.x, rtBranchTip2.y, this.lfsc));
    flower = new Flower(ctBranchTip.x, ctBranchTip.y, this.sc, this.c, this.j, this.k, this.l, this.m);
  }

  show() {
    this.branch.show();
    for (let i = 0; i < 4; i++) {
      this.leaves[i].oneLeaf();
      if (i % 2 == 0) {
        this.leaves[i].renderLeaf(-80);
      } else {
        this.leaves[i].renderLeaf(30);
      }
    }
    flower.oneFlower();
    flower.show();
  }
}