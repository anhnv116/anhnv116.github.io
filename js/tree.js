function Tree(type) {
  // khởi tạo cây với level = 1
  this.level = 1;
  this.type = type;
  // method vẽ cây
  this.draw = function(ctx, x, y, width, height) {
    ctx.beginPath();
    loadImage(
      ctx,
      x,
      y,
      width,
      height,
      "./images/" + this.type + "." + this.level + ".png"
    );
    ctx.stroke();
  };

  // tăng level của cây lên 1
  this.grow = function() {
    if (this.level < 3) {
      this.level = this.level + 1;
    }
  };
}
