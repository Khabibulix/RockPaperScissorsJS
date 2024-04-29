const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let choices = document.querySelectorAll(".button-container input");
let result = document.querySelector(".result-container");

choices.forEach(function (item) {
    item.addEventListener("click", (event) => {
        humanChoice = event.target.id;
    });
});


function getComputerChoice(){
    return CHOICES[Math.floor(Math.random() * 2)]
}


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


playRound(humanChoice, getComputerChoice());