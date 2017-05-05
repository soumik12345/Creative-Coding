function SHIP()
{
    this.x=width/2;

    this.display=function()
    {
        fill(255);
        stroke(0);
        rectMode(CENTER);
        rect(this.x, height-60, 20, 60);
    }

    this.move=function(direction)
    {
        this.x+=direction*5;
    }
}
