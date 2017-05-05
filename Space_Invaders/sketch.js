/*This game demonstrates the mechanincs of the famous Space Invaders Game*/

var ship;
var alien=[];
var guli=[];
var singleGuli;
function setup()
{
    createCanvas(windowWidth, windowHeight);
    ship=new SHIP();
    for(var i=0;i<7;i++)
      alien[i]=new ALIEN(100*i+70,70);

}

function draw()
{
    background(0);
    ship.display();
    for(var i=0;i<alien.length;i++)
      alien[i].display();
    for(var i=0;i<guli.length;i++)
    {
      guli[i].display();
      guli[i].move();
      for(var j=0;j<alien.length;j++)
      {
        var d=dist(alien[j].x,alien[j].y,guli[i].x,guli[i].y);
        console.log(d);
        console.log(alien[j].r+guli[i].r);
        if(d<(alien[j].r+guli[i].r))
        {

          alien.splice(j,1);

        }
      }
    }

  }
function keyPressed()
{
    if(keyCode===32)
    {
      singleGuli=new GULI(ship.x, height-100);
      guli.push(singleGuli);
    }
    if(keyCode===LEFT_ARROW)
      ship.move(-1);
    else if(keyCode===RIGHT_ARROW)
      ship.move(1);
}
