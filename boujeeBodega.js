/* welcome to Edgars boujee Bodega
/* where everything is $100 or more ,':3

/* in this persons hero adventure campaign 
the hero enters my bodega and has to spend 
all his money before continuing
*/

var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
var cat = "CoolCat247";
var money = 1000
var name = prompt("what is your name?");

// var i = 0
// while(i < 10){
//     console.log(i);
//     i++;
// }

while(money > 0){
    var item = prompt("what do you want to buy?");
    console.log("you purchaced the" + item);
    money = money - 100; //everything is 100
}
