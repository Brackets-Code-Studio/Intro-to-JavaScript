// The Snake constructor
var Snake = function (widthInBlocks, heightInBlocks) {
    this.wBlocks = widthInBlocks;
    this.hBlocks = heightInBlocks;

    //body segments
    this.segments = [
        new Block(7, 5),    //head
        new Block(6, 5),
        new Block(5, 5)     //tail
    ];

    //direction and the next direction
    this.direction = "right";
    this.nextDirection = "right";
};

// Draw a square for each segment of the snake's body
Snake.prototype.draw = function (canvasContext) {
  for (var i = 0; i < this.segments.length; i++) {
    this.segments[i].drawSquare(canvasContext, "blue");
  }
};

// Create a new head and add it to the beginning of
// the snake to move the snake in its current direction
Snake.prototype.move = function () {
  var head = this.segments[0];
  var newHead;

  this.direction = this.nextDirection;

  if (this.direction === "right") {
    newHead = new Block(head.col + 1, head.row);
  } else if (this.direction === "down") {
    newHead = new Block(head.col, head.row + 1);
  } else if (this.direction === "left") {
    newHead = new Block(head.col - 1, head.row);
  } else if (this.direction === "up") {
    newHead = new Block(head.col, head.row - 1);
  }

  if (this.checkCollision(newHead)) {
    return "collided";
  }

  this.segments.unshift(newHead);

  if (newHead.equal(apple.position)) {
    return "eaten";
  } else {
    this.segments.pop();
  }
};

// Check if the snake's new head has collided with the wall or itself
Snake.prototype.checkCollision = function (head) {
  var leftCollision = (head.col === 0);
  var topCollision = (head.row === 0);
  var rightCollision = (head.col === this.wBlocks  - 1);
  var bottomCollision = (head.row === this.hBlocks  - 1);

  var wallCollision = leftCollision || topCollision || rightCollision || bottomCollision;

  var selfCollision = false;

  for (var i = 0; i < this.segments.length; i++) {
    if (head.equal(this.segments[i])) {
      selfCollision = true;
    }
  }

  return wallCollision || selfCollision;
};

// Set the snake's next direction based on the keyboard
Snake.prototype.setDirection = function (newDirection) {
  if (this.direction === "up" && newDirection === "down") {
    return;
  } else if (this.direction === "right" && newDirection === "left") {
    return;
  } else if (this.direction === "down" && newDirection === "up") {
    return;
  } else if (this.direction === "left" && newDirection === "right") {
    return;
  }

  this.nextDirection = newDirection;
};
