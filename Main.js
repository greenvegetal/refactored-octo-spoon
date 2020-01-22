function computerChoice() {
    const items = ["rock", "paper" , "scissors"];
    return items[Math.floor(Math.random() * items.length)];
    
}
const humanDecision = prompt("Choose one, rock paper or scissors");
function humanChoice () {
return humanDecision;
}

;

function playRound () 
{

const winDialogue = "You win! 10 points to Gryffindor!";
const loseDialogue = "You lost to a machine, Quick! Run for your life!";
const drawDialogue = "Draw! Lets go again.";
const errorDialogue = "Uh oh, something is wrong";

if (humanChoice) 
{ 
    if (humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||  
        humanChoice == "scissors" && computerChoice == "paper")
        
        {
        alert (winDialogue);
        }
    else if (humanChoice == "rock" && computerChoice == "paper" || 
            humanChoice == "paper" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "rock") 
            
        {
        alert (loseDialogue);
        }
    else if ((humanChoice == "rock" && computerChoice == "rock" ||
    humanChoice == "paper" && computerChoice == "paper" ||  
    humanChoice == "scissors" && computerChoice == "scissors")) {
        alert (drawDialogue);
    }
}

}
playRound();