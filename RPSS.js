var choices = ["rock","scissors","paper"];
var randomNum = Math.floor(Math.random()*3);
var randomChoice = choices[randomNum];
var didWin = false;
var numOfTries = 0;



// function displayscore()

function chooseChoice(value) {
        if(value == "Rock" && randomChoice == "paper") {
            $("#results").append("<p> The computer chose " + randomChoice + ". You lose ya loser 030</p>")
        }
        else if(value == "Rock" && randomChoice == "rock") {
            $("#results").append("<p> The computer chose " + randomChoice + ". It's a tie RiP</p>")
            
        }
        else if(value == "Rock" && randomChoice == "scissors") {
            $("#results").append("<p> The computer chose " + randomChoice + ". You win GG</p>")
            didWin = true;
        }
        else if(value == "Paper" && randomChoice == "paper") {
            $("#results").append("<p> The computer chose " + randomChoice + ". It's a tie Hah try again</p>")
        }
        else if(value == "Paper" && randomChoice == "scissors") {
            $("#results").append("<p> The computer chose " + randomChoice + ". You lose ya scrub</p>")
        }
        else if(value == "Paper" && randomChoice == "rock") {
            $("#results").append("<p> The computer chose " + randomChoice + ". You win Ya meme lord</p>")
            didWin = true;
        }
        else if(value == "Scissors" && randomChoice == "rock") {
            $("#results").append("<p> The computer chose " + randomChoice + ". You lose kek</p>")
        }
        else if(value == "Scissors" && randomChoice == "paper") {
            $("#results").append("<p> The computer chose " + randomChoice + ". You win heheh the best </p>")
            didWin = true;
        }
        else {
            $("#results").append("<p> The computer chose " + randomChoice + ". It's a tie hehe go again</p>")
        }
    randomNum = Math.floor(Math.random()*3);
    randomChoice = choices[randomNum];
    numOfTries = numOfTries + 1;
    if(didWin) {
        $("#results").append("<p>It took you " + numOfTries + " tries.</p>");
        var voteB =  document.getElementById("buttons");
        voteB.style.display='none';
    }
}
// var p1Choice = choices[randomChoices]; // rock
// var p2Choice = choices[randomChoices]; //scissors

// if (p1Choice == p2Choice){
//     console.log("a tie");
// }else if (p1Choice === choices[1]){
//     if (p2Choice === choices[0]){
 


//         console.log("player 1 loses")
//         console.log("rock beats scissors")

//     }else {




//         console.log("players 1 wins")
//         console.log("scissors beats paper")
//     }
// }
// else if (p1Choice === choices[2]){
//     if (p2Choice === choices[0]){



//         console.log("player 1 wins")
//         console.log("paper beats rock")

//     }else {


//         console.log("player 1 loses")
//         console.log("scissors beats paper")
//     }
// }
// else if (p1Choice === choices[2]){
//     if (p2Choice === choices[1]){


//         console.log("player 1 loses")
//         console.log("scissors beats paper ")

//     }else {


//         console.log("player 1 wins")
//         console.log("paper beats rock")
//     }
// }




