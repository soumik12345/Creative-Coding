/*This code plots the differential equations of Lorrentz Attractor in 2d*/
var x=0.1,y=0,z=0;
var a=10,b=28,c=8.0/3.0;
function setup()
{
  createCanvas(800,600);
  background(50);
}

function draw()
{
  var dt=0.01;
  var dx=(a*(y-x))*dt;
  var dy=(x*(b-z)-y)*dt;
  var dz=(x*y-c*z)*dt;
  x+=dx;
  y+=dy;
  z+=dz;
  translate(width/2,height/2);
  stroke(255);
  point(x,y);
}
