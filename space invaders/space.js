var s = 35 
var s2 = 150
var cls= 12
var x = 550 
var y = 750

function setup()  {
    createCanvas(windowWidth,windowHeight);
   
fill('red')


}

function draw() {
  if (keyIsDown(LEFT_ARROW))
    x-=10;

  if (keyIsDown(RIGHT_ARROW))
    x+=10;




  clear();
   background('black')

   for (i =1; i <= cls; i++){
    rect (i*100, s, s, s)
    // rect (100, 50, 50, 50 )
   }
     for (i =1; i <= cls; i++){
    rect (i*100, s2, s, s)
    // rect (100, 50, 50, 50 )
   }

  fill(255, 0, 0);
  rect(x, y, 200, 20);
}