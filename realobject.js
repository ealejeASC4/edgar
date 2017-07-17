function Car(color, weight){
    this.color = color;
    this.weight = weight;
};

var jeep = new Car("black", 1);

function player(team, position, number){
    this.team = team;
    this.position = position;
    this.number = number;
}

var jamesHarden = new player("Rockets", "point Guard", 13)

function Drinks(size, sugar, calories){
    this.size = size;
    this.sugar = sugar;
    this.calories = calories;
}

var iceTea = new Drinks("large", 0 ,0);
 
 console.log(iceTea.size ,iceTea.sugar ,iceTea.calories);

