// get X,Y at certain tick and certain radius
// tick: from 0 (0:00, upwards, clockwise) to 60, covering whole circle
var clockPolarToXY = function(radius, tick, centerX, centerY) {
    var rad = (-tick * 6 + 90) / 180 * Math.PI;
    var xy = {
        x: centerX + Math.cos(rad) * radius,
        y: centerY - Math.sin(rad) * radius
    };
    return xy;
}

// draw a circle
var drawCircle = function(canvasContext, x, y, radius,
    fillCircle, fillColor, borderColor, borderWidth) {
    canvasContext.save();
    canvasContext.strokeStyle = borderColor;
    canvasContext.lineWidth = borderWidth;
    canvasContext.fillStyle = fillColor;
    canvasContext.beginPath();
    canvasContext.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        canvasContext.fill();
    } else {
        canvasContext.stroke();
    }
    canvasContext.restore();
}

// draw a line
var drawLine = function(canvasContext, x1, y1, x2, y2, color, width) {
    canvasContext.save();
    canvasContext.strokeStyle = color;
    canvasContext.lineWidth = width;
    canvasContext.beginPath();
    canvasContext.moveTo(x1, y1);
    canvasContext.lineTo(x2, y2);
    canvasContext.stroke();
    canvasContext.restore();
}
