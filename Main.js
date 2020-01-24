function computerChoice() {
    const items = ["rock", "paper" , "scissors"];
    return items[Math.floor(Math.random() * items.length)];
}

function humanChoice () {
let decision= prompt("Choose one: Rock, Paper or Scissors");
return decision.toLowerCase();
}

const gHumanChoice = humanChoice();
const gComputerChoice = computerChoice ();


function playRound () {
const winDialogue = "You win! 10 points to Gryffindor!";
const loseDialogue = "You lost to a machine, Quick! Run for your life/!";
const drawDialogue = "Draw! Lets go again!";
const errorDialogue = "Wrong input, it should be only Rock, Paper or Scissors !";

if (gHumanChoice) 
{ 
    if (gHumanChoice == "rock" && gComputerChoice == "scissors" ||
        gHumanChoice == "paper" && gComputerChoice == "rock" ||  
        gHumanChoice == "scissors" && gComputerChoice == "paper")
        
    {
        alert (winDialogue);
    }
    else if (gHumanChoice == "rock" && gComputerChoice == "paper" || 
            gHumanChoice == "paper" && gComputerChoice == "scissors" ||
            gHumanChoice == "scissors" && gComputerChoice == "rock") 
            
    {
        alert (loseDialogue);
    }
    else if ((gHumanChoice == "rock" && gComputerChoice == "rock" ||
    gHumanChoice == "paper" && gComputerChoice == "paper" ||  
    gHumanChoice == "scissors" && gComputerChoice == "scissors")) 
    {
        alert (drawDialogue);
    }
    
    else if (gHumanChoice !== "rock" || 
        gHumanChoice !=="paper" || 
        gHumanChoice !== "scissors") 
    {
        alert (errorDialogue);
    }
}  //condition ends

} //function ends

playRound();
