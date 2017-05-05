var cols, rows;
var scl = 20;
var w = 1400;
var h = 1000;
var flyingY = 0;
var flyingX = 0;
var terrain;
var rotation_X=3;
var rotation_Z=1;
var img;

function setup()
{
  	createCanvas(600, 600, WEBGL);
  	cols = w / scl;
  	rows = h/ scl;
  	terrain = [];
  	for (var x = 0; x < cols; x++)
  	{
    	terrain[x] = [];
  	}
    img = loadImage("assets/laDefense.jpg");
    directionalLight(250, 250, 250, 100, 100, 0.25);
}

function draw()
{
    //flying-=0.1;
    var yoff = flyingY;
  	for (var y = 0; y < rows; y++)
  	{
    	var xoff = flyingX;
    	for (var x = 0; x < cols; x++)
    	{
      		terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      		xoff += 0.1;
    	}
    	yoff += 0.1;
  	}


  background(0);
  translate(0, 50);
  rotateX(-PI/rotation_X);
  rotateZ(-PI/rotation_Z);
  translate(-w/2, -h/2);
  for (var y = 0; y < rows-1; y++)
  {
    for (var x = 0; x < cols; x++)
    {
      push();
      translate(x*scl, y*scl, terrain[x][y]);
      stroke(0);
      fill(0,255,0,90);
      box(scl);
      pop();
    }
  }
}

function keyPressed()
{
    if(keyCode==87)
        flyingY-=0.1;
    if(keyCode==83)
        flyingY+=0.1;
    if(keyCode==65)
        flyingX-=0.1;
    if(keyCode==68)
        flyingX+=0.1;
    if(keyCode==UP_ARROW)
        rotation_X+=0.1;
    if(keyCode==DOWN_ARROW)
        rotation_X-=0.1;
    if(keyCode=LEFT_ARROW)
        rotation_Z+=0.1;
    if(keyCode==RIGHT_ARROW)
        rotation_Z-=0.1;
}
