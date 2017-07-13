//this is the selection for smash bros


var mashArray= ["Final Destination","BattleField","Mario Circut","Delfino PLaza"];
var firstQuestion = [1, 2] // how many times to strike 
var secondQuestion = ["mario", "wario"] // fighters 

var prompt = require('prompt-sync')();
function questions(){
    var name = prompt("How many times will you strike" + "[" + firstQuestion + "] ");
    var answer = prompt("who will you choose to fight?"+ "[" + secondQuestion + "] ");
    var Destination = prompt("where do you want?");
}
console.log ("You fought" + secondQuestion);
console.log("in the"+mashArray); 
console.log ("and hit them" + firstQuestion);
