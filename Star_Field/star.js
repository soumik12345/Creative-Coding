function star()
{
	this.x=random(-windowWidth/2, windowWidth/2);
	this.y=random(-windowHeight/2, windowHeight/2);
	this.z=random(0, windowWidth);
	this.show=function()
	{
		var radius=map(this.z, 0, windowWidth, 10, 0);
		fill(255, 0, 0);
		var x1=map(this.x/this.z, -1, 1, -windowWidth/2, windowWidth/2);
		var y1=map(this.y/this.z, -1, 1, -windowHeight/2, windowHeight/2);
		rect(x1, y1, radius, radius);
	}
	this.update=function()
	{
		this.z-=frameCount/64;
		if(this.z<=0)
		{
			this.x=random(-windowWidth/2, windowWidth/2);
			this.y=random(-windowHeight/2, windowHeight/2);
			this.z=random(0, windowWidth);
		}
	}
}