var slider;
function setup()
{
    createCanvas(400, 400);
    slider=createSlider(0, 10, 1, 0.01);
}

function draw()
{
    background(51);
    translate(width/2, height/2);
    var a=100;
    var b=100;
    var n=slider.value();
    stroke(255, 255, 255);
    noFill();
    beginShape();
    for(var i=0;i<=TWO_PI;i+=0.1)
    {
        var na=2/n;
        var x=pow(abs(cos(i)),na)*a*sgn(cos(i));
        var y=pow(abs(sin(i)),na)*b*sgn(sin(i));
        vertex(x,y);
    }
    endShape(CLOSE);
}

function sgn(value)
{
    if(value>0)
      return 1;
    else if (value==0)
      return 0;
    else if(value<0)
      return -1;
}
