function ALIEN(x,y)
{
    this.x=x;
    this.y=y;
    this.r=60;
    this.red=255;
  	this.green=0;
  	this.blue=0;

    this.display=function()
    {
      noStroke();
      fill(this.red, this.green, this.blue);
      ellipse(this.x,this.y,this.r,this.r);
    }
    this.destroy=function()
  	{
  		this.red=0;
  		this.green=0;
  		this.blue=0;
  	}
}
