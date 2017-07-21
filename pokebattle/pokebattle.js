var cls = 2;
var s = 100;
var button;

function setup(){
    createCanvas(1200,windowHeight);
   

for (i =1; i <= cls; i++){
    rect (i*350, 650, 300, s);
};
rect(550, 600, 450,35,20);//health bar


rect(50, 50, 450,35,20);//heatl of enemy 

rect(s,s,s+20,s-20,)//where hp goes 
textSize(32);
text("HP=", s, s+50);


rect(600,500,s+20,s-20)//where my hp goes
textSize(32);
text("HP=30", 600, 550);


{ellipse(300,550, 350, 155);// where pokemon is located 
fill(0,245,0)}

{ellipse(800, 200, 355, 155);//where enemy pokemon is 
fill(0,255,0)}
 
button = createButton('Attack');//pokemon attacking
  button.position(450, 690);
  button.mousePressed(change);
  button.size(100,50)

  button = createButton('run');//trainer running away
  button.position(900, 690);
  button.mousePressed(changeBG);
  button.size(100,50)



}

function changeBG() {
 alert('You ran away, You lost.....')
  var val = random(255);
  background(val);  
}

function change(){
    alert('you used tackle') ;
}