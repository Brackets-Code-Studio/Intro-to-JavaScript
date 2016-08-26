// Stage constructor
var Stage = function (width, height, blockSize) {
  this.w = width;
  this.h = height;
  this.bSize = blockSize;
};

// Draw the Stage
Stage.prototype.draw = function (canvasContext) {
    //draw border
    canvasContext.fillStyle = "Gray";
    //top
    canvasContext.fillRect(0, 0, this.w, this.bSize);
    //bottom
    canvasContext.fillRect(0, this.h - this.bSize, this.w, this.bSize);
    //left
    canvasContext.fillRect(0, 0, this.bSize, this.h);
    //right
    canvasContext.fillRect(this.w - this.bSize, 0, this.bSize, this.h);

    //draw grids for development. or for easy playing?
    this.drawBlockGrids(canvasContext);
};

// Draw the Stage grids
Stage.prototype.drawBlockGrids = function (canvasContext) {
    //set line color and width
    ctx.strokeStyle = 'silver';
    ctx.lineWidth = 0.5;

    //draw vertical grids for development
    for(var x=0; x<=this.w; x+=this.bSize)
    {
        ctx.beginPath();
        ctx.moveTo(x,0);
        ctx.lineTo(x,this.w);
        ctx.stroke();
    }

    //draw horizontal grids for development
    for(var y=0; y<=this.h; y+=this.bSize)
    {
        ctx.beginPath();
        ctx.moveTo(0,y);
        ctx.lineTo(this.w,y);
        ctx.stroke();
    }
};
