// The Block constructor
var Block = function (col, row) {
  this.col = col;
  this.row = row;
};

// Draw a square at the block's location
Block.prototype.drawSquare = function (canvasContext, color) {
  var x = this.col * blockSize;
  var y = this.row * blockSize;
  canvasContext.fillStyle = color;
  canvasContext.fillRect(x, y, blockSize, blockSize);
};

// Draw a circle at the block's location
Block.prototype.drawCircle = function (canvasContext, color) {
  var centerX = this.col * blockSize + blockSize / 2;
  var centerY = this.row * blockSize + blockSize / 2;
  canvasContext.fillStyle = color;
  circle(canvasContext, centerX, centerY, blockSize / 2, true);
};

// Check if this block is in the same location as another block
Block.prototype.equal = function (otherBlock) {
  return this.col === otherBlock.col && this.row === otherBlock.row;
};

// Draw a circle (using the function from Chapter 14)
var circle = function (canvasContext, x, y, radius, fillCircle) {
  canvasContext.beginPath();
  canvasContext.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    canvasContext.fill();
  } else {
    canvasContext.stroke();
  }
};
