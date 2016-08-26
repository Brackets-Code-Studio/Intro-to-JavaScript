var Ball = function () {
  this.x = 100;
  this.y = 100;
  this.xSpeed = -2;
  this.ySpeed = 3;
};

Ball.prototype.draw = function (canvasContext) {
  drawCircle(canvasContext, this.x, this.y, 10, true);
};

Ball.prototype.move = function () {
  this.x += this.xSpeed;
  this.y += this.ySpeed;
};

Ball.prototype.checkCollision = function (minX, maxX, minY, maxY) {
  if (this.x < minX || this.x > maxX) {
    this.xSpeed = -this.xSpeed;
  }
  if (this.y < minY || this.y > maxY) {
    this.ySpeed = -this.ySpeed;
  }
};
