function Pot(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.tree = null; // tree = null => chậu chưa có cây
  this.time = 1; // thời gian lớn của cây (5 -> 10 -> 15) tương ứng 3 level
  this.selected = false;

  // trồng cây mới vào chậu
  this.setTree = function(tree) {
    this.time = 1;
    this.tree = tree;
  };

  // tăng thời gian chậu trong cây lên 1
  this.incTime = function() {
    if (this.time < 15) {
      this.time = this.time + 1;
    }
  };

  // xóa cây khỏi chậu
  this.clear = function() {
    this.time = 1;
    this.tree = null;
  };
  // vẽ lại chậu cây + cây mỗi khi thay đổi trạng thái
  this.draw = function(ctx) {
    ctx.beginPath();
    loadImage(
      ctx,
      this.x,
      this.y + this.h - this.w,
      this.w,
      this.w,
      "./images/pot1.png"
    );
    if (this.selected) {
      ctx.rect(this.x, this.y + this.h - this.w, this.w, this.w);
    }
    ctx.stroke();

    setTimeout(function() {}, 1000);

    if (this.tree !== null) {
      this.tree.draw(ctx, this.x + 10, this.y + this.h - this.w - 80, 130, 130);
    }
  };
}
