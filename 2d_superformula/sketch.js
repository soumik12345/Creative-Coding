var slider;
var n1=1;
var n2=1;
var n3=1;
var a=1;
var b=1;
var m=1;
function setup()
{
    createCanvas(400, 400);
    slider=createSlider(0, 10, 1, 0.01);
}

function draw()
{
    m=slider.value();
    background(51);
    translate(width/2, height/2);
    stroke(255, 255, 255);
    noFill();

    beginShape();
    var rad=100;
    for(var i=0;i<=TWO_PI;i+=0.1)
    {
        var r=supershape(i);
        var x=rad*r*cos(i);
        var y=rad*r*sin(i);
        vertex(x,y);
    }
    endShape(CLOSE);
}

function supershape(angle)
{
    
    var s1=abs(cos(m*angle/4)/a);
    s1=pow(s1,n2);
    var s2=abs(cos(m*angle/4)/b);
    s2=pow(s2,n3);
    var ret=pow(s1+s2,1/n1);
    return ret;
}
