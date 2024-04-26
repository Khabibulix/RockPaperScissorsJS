let choices = ["rock", "paper", "scissors"];
let humanScore, computerScore = 0;


function capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
}

function getComputerChoice(){
    return choices[Math.floor(Math.random() * 2)]
}

function getHumanChoice(){
    userChoice = prompt("Choose between paper, rock or scissors:")
    return userChoice
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
}

// console.log(getComputerChoice())
// console.log(getHumanChoice())

