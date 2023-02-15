let flower;

class FlowerPlant {
  constructor(_px, _py, _sc, _c) {
    this.px = _px;
    this.py = _py;
    this.sc = _sc;
    this.lfsc = this.sc * 4;
    this.c = _c;
    this.branch = new Branch(this.px, height, this.sc);
    this.num = 5;
    this.leaves = [];
  }

  addBranches() {
    let lfBranchTip = this.branch.lfBranch(48, 8);
    let lfBranchTip2 = this.branch.lfBranch(67, 12);
    let rtBranchTip = this.branch.rtBranch(52, 8);
    let rtBranchTip2 = this.branch.rtBranch(65, 12);
    let ctBranchTip = this.branch.centerBranch();
    this.leaves.push(new Leaf(lfBranchTip.x, lfBranchTip.y, this.lfsc));
    this.leaves.push(new Leaf(rtBranchTip.x, rtBranchTip.y, this.lfsc));
    this.leaves.push(new Leaf(lfBranchTip2.x, lfBranchTip2.y, this.lfsc));
    this.leaves.push(new Leaf(rtBranchTip2.x, rtBranchTip2.y, this.lfsc));
    flower = new Flower(ctBranchTip.x, ctBranchTip.y, this.sc, this.c);
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