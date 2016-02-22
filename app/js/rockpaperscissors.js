////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    var answer = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
    return answer;
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    move = getInput();
    return move || getInput();
}

function getComputerMove(move) {
    move = randomPlay();
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
        if (playerMove === computerMove)  {
            winner = "tie";
        }
            else if (playerMove === "paper" && computerMove === "rock")   {
            winner = "player";
            }
            else if (playerMove === "rock" && computerMove === "scissors") {
            winner = "player";
            }
            else if (playerMove === "scissors" && computerMove === "paper") {
            winner = "player";
            }
            else if (playerMove === "scissors" && computerMove === "rock")   {
            winner = "computer";
            }
            else if (playerMove === "paper" && computerMove === "scissors") {
            winner = "computer";
            }
            else if (playerMove === "rock" && computerMove === "paper") {
            winner = "computer";
            }
            else    {
            winner = null;
        }
    return winner;
}

var playerWins = 0;
var computerWins = 0;

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    if (playerWins !== 5 && computerWins !== 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        if (winner == 'player') {
            playerWins += 1;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log('The winner is ' +winner);
        }else if (winner == 'computer') {
            computerWins += 1;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
            console.log('The winner is ' +winner);
        }else if (winner == "tie") {
             console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
             console.log("It was a Tie")
        }
        console.log('The score is currently ' +playerWins+ " to " +computerWins );
        return playToFive();
    }
    if (playerWins == 5) {
        console.log("You Won!")
    }else if (computerWins == 5) {
        console.log("You Lost.")
    }
    return [playerWins, computerWins];
}

playToFive();
