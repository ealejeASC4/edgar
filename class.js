/*var charizard = {
    "HP" : 266,
    "level" : 32
}

var blastoise = {
    "HP" : 150,
    "level" : 55
}*/

function pokemon(hp,level){
    this.hp = hp;
    this.level = level;
}

var sqirtle = new pokemon(30,10);
console.log(sqirtle.hp)
console.log(sqirtle.level) 