/*var pokemonRoster =
[
    [
        ["Charizard"],
        ["fire", "flying"],
        [78],
        [78],
        [84],
        [false],
    ],
    
    [
        ["Genesect"]
        ["steel","bug"],
        [71],
        [95],
        [120],
        [true],
    ],
    
    [
        ["Pikachu"], 
        ["Electric"], 
        [35], 
        [40], 
        [55], 
        [false],
    ],
    
    [
        ["metagross"], 
        ["steel", "phychic"], 
        [80], 
        [130],   
        [135], 
        [false],
    ],
    
    [
        ["Sandslash"], 
        ["Ground"], 
        [75], 
        [110], 
        [100], 
        [false],
    ],

    [
        ["Rayquaza"] ,
        ["flying", "dragon"] ,
        [105],
        [90],
        [150],
        [true],
    ],
]*/

function pokemon(hp,level,name,types,attack,legendary){
    this.name = name;
    this.hp = hp;
    this.level = level;
    this.types = types;
    this.attack = attack;
    this.legendary = legendary;
}

var Sandslash = new pokemon(71,"sandslash",50,["ground"],120,false)
// console.log(Sandslash.hp)
// console.log(Sandslash.level) 
// console.log(Sandslash.level)
// console.log(Sandslash.types)
// console.log(Sandslash.attack)
// console.log(Sandslash.legendary)

function pokemon(hp,level,name,types,attack,legendary){
    this.name = name;
    this.hp = hp;
    this.level = level;
    this.types = types;
    this.attack = attack;
    this.legendary = legendary;
}

var Genesect = new pokemon(50,"Genesect",["steel","bug"],120,true)
// console.log(Genesect.hp)
// console.log(Genesect.level) 
// console.log(Genesect.level)
// console.log(Genesect.types)
// console.log(Genesect.attack)
// console.log(Genesect.legendary)

function pokemon(hp,level,name,types,attack,legendary){
    this.name = name;
    this.hp = hp;
    this.level = level;
    this.types = types;
    this.attack = attack;
    this.legendary = legendary;
}

var Pikachu = new pokemon(35,"Pikachu",55,["electric"],40,false)
// console.log(Pikachu.hp
// console.log(Pikachu.level) 
// console.log(Pikachu.level)
// console.log(Pikachu.types)
// console.log(Pikachu.attack)
// console.log(Pikachu.legendary)

function pokemon(hp,level,name,types,attack,legendary){
    this.name = name;
    this.hp = hp;
    this.level = level;
    this.types = types;
    this.attack = attack;
    this.legendary = legendary;
}

var Rayquaza = new pokemon(105,"Rayquaza",150,["flying", "dragon"],90,true)
// console.log(Rayquaza.hp)
// console.log(Rayquaza.level) 
// console.log(Rayquaza.level)
// console.log(Rayquaza.types)
// console.log(Rayquaza.attack)
// console.log(Pikachu.legendary)
//here 
function pokemon(hp,level,name,types,attack,legendary){
    this.name = name;
    this.hp = hp;
    this.level = level;
    this.types = types;
    this.attack = attack;
    this.legendary = legendary;
}

var metagross = new pokemon(80,"metagross",130,["steel","phychic"],135,false)
// console.log(Pikachu.hp)
// console.log(Pikachu.level) 
// console.log(Pikachu.level)
// console.log(Pikachu.types)
// console.log(Pikachu.attack)
// console.log(Pikachu.legendary)

function pokemon(hp,level,name,types,attack,legendary){
    this.name = name;
    this.hp = hp;
    this.level = level;
    this.types = types;
    this.attack = attack;
    this.legendary = legendary;
}

var Charizard = new pokemon(78,"charizard",84,["fire","flying"],78,false)
// console.log(Charizard.hp)
// console.log(Charizard.level) 
// console.log(Charizard.level)
// console.log(Charizard.types)
// console.log(Charizard.attack)
// console.log(Charizard.legendary)


var pokemonRoster = [Pikachu,Genesect,Sandslash,Rayquaza,Charizard,metagross]
for (var i = 0; i < pokemonRoster.length; i++) {
    console.log(pokemonRoster[i].hp)

}

 //["Charizard"], ["fire", "flying"], [78],[78], [84], [false],
 /*
  ["metagross"], 
        ["steel", "phychic"], 
        [80], 
        [130],   0
        [135], 
        [false],
       
       
       [
        ["Rayquaza"] ,
        ["flying", "dragon"] ,
        [105],
        [90],
        [150],
        [true],
    ],
]*/

for (var i = 0; i <pokemonRoster.length; i++) {
    pokemonRoster[i].hp = pokemonRoster[i].hp - 10

}
for (var i = 0; i < pokemonRoster.length; i++) {
        console.log(pokemonRoster[i])}