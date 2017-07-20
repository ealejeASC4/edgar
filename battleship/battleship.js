
var cls= 4
var s= 100
var s2=200
var s3= 300
function setup(){
    createCanvas(800,500)

//  rect(100, 20, 50, 50)    
//    rect(50, 20, 50, 50)    


//      rect(100, 70, 50, 50)    
//    rect(50, 70,50, 50) 


for (i =1; i <= cls; i++){
    rect (i*s, s, s, s)
    // rect (100, 50, 50, 50 )
}
for (i =1; i <= cls; i++){
    rect (i*s, s2, s, s)
    // rect (100, 50*i, 50, 50 )
}

for (i =1; i <= cls; i++){
    rect (i*s, s3, s, s)
    // rect (100, 50*i, 50, 50 )
}



}