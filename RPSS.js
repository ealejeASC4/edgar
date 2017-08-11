var choices = ["rock","scissors","paper"];
var randomNum = Math.floor(Math.random()*3);
var randomChoice = choices[randomNum];
var didWin = false;
var numOfTries = 0;

function updateDB(){
    var name = $("#inpname").val();
    var message = $("#message").val();
    myName = name

   console.log(name + " : " + message);
    $("body").append("<p><center><font color='white'><font size='10'>Welcome: " + name + "</font></font></center></p>")
}

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
        var voteB =  document.getElementById("disable");
        voteB.style.display='none';
    }
}




