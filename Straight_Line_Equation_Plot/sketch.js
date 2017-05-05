/*This code here plots the equation of a straight line in the canvas. Using this technique, any equation in 2 variables can be plotted in
  the canvas in O(n^2) complexity*/

function setup()
{
  createCanvas(400,400);
}

function draw()
{
  background(50);
  stroke(255);
  line(width/2,0,width/2,height);//y-axis
  line(0,height/2,width,height/2);//x-axis
  translate(width/2,height/2);
  var m=-1;
  var c=0;
  var b=1;
  beginShape();
  for(var y=height/2;y>=-height/2;y--)
  {
    for(var x=-width/2;x<=width/2;x++)
    {
      if(y===m*x+c)
        vertex(x,y);
    }
  }
  endShape(CLOSE);
}
