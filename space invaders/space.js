var s = 50;
var x = 550;
var y = 750;

var cls= 12;
var s2 = 150;


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  if (keyIsDown(LEFT_ARROW)&& x>0)
    x-=10;

 if (keyIsDown(RIGHT_ARROW)&& x<1170)
    x+=10;

 clear();
  background('black')

for (i =1; i <= cls; i++){
    rect (i*100, s, s, s)
}

for (i =1; i <= cls; i++){
    rect (i*100, s2, s, s)
}

 fill(255, 0, 0);
 rect(x,y,200,20)

}

function shoot(){
   if (keyIsDown(32))
   fill(0,0,255)
   rect (x,y,10,10)
  
}
