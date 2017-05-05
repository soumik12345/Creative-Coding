var stars;
var num;
function setup()
{
	num=100;
	stars= new Array();
	for(var i=0;i<num;i++)
	{
		stars.push(new star());
	}
	createCanvas(windowWidth, windowHeight);
}
function draw()
{
	background(0,0,0,50);
	translate(mouseX, mouseY);
	for(var i=0;i<num;i++)
	{
		stars[i].show();
		stars[i].update();
	}
}