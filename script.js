const CHOICES = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;


function capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
}

function getComputerChoice(){
    return CHOICES[Math.floor(Math.random() * 2)]
}

function getHumanChoice(){
    userChoice = prompt("Choose between paper, rock or scissors:");
    return userChoice
}


function playRound(humanChoice, computerChoice){

    if (capitalize(humanChoice) == "Rock" && computerChoice == "scissors"){
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;

    } else if (capitalize(humanChoice) == "Rock" && computerChoice == "paper") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
        computerScore++;

    } else if (capitalize(humanChoice) == "Paper" && computerChoice == "rock") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;

    } else if (capitalize(humanChoice) == "Paper" && computerChoice == "scissors") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
        computerScore++;

    } else if (capitalize(humanChoice) == "Scissors" && computerChoice == "paper") {
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        humanScore++;

    } else if (capitalize(humanChoice) == "Scissors" && computerChoice == "rock") {
        console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
        computerScore++;

    } else {
        console.log(`It's a draw, you choosed ${humanChoice} as the computer!`);
    }
}


humanChoice = getHumanChoice()
computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);

