var name = prompt("whats your name?")
var favFood = prompt("what is your favorite food?")

firebase.database().ref(name).set(
    {
    food:favFood
}
)