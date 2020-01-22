function computerPlay() {
    const items = ["rock", "paper" , "scissors"];
    return items[Math.floor(Math.random() * items.length)];
    
}

let playerSelection = prompt("Choose one, rock paper or scissors");
let computerSelection = computerPlay();

function playRound (playerSelection, computerSelection) 
{
    
}