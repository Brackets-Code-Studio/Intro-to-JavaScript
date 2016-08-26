// The Ball constructor
var Ball = function (x, y) {
  this.x = x;
  this.y = y;
  this.xSpeed = 0;
  this.ySpeed = 0;
};

// Draw the ball at its current position
Ball.prototype.draw = function (canvasContext) {
  circle(canvasContext, 'blue', this.x, this.y, 10, true);
};

// Draw circle
var circle = function (canvasContext, color, x, y, radius, fillCircle) {
  canvasContext.beginPath();
  canvasContext.fillStyle = color;
  canvasContext.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    canvasContext.fill();
    } else {
    canvasContext.stroke();
  }
};

// Update the ball's position based on its speed
Ball.prototype.move = function (width, height) {
  this.x += this.xSpeed;
  this.y += this.ySpeed;

  if (this.x < 0) {
    this.x = width;
  } else if (this.x > width) {
    this.x = 0;
  } else if (this.y < 0) {
    this.y = height;
  } else if (this.y > height) {
    this.y = 0;
  }
};

// Set the ball's direction based on a string
Ball.prototype.setDirection = function (direction) {
  if (direction === "up") {
    this.xSpeed = 0;
    this.ySpeed = -5;
  } else if (direction === "down") {
    this.xSpeed = 0;
    this.ySpeed = 5;
  } else if (direction === "left") {
    this.xSpeed = -5;
    this.ySpeed = 0;
  } else if (direction === "right") {
    this.xSpeed = 5;
    this.ySpeed = 0;
  } else if (direction === "stop") {
    this.xSpeed = 0;
    this.ySpeed = 0;
  }
};
