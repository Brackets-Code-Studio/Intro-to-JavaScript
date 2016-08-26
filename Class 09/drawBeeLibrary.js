//draw a circle into canvas context
var drawCircle = function (canvasContext, x, y, radius, fillCircle)
{
  canvasContext.beginPath();
  canvasContext.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle) {
    canvasContext.fill();
    } else {
    canvasContext.stroke();
  }
};

//draw a bee into canvas context
var drawBee = function (canvasContext, x, y)
{
  canvasContext.lineWidth = 2;
  canvasContext.strokeStyle = "Black";
  canvasContext.fillStyle = "Gold";
  drawCircle(canvasContext, x, y, 8, true);
  drawCircle(canvasContext, x, y, 8, false);
  drawCircle(canvasContext, x - 5, y - 11, 5, false);
  drawCircle(canvasContext, x + 5, y - 11, 5, false);
  drawCircle(canvasContext, x - 2, y - 1, 2, false);
  drawCircle(canvasContext, x + 2, y - 1, 2, false);
};
