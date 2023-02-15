class FlowerPlant {
  constructor(_px, _py, _sc, _c) {
    this.px = _px;
    this.py = _py;
    this.sc = _sc;
    this.lfsc = this.sc * 4;
    this.c = _c;
    this.branch = new Branch(this.px, height);
    this.flower = new Flower(this.px, this.py, this.sc, this.c);
    this.leaves = [];
  }

  addBranches() {
    let lfBranchTip = this.branch.lfBranch();
    let rtBranchTip = this.branch.rtBranch();
    //console.log(lfBranchTip);
    this.leaves.push(new Leaf(lfBranchTip.x, lfBranchTip.y, this.lfsc));
    this.leaves.push(new Leaf(rtBranchTip.x, rtBranchTip.y, this.lfsc));
  }

  show() {
    this.branch.stem();
    this.branch.show();
    for (let i = 0; i < 2; i++) {
      this.leaves[i].oneLeaf();
      if (i % 2 == 0) {
        this.leaves[i].renderLeaf(-80);
      } else {
        this.leaves[i].renderLeaf(30);
      }
    }
    this.flower.oneFlower();
    this.flower.show();
  }

}