var pokemonRoster =
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
        ["Genesect"],
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
]

for (var i = 0; i < pokemonRoster.length; i++){
    console.log ("name:" + pokemonRoster[i] [0])
    console.log ("type:" + pokemonRoster[i] [1])
    console.log ("HP:" + pokemonRoster[i] [2])
    console.log ("Defense:" + pokemonRoster[i] [3])
    console.log ("Attack:" + pokemonRoster[i] [4])
    console.log ("legendary:" + pokemonRoster[i] [5])
}
