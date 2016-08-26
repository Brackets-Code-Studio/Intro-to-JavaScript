// The Apple constructor
var Apple = function (widthInBlocks, heightInBlocks) {
    this.wBlocks = widthInBlocks;
    this.hBlocks = heightInBlocks;
    this.position =  new Block(widthInBlocks/2, heightInBlocks/2);
};

// Draw a circle at the apple's location
Apple.prototype.draw = function (canvasContext) {
  this.position.drawCircle(canvasContext, "red");
};

// Move the apple to a new random location
Apple.prototype.move = function () {
  var randomCol = Math.floor(Math.random() * (this.wBlocks - 2)) + 1;
  var randomRow = Math.floor(Math.random() * (this.hBlocks - 2)) + 1;
  this.position = new Block(randomCol, randomRow);
};
