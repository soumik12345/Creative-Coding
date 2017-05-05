function GULI(x,y)
{
	this.x=x;
	this.y=y;
	this.r=8;
	this.red=150;
	this.green=0;
	this.blue=255;

	this.display = function()
	{
    	noStroke();
    	fill(this.red, this.green, this.blue);
    	ellipse(this.x, this.y, this.r*2, this.r*2);
  	}

	this.move = function()
	{
    	this.y = this.y - 10;
  }
	this.destroy=function()
	{
		this.red=0;
		this.green=0;
		this.blue=0;
	}
}
