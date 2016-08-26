// The Apple constructor
var Apple = function (widthInBlocks, heightInBlocks) {
    this.wBlocks = widthInBlocks;
    this.hBlocks = heightInBlocks;
    this.initialize();
};

Apple.prototype.initialize = function(){
    this.position =  new Block(this.wBlocks/2, this.hBlocks/2);
}

// Draw a circle at the apple's location
Apple.prototype.draw = function (canvasContext) {
  //this.position.drawCircle(canvasContext, "red");
  this.position.drawApple(canvasContext);
};

// Move the apple to a new random location
Apple.prototype.move = function () {
  var randomCol = Math.floor(Math.random() * (this.wBlocks - 2)) + 1;
  var randomRow = Math.floor(Math.random() * (this.hBlocks - 2)) + 1;
  this.position = new Block(randomCol, randomRow);
};
