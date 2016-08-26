// Score constructor
var Score = function (initialScore) {
  this.score = initialScore;
};

// Draw the Score
Score.prototype.draw = function (canvasContext) {
    ctx.font = "15px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Score:" + this.score, blockSize+3, blockSize);
};

// increment the score by 1
Score.prototype.add = function () {
    this.score += 1;
};
