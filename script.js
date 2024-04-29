const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let choices = document.querySelectorAll(".button-container input");
let result = document.querySelector(".result-container");


function getComputerChoice(){
    return CHOICES[Math.floor(Math.random() * 2)]
}


choices.forEach(function (item) {
    item.addEventListener("click", (event) => {
        let humanChoice = event.target.id;
        if (humanScore == 5 || computerScore == 5) {
            if (humanScore == 5){
                result.textContent = `You won the game!`
            } else {
                result.textContent = `You lose the game!`
            }
            
        } else {
            playRound(humanChoice, getComputerChoice());
        }
        
    });
});



function playRound(humanChoice, computerChoice){

    if (humanChoice == "rock" && computerChoice == "scissors"){
        result.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;
        humanScore++;

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        result.textContent = `You lose, ${computerChoice} beats ${humanChoice}!`;
        computerScore++;

    } else if (humanChoice == "paper" && computerChoice == "rock") {
        result.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;
        humanScore++;

    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        result.textContent = `You lose, ${computerChoice} beats ${humanChoice}!`;
        computerScore++;

    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        result.textContent = `You win, ${humanChoice} beats ${computerChoice}!`;
        humanScore++;

    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        result.textContent = `You lose, ${computerChoice} beats ${humanChoice}!`;
        computerScore++;

    } else {
        result.textContent = `It's a draw, you choosed ${humanChoice} as the computer!`;
    }
}


