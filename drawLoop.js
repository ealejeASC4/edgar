var x=0
var y=0
//just call it once 
function setup() {
    createCanvas(windowWidth,windowHeight);
   
}
function draw() {
 background('purple');
    fill(255,2,3)
    ellipse(x,y,200)
    x = x + 10;
    y = y + 10
    if (x > width) {
        x=0
    }
     if (y > length) {
        y=0
    }
}